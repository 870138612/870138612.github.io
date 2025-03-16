---
title: PCI直通
star: true
icon: page
category:
  - 设备PCI直通
  - 随记

tag: 
  - PCI passthrough
---



## PCI直通示例
一些PCI设备提供独占设备能力和共享能力，在使用SR-IOV时，物理设备会被虚拟化为多个PCI设备，虚拟化设备可以分配给不同的主机，在PCI直通的情况下，完整的物理设备只会分配给一个主机。

### 计算节点准备

- **硬件要求**：
  - BIOS 启用 VT-d（Intel）或 AMD-Vi（AMD）。
  - Linux 内核启用 IOMMU：添加`intel_iommu=on`或`amd_iommu=on`到内核参数。

- **验证命令**：

  ```bash
  dmesg | grep -i iommu  # 检查 IOMMU 是否启用
  lspci -v               # 查看 PCI 设备信息及地址（如 0000:41:00.0）
  ```

### 配置 nova-compute

- **指定 PCI 设备**：

  - 按设备地址配置（示例）：

    ```ini
    [pci]
    device_spec = { "address": "0000:41:00.0" }
    ```

  - 按厂商/产品 ID 配置（示例为 Intel X520 网卡）：

    ```ini
    [pci]
    device_spec = { "vendor_id": "8086", "product_id": "154d" }
    ```

- **定义设备别名**：

  ```ini
  [pci]
  alias = { "vendor_id":"8086", "product_id":"154d", "device_type":"type-PF", "name":"a1" }
  ```

  - `device_type`必须指定为`type-PF`（SR-IOV 父设备）、`type-VF`（子设备）或`type-PCI`（非 SR-IOV 设备）。

### 配置 nova-scheduler

- 启用 `PciPassthroughFilter` 过滤器：

  ```ini
  [filter_scheduler]
  enabled_filters = ...,PciPassthroughFilter
  ```

### 配置nova-api

- 控制器节点需同步 `pci.alias` 配置，与计算节点一致：

  ```ini
  [pci]
  alias = { "vendor_id":"8086", "product_id":"154d", "device_type":"type-PF", "name":"a1" }
  ```

### **配置 Flavor**

- 通过 Flavor 请求 PCI 设备（示例请求 2 个 `a1` 设备）：

  ```ini
  openstack flavor set m1.large --property "pci_passthrough:alias"="a1:2"
  ```


### 高级配置

##### **PCI-NUMA 亲和策略**

- **策略选项**：
  - `required`：设备必须与实例的 NUMA 节点严格绑定
  - `socket`：设备与实例在同一CPU插槽即可
  - `preferred`：尽量亲和，但不强制
  - `legacy`：默认策略，兼容旧版本行为

- **配置示例**：

  ```ini
  openstack flavor set $FLAVOR --property hw:pci_numa_affinity_policy=preferred
  ```

### 验证PCI直通

**登录实例**

通过SSH或控制台登录实例

```bash
openstack console url show VM-with-PCI  # 获取控制台 URL
```

**检查PCI设备**

```bash
lspci  # 列出所有 PCI 设备
```

**预期输出**

```bash
00:04.0 Ethernet controller: Intel Corporation 82599ES 10-Gigabit SFI/SFP+ Network Connection (rev 01)
```

### **常见问题解决**

#### **问题 1：实例启动失败**

- **原因**：PCI 设备未正确配置或资源不足。

- **解决**：

  ```bash
  nova-status upgrade check  # 检查 Nova 服务状态
  openstack hypervisor stats show  # 查看计算节点 PCI 资源池
  ```

#### **问题 2：设备未出现在实例中**

- **原因**：驱动未正确绑定或 IOMMU 未启用。

- **解决**：

  ```bash
  dmesg | grep -i vfio  # 检查 VFIO 驱动绑定状态
  cat /proc/cmdline     # 确认内核参数包含 `intel_iommu=on`
  ```

## PciPassthroughFilter

在`nova.conf`配置的过滤器的作用：在创建虚拟机时，通过scheduler顺序执行配置的`filter`中的`host_passes`过滤符合条件的host并返回

```python
class PciPassthroughFilter(filters.BaseHostFilter, filters.CandidateFilterMixin):
    # 过滤器检查主机是否有足够的PCI设备满足虚拟机的创建请求
	# BaseHostFilter基础过滤器，用于调度时执行内部的host_passes方法
    # CandidateFilterMixin提供候选资源过滤的功能，支持复杂的资源需求匹配
  	# 只会在创建的时候执行，重构时不执行
    RUN_ON_REBUILD = False
	# host_state：主机的当前状态（如资源使用情况、PCI设备信息）
    # spec_obj：虚拟机的规格请求（如PCI设备需求）
    def host_passes(self, host_state, spec_obj):
        pci_requests = spec_obj.pci_requests
        # 如果没有PCI请求，直接放行
        if not pci_requests or not pci_requests.requests:
            return True
		# 如果主机没有PCI设备信息，则无法满足任何的PCI请求，不符合要求，返回False
        if not host_state.pci_stats:
            LOG.debug("%(host_state)s doesn't have the required PCI devices"
                      " (%(requests)s)",
                      {'host_state': host_state, 'requests': pci_requests})
            return False
		# 检查每个候选是否满足PCI请求
        good_candidates = self.filter_candidates(
            host_state,
           
            """
            support_requests比对主机的PCI设备与虚拟机请求（例如数量、vendor_id、product_id）
            provider_mapping时一个字典，用来记录资源提供者之间的映射关系,例如
            {
                # 虚拟功能（VF）的 UUID -> 对应的物理功能（PF）的 UUID
                "vf_uuid_1": "pf_uuid_123",
                "vf_uuid_2": "pf_uuid_123",
                ...
            }
            """ 
            lambda candidate: host_state.pci_stats.support_requests(
                pci_requests.requests, provider_mapping=candidate["mappings"]
            ),
        )
		# 没有符合要求的PCI设备
        if not good_candidates:
            LOG.debug("%(host_state)s doesn't have the required PCI devices"
                      " (%(requests)s)",
                      {'host_state': host_state, 'requests': pci_requests})
            return False

        return True
```