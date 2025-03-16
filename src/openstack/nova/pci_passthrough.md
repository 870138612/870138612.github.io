```
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

```

## PCI直通
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
  openstack flavor set $FLAVOR --property "pci_passthrough:alias"="a1:2"
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

使用对应的`$FLAVOR`创建实例后，通过SSH或控制台登录实例

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
