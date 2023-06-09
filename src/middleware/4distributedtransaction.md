---
title: 分布式事务
icon: fenbushi
category:
  - 中间件云原生
tag:
  - 分布式事务
  - 八股
---



订单微服务中，下单的同时请求库存微服务减少库存，整个过程就是一个分布式事务。

![image-20230614201247430](/markdown/image-20230614201247430.png)

## 分布式基础理论

### CAP

CAP是`Consistency`、`Availability`、`Partition tolerance`三个词语的缩写，分别表示一致性，可用性，分区容错性。

商品信息管理案例

![image-20230614201542373](/markdown/image-20230614201542373.png)

采用读写分离的数据库集群模式。

整体执行过程：

1. 商品服务请求主数据库写入商品信息。
2. 主数据库向商品服务响应写入成功。
3. 商品服务请求从数据库读取商品信息。

#### C-Consistency 一致性

**写操作之后读操作能获得最新的数据**。

商品信息要满足一致性需要：

- 写主数据库成功，则向从数据库查询新数据也成功。
- 写主数据库失败，则向从数据库查询新数据也失败。

如何实现一致性？

- 写入主数据库后要将数据同步到从数据库。
- 写入完成之后的数据同步时，需要将从数据库锁定，防止请求查询到旧数据。

分布式系统一致性的特点：

- 由于数据同步的过程，写操作的响应有一定的延时。
- 为了保证数据一致性会对资源进行锁定，待数据同步完成再释放资源。

#### A-Availability可用性

**任何事务操作都可以得到响应结果，且不会出现响应超时或者错误**。

商品信息满足可用性需要：

- 从数据库接收到数据查询的请求则能立即响应数据查询结果。
- 从数据库不允许出现响应超时或者错误。

如何实现可用性？

- 写入主数据库后数据同步到从数据库。
- 由于要保证数据库的可用性，不能将数据库进行锁定。
- 即使数据库没有同步完成，从数据库也要返回结果，即使结果是旧数据，但不能响应错误或者超时。

分布式系统可用性特点：

- 所有请求都有响应，并且不会出现响应错误或者响应超时。

#### P-Partition tolerance分区容错性

**分布式系统部署在不同的子网，不可避免出现由于网络问题而导致的节点之间通信失败，对此仍然可以对外提供服务，称为分区容错性**。

商品信息满足分区容错性需要：

- 主数据库向从数据库同步失败不影响读写操作。
- 其一个节点挂掉不影响另外一个节点对外服务。

如何实现分区容错性？

- 尽量使用异步取代同步，例如使用异步将主数据库的数据同步到从数据库。
- 添加数据库节点，其中一个挂掉，另外一个仍然能工作。

分布式系统分区容错性的特点：

- **分区容错性是分布式系统最基本的能力**。

在所有分布式事务场景中不会同时具备CAP三个特性，满足P的前提下C和A是不能共存的。

### CAP组合方式

#### AP

放弃一致性，追求分区容错性和可用性，这是多数分布式系统设计时的选择。

通常实现AP都会保证最终一致性，BASE理论就是根据AP扩展来，例如订单退款，不要求立即到账，只要最终会退款即可。

#### CP

放弃可用性，追求分区容错性和一致性，Zookeeper其实就是追求强一致性。例如跨行转账，需要等待双方银行系统都完成整个事务才算完成。

#### CA

放弃分区容错性，追求一致性和可用性，不考虑网络挂掉的情况，那么系统就不是一个分布式系统。

上述商品系统管理如果要实现CA，则可以使用一个数据库，这样就不存在分布式系统。

### BASE理论

BASE是`Basically Available`(基本可用)、`Soft State`(软状态)和`Eventually Consistent`(最终一致性)三个短语的缩写。是AP组合模式的拓展，允许数据库在一段时间内不一致，但最终达到一致状态，称为”柔性事务“。

基本可用：分布式系统出现故障时，允许损失部分可用功能，保证其余功能可用。

软状态：由于不要求强一致性，BASE理论允许系统出现中间状态（软状态），这个状态不影响系统可用性。

最终一直：经过一段时间之后，所有节点的数据都会达到一致性。

## 分布式事务解决方案

### 2PC

两阶段提交，将事物变成两个阶段，准备阶段（prepare phase）和提交阶段（commit phase）。

**整个事务过程由事务管理器管理**。

实现方案：XA、Seata。

### TCC

TCC是`Try`、`Confirm`、`Cancel`三个词语的缩写，TCC要求每个分支事务实现三个操作：预处理Try、确认Confirm、撤销Cancel。

TCC分为三个阶段︰

1. Try阶段是做业务检查(一致性)及资源预留(隔离)，此阶段仅是一个初步操作，它和后续的Confirm一起才能真正构成一个完整的业务逻辑。
2. Confirm阶段是做确认提交，Try阶段所有分支事务执行成功后开始执行Confirm。通常情况下，采用
   TCC则认为Confirm阶段是不会出错的。即：只要Try成功，Confirm一定成功。若Confirm阶段真的出错了，需引入重试机制或人工处理。
