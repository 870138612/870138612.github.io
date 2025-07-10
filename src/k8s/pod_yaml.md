---
title: pod配置详解
star: true
icon: page
category:
  - 随记
---

## 编写一个pod配置文件

```yaml
apiVersion: v1 #api版本文档
kind: Pod #资源对象的类型，例如Deployment、StatefulSet
metadata:
	name: nginx-demo
	labels: #标签，当然可以随便写
		type: app
		version: 1.0.0
    namespace: "default"
spec: #创建Pod的配置文件




```





