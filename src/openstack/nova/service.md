---
title: Service
star: true
icon: page
category:
  - openstack中的Service
  - 随记
  - oslo
tag: 
  - WSGIService
  - oslo_messaging
  - wsgi
---


## nova.service.Service

主要用于启动rpc服务，启动定时任务

### create

以`nova.service.Service.create`方法为例：

```python
# 父类为oslo_service.Service

@classmethod
def create(cls, host=None, binary=None, topic=None, manager=None,
           report_interval=None, periodic_enable=None,
           periodic_fuzzy_delay=None, periodic_interval_max=None):
 	  # 相关配置检查
    if not host:
        host = CONF.host
    if not binary:
        binary = os.path.basename(sys.argv[0])
    if not topic:
        topic = binary.rpartition('nova-')[2]
    if not manager:
        # 为当前的wsgi服务配置对应的manager，manager中用来启动定时任务，或暴露endpoint服务端点
        manager = SERVICE_MANAGERS.get(binary)
    if report_interval is None:
        report_interval = CONF.report_interval
    if periodic_enable is None:
        periodic_enable = CONF.periodic_enable
    if periodic_fuzzy_delay is None:
        periodic_fuzzy_delay = CONF.periodic_fuzzy_delay

    debugger.init()
	  # 调用超类的构造方法
    service_obj = cls(host, binary, topic, manager,
                      report_interval=report_interval,
                      periodic_enable=periodic_enable,
                      periodic_fuzzy_delay=periodic_fuzzy_delay,
                      periodic_interval_max=periodic_interval_max)
    try:
        utils.raise_if_old_compute()
    except exception.TooOldComputeService as e:
        if CONF.workarounds.disable_compute_service_check_for_ffu:
            LOG.warning(str(e))
        else:
            raise

    return service_obj
```

调用上述方法只后会返回一个`nova.service.Service`对象

### init

`nova.service.Service`对象构造方法：

```python
def __init__(self, host, binary, topic, manager, report_interval=None,
             periodic_enable=None, periodic_fuzzy_delay=None,
             periodic_interval_max=None, *args, **kwargs):
    super(Service, self).__init__()
    self.host = host
    self.binary = binary
    self.topic = topic
    self.manager_class_name = manager
    # 似乎是选择RPC服务的驱动，例如以rabbitmq作为RPC服务的通信组件
    self.servicegroup_api = servicegroup.API()
    # 以manager的名字获取对应的类
    manager_class = importutils.import_class(self.manager_class_name)
    # 创建api的TARGET
    if objects_base.NovaObject.indirection_api:
        # API()的init()方法展示了创建端点的过程
        conductor_api = conductor.API()
        conductor_api.wait_until_ready(context.get_admin_context())
    self.manager = manager_class(host=self.host, *args, **kwargs)
    self.rpcserver = None
    self.report_interval = report_interval
    # 是否允许定时任务启动
    self.periodic_enable = periodic_enable
    self.periodic_fuzzy_delay = periodic_fuzzy_delay
    self.periodic_interval_max = periodic_interval_max
    self.saved_args, self.saved_kwargs = args, kwargs
    self.backdoor_port = None
    setup_profiler(binary, self.host)
```

`conductor_api = conductor.API()`中`init`调用了`BaseAPI`，主要用于创建调用`rpcserver`的`client`，代码如下：

```python
def __init__(self, topic):
    super(BaseAPI, self).__init__()
    # 使用oslo_message组件进行rpc通信，Target类中包含属性fanout表示是否广播，server表示一个Target下某个精确的server，如果不指定server，则轮训发送到这个rpcserver
    下的一个server，
    target = messaging.Target(topic=topic,
                              namespace=_NAMESPACE,
                              version='1.0')
    version_cap = self.VERSION_ALIASES.get(CONF.upgrade_levels.baseapi,
                                           CONF.upgrade_levels.baseapi)
    # 根据Target获取到调用rpcserver的client
    self.client = rpc.get_client(target, version_cap=version_cap)
```

### start、stop

