---
title: Redis持久化
icon: page
star: true
category:
  - 数据库
tags:
  - Redis
  - 八股
---

## RDB持久化

Redis Database Backup file  把内存中的所有数据都记录到磁盘中，当Redis实例故障之后，从磁盘中读取快照文件。

快照持久化是Redis默认采用的持久化方式。

- Redis停机时会自动执行一次RDB。
- 缺点
  - 执行间隔很长，可能存在数据丢失的风险。
  - fork子进程，压缩，写出RDB文件都比较耗时。

### RDB创建快照的时候会阻塞主线程吗？

Redis提供了两个命令来生成RDB快照文件：

- `save`：由主进程执行save，其他命令都会被阻塞；
- `bgsave`：fork出一个子进程，子进程执行，不会阻塞Redis主进程，默认选项。
  - 子进程是fork主进程得到的，此时会阻塞主进程；
  - 子进程共享主进程的物理内存区域，加快fork速度；
  - fork采用copy on write技术；
    - 主进程进行读的时候，访问共享内存；
    - 主进程执行写的时候，则会拷贝一份数据，执行写操作。

## AOF持久化

Append Only File 追加文件，redis处理的每一个命令都会记录在AOF文件中，可以看做是命令日志文件。

与快照持久化相比，AOF持久化的实时性更好。默认情况下Redis没有开启AOF方式的持久化，通过`appendonly`参数开启。

开启AOF持久化后没执行一条会更改Redis中的数据的命令，Redis就会将命令写入到AOF缓冲区中，最后再根据持久化方式的配置来决定何时将系统内核缓存区的数据同步到磁盘中。

只有同步到磁盘中才算持久化保存，否则还是会存在数据丢失的风险。

### AOF工作基本流程？

AOF持久化功能的实现可以简单分为5步：

1. **命令追加（append）**：所有的写命令会追加到AOF缓冲区中。

2. **文件写入（write）**：将AOF缓冲区的数据写入到AOF文件中，这一步需要调用`write`函数，`write`将数据写入到了系统内核缓冲区之后直接返回。此时并没有同步到磁盘。
3. **文件同步（fsync）**：AOF缓冲区根据对应的持久化方式向磁盘做同步操作，这一步需要调用`fsync`函数，`fsync`针对单个文件操作，对其进行强制磁盘同步，`fsync`将阻塞直到写入磁盘完成之后返回，保证数据的持久化。
4. **文件重写（rewrite）**：随着AOF文件越来越大，需要定期对AOF文件进行重写，达到压缩目的。
5. **重启加载（load）**：当Redis重启时，可以加载AOF文件进行数据恢复。

### AOF持久化方式有哪些？

appendonly开启，保存文件的频率有三种：

- `appendfsync always`  ：主线程调用 `write` 执行写操作后，后台线程调用`fsync`保存aof文件到磁盘，严重影响性能。
- `appendfsync everysec` ：主线程调用 `write` 执行写操作后，后台线程每秒调用`fsync`保存aof文件。
- `appendfsync no`： 主线程调用 `write` 执行写操作后将数据写入AOF缓冲区，由操作系统决定什么时候写回磁盘。

### AOF为什么是在执行完命令之后记录日志？

关系型数据库通常都是执行命令之前记录日志，而Redis AOF持久化机制是在执行完命令之后再记录日志。

:::info 为什么？

- 避免额外的检查开销，AOF记录日志不会对命令进行语法检查；
- 在命令执行完之后再记录，不会阻塞当前的命令执行。

同时也带来了风险：

- 如果刚执行完命令Redis宕机了就会导致对应的修改记录丢失；
- 可能会阻塞后续其他命令的执行。

:::

### AOF重写了解吗？

当AOF变得太大时，Redis能在后台自动重写AOF产生一个新的AOF文件，新的AOF文件和原有AOF文件所保存的数据库状态一直，但是体积更小。

由于 AOF 重写会进行大量的写入操作，为了避免对 Redis 正常处理命令请求造成影响，Redis 将 AOF 重写程序放到子进程里执行。

AOF 文件重写期间，Redis 还会维护一个 **AOF 重写缓冲区**，该缓冲区会在子进程创建新 AOF 文件期间，记录服务器执行的所有写命令。当子进程完成创建新 AOF 文件的工作之后，服务器会将重写缓冲区中的所有内容追加到新 AOF 文件的末尾，使得新的 AOF 文件保存的数据库状态与现有的数据库状态一致。最后，服务器用新的 AOF 文件替换旧的 AOF 文件，以此来完成 AOF 文件重写操作。

