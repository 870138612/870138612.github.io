---
title: Launcher启动器
star: true
icon: page
category:
  - openstack中的Launcher
  - 随记
  - oslo
tag: 
  - ServiceLauncher
  - Launcher
  - ProcessLauncher
---




## Launcher

### Launcher基类

Openstack中使用启动器`oslo_service.service.Launcher`管理各种`Service`，启动器能在收到`systemctl stop`发出的`kill -15`信号之后，执行内部`services`的`stop()`方法，如果能在`stop()`中添加优雅关闭的逻辑代码，则能实现服务的生命流程托管于`Launcher`，从而实现整个主进程的优雅关闭

`Launcher`中提供了模板方法

```python
class Launcher(object):
    
    def __init__(self, conf, restart_method='reload'):
        self.conf = conf
        conf.register_opts(_options.service_opts)
        self.services = Services(restart_method=restart_method)
        self.backdoor_port = (
            eventlet_backdoor.initialize_if_enabled(self.conf))
        self.restart_method = restart_method
	
    # 用于将Service对象放入到启动器中，必须得用oslo_service.Service类作为参数
    def launch_service(self, service, workers=1):
        
        if workers is not None and workers != 1:
            raise ValueError(_("Launcher asked to start multiple workers"))
        _check_service_base(service)
        service.backdoor_port = self.backdoor_port
        self.services.add(service)

    def stop(self):
        self.services.stop()

    def wait(self):
        self.services.wait()

    def restart(self):
        if self.restart_method == 'reload':
            self.conf.reload_config_files()
        else:  # self.restart_method == 'mutate'
            self.conf.mutate_config_files()
        self.services.restart()
```

### ServiceLauncher

`ServiceLauncher`是单进程版本的`Launcher`，在基类`Launcher`中添加了优雅关闭方法，针对信号的处理方法

```python
class ServiceLauncher(Launcher):

    def __init__(self, conf, restart_method='reload'):
        super(ServiceLauncher, self).__init__(
            conf, restart_method=restart_method)
        # 注册信号处理方法
        self.signal_handler = SignalHandler()
	
    # 优雅关闭
    def _graceful_shutdown(self, *args):
        # 清空信号处理监听器
        self.signal_handler.clear()
        # 如果设置了优雅关闭的超时时间，则会设置一个闹钟，当尝试关闭开始后，发生了超时则给进程发送SIGALRM信号杀死进程
        if (self.conf.graceful_shutdown_timeout and
                self.signal_handler.is_signal_supported('SIGALRM')):
            signal.alarm(self.conf.graceful_shutdown_timeout)
        self.stop()

    def _reload_service(self, *args):
        # 发送重启信号
        self.signal_handler.clear()
        raise SignalExit(signal.SIGHUP)

    def _fast_exit(self, *args):
        LOG.info('Caught SIGINT signal, instantaneous exiting')
        # 快速退出
        os._exit(1)

    def _on_timeout_exit(self, *args):
        # 优雅关闭超时后退出
        LOG.info('Graceful shutdown timeout exceeded, '
                 'instantaneous exiting')
        os._exit(1)

    def handle_signal(self):
        # 添加应对各种信号的处理办法
        self.signal_handler.clear()
        self.signal_handler.add_handler('SIGTERM', self._graceful_shutdown)
        self.signal_handler.add_handler('SIGINT', self._fast_exit)
        self.signal_handler.add_handler('SIGHUP', self._reload_service)
        self.signal_handler.add_handler('SIGALRM', self._on_timeout_exit)

    # 等待exit或者信号发生，并进行相应的退出处理
    def _wait_for_exit_or_signal(self):
        status = None
        signo = 0

        if self.conf.log_options:
            LOG.debug('Full set of CONF:')
            self.conf.log_opt_values(LOG, logging.DEBUG)

        try:
            super(ServiceLauncher, self).wait()
        except SignalExit as exc:
            signame = self.signal_handler.signals_to_name[exc.signo]
            LOG.info('Caught %s, handling', signame)
            status = exc.code
            signo = exc.signo
        except SystemExit as exc:
            self.stop()
            status = exc.code
        except Exception:
            self.stop()
        return status, signo

    def wait(self):
		# 通知守护进程，当前进程已经启动
        systemd.notify_once()
        # 重置信号处理监听
        self.signal_handler.clear()
        while True:
            # 添加信号处理监听
            self.handle_signal()
            # 等待异常或信号
            status, signo = self._wait_for_exit_or_signal()
            # 如果不是SIGHUP或DAEMON则退出循环，否则重启服务
            if not _is_sighup_and_daemon(signo):
                break
            self.restart()
		# 等待Service完成，Launcher中使用Services类包装多个Service，内部使用greenpool.GreenPool(thread_pool_size)执行每个Service
        super(ServiceLauncher, self).wait()
        return status
```