```python
def start(self):
    context.CELL_CACHE = {}

    verstr = version.version_string_with_package()
    LOG.info('Starting %(topic)s node (version %(version)s)',
              {'topic': self.topic, 'version': verstr})
    self.basic_config_check()
    ctxt = context.get_admin_context()
    # 获取服务在数据库中的记录（nova中server的部分数据会保存在数据库中）
    self.service_ref = objects.Service.get_by_host_and_binary(
        ctxt, self.host, self.binary)
    # nova.manager.Manager中没有做任何操作，默认为pass
    self.manager.init_host(self.service_ref)
    self.model_disconnected = False
    if self.service_ref:
        # 更新数据库中server的version
        _update_service_ref(self.service_ref)

    else:
        try:
            # 数据库中创建server
            self.service_ref = _create_service_ref(self, ctxt)
        except (exception.ServiceTopicExists,
                exception.ServiceBinaryExists):
            # NOTE(danms): If we race to create a record with a sibling
            # worker, don't fail here.
            self.service_ref = objects.Service.get_by_host_and_binary(
                ctxt, self.host, self.binary)
	  # manager中的前置处理，默认为pass
    self.manager.pre_start_hook(self.service_ref)
    # 设置后门端口，调试作用？
    if self.backdoor_port is not None:
        self.manager.backdoor_port = self.backdoor_port

    LOG.debug("Creating RPC server for service %s", self.topic)
    # 使用oslo_messaging创建Target，必选topic和server，注意此处是创建rpcserver而不是client
    target = messaging.Target(topic=self.topic, server=self.host)
    # 服务的端点，可以添加多个类，暴露其中的public方法
    endpoints = [
        self.manager,
        baserpc.BaseRPCAPI(self.manager.service_name, self.backdoor_port)
    ]
    endpoints.extend(self.manager.additional_endpoints)

    serializer = objects_base.NovaObjectSerializer()
	
    """
    # 使用消息队列创建rpcserver
    return messaging.get_rpc_server(TRANSPORT,
                                    target,
                                    endpoints,
                                    executor='eventlet',
                                    serializer=serializer,
                                    access_policy=access_policy)
    """
    self.rpcserver = rpc.get_server(target, endpoints, serializer)
    self.rpcserver.start()
    # manager后处理
    self.manager.post_start_hook()

    LOG.debug("Join ServiceGroup membership for this service %s",
              self.topic)
    # Add service to the ServiceGroup membership group.
    self.servicegroup_api.join(self.host, self.topic, self)

    if self.periodic_enable:
        if self.periodic_fuzzy_delay:
            initial_delay = random.randint(0, self.periodic_fuzzy_delay)
        else:
            initial_delay = None
		# 往线程池中添加定时任务，self.periodic_tasks即执行manager中的periodic_tasks，将添加了定时任务注解的方法以设置的spacing时间间隔周期执行方法
        self.tg.add_dynamic_timer(self.periodic_tasks,
                                 initial_delay=initial_delay,
                                 periodic_interval_max=
                                    self.periodic_interval_max)
        
    def periodic_tasks(self, raise_on_error=False):
        """Tasks to be run at a periodic interval."""
        ctxt = context.get_admin_context()
        return self.manager.periodic_tasks(ctxt, raise_on_error=raise_on_error)
    
    def stop(self):
        """stop the service and clean up."""
        try:
            # 关闭RPC监听，线程池shutdown(wait=True)
            self.rpcserver.stop()
            self.rpcserver.wait()
        except Exception:
            pass

        try:
            self.manager.cleanup_host()
        except Exception:
            LOG.exception('Service error occurred during cleanup_host')
            pass

        super(Service, self).stop()
```

`oslo_messaging`中使用RabbitMQ作为消息队列，其中rpc连接数最大值默认为`30`，每次进行`call`调用都会生成一个连接进行监听返回值，如果在短时间内调用多次`call`但是没有获取到返回值，会导致连接被占用完，后续的`call`会被阻塞直到超过`timeout`返回超时错误，如果设置了`call_monitor_timeout`则会创建定时器查询返回值，超时则抛出`timeout`异常

### 总结

