---
title: MySQL基础
icon: page

category:
  - 数据库
tags:
  - MySQL
  - 八股
---

### 什么是关系型数据库？

一种建立在关系模型基础上的数据库，关系模型表明了数据库中所存储的数据之间的联系（一对一，一对多，多对多）。

### MySQL有什么优点？

1. 成熟稳定，功能完善。
2. 开源免费。
3. 文档丰富。
4. 兼容性好。
5. 社区活跃，生态完善。
6. 事务支持优秀。
7. 支持分库分表、读写分离、高可用。

<!-- more -->

## MySQL基础架构

MySQL主要由下面几个部分构成：

- **连接器**：身份认证和权限相关。
- **查询缓存**：执行查询语句的时候，会先查询缓存（MySQL 8.0版本后移除）。
- **分析器**：没有命中缓存的话，SQL语句会经过分析器，分析SQL语句操作，检查语法是否正确。
- **优化器**：按照MySQL认为最优的方案去执行。
- **执行器**：执行语句，然后从存储引擎返回数据。
- **插件式存储引擎**：主要负责数据的存储和读取，采用的是插件式架构，支持InnoDB，MyISAM，Memory等多种存储引擎。

## MySQL存储引擎

MySQL 5.5.5之前，MyISAM是MySQL的默认存储引擎。之后，InnoDB是MySQL的默认存储引擎。

### MyISAM 和 InnoDB 有什么区别？

- **是否支持行级锁**

MyISAM只有表级锁，而InnoDB支持行级锁和表级锁，默认为行级锁。MyISAM一锁就是整张表，并发度不及InnoDB。

- 是否支持事务

MyISAM不提供事务。

InnoDB提供事务支持，实现了SQL标准定义的四个隔离级别，具有提交和回滚事务的能力，并且InnoDB默认使用REPEAETABLE-READ（可重复读）隔离级别是可以解决幻读问题的（基于MVCC和Next-Key Lock）。

- **是否支持外键**

MyISAM不支持，而InnoDB支持。外键对于维护数据的一致性非常有帮助，但是在日常开发中不建议使用外键，请通过关系表实现。

- **是否支持数据库异常崩溃后的安全恢复**

MyISAM不支持，而InnoDB支持。

使用InnoDB的数据库在异常崩溃之后，数据库重新启动的时候会保证数据库恢复到崩溃前的状态，这个恢复过程依赖于`redo log`。

- **是否支持MVCC**

MyISAM不支持，InnoDB支持。

- **索引实现不同**

MyISAM引擎InnoDB引擎都是使用B+Tree作为索引结构，但是两者实现方式不同。

InnoDB引擎中，其数据文件本身就是索引文件。相比MyISAM，索引文件和数据文件是分离的，其表数据文件本身就是按B+Tree阻止的一个索引结构，树的叶节点data域保存了完整的数据记录。

- **性能**

InnoDb的性能比MyISAM性能更好，InnoDb读写支持并发，MyISAM不支持并发。

## MySQL查询缓存

执行查询语句的时候，会先查询缓存，不过在8.0版本之后缓存被移除。

**查询不命中的情况：**

- 任何两个查询在任何字符上的不同都会导致缓存不命中。
- 如果查询中包含任何用户自定义函数、存储函数、用户变量、临时表、MySQL库中的系统表，其查询结果也不会被缓存。
- 缓存建立之后，MySQL的查询缓存系统会跟踪查询中涉及的没一张表，如果这些表发生变化，那么和这张表的所有缓存数据都失效。

缓存虽然能提升数据库的查询能力，但是缓存同时也带来了额外的开销，每次查询后都要做一次缓存操作，失效后还要销毁。

## MySQL 事务

事务是逻辑上的一组操作，要么都执行，要么都不执行。

MySQL中开启事务：

```mysql
# 开启一个事务
START TRANSACTION;
# 多条 SQL 语句
SQL1,SQL2...
## 提交事务
COMMIT;
```

### ACID特性

关系型数据库都有**ACID**特性。

![image-20230525171149797](/markdown/image-20230525171149797.png)

1. 原子性`Atomicity`：事务是最小的执行单位，不允许分割。事务的原子性确保动作要么都完成，要么都不完成。
2. 一致性`Consistency`：执行事物的前后，数据保持一致，例如转账业务中，无论事务是否成功，转账者和收款人的总额应该是不变的。
3. 隔离性`Isolation`：并发访问数据库时，一个用户的事物不被其他事务所干扰，各并发事务之间的数据库是独立的。
4. 持久性`Durability`：一个事务被提交之后。它对数据库中的数据改变是持久的，即使数据库发生故障也不应该对其有任何影响。

