---
title: 内存操作请求
star: true
icon: page
category:
    - 内存操作请求
tag: 
    - 内存操作请求
---

### 同步反亲和性
* 输入
当前决策numa节点所在rack内的反亲和性信息
结构：map<string, vector<string>> nodeids，表示某节点的反亲和节点列表
示例
```json
{
  "node1": ["node2","node3"]
}

```
* 输出示例
{
    "result" : 0
}

### 内存借用策略
METHOD: POST 
URL: /rest/rackmanager/v1/memorypooling/memborrow_strategy
* 输入
借入的numa节点信息和借用大小
示例
```json
{
    "srcParam": {
        "srcNid": "Node1", # node_id
        "srcSocketId": 0, # socket_id
        "srcNumaId": 0  # numa_id
    },
    "borrowSize": 1048576 # 借用大小，单位kb,要求128M的整数倍
}
```
* 输出示例
```json
{
    "srcParam": {
        "srcNid": "Node1",
        "srcSocketId": 0,
        "srcNumaId": 3
    },
    "borrowSize": 1048576,
    "destParam": [
        {
            "destNid": "Node0",
            "destSocketId": 0, 
            "destNumaNum": 1,
            "destNumaId": [1],
            "memSize": [1048576]
        }
    ]
}
```

### 内存迁移策略
METHOD: POST 
URL: /rest/rackmanager/v1/memorypooling/migrate_strategy

* 输入示例
```json
{
  "borrowInNode": "Node1",
  "borrowSize": 1048576,
  "vmInfoList": [
    {
      "pid": 1569351,
      "ratio": 25
    }
  ]
}
```
* 输出
迁移结果：迁移执行的时长和确定的虚机迁出比例
```json
{ 
    "result": 0, 
    "vmInfoList": [ 
        { 
            "pid": 1181526, 
            "ratio": 7, 
            "destNumaId": 1 
        } 
	],
	"waitingTime": 5000 
}
```

### 内存借用执行
* 输入示例
```json
{
	"srcParam": {
		"srcNid": "Node1",
		"srcSocketId": 0,
		"srcNumaId": 0
	},
	"destParams": [
		{
			"destNid": "Node2",
			"destSocketId": 0,
			"destNumaNum": 1,
			"destNumaId": [2],
			"memSize": [
				1048576
			]
		}
	]
}
```
* 输出示例
```json
{ 
        "borrowIds" : [“q4554t176afdg34d6fs”] , 
        "presentNumaId" : [5] 
}
```

### 内存迁移执行
METHOD: POST 
URL: /rest/rackmanager/v1/memorypooling/migrate_execute

* 输入
* 示例
```json
{
	"borrowInNode": "Node1",
	"memMigrateTotalSize": 1048576,
	"waitingTime": 5000,
	"vmInfoList": [
		{
            "pid" : 1181526,
            "ratio" : 25,
            "destNumaId" : [1]
        }，
        {
            "pid" : 1181740,
            "ratio" : 25,
            "destNumaId" : [1]
        }
	]
}
```
* 输出
根据状态码判断成功或失败


### 内存归还决策
METHOD: POST 
URL: /rest/rackmanager/v1/memorypooling/memfree_execute
* 输入
输入指定Node节点
* 示例
Node节点
* 输出
根据状态码判断成功或失败