`ServiceLauncher`中使用绿线程执行每一个`Service`，所以在启动之后通过`systemctl status`可以看到只有一个进程执行

### ProcessLauncher

`ProcessLauncher`是采用`fork()`创建子进程，每个子进程添加了一个`Launcher`处理`Service`

```python
class ProcessLauncher(object):

    def __init__(self, conf, wait_interval=0.01, restart_method='reload'):
        self.conf = conf
        conf.register_opts(_options.service_opts)
        self.children = {}
        self.sigcaught = None
        self.running = True
        self.wait_interval = wait_interval
        self.launcher = None
        # 用于读取父进程是否死亡
        rfd, self.writepipe = os.pipe()
        self.readpipe = eventlet.greenio.GreenPipe(rfd, 'r')
        # 信号处理器对象
        self.signal_handler = SignalHandler()
        # 添加信号处理器
        self.handle_signal()
        # 检查传入的重启方法是否为reload或者mutate
        self.restart_method = restart_method
        if restart_method not in _LAUNCHER_RESTART_METHODS:
            raise ValueError(_("Invalid restart_method: %s") % restart_method)

    def handle_signal(self):
        # 添加了各种信号的处理器，仅有SIGTERM和SIGHUP才会让running=False
        self.signal_handler.add_handler('SIGTERM', self._handle_term)
        self.signal_handler.add_handler('SIGHUP', self._handle_hup)
        self.signal_handler.add_handler('SIGINT', self._fast_exit)
        self.signal_handler.add_handler('SIGALRM', self._on_alarm_exit)

    # systemctl stop发出信号后执行这个方法
    def _handle_term(self, signo, frame):
        self.sigcaught = signo
        self.running = False
        self.signal_handler.clear()

    def _handle_hup(self, signo, frame):
        self.sigcaught = signo
        self.running = False

    def _fast_exit(self, signo, frame):
        LOG.info('Caught SIGINT signal, instantaneous exiting')
        os._exit(1)

    def _on_alarm_exit(self, signo, frame):
        LOG.info('Graceful shutdown timeout exceeded, '
                 'instantaneous exiting')
        os._exit(1)

    def _pipe_watcher(self):
       	# 查看父进程是否死亡
        self.readpipe.read(1)
        LOG.info('Parent process has died unexpectedly, exiting')
        if self.launcher:
            self.launcher.stop()
        sys.exit(1)

    def _child_process_handle_signal(self):
		# 子启动器执行stop
        def _sigterm(*args):
            self.signal_handler.clear()
            self.launcher.stop()
		
        def _sighup(*args):
            self.signal_handler.clear()
            raise SignalExit(signal.SIGHUP)
        self.signal_handler.clear()
		# 为子进程添加信号处理方法
        self.signal_handler.add_handler('SIGTERM', _sigterm)
        self.signal_handler.add_handler('SIGHUP', _sighup)
        self.signal_handler.add_handler('SIGINT', self._fast_exit)

    def _child_wait_for_exit_or_signal(self, launcher):
        status = 0
        signo = 0

        try:
            # 等待子进程中的launcher里的任务执行完毕
            launcher.wait()
        except SignalExit as exc:
            # 检测到信号
            signame = self.signal_handler.signals_to_name[exc.signo]
            LOG.info('Child caught %s, handling', signame)
            # 设置信号
            status = exc.code
            signo = exc.signo
        except SystemExit as exc:
            launcher.stop()
            status = exc.code
        except BaseException:
            launcher.stop()
            LOG.exception('Unhandled exception')
            status = 2

        return status, signo

    def _child_process(self, service):
        # 子监听任务
        self._child_process_handle_signal()

        # Reopen the eventlet hub to make sure we don't share an epoll
        # fd with parent and/or siblings, which would be bad
        eventlet.hubs.use_hub()

        # Close write to ensure only parent has it open
        os.close(self.writepipe)
        # Create greenthread to watch for parent to close pipe
        eventlet.spawn_n(self._pipe_watcher)

        # Reseed random number generator
        random.seed()
		# 创建一个Launcher将Service注册进去，自动执行start方法
        launcher = Launcher(self.conf, restart_method=self.restart_method)
        launcher.launch_service(service)
        return launcher

    def _start_child(self, wrap):
        if len(wrap.forktimes) > wrap.workers:
            # Limit ourselves to one process a second (over the period of
            # number of workers * 1 second). This will allow workers to
            # start up quickly but ensure we don't fork off children that
            # die instantly too quickly.
            if time.time() - wrap.forktimes[0] < wrap.workers:
                LOG.info('Forking too fast, sleeping')
                time.sleep(1)

            wrap.forktimes.pop(0)

        wrap.forktimes.append(time.time())

        pid = os.fork()
        if pid == 0:
           	# fork失败了，则杀死之前fork的进程
            tpool.killall()
            self.launcher = self._child_process(wrap.service)
            while True:
                # 等待子进程接受信号，并做wait关闭
                self._child_process_handle_signal()
                status, signo = self._child_wait_for_exit_or_signal(
                    self.launcher)
                # 不是SIGHUP和守护进程，则不需要重启启动器，执行os._exit(status)
                if not _is_sighup_and_daemon(signo):
                    self.launcher.wait()
                    break
                # 重启启动器
                self.launcher.restart()
			# 强制退出
            os._exit(status)

        LOG.debug('Started child %d', pid)
		
        wrap.children.add(pid)
        self.children[pid] = wrap
		
        return pid

    def launch_service(self, service, workers=1):
        # 检查是否属于oslo_service.Service
        _check_service_base(service)
        wrap = ServiceWrapper(service, workers)

        if hasattr(gc, 'freeze'):
            gc.freeze()

        LOG.info('Starting %d workers', wrap.workers)
        # 如果发现workers大于service任务数，则再启动子进程，直到有workers个service任务执行
        while self.running and len(wrap.children) < wrap.workers:
            self._start_child(wrap)

    def _wait_child(self):
        try:
            # 查看pid，status
            pid, status = os.waitpid(0, os.WNOHANG)
            if not pid:
                return None
        except OSError as exc:
            if exc.errno not in (errno.EINTR, errno.ECHILD):
                raise
            return None

        if os.WIFSIGNALED(status):
            # 因为信号退出
            sig = os.WTERMSIG(status)
            LOG.info('Child %(pid)d killed by signal %(sig)d',
                     dict(pid=pid, sig=sig))
        else:
            # 使用stop方法正常退出
            code = os.WEXITSTATUS(status)
            LOG.info('Child %(pid)s exited with status %(code)d',
                     dict(pid=pid, code=code))

        if pid not in self.children:
            LOG.warning('pid %d not in child list', pid)
            return None

        wrap = self.children.pop(pid)
        wrap.children.remove(pid)
        # wrap==None则表示没有子进程退出
        return wrap

    # 重启service和_start_children相似，当running=True会一直循环
    def _respawn_children(self):
        while self.running:
            wrap = self._wait_child()
            if not wrap:
                # 为wrap空则表示没有进程退出，等待时间后进行下一次循环
                eventlet.greenthread.sleep(self.wait_interval)
                continue
            while self.running and len(wrap.children) < wrap.workers:
                self._start_child(wrap)

    def wait(self):
		# 通知守护线程，当前进程已经开始启动
        systemd.notify_once()
        if self.conf.log_options:
            LOG.debug('Full set of CONF:')
            self.conf.log_opt_values(LOG, logging.DEBUG)

        try:
            while True:
                # 信号处理注册
                self.handle_signal()
                # 重启，但是子进程如果是存活的，此方法不会做什么操作，进程会卡在这个方法的循环内
                self._respawn_children()
                # 收到非SIGTERM，SIGHUP信号，则直接退出不作任何处理
                if not self.sigcaught:
                    return
				# SIGTERM和SIGHUP需要停止子进程
                signame = self.signal_handler.signals_to_name[self.sigcaught]
                LOG.info('Caught %s, stopping children', signame)
                # 如果不是SIGHUP或daemon，则break
                if not _is_sighup_and_daemon(self.sigcaught):
                    break
                    
                child_signal = signal.SIGTERM
                if self.restart_method == 'reload':
                    # 重新加载配置项
                    self.conf.reload_config_files()
                elif self.restart_method == 'mutate':
                    # 在原有配置上进行修改，并调用回调
                    self.conf.mutate_config_files()
                    # 设置关闭信号为SIGHUP，常用于重新加载配置
                    child_signal = signal.SIGHUP
                for service in set([wrap.service for wrap in self.children.values()]):
                    # 修改配置后需要执行的操作
                    """
                    def reset(self):
                        self.manager.reset()
                        context.CELL_CACHE = {}
                    """
                    service.reset()
				# 停止children
                for pid in self.children:
                    os.kill(pid, child_signal)
				# 重启
                self.running = True
                # 清空信号
                self.sigcaught = None
        except eventlet.greenlet.GreenletExit:
            LOG.info("Wait called after thread killed. Cleaning up.")
        # 能走到这里说明有GreenletExit或者收到了非SIGHUP信号或者当前进程为守护进程，
        # 设置优雅关闭的超时时间
        if (self.conf.graceful_shutdown_timeout and
                self.signal_handler.is_signal_supported('SIGALRM')):
            signal.alarm(self.conf.graceful_shutdown_timeout)
		
        self.stop()

    def stop(self):
        # 启动器不再执行的标记，则wait()方法中的self._respawn_children()会跳出
        self.running = False

        LOG.debug("Stop services.")
        for service in set(
                [wrap.service for wrap in self.children.values()]):
            # 调用每个service的stop()
            service.stop()
            
		# 使用os.kill杀死子进程，在逻辑中应该删除这部分代码
        LOG.debug("Killing children.")
        for pid in self.children:
            try:
                os.kill(pid, signal.SIGTERM)
            except OSError as exc:
                if exc.errno != errno.ESRCH:
                    raise

        #  等待子进程的pid为0
        if self.children:
            LOG.info('Waiting on %d children to exit', len(self.children))
            while self.children:
                self._wait_child()
        # 主进程结束的日志
        LOG.info("Process launcher has stop.")
```

在主进程启动的时候，会为每一个`Service`创建一个子进程执行，如果所有进程都正常启动并`wait`住，则主进程会在`self._respawn_children()`方法里循环，当执行`systemctl stop`停止启动器时，发送`SIGTERM`给主进程，主进程接受到之后，会在`if not _is_sighup_and_daemon(self.sigcaught)`判断内`break`，之后设置优雅关闭的超时时间，执行`self.stop()`

`self.stop()`执行`services`里每个`service`的`stop`方法，并检查子进程是否结束，等到所有子进程退出后，打印日志