:::info ACID

只有保证了事务的持久性、原子性、隔离性之后，一致性才能得到保障。也就是AID是手段，C是目的。

:::

### 并发事务带来了哪些问题?

**脏读**：读到了没有提交的数据。

> **READ-UNCOMMITTED**

**不可重复读**：在一个事务内开启多次读，读取条件相同的情况下得到的结果却是不一样的。

>  **READ-UNCOMMITTED、READ-COMMITTED**

**幻读**：读取到了一个原本没有的数据（新插入的数据）。

> READ-UNCOMMITTED、READ-COMMITTED、REPEATABLE-READ（通过MVCC和Next-Key Lock可解决幻读）

### 并发事务的控制方式有哪些？

MySQL中并发事务的控制方式有两种：**锁和MVCC**。锁可以看做是悲观控制的模式，多版本并发控制是勒段控制的模式。

### MySQL的隔离级别是基于锁实现的吗？

MySQL的隔离级别基于锁和MVCC机制共同实现的。

SERIALIZABLE隔离级别是通过锁来实现的，READ-COMMITTED 和 REPEATABLE-READ 隔离级别是基于 MVCC 实现的。

### MySQL的默认隔离级别是什么？

MySQL InnoDB 存储引擎的默认支持的隔离级别是 **REPEATABLE-READ（可重读）**。

## MySQL 锁

### 表级锁和行级锁了解吗？有什么区别？

MyISAM 仅仅支持表级锁(table-level locking)，一锁就锁整张表，这在并发写的情况下性非常差。InnoDB 不光支持表级锁(table-level locking)，还支持行级锁(row-level locking)，默认为行级锁。

行级锁的粒度更小，仅对相关的记录上锁即可（对一行或者多行记录加锁），所以对于并发写入操作来说， InnoDB 的性能更高。

**表级锁和行级锁对比**：

- **表级锁**：MySQL中锁定粒度最大的锁，对当前操作的整张表加锁，实现简单，资源消耗快，不会出现死锁。并发度低，与存储引擎无关，MyISAM和InnoDB都支持表级锁。
- **行级锁**：MySQL中锁定粒度最小的一种锁，是针对索引字段加锁，只针对当前操作的行记录进行加锁。行级锁能大大减少数据库操作的冲突。加锁粒度最小，并发度高，但加锁的开销也最大，加锁慢，会出现死锁。行级锁和存储引擎有关，InnoDB支持MyISAM不支持。

### InnoDB 有哪几类行锁？

InnoDB支持三种行锁定方式：

- **记录锁（Record Lock）**：也被称为记录锁，属于单个行记录上的锁。
- **间隙锁（Gap Lock）**：锁定一个范围，不包括记录本身。
- **临键锁（Next-Key Lock）**：Record Lock+Gap Lock，锁定一个范围，包含记录本身，主要目的是为了解决幻读问题。记录锁只能锁住已经存在的记录，为了避免插入新记录，需要依赖间隙锁。

:::info

在 InnoDB 默认的隔离级别 REPEATABLE-READ 下，行锁默认使用的是 Next-Key Lock。但是，如果操作的索引是唯一索引或主键，InnoDB 会对 Next-Key Lock 进行优化，将其降级为 Record Lock，即仅锁住索引本身，而不是范围。

:::

### 共享锁和排他锁区别

**两者都是行级锁**。

**共享锁（S 锁）**：又称读锁，事务在读取记录的时候获取共享锁，允许多个事务同时获取（锁兼容）。读写互斥，写写互斥，其他不互斥。

**排他锁（X 锁）**：又称写锁/独占锁，事务在修改记录的时候获取排他锁，不允许多个事务同时获取。如果一个记录已经被加了排他锁，那其他事务不能再对这条事务加任何类型的锁（锁不兼容）。操作都互斥。

由于 MVCC 的存在，对于一般的 `SELECT` 语句，InnoDB 不会加任何锁。

### 意向锁有什么作用？

如果需要用到表锁的话，如何判断表中的记录没有行锁呢，一行一行遍历肯定是不行，性能太差，所以需要意向锁来快速判断是否可以对某个表使用表锁。

**意向锁是表级锁**，共有两种：

- **意向共享锁（Intention Shared Lock，IS 锁）**：事务有意向对表中的某些记录加共享锁（S 锁），加共享锁前必须先取得该表的 IS 锁。

- **意向排他锁（Intention Exclusive Lock，IX 锁）**：事务有意向对表中的某些记录加排他锁（X 锁），加排他锁之前必须先取得该表的 IX 锁。

