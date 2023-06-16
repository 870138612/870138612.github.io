import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as n,c as d,a,b as e,f as s,e as r}from"./app-92107d0d.js";const c="/markdown/image-20230616154303334.png",h="/markdown/image-20230616154739983.png",g="/markdown/image-20230616162759698.png",b="/markdown/image-20230616163557422.png",p="/markdown/image-20230616165505506.png",l="/markdown/image-20230616171738195.png",u={},m=r('<p>消息队列是一种用于在应用程序之间传递消息的通信方式，消息队列允许应用程序异步的发送和接收消息，并且不需要直接连接到对方。</p><p>可以把消息队列看作是一个存放消息的容器，需要使用消息的时候，直接从容器中取出消息供自己使用即可。由于队列 Queue 是一种先进先出的数据结构，所以消费消息时也是按照顺序来消费的。</p><h2 id="消息队列有什么用" tabindex="-1"><a class="header-anchor" href="#消息队列有什么用" aria-hidden="true">#</a> 消息队列有什么用？</h2><h3 id="通过异步处理提高系统性能-减少响应所需时间" tabindex="-1"><a class="header-anchor" href="#通过异步处理提高系统性能-减少响应所需时间" aria-hidden="true">#</a> 通过异步处理提高系统性能（减少响应所需时间）</h3><p>项目中订单取消之后的解锁库存操作可以通过消息队列实现，订单取消之后发送一个库存释放任务到消息队列中，由库存模块释放监听器完成库存解锁和释放，订单模块不需要等待库存释放完成才返回。</p><h3 id="削峰-限流" tabindex="-1"><a class="header-anchor" href="#削峰-限流" aria-hidden="true">#</a> 削峰/限流</h3><p>秒杀场景中，开始秒杀时创建秒杀订单具有很大的峰值，通过消息队列减少同时创建订单的任务数，创建订单任务先放入消息队列中，再由数据库创建订单。</p><h3 id="降低系统耦合性" tabindex="-1"><a class="header-anchor" href="#降低系统耦合性" aria-hidden="true">#</a> 降低系统耦合性</h3><p>订单模块负责订单取消，库存模块负责库存解锁释放，两者通过消息队列实现通信，降低耦合度。如果有新的消费者上线，只需要将消费者关联到这个消息队列中，原有系统不会改变。</p><h3 id="实现分布式事务" tabindex="-1"><a class="header-anchor" href="#实现分布式事务" aria-hidden="true">#</a> 实现分布式事务</h3><p>分布式事务的解决办法之一就是MQ事务。</p>',11),Q={href:"https://ylzhong.top/middleware/4distributedtransaction.html",target:"_blank",rel:"noopener noreferrer"},M=r('<h2 id="使用消息队列会带来哪些问题" tabindex="-1"><a class="header-anchor" href="#使用消息队列会带来哪些问题" aria-hidden="true">#</a> 使用消息队列会带来哪些问题？</h2><ul><li><strong>系统可用性降低</strong>：需要额外考虑消息队列服务出错的处理办法。</li><li><strong>系统复杂度提高</strong>：加入消息队列之后，需要考虑消息重复消费，消息丢失，保证消息传递顺序等问题。</li><li><strong>一致性问题</strong>：如果消息没有被正确的消费，就会带来一致性问题。</li></ul><h2 id="amqp是什么" tabindex="-1"><a class="header-anchor" href="#amqp是什么" aria-hidden="true">#</a> AMQP是什么？</h2><p>AMQP，即 Advanced Message Queuing Protocol，一个提供统一消息服务的应用层标准 <strong>高级消息队列协议</strong>（二进制应用层协议），是应用层协议的一个开放标准，为面向消息的中间件设计，兼容 JMS（JAVA Message Service，java 消息服务）。基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件同产品，不同的开发语言等条件的限制。AMQP 天然具有跨平台、跨语言特性。</p><h2 id="rpc和消息队列的区别" tabindex="-1"><a class="header-anchor" href="#rpc和消息队列的区别" aria-hidden="true">#</a> RPC和消息队列的区别</h2><p>RPC和消息队列都是分布式系统中重要的组件之一。</p><ul><li><p><strong>从用途来看</strong>：RPC主要解决两个服务的远程通信问题，不需要了解底层网络的通信机制。通过 RPC 可以帮助我们调用远程计算机上某个服务的方法，这个过程就像调用本地方法一样简单。消息队列主要用来降低系统耦合性、实现任务异步、有效地进行流量削峰。</p></li><li><p><strong>从通信方式来看</strong>：RPC 是双向直接网络通讯，消息队列是单向引入中间载体的网络通讯。</p></li><li><p><strong>从架构上来看</strong>：消息队列需要把消息存储起来，RPC 则没有这个要求，因为前面也说了 RPC 是双向直接网络通讯。</p></li><li><p><strong>从请求处理的时效性来看</strong>：通过 RPC 发出的调用一般会立即被处理，存放在消息队列中的消息并不一定会立即被处理。</p></li></ul><h2 id="常见的消息队列" tabindex="-1"><a class="header-anchor" href="#常见的消息队列" aria-hidden="true">#</a> 常见的消息队列</h2><h3 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> Kafka</h3><blockquote><p>项目中使用的消息队列是RabbitMQ，Kafka仅仅做介绍。</p></blockquote><p><img src="'+c+'" alt="image-20230616154303334"></p><p>Kafka 是 LinkedIn 开源的一个分布式流式处理平台，已经成为 Apache 顶级项目，早期被用来用于处理海量的日志，后面才慢慢发展成了一款功能全面的高性能消息队列。</p><p>具有三个关键功能：</p><ul><li><strong>消息队列</strong>：发布和订阅消息流，功能类似消息队列。</li><li><strong>容错的持久方式存储记录消息流</strong>：Kafka会把消息持久化到磁盘，有效避免了消息丢失的风险。</li><li><strong>流式处理平台</strong>：在消息发布的时候进行处理，Kafka提供了一个完整的流式处理类库。</li></ul><h3 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h3><p><img src="'+h+'" alt="image-20230616154739983"></p><p>RabbitMQ 是采用 Erlang 语言实现 AMQP(Advanced Message Queuing Protocol，高级消息队列协议）的消息中间件，它最初起源于金融系统，用于在分布式系统中存储转发消息。</p><ul><li><strong>可靠性：</strong> RabbitMQ 使用一些机制来保证消息的可靠性，如持久化、传输确认及发布确认等。</li><li><strong>灵活的路由：</strong> 在消息进入队列之前，通过交换器来路由消息。对于典型的路由功能，RabbitMQ 己经提供了一些内置的交换器来实现。针对更复杂的路由功能，可以将多个交换器绑定在一起，也可以通过插件机制来实现自己的交换器。</li><li><strong>扩展性：</strong> 多个 RabbitMQ 节点可以组成一个集群，也可以根据实际业务情况动态地扩展集群中节点。</li><li><strong>高可用性：</strong> 队列可以在集群中的机器上设置镜像，使得在部分节点出现问题的情况下队列仍然可用。</li><li><strong>支持多种协议：</strong> RabbitMQ 除了原生支持 AMQP 协议，还支持 STOMP、MQTT 等多种消息中间件协议。</li><li><strong>多语言客户端：</strong> RabbitMQ 几乎支持所有常用语言，比如 Java、Python、Ruby、PHP、C#、JavaScript 等。</li><li><strong>易用的管理界面：</strong> RabbitMQ 提供了一个易用的用户界面，使得用户可以监控和管理消息、集群中的节点等。在安装 RabbitMQ 的时候会介绍到，安装好 RabbitMQ 就自带管理界面。</li><li><strong>插件机制：</strong> RabbitMQ 提供了许多插件，以实现从多方面进行扩展，当然也可以编写自己的插件。感觉这个有点类似 Dubbo 的 SPI 机制。</li></ul><h3 id="rabbitmq和kafka区别" tabindex="-1"><a class="header-anchor" href="#rabbitmq和kafka区别" aria-hidden="true">#</a> RabbitMQ和Kafka区别</h3><ul><li><p>RabbitMQ 在吞吐量方面虽然稍逊于 Kafka，但是由于它基于 Erlang 开发，所以并发能力很强，性能极其好，延时很低，达到微秒级。但是也因为 RabbitMQ 基于 Erlang 开发，所以国内很少有公司有实力做 Erlang 源码级别的研究和定制。如果业务场景对并发量要求不是太高（十万级、百万级），那这几种消息队列中，RabbitMQ 或许是你的首选。</p></li><li><p>Kafka 的特点其实很明显，就是仅仅提供较少的核心功能，但是提供超高的吞吐量，ms 级的延迟，极高的可用性以及可靠性，而且分布式可以任意扩展。同时 Kafka 最好是支撑较少的 topic 数量即可，保证其超高吞吐量。Kafka 唯一的一点劣势是有可能消息重复消费，那么对数据准确性会造成极其轻微的影响，在大数据领域中以及日志采集中，这点轻微影响可以忽略这个特性天然适合大数据实时计算以及日志收集。</p></li></ul><h1 id="rabbitmq-1" tabindex="-1"><a class="header-anchor" href="#rabbitmq-1" aria-hidden="true">#</a> RabbitMQ</h1><h2 id="介绍下rabbitmq" tabindex="-1"><a class="header-anchor" href="#介绍下rabbitmq" aria-hidden="true">#</a> 介绍下RabbitMQ</h2><p>RabbitMQ 是一个在 AMQP（Advanced Message Queuing Protocol ）基础上实现的，可复用的企业消息系统。它可以用于大型软件系统各个模块之间的高效通信，支持高并发，支持可扩展。</p><p>RabbitMQ 是使用 Erlang 编写的一个开源的消息队列，本身支持很多的协议：AMQP，XMPP, SMTP, STOMP，也正是如此，使的它变的非常重量级，更适合于企业级的开发。它同时实现了一个 Broker 构架，这意味着消息在发送给客户端时先在中心队列排队，对路由(Routing)、负载均衡(Load balance)或者数据持久化都有很好的支持。</p><h2 id="rabbitmq特点" tabindex="-1"><a class="header-anchor" href="#rabbitmq特点" aria-hidden="true">#</a> RabbitMQ特点</h2><ul><li><strong>可靠性</strong>：RabbitMQ使用一些机制保证可靠性，例如持久化、传输确认以及发布确认。</li><li><strong>灵活的路由</strong>：在消息进入队列之前，通过交换机来路由消息。</li><li><strong>扩展性</strong>：多个RabbitMQ节点可以组成一个集群，也可以根据实际业务情况动态地扩展 集群中节点。</li><li><strong>高可用性</strong> : 队列可以在集群中的机器上设置镜像，使得在部分节点出现问题的情况下队 列仍然可用。</li><li><strong>多种协议</strong>: RabbitMQ 除了原生支持 AMQP 协议，还支持 STOMP， MQTT 等多种消息 中间件协议。</li><li><strong>跨语言</strong>：RabbitMQ 几乎支持所有常用语言，比如 Java、 Python、 Ruby、 PHP、 C#、 JavaScript 等。</li><li><strong>管理界面</strong> : RabbitMQ 提供了一个易用的用户界面，使得用户可以监控和管理消息、集 群中的节点等。</li><li><strong>插件机制</strong> : RabbitMQ 提供了许多插件 ， 以实现从多方面进行扩展，当然也可以编写自 己的插件。</li></ul><h2 id="rabbitmq组成" tabindex="-1"><a class="header-anchor" href="#rabbitmq组成" aria-hidden="true">#</a> RabbitMQ组成</h2><p>RabbitMQ 整体上是一个生产者与消费者模型，主要负责接收、存储和转发消息。从计算机术语层面来说，RabbitMQ 模型更像是一种交换机模型。</p><p><img src="'+g+'" alt="image-20230616162759698"></p><h3 id="producer-生产者-和consumer-消费者" tabindex="-1"><a class="header-anchor" href="#producer-生产者-和consumer-消费者" aria-hidden="true">#</a> Producer（生产者）和Consumer（消费者）</h3><ul><li><strong>Producer(生产者)</strong> :生产消息的一方;</li><li><strong>Consumer(消费者)</strong> :消费消息的一方。</li></ul><p>消息一般由 2 部分组成：<strong>消息头</strong>和 <strong>消息体</strong>。消息体也可以称为 payLoad，消息体是不透明的，而消息头则由一系列的可选属性组成，这些属性包括 routing-key（路由键）、priority（相对于其他消息的优先权）、delivery-mode（指出该消息可能需要持久性存储）等。生产者把消息交由 RabbitMQ 后，RabbitMQ 会根据消息头把消息发送给感兴趣的 Consumer(消费者)。</p><h3 id="exchange-交换机" tabindex="-1"><a class="header-anchor" href="#exchange-交换机" aria-hidden="true">#</a> Exchange（交换机）</h3><p>在RabbitMQ中，消息并不是直接投递到<strong>Queue（消息队列）<strong>中，中间还必须经过</strong>Exchange（交换机）</strong>，交换机会根据路由键和路由方式将消息发送给对应的**Queue（消息队列）**中。</p><p>**Exchange（交换器）<strong>用来接收生产者发送的消息并将这些消息路由给服务器中的队列，如果路由不到则会返回给</strong>Producer（生产者）**或者直接丢失。</p><p><strong>RabbitMQ的Exchange（交换机）有4种类型，不同的类型对应着不同的路由策略：direct（默认），fanout，topic和headers。</strong></p><p>生产者将消息发给交换机的时候需要指定一个<strong>RoutingKey（路由键）</strong>，用来指定这个消息的路由规则，而这个<strong>RoutingKey</strong>需要与交换机类型和绑定键**（BindingKey）**联合使用才能生效。</p><p>RabbitMQ 中通过 <strong>Binding(绑定)</strong> 将 <strong>Exchange(交换器)</strong> 与 <strong>Queue(消息队列)</strong> 关联起来，在绑定的时候一般会指定一个 <strong>BindingKey(绑定建)</strong> ,这样 RabbitMQ 就知道如何正确将消息路由到队列了,如下图所示。一个绑定就是基于路由键将交换器和消息队列连接起来的路由规则，所以可以将交换器理解成一个由绑定构成的路由表。Exchange 和 Queue 的绑定可以是多对多的关系。</p><p><img src="'+b+'" alt="image-20230616163557422"></p><p><strong>Bindkey</strong>就像路由表中的一个表项，指明了响应的<strong>RoutingKey</strong>应该投递到哪个队列。</p><h3 id="queue-消息队列" tabindex="-1"><a class="header-anchor" href="#queue-消息队列" aria-hidden="true">#</a> Queue（消息队列）</h3><p>Queue（消息队列）用来保存消息直到发送给消费者。是消息的容器也是终点，一个消息可以投入一个或者多个队列中。</p><p><strong>RabbitMQ</strong> 中消息只能存储在 <strong>队列</strong> 中，这一点和 <strong>Kafka</strong> 相反。Kafka 将消息存储在 <strong>topic（主题）</strong> 这个逻辑层面，而相对应的队列逻辑只是 topic 实际存储文件中的位移标识。</p><blockquote><p>事件被组织并持久地存储在Topic中，Topic类似于文件系统中的文件夹，事件就是该文件夹中的文件。Kafka中的Topic始终是多生产者和多订阅者：一个Topic可以有零个、一个或多个生产者向其写入事件，也可以有零个、一个或多个消费者订阅这些事件。Topic中的事件可以根据需要随时读取，与传统的消息中间件不同，事件在使用后不会被删除，相反，可以通过配置来定义Kafka中每个Topic应该保留事件的时间，超过该事件后旧事件将被丢弃。Kafka的性能在数据大小方面实际上是恒定的，因此长时间存储数据是非常好的。</p></blockquote><p>多个消费者可以订阅同一个队列，这时队列中的消息会被平均分摊给多个消费者进行处理，而不是每个消费者都收到所有的消息并处理，这样可以避免重复消费。</p><h3 id="broker-消息中间件的服务节点" tabindex="-1"><a class="header-anchor" href="#broker-消息中间件的服务节点" aria-hidden="true">#</a> Broker（消息中间件的服务节点）</h3><p>对于 RabbitMQ 来说，一个 RabbitMQ Broker 可以简单地看作一个 RabbitMQ 服务节点，或者 RabbitMQ 服务实例。大多数情况下也可以将一个 RabbitMQ Broker 看作一台 RabbitMQ 服务器。</p><p>下图展示了生产者将消息存入 RabbitMQ Broker，以及消费者从 Broker 中消费数据的整个流程。</p><blockquote><p>由于RabbitMQ是以<code>byte[]</code>为单位进行传输的，因此消息需要序列化和反序列化。</p></blockquote><p><img src="'+p+'" alt="image-20230616165505506"></p><h3 id="exchange-types-交换机类型" tabindex="-1"><a class="header-anchor" href="#exchange-types-交换机类型" aria-hidden="true">#</a> Exchange Types（交换机类型）</h3><h4 id="_1、fanout-广播" tabindex="-1"><a class="header-anchor" href="#_1、fanout-广播" aria-hidden="true">#</a> 1、fanout（广播）</h4><p>fanout 类型的 Exchange 路由规则非常简单，它会把所有发送到该 Exchange 的消息路由到所有与它绑定的 Queue 中，不需要做任何判断操作，所以 fanout 类型是所有的交换机类型里面速度最快的。fanout 类型常用来广播消息。</p><h4 id="_2、direct-精确匹配" tabindex="-1"><a class="header-anchor" href="#_2、direct-精确匹配" aria-hidden="true">#</a> 2、direct（精确匹配）</h4><p>direct 类型的 Exchange 路由规则也很简单，它会把消息路由到<strong>那些</strong> Bindingkey 与 RoutingKey 完全匹配的 Queue 中。</p><blockquote><p>可能匹配的队列有多个。</p></blockquote><h4 id="_3、topic" tabindex="-1"><a class="header-anchor" href="#_3、topic" aria-hidden="true">#</a> 3、topic</h4><p>topic 类型的交换器在匹配规则上进行了扩展，它与 direct 类型的交换器相似，也是将消息路由到 BindingKey 和 RoutingKey 相匹配的队列中，但这里的匹配规则有些不同，它约定：</p><ul><li><p>RoutingKey 为一个点号<code>.</code>分隔的字符串（被点号<code>.</code>分隔开的每一段独立的字符串称为一个单词），如 <code>com.rabbitmq.client</code>、<code>java.util.concurrent</code>、<code>com.hidden.client</code>;</p></li><li><p>BindingKey 和 RoutingKey 一样也是点号<code>.</code>分隔的字符串；</p></li><li><p>BindingKey 中可以存在两种特殊字符串<code>*</code>和<code>#</code>，用于做模糊匹配，其中<code>*</code>用于匹配一个单词，<code>#</code>用于匹配零个或者多个单词。</p></li></ul><p>例如BindKey为<code>#.com</code>，则所有以<code>com</code>结尾的路由键消息都会匹配，<code>*.*.com</code>，则路由键必须有三个单词，且最后一个单词是<code>com</code>才会匹配，例如<code>yl.zhong.com</code>。</p><p><img src="'+l+'" alt="image-20230616171738195"></p><h4 id="_4、headers-不推荐" tabindex="-1"><a class="header-anchor" href="#_4、headers-不推荐" aria-hidden="true">#</a> 4、headers(不推荐)</h4><p>headers 类型的交换器不依赖于路由键的匹配规则来路由消息，而是根据发送的消息内容中的 headers 属性进行匹配。</p><h2 id="说说-broker-服务节点、queue-队列、exchange-交换器" tabindex="-1"><a class="header-anchor" href="#说说-broker-服务节点、queue-队列、exchange-交换器" aria-hidden="true">#</a> 说说 Broker 服务节点、Queue 队列、Exchange 交换器？</h2><p><strong>Broker</strong>：可以看做 RabbitMQ 的服务节点。一般情况下一个 Broker 可以看做一个 RabbitMQ 服务器。</p><p><strong>Queue</strong> :RabbitMQ 的内部对象，用于存储消息。多个消费者可以订阅同一队列，这时队列中的消息会被平摊（轮询）给多个消费者进行处理。</p><p><strong>Exchange</strong> : 生产者将消息发送到交换器，由交换器将消息路由到一个或者多个队列中。当路由不到时，或返回给生产者或直接丢弃。</p>',67);function R(f,k){const i=o("ExternalLinkIcon");return n(),d("div",null,[m,a("p",null,[e("☀️详见"),a("a",Q,[e("分布式事务"),s(i)])]),M])}const P=t(u,[["render",R],["__file","2rabbitmq.html.vue"]]);export{P as default};