使用`BGREWRITEAOF`可以手动让AOF文件执行重写功能。

也可以通过以下配置，让程序自动决定触发时机：

- `auto-aof-rewrite-percentage 100`：这次的文件大小比上次增长超过100%则重写，默认值100，设置为0表示禁用自动重写。
- `auto-aof-rewrite-min-size 64mb`：文件体积大于多少时执行重写，默认值64MB。

### AOF 校验机制了解吗？

AOF 校验机制是 Redis 在启动时对 AOF 文件进行检查，以判断文件是否完整，是否有损坏或者丢失的数据。通过使用一种叫做 **校验和（checksum）**的数字来验证 AOF 文件。这个校验和是通过对整个 AOF 文件内容进行 CRC64 算法计算得出的数字。如果文件内容发生了变化，那么校验和也会随之改变。

因此，Redis 在启动时会比较计算出的校验和与文件末尾保存的校验和（计算的时候会把最后一行保存校验和的内容给忽略点），从而判断 AOF 文件是否完整。如果发现文件有问题，Redis 就会拒绝启动并提供相应的错误信息。AOF 校验机制十分简单有效，可以提高 Redis 数据的可靠性。

## 如何选择 RDB 和 AOF？

**RDB 比 AOF 优秀的地方**：

- RDB 文件存储的内容是经过压缩的二进制数据， 保存着某个时间点的数据集，文件很小，适合做数据的备份，灾难恢复。AOF 文件存储的是每一次写命令，类似于 MySQL 的 binlog 日志，通常会比 RDB 文件大很多。当 AOF 变得太大时，Redis 能够在后台自动重写 AOF。新的 AOF 文件和原有的 AOF 文件所保存的数据库状态一样，但体积更小。
- 使用 RDB 文件恢复数据，直接解析还原数据即可，不需要一条一条地执行命令，速度非常快。而 AOF 则需要依次执行每个写命令，速度非常慢。也就是说，与 AOF 相比，恢复大数据集的时候，RDB 速度更快。

**AOF 比 RDB 优秀的地方**：

- RDB 的数据安全性不如 AOF，没有办法实时或者秒级持久化数据。生成 RDB 文件的过程是比较繁重的， 虽然 BGSAVE 子进程写入 RDB 文件的工作不会阻塞主线程，但会对机器的 CPU 资源和内存资源产生影响，严重的情况下甚至会直接把 Redis 服务干宕机。AOF 支持秒级数据丢失（取决 fsync 策略，如果是 everysec，最多丢失 1 秒的数据），仅仅是追加命令到 AOF 文件，操作轻量。
- RDB 文件是以特定的二进制格式保存的，并且在 Redis 版本演进中有多个版本的 RDB，所以存在老版本的 Redis 服务不兼容新版本的 RDB 格式的问题。
- AOF 以一种易于理解和解析的格式包含所有操作的日志。可以轻松地导出 AOF 文件进行分析，也可以直接操作 AOF 文件来解决一些问题。比如，如果执行`FLUSHALL`命令意外地刷新了所有内容后，只要 AOF 文件没有被重写，删除最新命令并重启即可恢复之前的状态。

**综上**：

- Redis 保存的数据丢失一些也没什么影响的话，可以选择使用 RDB。
- 不建议单独使用 AOF，因为时不时地创建一个 RDB 快照可以进行数据库备份、更快的重启以及解决 AOF 引擎错误。
- 如果保存的数据要求安全性比较高的话，建议同时开启 RDB 和 AOF 持久化或者开启 RDB 和 AOF 混合持久化。

|                |                       RDB                        |                            AOF                             |
| -------------- | :----------------------------------------------: | :--------------------------------------------------------: |
| 持久化方式     |              定时对整个内存创建快照              |                    记录每一次执行的命令                    |
| 数据完整性     |         不完整，两次备份之间的操作会丢失         |                  相对完整，取决于刷盘策略                  |
| 文件大小       |               会有压缩，文件体积小               |                   记录命令，文件体积很大                   |
| 宕机恢复速度   |                       很快                       |                             慢                             |
| 数据恢复优先级 |            低，因为数据完整性不如AOF             |                     高，数据完整性更高                     |
| 系统占用资源   |       高，大量CPU和内存消耗（创建快照时）        | 低，主要是磁盘IO资源，但是AOF重写时会占用大量CPU和内存资源 |
| 使用场景       | 可以容忍数据部分不完整，追求更快的启动速度的场景 |              对数据完整性安全性要求较高的场景              |
