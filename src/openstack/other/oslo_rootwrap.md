---
title: oslo_rootwrap组件
star: true
icon: page
category:
  - openstack
  - 随记
  - oslo_rootwrap
  - oslo
tag:
  - oslo组件
  - root
  - 提权操作
  - oslo_rootwrap
---



## nova-rootwrap

### 安装

为了使用`root_wrap`以将普通用户的指令修改为`sudo`运行的指令，且不需要输入密码，则首先需要在`/etc/sudoers`中配置对应的配置项，例如允许`ms`用户运行`nova-rootwrap`

```ini
nova ALL = (root) NOPASSWD: /usr/bin/nova-rootwarp /etc/nova/rootwarp.conf*
```

### Rootwrap配置

`nova-rootwrap`的运行依赖于配置文件`rootwrap.conf`，文件需要具有`root`用户的写入和拥有权限，其参数包含以下：

#### [DEAFAULT]配置

**filters_path**

包含所有定义的过滤器，使用逗号分隔

```ini
filters_path=/etc/nova/rootwrap.d,/usr/share/nova/rootwrap
```

**exec_dirs**

以逗号分隔的目录列表，表示可以被匹配的执行文件，以防过滤器中没有明确指定完整路径；如果没有指定，则默认是系统的环境变量；同样需要`root`拥有

```ini
exec_dirs=/sbin,/usr/sbin,/bin,/usr/bin
```

**use_syslog**

启用记录到 syslog

```ini
use_syslog=True
```

**syslog_log_facility**

使用哪个 syslog 工具进行 syslog 日志记录

```ini
syslog_log_facility=syslog
```

**syslog_log_level**

日志级别

```
syslog_log_level=ERROR
```

#### [Filters] 部分

**filter_name（每个过滤器不同名称）**

每行过滤器配置中需要指定使用的`Filter`类，还有其他参数，根据不同类的过滤器，所指定的参数有所不同

### 可用的过滤器类

### CommandFilter

仅检查调用的可执行文件的基本过滤器。参数包括：

1. 允许执行的命令
2. 以什么用户执行

示例：允许以`root`用户身份运行`kpartx`，并使用任意参数：

```ini
kpartx: CommandFilter, kpartx, root
```

### RegExpFilter

通用过滤器，检查调用的可执行文件，然后使用正则表达式列表检查所有后续参数。参数包括：

1. 允许执行的命令
2. 以什么用户执行
3. 用于匹配第一个（及后续）命令参数的正则表达式

示例：允许运行`/usr/sbin/tunctl`，但只能使用三个参数，其中前两个参数为`-b`和`-t`：

```ini
tunctl: RegExpFilter, /usr/sbin/tunctl, root, tunctl, -b, -t, .*
```

### PathFilter

通用过滤器，可让您检查作为参数提供的路径是否属于给定目录。参数包括：

1. 允许执行的命令
2. 以什么用户执行
3. 命令参数（及后续）

命令参数有三种类型：`pass`将接受任何参数值，字符串将只接受相应的字符串作为参数，除非字符串以`/`开头，在这种情况下它将接受在相应目录下解析的任何路径。

示例：允许将`/var/lib/images`下的任何文件的所有权转让给`nova`用户

```ini
chown: PathFilter, /bin/chown, root, nova, /var/lib/images
```

### 从Openstack视角调用rootwrap

#### 独立模式（sudo方式）

`oslo.processutils`库附带一个便捷`execute()`函数，可用于调用`shell`命令(`root`用户执行)

```python
from oslo_concurrency.processutils import execute

def changeHugePage(num:int):
    filename = "node{}".format(num)
    cmd = ["echo a > {}".format(filename)]
    execute1 = execute(cmd=cmd,shell=True,run_as_root=True, root_helper='sudo nova-rootwrap /etc/nova/rootwrap.conf')

```

#### 守护进程模式

`oslo.rootwrap`支持“守护进程模式”。在此模式下，`rootwrap`启动并读取配置文件并等待命令以`root`权限运行

与守护进程的所有通信都应该通过位于`oslo_rootwrap.client`模块中的`Client`类进行

构造函数包含一个可以传递给`Popen`以创建`rootwrap`守护进程的列表

例如，对于上面的`root_helper`参数，这个参数是`["sudo", "nova-rootwrap-deamon", "/etc/neutron/rootwrap.conf"]`

**调用方法**

```python
from oslo_rootwrap.client import Client


def change_huge_page(huge_page_num:int,numa_id:int):

    # 定义启动守护进程的命令（需适配实际环境）
    root_helper_cmd = [
        "sudo", 
        "nova-rootwrap-daemon",  # 守护进程入口脚本
        "/etc/neutron/rootwrap.conf"  # 配置文件路径
    ]

    # 创建客户端实例
    client = Client(root_helper_cmd)

    filename = "node{}".format(numa_id)
    cmd = ["echo {} > {}".format(huge_page_num,filename)]

    client.execute(cmd=cmd)
```

#### **守护进程入口脚本**

通常为`nova-rootwrap-daemon`，指向`oslo_rootwrap.cmd:daemon` 入口点：

```
# 示例脚本内容（/usr/bin/nova-rootwrap-daemon）
#!/usr/bin/env python
from oslo_rootwrap.cmd import daemon
if __name__ == "__main__":
    daemon.main()
```