`Service`内通过设置`endpoint`展示了对外的`remote`方法，`target`中表明了RPC调用的`routingKey`，通过`target`和`endpoint`就可以注册一个`rpcserver`

在`Client`端，只需要通过相同配置的`target`即可获取对应到`rpcserver`的`client`，它是生产者，`client`发送的请求发送给交换机只后，根据`routingKey`找到对应的队列，队列注册各种`topic`类型的`Listener`处理请求，消费者是`rpcserver`



##  nova.service.WSGIService

### WSGIService

`WSGIService`中使用了`nova.wsgi.Server`，`start`方法：

```python
def start(self):
	# 复制原始套接字对象，原对象通过self._socket = eventlet.listen(bind_addr, family, backlog=backlog)获得
    dup_socket = self._socket.dup()
    
    # 允许重用本地端口和地址
    dup_socket.setsockopt(socket.SOL_SOCKET,
                          socket.SO_REUSEADDR, 1)
    
    # keepAlive
    dup_socket.setsockopt(socket.SOL_SOCKET,
                          socket.SO_KEEPALIVE, 1)

    # 设置TCP连接的存活时间
    if hasattr(socket, 'TCP_KEEPIDLE'):
        dup_socket.setsockopt(socket.IPPROTO_TCP,
                              socket.TCP_KEEPIDLE,
                              CONF.wsgi.tcp_keepidle)

    # 检查SSL配置
    if self._use_ssl:
        try:
            ca_file = CONF.wsgi.ssl_ca_file
            cert_file = CONF.wsgi.ssl_cert_file
            key_file = CONF.wsgi.ssl_key_file

            if cert_file and not os.path.exists(cert_file):
                raise RuntimeError(
                      _("Unable to find cert_file : %s") % cert_file)

            if ca_file and not os.path.exists(ca_file):
                raise RuntimeError(
                      _("Unable to find ca_file : %s") % ca_file)

            if key_file and not os.path.exists(key_file):
                raise RuntimeError(
                      _("Unable to find key_file : %s") % key_file)

            if self._use_ssl and (not cert_file or not key_file):
                raise RuntimeError(
                      _("When running server in SSL mode, you must "
                        "specify both a cert_file and key_file "
                        "option value in your configuration file"))
            ssl_kwargs = {
                'server_side': True,
                'certfile': cert_file,
                'keyfile': key_file,
                'cert_reqs': ssl.CERT_NONE,
            }

            if CONF.wsgi.ssl_ca_file:
                ssl_kwargs['ca_certs'] = ca_file
                ssl_kwargs['cert_reqs'] = ssl.CERT_REQUIRED
			# 将套接字包装成支持SSL的套接字
            dup_socket = eventlet.wrap_ssl(dup_socket,
                                           **ssl_kwargs)
        except Exception:
            with excutils.save_and_reraise_exception():
                LOG.error(
                    "Failed to start %(name)s on %(host)s:%(port)s with "
                    "SSL support",
                    {'name': self.name, 'host': self.host,
                     'port': self.port})
	# 设置wsgi初始化的参数
    wsgi_kwargs = {
        'func': eventlet.wsgi.server,
        'sock': dup_socket,
        'site': self.app,
        'protocol': self._protocol,
        'custom_pool': self._pool,
        'log': self._logger,
        'log_format': CONF.wsgi.wsgi_log_format,
        'debug': False,
        'keepalive': CONF.wsgi.keep_alive,
        'socket_timeout': self.client_socket_timeout
        }

    if self._max_url_len:
        wsgi_kwargs['url_length_limit'] = self._max_url_len
	# 启动WSGI服务器，本质是执行参数中的 func: eventlet.wsgi.server方法
    self._server = utils.spawn(**wsgi_kwargs)
```

`eventlet.wsgi.server`中创建了`WSGIServer`并监听

### eventlet.wsgi.server

