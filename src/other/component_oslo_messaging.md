---
title: oslo_messaging组件
star: true
icon: page
category:
  - openstack组件
  - 随记
  - oslo_messaging
tag: 
  - oslo_service
  - Transport
  - RPC
  - oslo_messaging
---


## oslo_messaging

🌈相关链接[openstack中的Service](https://ylzhong.top/openstack/nova/service.html)

### Transport

在创建`RPCServer`和`RPCClient`都需要指定`transport`，openstack的每个模块中`rpcapi.py`的`init()`方法中都会存在`create_transport()`方法，本质是调用`msg_transport._get_transport`

```python
def _get_transport(conf, url=None, allowed_remote_exmods=None,
                   transport_cls=RPCTransport):
    allowed_remote_exmods = allowed_remote_exmods or []
    # 注册配置
    conf.register_opts(_transport_opts)

    if not isinstance(url, TransportURL):
        # 如果设置的url不是TransportURL类，则解析为此类
        url = TransportURL.parse(conf, url)
	
    # 添加参数，默认交换机和远程异常模块
    kwargs = dict(default_exchange=conf.control_exchange,
                  allowed_remote_exmods=allowed_remote_exmods)

    try:
        # 根据url.transport前缀加载驱动
        mgr = driver.DriverManager('oslo.messaging.drivers',
                                   url.transport.split('+')[0],
                                   invoke_on_load=True,
                                   invoke_args=[conf, url],
                                   invoke_kwds=kwargs)
    except RuntimeError as ex:
        raise DriverLoadFailure(url.transport, ex)
	# 调用Transport的构造方法
    return transport_cls(mgr.driver)
```

调用`Transport`构造方法，可将其看为RPC通信的基类，已经实现了通信需要的各中方法，仅需要`driver`作为参数

```python
class Transport:

    def __init__(self, driver):
        self.conf = driver.conf
        self._driver = driver
	
    # 要求driver实现部分特征？
    def _require_driver_features(self, requeue=False):
        self._driver.require_features(requeue=requeue)

    # rpc调用的主要方法，调用driver中的send()方法，需要传入target中包含topic参数
    def _send(self, target, ctxt, message, wait_for_reply=None, timeout=None,
              call_monitor_timeout=None, retry=None, transport_options=None):
        if not target.topic:
            raise exceptions.InvalidTarget('A topic is required to send',
                                           target)
        return self._driver.send(target, ctxt, message,
                                 wait_for_reply=wait_for_reply,
                                 timeout=timeout,
                                 call_monitor_timeout=call_monitor_timeout,
                                 retry=retry,
                                 transport_options=transport_options)
	# 发送通知
    def _send_notification(self, target, ctxt, message, version, retry=None):
        ...

    # 监听
    def _listen(self, target, batch_size, batch_timeout):
        ...

    def _listen_for_notifications(self, targets_and_priorities, pool,
        ...

    def cleanup(self):
        ...
```

将`RPCTransport`继承`Transport`类，则拥有监听消息，发送消息的基本流程

### AMQPDriverBase

由于使用消息队列作为发送消息的驱动，所以查看类`AMQPDriverBase`类，所有的消息队列的`Driver`都需要继承这个类，例如`oslo_massaging.drivers.impl_rabbit.RabbitDriver`

```python
class AMQPDriverBase(base.BaseDriver):
    missing_destination_retry_timeout = 0

    def __init__(self, conf, url, connection_pool,
                 default_exchange=None, allowed_remote_exmods=None):
        super().__init__(conf, url, default_exchange,
                         allowed_remote_exmods)
		# 设置默认交换机
        self._default_exchange = default_exchange
        # 设置默认连接池，通过impl_rabbit.py可以看到连接池的大小默认为30
        self._connection_pool = connection_pool

        
        self._reply_q_lock = threading.Lock()
        self._reply_q = None
        self._reply_q_conn = None
        self._waiter = None
        # 以hostname和processname设置队列的名称
        if conf.oslo_messaging_rabbit.use_queue_manager:
            self._q_manager = QManager(
                hostname=conf.oslo_messaging_rabbit.hostname,
                processname=conf.oslo_messaging_rabbit.processname)
        else:
            self._q_manager = None

    def _get_exchange(self, target):
        # target自带的交换机或默认交换机，nova中的target多数没有指定交换机，所以名字是''？
        return target.exchange or self._default_exchange

    def _get_connection(self, purpose=rpc_common.PURPOSE_SEND, retry=None):
        """
        rpc_common.ConnectionContext.init:
        	...
            if pooled:
            	# 当操作为send，直接从连接池中获取连接
                self.connection = connection_pool.get(retry=retry)
            else:
            	# 尝试创建新的连接，保证了发送操作和监听操作不会是同一个连接
                self.connection = connection_pool.create(purpose)
        	...
        """
        return rpc_common.ConnectionContext(self._connection_pool,
                                            purpose=purpose,
                                            retry=retry)

    def _get_reply_q(self):
        # 保证线程安全
        with self._reply_q_lock:
            # NOTE(amorin) Re-use reply_q when it already exists
            # This avoid creating too many queues on AMQP server (rabbit)
            if self._reply_q is not None:
                return self._reply_q

            if self._q_manager:
                reply_q = 'reply_' + self._q_manager.get()
            else:
                reply_q = 'reply_' + uuid.uuid4().hex
            LOG.debug('Creating reply queue: %s', reply_q)

            conn = self._get_connection(rpc_common.PURPOSE_LISTEN)

            self._waiter = ReplyWaiter(reply_q, conn,
                                       self._allowed_remote_exmods)
			# 对于每个连接，都会生成一个队列用于监听
            self._reply_q = reply_q
            self._reply_q_conn = conn

        return self._reply_q

    # 创建RPCClient时，应该指定call_monitor_timeout，当监听超过这个时间则返回timeout
    def _send(self, target, ctxt, message,
              wait_for_reply=None, timeout=None, call_monitor_timeout=None,
              envelope=True, notify=False, retry=None, transport_options=None):

        msg = message
        reply_q = None
        if 'method' in msg:
            LOG.debug('Calling RPC method %s on target %s', msg.get('method'),
                      target.topic)
        else:
            LOG.debug('Sending message to topic %s', target.topic)

        if wait_for_reply:
            # 需要监听，则创建一个专用队列，即调用RPCClient.call()方法，则会创建一个专用队列
            reply_q = self._get_reply_q()
            msg_id = uuid.uuid4().hex
            msg.update({'_msg_id': msg_id})
            msg.update({'_reply_q': reply_q})
            msg.update({'_timeout': call_monitor_timeout})
            LOG.debug('Expecting reply to msg %s in queue %s', msg_id,
                      reply_q)

        rpc_amqp._add_unique_id(msg)
        unique_id = msg[rpc_amqp.UNIQUE_ID]

        rpc_amqp.pack_context(msg, ctxt)
		
        # 需要对消息进行包装（序列化）
        if envelope:
            msg = rpc_common.serialize_msg(msg)
		
        # 监听消息返回
        if wait_for_reply:
            self._waiter.listen(msg_id)
            log_msg = "CALL msg_id: %s " % msg_id
        else:
            log_msg = "CAST unique_id: %s " % unique_id

        try:
            with self._get_connection(rpc_common.PURPOSE_SEND, retry) as conn:
                if notify:
                    exchange = self._get_exchange(target)
                    LOG.debug(log_msg + "NOTIFY exchange '%(exchange)s'"
                              " topic '%(topic)s'", {'exchange': exchange,
                                                     'topic': target.topic})
                    # 通知类消息则发送通知
                    conn.notify_send(exchange, target.topic, msg, retry=retry)
                elif target.fanout:
                    # 广播类消息则发送广播
                    log_msg += "FANOUT topic '{topic}'".format(
                        topic=target.topic)
                    LOG.debug(log_msg)
                    conn.fanout_send(target.topic, msg, retry=retry)
                else:
                    # 否则就发送给target，如果没有指定server，则轮训给target下的server
                    topic = target.topic
                    exchange = self._get_exchange(target)
                    if target.server:
                        # 发送给target下的server，则将routingKey命名为target.server
                        topic = '{}.{}'.format(target.topic, target.server)
                    LOG.debug(log_msg + "exchange '%(exchange)s'"
                              " topic '%(topic)s'", {'exchange': exchange,
                                                     'topic': topic})
                    # 根据交换机，路由键发送到指定队列中
                    conn.topic_send(exchange_name=exchange, topic=topic,
                                    msg=msg, timeout=timeout, retry=retry,
                                    transport_options=transport_options)
		
            if wait_for_reply:
                # call()方法需要等待消息完成，timeout：整个监听过程的超时时间，call_monitor_timeout不为0则添加另一个定时器监听返回消息，超时则抛出异常
                result = self._waiter.wait(msg_id, timeout,
                                           call_monitor_timeout, reply_q)
                if isinstance(result, Exception):
                    raise result
                return result
        finally:
            if wait_for_reply:
                # 取消监听
                self._waiter.unlisten(msg_id)

    def send(self, target, ctxt, message, wait_for_reply=None, timeout=None,
             call_monitor_timeout=None, retry=None, transport_options=None):
        return self._send(target, ctxt, message, wait_for_reply, timeout,
                          call_monitor_timeout, retry=retry,
                          transport_options=transport_options)

    def send_notification(self, target, ctxt, message, version, retry=None):
        return self._send(target, ctxt, message,
                          envelope=(version == 2.0), notify=True, retry=retry)

    # 控制消费者消费不同种类的消息，其中消费者是rpcserver
    def listen(self, target, batch_size, batch_timeout):
        conn = self._get_connection(rpc_common.PURPOSE_LISTEN)

        listener = RpcAMQPListener(self, conn)
		
        # 为topic为target.topic的消息定义消费者，topic是routingKey
        conn.declare_topic_consumer(exchange_name=self._get_exchange(target),
                                    topic=target.topic,
                                    callback=listener)
        
        # 为topic为topic.server的消息定义消费者
        conn.declare_topic_consumer(exchange_name=self._get_exchange(target),
                                    topic='{}.{}'.format(target.topic,
                                                         target.server),
                                    callback=listener)
        # 为topic为fanout=True的消息定义消费者
        conn.declare_fanout_consumer(target.topic, listener)
		
        # 轮训传入的消息并执行Listener在启动start时传入的回调函数
        return base.PollStyleListenerAdapter(listener, batch_size,
                                             batch_timeout)

    # 创建消费者，貌似是根据优先级创建
    def listen_for_notifications(self, targets_and_priorities, pool,
                                 batch_size, batch_timeout):
        conn = self._get_connection(rpc_common.PURPOSE_LISTEN)

        listener = NotificationAMQPListener(self, conn)
        for target, priority in targets_and_priorities:
            conn.declare_topic_consumer(
                exchange_name=self._get_exchange(target),
                topic='{}.{}'.format(target.topic, priority),
                callback=listener, queue_name=pool)
        return base.PollStyleListenerAdapter(listener, batch_size,
                                             batch_timeout)

    def cleanup(self):
        if self._connection_pool:
            # 连接池置为空，不再接受新的请求
            self._connection_pool.empty()
        self._connection_pool = None

        with self._reply_q_lock:
            if self._reply_q is not None:
                self._waiter.stop()
                self._reply_q_conn.close()
                self._reply_q_conn = None
                self._reply_q = None
                self._waiter = None
```

### 流程图
创建`rpcserver`时会创建三个队列，分别为`topic`、`tppic.server`、`fanout`，`rpcclient`使用`call()
`方法时，会临时创建一个反向的`reply`队列用于监听，调用任务完成后这个队列就会被删除
![oslo_messaging通信方式](/image/oslo_messaging.png)
**创建rpcserver**

创建rpcserver需要指定`topic`和`server`，创建rpcserver时会创建三个队列与对应类型的交换机绑定，其对应的路由键分别为`topic.server`、`topic`、`topic`

**创建rpcclient**

创建rpcclient需要指定`topic`

-   如果不指定`server`，则消息发送到`topic`消息队列中，并通过轮询的方式发送给消费者（rpcserver）。
-   如果指定了`server`则会发送给`topic.server`队列，并由一个rpcserver消费。
-   如果指定`fanout=True`，则消息会发送到`fanout`队列中，订阅该队列的所有消费者都会收到这个消息