3. Cancel阶段是在业务执行错误需要回滚的状态下执行分支事务的业务取消，预留资源释放。通常情况下，采用ICC则认为Cancel阶段也是一定成功的。若Cancel阶段真的出错了，需引入重试机制或人工处理。

TM事务管理器

TM事务管理器可以实现为独立的服务，也可以让全局事务发起方充当TM的角色，TM独立出来是为了成为公用组件，是为了考虑系统结构和软件复用。

#### TCC和2PC的区别

2PC通常都是在跨库的DB层面，而TCC则是在应用层面处理，需要通过业务逻辑实现，这种分布式事务的实现方式可以让应用自己定义数据操作的粒度、降低锁冲突、提高吞吐量。

不足在于TCC对应用的侵入很大，实现难度也大。

### 可靠消息最终一致性

可靠消息最终一致性指的是事务发起方执行完本地事务之后发出一条消息，事务参与方一定能接受消息并处理事务成功，此方案强调的是只要消息发给事务参与放最终事务要达到一致，通过消息队列中间件完成。

![image-20230614202838546](/markdown/image-20230614202838546.png)

为了实现可靠消息最终一致性需要解决以下几个问题：

#### 1.本地事务与消息发送的原子性

本地事务与消息发送的原子性问题即事务发起方在本地事务执行成功后消息必须发出去，否则就丢弃消息。即实现本地事务和消息发送的原子性，要么都成功，要么都失败。本地事务与消息发送的原子性问题是实现可靠消息最终—致性方案的关键问题。

#### 2.事务参与方接收消息的可靠性

消费者方（事务参与方）需要正确接收到消息，如果接收失败可以重复接收消息。

#### 3.消息重复消费问题

对于接收到重复的消息应该只能有一个执行结果，需要完成事务参与方的方法**幂等性**。

### RocketMQ事务消息方案

RocketMQ是来自阿里巴巴的分布式消息中间件，事务消息设计主要是为了解决Producer端发送消息与本地事务执行的原子性问题，其中的broker与producer端的双向通信能力使得broker天生可以作为一个事务的协调者存在，RocketMQ本身也为事务消息提供了持久化能力。

![image-20230615205528295](/markdown/image-20230615205528295.png)

在MQ发送方将消息成功发送给MQ Server时，消息还是处于不能消费的状态，如果收到MQ Server的确认，则会去调用本地事务，本地事务成功后通知MQ Server将消息Commit，此时订阅方可消费。

如果本地事务出现问题，则会向MQ Server发送Rollback，将消息删除，这样就能保证本地事务和消息发送的原子性。

第5步骤的回查事务状态，如果发现发送方有事务已经提交，则MQ Server会主动修改消息状态，即使没有收到MQ发送方发送的Commit。

从MQ Server到MQ订阅方部分采用ACK确认机制，只要MQ订阅方没有返回ACK则会一直给他消费。

☀️详见[RabbitMQ](https://ylzhong.top/middleware/2rabbitmq.html)

#### 总结

RocketMQ主要解决了分布式事务中的两个问题：

1. 本地事务与消息发送的原子性问题。
2. 事务参与方接收消息的可靠性问题。

可靠消息最终一致性事务适合执行周期长且实时性要求不高的场景，引入消息机制后，同步的事物变成了基于消息执行的异步事务，避免了分布式事务中的同步阻塞操作的影响，并实现了服务的解耦。

### 最大努力通知

发起通知方通过一定机制最大努力将业务处理结果通知到接收方。

具体包括：

1. 有一定的消息重复通知机制。
2. 消息的校对机制。

> 例如支付宝支付成功之后会向对应的接口发送异步通知，如果不对接口返回确认，则过一段时间之后支付宝会再次发送通知，称为消息重复机制。
>
> 发送次数变多仍然没有收到确认之后，支付宝就会将时间间隔变大进行异步通知，此外服务器可以通过支付宝给的接口主动去查询支付结果，称为消息的校对机制。

### 最大努力通知和可靠消息一致性的区别？

1. 解决思想不同

   可靠消息一致性，发起通知方需要保证将消息发送出去，并且将消息发到接收通知方，**消息的可靠性关键由发起通知方来保证**。

   最大努力通知，发起通知方尽最大努力将业务处理结果通知接收通知方，但是消息可能接收不到，此时需要通过接口查询业务处理结果，**通知的可靠性关键在接收通知方**。

2. 两者的业务场景不同

   可靠消息一致性关注的是交易过程的事务一致，以异步的方式完成交易。

   最大努力通知关注的是交易后的通知事务，即将交易结果可靠的通知出去。

3. 技术解决方向不同

   可靠消息一致性要解决消息从发出到接收的一致性，即消息发出并且被接收到。

   最大努力通知无法保证消息从发出到接收的一致性，只提供消息接收的可靠性机制。

### 最大努力通知解决方案

以支付宝支付系统为例。

![image-20230615212644155](/markdown/image-20230615212644155.png)

业务执行触发可以看成支付事务，支付结果通过发起通知方发送到消息队列中，并通过单独的通知程序定期通知给调用方。发起通知方，MQ，通知程序，可以看成支付宝管理的部分，接收方则可以看成我们自己。

此方案主要用于外部应用之间的通知，例如支付宝，微信支付结果通知。