```python
def server(sock, site,
           log=None,
           environ=None,
           max_size=None,
           max_http_version=DEFAULT_MAX_HTTP_VERSION,
           protocol=HttpProtocol,
           server_event=None,
           minimum_chunk_size=None,
           log_x_forwarded_for=True,
           custom_pool=None,
           keepalive=True,
           log_output=True,
           log_format=DEFAULT_LOG_FORMAT,
           url_length_limit=MAX_REQUEST_LINE,
           debug=True,
           socket_timeout=None,
           capitalize_response_headers=True):
	# 创建HTTPServer对象
    serv = Server(
        sock, sock.getsockname(),
        site, log,
        environ=environ,
        max_http_version=max_http_version,
        protocol=protocol,
        minimum_chunk_size=minimum_chunk_size,
        log_x_forwarded_for=log_x_forwarded_for,
        keepalive=keepalive,
        log_output=log_output,
        log_format=log_format,
        url_length_limit=url_length_limit,
        debug=debug,
        socket_timeout=socket_timeout,
        capitalize_response_headers=capitalize_response_headers,
    )
    # 提示配置将来会被弃用，并在journalctl中打印
    if server_event is not None:
        warnings.warn(
            'eventlet.wsgi.Server() server_event kwarg is deprecated and will be removed soon',
            DeprecationWarning, stacklevel=2)
        server_event.send(serv)
    # 设置一些默认参数
    if max_size is None:
        max_size = DEFAULT_MAX_SIMULTANEOUS_REQUESTS
    if custom_pool is not None:
        pool = custom_pool
    else:
        # 使用绿线程执行HTTP请求
        pool = eventlet.GreenPool(max_size)
	# 检查线程池中是否有spawn和waitall方法，用于后续的优雅关闭
    if not (hasattr(pool, 'spawn') and hasattr(pool, 'waitall')):
        raise AttributeError('''\
    eventlet.wsgi.Server pool must provide methods: `spawn`, `waitall`.
    If unsure, use eventlet.GreenPool.''')

    connections = {}
	
    # 清理连接操作
    def _clean_connection(_, conn):
        connections.pop(conn[0], None)
        conn[2] = STATE_CLOSE
        greenio.shutdown_safe(conn[1])
        conn[1].close()

    try:
        # journalctl中打印服务启动
        serv.log.info('({}) wsgi starting up on {}'.format(serv.pid, socket_repr(sock)))
        # 全局变量为True才会监听
        while is_accepting:
            try:
                # 接受请求
                client_socket, client_addr = sock.accept()
                # 设置超时时间
                client_socket.settimeout(serv.socket_timeout)
                # journalctl中打印
                serv.log.debug('({}) accepted {!r}'.format(serv.pid, client_addr))
                # 添加到connections字典中
                connections[client_addr] = connection = [client_addr, client_socket, STATE_IDLE]
                # 使用线程池执行process_request，并通过link设置线程执行完毕的回调函数，清理connection
                (pool.spawn(serv.process_request, connection)
                    .link(_clean_connection, connection))
            except ACCEPT_EXCEPTIONS as e:
                if support.get_errno(e) not in ACCEPT_ERRNO:
                    raise
                else:
                    break
            except (KeyboardInterrupt, SystemExit):
                serv.log.info('wsgi exiting')
                break
    finally:
        # 上方循环break或者全局变量is_accepting被设置为False，则停止请求监听
        for cs in connections.values():
            prev_state = cs[2]
            # 设置连接状态为CLOSE
            cs[2] = STATE_CLOSE
            # 如果状态为空闲，则调用安全关闭，
            if prev_state == STATE_IDLE:
                greenio.shutdown_safe(cs[1])
        # 等待线程池中的所有任务执行完毕
        pool.waitall()
        # journalctl记录wsgi退出，并记录此时是否正在接受新的连接
        serv.log.info('({}) wsgi exited, is_accepting={}'.format(serv.pid, is_accepting))
        try:
            #关闭套接字
            sock.close()
        except OSError as e:
            if support.get_errno(e) not in BROKEN_SOCK:
                traceback.print_exc()
```

### 总结

可以发现，决定是否接受新的请求取决于`is_accepting`，所以在使用`eventlet.wsgi.server`创建HTTP监听服务时，可以在`stop`执行时，将`is_accepting=False`，此时`WSGIServer`不会再接受新的请求，并进行优雅关闭