:::warning

**意向锁是由数据引擎自己维护的，用户无法手动操作意向锁，在为数据行加共享/排他锁之前，InnoDB会先获取该行数据所在数据表对应的意向锁。**

**意向锁之间是相互兼容的。**

**除了意向共享锁（IS）和共享锁兼容（S），其余的意向锁和共享或者排他锁都互斥。**

:::

### 快照读和当前读的区别

**快照读**（一致性非锁定读）就是单纯的 `SELECT` 语句。

```mysql
SELECT ... FOR UPDATE
SELECT ... LOCK IN SHARE MODE
```

快照即记录的历史版本，每行记录可能存在多个历史版本。

快照读的情况下，如果读取的记录正在执行UPDATE/DELETE操作，读取操作不会因此去等待记录上X锁的释放，而是会去读取行的一个快照。

只有在事务隔离级别RC和RR下，InnoDB才会使用快照读。

- 在RC级别下，对于快照数据，快照读总是读取被锁定行的最新一份快照数据。
- 在RR级别下，对于快照数据，快照读总是读取本事务开始时的行数据版本。

**当前读**（一致性锁定读）就是给行记录加X锁或者S锁。

```mysql
# 对读的记录加一个X锁
SELECT...FOR UPDATE
# 对读的记录加一个S锁
SELECT...LOCK IN SHARE MODE
# 对修改的记录加一个X锁
INSERT...
UPDATE...
DELETE...
```



## MySQL如何存储IP地址？

可以将IP地址转换成整形数据存储，性能更好，占用空间更小。

MySQL提供了两个方法来处理ip地址：

- `INET_ATON()`：把ip转化为无符号整数。
- `INET_NTOA()` :把整型的 ip 转为地址。

插入数据前，先用 `INET_ATON()` 把 ip 地址转为整型，显示数据时，使用 `INET_NTOA()` 把整型的 ip 地址转为地址显示即可。

## 执行计划

可以使用 `EXPLAIN` 命令来分析 SQL 的 **执行计划** 。执行计划是指一条 SQL 语句在经过 MySQL 查询优化器的优化会后，具体的执行方式。

`EXPLAIN` 并不会真的去执行相关的语句，而是通过 **查询优化器** 对语句进行分析，找出最优的查询方案，并显示对应的信息。

:::info 分析EXPLAIN结果

- **id**：SELECT标识符，是查询中SELECT的序号，用来标识整个查询中SELECT语句的顺序。id如果相同，从上往下一次执行。
- **select_type**：查询的类型，主要用于区分普通查询、联合查询、子查询等复杂查询。
  - **SIMPLE**：简单查询，不包含 UNION 或者子查询。
  - **PRIMARY**：查询中如果包含子查询或其他部分，外层的 SELECT 将被标记为 PRIMARY。
  - **SUBQUERY**：子查询中的第一个 SELECT。
  - **UNION**：在 UNION 语句中，UNION 之后出现的 SELECT。
  - **DERIVED**：在 FROM 中出现的子查询将被标记为 DERIVED。
  - **UNION RESULT**：UNION 查询的结果

- **table**：表名。
- **type（重要）**：查询执行的类型，所有值的顺序从最优到最差排序为system > const > eq_ref > ref > fulltext > ref_or_null > index_merge > unique_subquery > index_subquery > range > index > ALL。
  - **system**：如果表使用的引擎对于表行数统计是精确的（如：MyISAM），且表中只有一行记录的情况下，访问方法是 system ，是 const 的一种特例。
  - **const**：表中最多只有一行匹配的记录，一次查询就可以找到，常用于使用主键或唯一索引的所有字段作为查询条件。
  - **eq_ref**：当连表查询时，前一张表的行在当前这张表中只有一行与之对应。是除了 system 与 const 之外最好的 join 方式，常用于使用主键或唯一索引的所有字段作为连表条件。
  - **ref**：使用普通索引作为查询条件，查询结果可能找到多个符合条件的行。
  - **index_merge**：当查询条件使用了多个索引时，表示开启了 Index Merge 优化，此时执行计划中的 key 列列出了使用到的索引。
  - **range**：对索引列进行范围查询，执行计划中的 key 列表示哪个索引被使用了。
  - **index**：查询遍历了整棵索引树，与 ALL 类似，只不过扫描的是索引，而索引一般在内存中，速度更快。
  - **ALL**：全表扫描。

- **key（重要）**：key 列表示 MySQL 实际使用到的索引。如果为 NULL，则表示未用到索引。

- **key_len**：key_len 列表示 MySQL 实际使用的索引的最大长度；当使用到联合索引时，有可能是多个列的长度和。在满足需求的前提下越短越好。如果 key 列显示 NULL ，则 key_len 列也显示 NULL 。

- **rows**：rows 列表示根据表统计信息及选用情况，大致估算出找到所需的记录或所需读取的行数，数值越小越好。
- **Extra（重要）**：这列包含了 MySQL 解析查询的额外信息，通过这些信息，可以更准确的理解 MySQL 到底是如何执行查询的。常见的值如下：
  - **Using filesort**：在排序时使用了外部的索引排序，没有用到表内索引进行排序。
  - **Using temporary**：MySQL 需要创建临时表来存储查询的结果，常见于 ORDER BY 和 GROUP BY。
  - **Using index**：表明查询使用了覆盖索引，不用回表，查询效率非常高。
  - **Using index condition**：表示查询优化器选择使用了索引条件下推这个特性。
  - **Using where**：表明查询使用了 WHERE 子句进行条件过滤。一般在没有使用到索引的时候会出现。
  - **Using join buffer (Block Nested Loop)**：连表查询的方式，表示当被驱动表的没有使用索引的时候，MySQL 会先将驱动表读出来放到 join buffer 中，再遍历被驱动表与驱动表进行查询。

:::

## 读写分离和分库分表

### 读写分离

读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点（主节点写，从节点读）上，这样能小幅度提升写性能，大幅度提升读性能。

### 读写分离会带来什么问题？

读写分离对提升数据库的并发非常有效，但是主库和从库的数据存在延时（**主从同步延迟** ）。

### 如何实现读写分离？

1. 部署多台数据库，选择其中一台作为主数据库，其他的一台或者多台作为从数据库。
2. 保证主数据库和从数据库之间的数据是实时同步的，这个过程称为**主从复制**。
3. 系统将写请求交给主数据库处理，读请求交给从数据库处理。

### 主从复制的原理是什么？

1. 主库将数据库中数据的变化写入到 binlog；

2. 从库连接主库；

3. 从库会创建一个 I/O 线程向主库请求更新的 binlog；

4. 主库会创建一个 binlog dump 线程来发送 binlog ，从库中的 I/O 线程负责接收；

5. 从库的 I/O 线程将接收的 binlog 写入到 relay log 中；

6. 从库的 SQL 线程读取 relay log 同步数据本地（也就是再执行一遍 SQL ）。

## 分库分表

### 什么是分库

分库就是将数据库中的数据分散到不同的数据库上，可以垂直分库，也可以水平分库。

**垂直分库**就是把单一数据库按照业务进行划分，不同的业务使用不同的数据库，进而将一个数据库的压力分担到多个数据库。

![image-20230526202917798](/markdown/image-20230526202917798.png)

**水平分库**是把同一个表按一定规则拆分到不同的数据库中，每个库可以位于不同的数据库上，实现了水平扩展，解决了单表的存储和性能瓶颈的问题。例如将10万条数据分成两个5万条数据。

### 什么是分表

**分表**：就是对单表的数据进行拆分，可以是垂直拆分，也可以是水平拆分。

**垂直分表**：是对数据表列的拆分，**把一张列比较多的表拆分成多张表**。

**水平分表**：是对数据表行的拆分，吧一张行比较多的表拆分为多张表，可以解决单一表数据量过大的问题。

### 什么情况下需要分库分表？

- 单表的数据达到千万级别以上，数据库读写速度比较缓慢。
- 数据库的数据占用的空间越来越大，备份时间越来越长。
- 应用的并发量太大。

### 常见的分片算法有哪些？

分片算法主要解决了数据被水平分片之后，数据应该放在哪个表的问题。

- **哈希分片**：求指定key的哈希，然后根据哈希值确定数据应被放置在哪个表中。哈希分片比较适合随机读写的场景，不太适合经常使用范围查询的场景。
- **范围分片**：按照特性的范围区间来分配数据。
- **地理位置分片**：很多NewSQL数据库都支持地理位置分片算法。
- **融合算法**：灵活组合多种分片算法。

### 分库分表会带来什么问题呢？

- **join操作**：同一个数据库中的表分布在不同的数据库中，导致无法使用join操作。
- **事务问题**：同一个数据库中的表分布在不同的数据库中，如果单个操作涉及到多个数据库，那么数据库自带的事物就无法满足要求。
- **分布式id**分库之后，数据遍布在不同服务器上的数据库，数据库的自增主键已经没办法满足生成唯一主键。