---
title: 类加载过程
icon: page
category:
  - Java
tag:
  - 类加载过程
  
---

## 类的生命周期

类从被加载到虚拟机内存中开始到卸载出内存为止，它的整个生命周期可以简单概括为 7 个阶段：：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）、初始化（Initialization）、使用（Using）和卸载（Unloading）。其中，前三个阶段可以统称为连接（Linking）。

类加载过程：**加载 -> 连接 -> 初始化**。

其中连接过程分为：**验证 -> 准备 -> 解析**。

整体流程为：**加载 -> 验证 -> 准备 -> 解析 -> 初始化**。

<!-- more -->

## 类加载过程

### 加载

类加载过程的第一步，完成以下三件事情：

1. 通过全类名获取定义此类的二进制字节流。
2. 将字节流所代表的**静态存储结构**转化为方法区的**运行时数据结构**。
3. 在内存中生成一个类的 `.class` 文件，作为方法区这些数据的入口。

加载这一步通过类加载器完成的。

### 验证

验证是连接中的第一步。这一步的作用是确保 Class 文件的字节流中包含的信息符合《Java 虚拟机规范》的全部要求，保证这些信息被当做代码运行后不会危害虚拟机自身的安全。

验证阶段这一步在整个类加载过程中耗费的资源还是相对较多的，但很有必要，可以有效防止恶意代码的执行。任何时候，程序安全都是第一位。

验证阶段主要由四个检验阶段组成：

- **文件格式验证**（Class 文件格式检查）

  > **验证字节流是否符合 Class 文件格式的规范**。例如是否以魔数开头，主版本号是否在当前虚拟机的处理范围内。主要目的是保证输入的字节流能正确的解析并存储于方法区内，其余的三个验证阶段都是**基于方法区**的存储结构上进行，不会再直接读取、操作字节流了。

- **元数据验证**（字节码语义检查）

  > **对字节码描述的信息进行语义分析，以保证其描述的信息符合《Java 语言规范》要求**。例如这个类是否有父类，这个类是否继承了不允许继承的类。

- **字节码验证**（程序语义检查）

  > **通过数据流分析和控制流分析，确定程序语义是合法的，符合逻辑的**。例如函数的参数类型是否正确，对象的类型转换是否合理。

- **符号引用验证**（类的正确性检查）

  > **验证类的正确性**。例如该类要使用的其他类、方法、字段是否存在，是否有正确的访问权限。发生在类加载阶段的解析阶段，具体来说就是 JVM 将符号引用转化为直接引用的时候。

### 准备

**准备阶段是正式为类变量分配内存并设置类变量初始值的阶段**，这些内存都在方法区内分配。

1. 这时候进行内存分配的仅包括类变量（即是静态变量，被 `static` 修饰的变量，只与类有关，因此称为类变量），不包括实例变量。实例变量会在对象实例化的时候随着对象一块分配在 Java 堆中。
2. 类变量所使用的内存都应该在方法区中分配，但是在 JDK 7 及之后，HotSpot 已经把原本放在永久代的**字符串常量池、静态变量**等移动到堆中，这个时候类变量则会随着 Class 对象一起存放在 Java 堆中。
3. 这是设置的初始值“通常情况”下是数据类型的默认值，例如 `public static int value = 111`，那么 `value` 变量在准备阶段的的初始值是 0 而不是 111（初始化阶段才会赋值）。特殊情况，变量添加 `final` 修饰，则可以看成常量，直接就会在准备阶段赋值。

### 解析

**解析阶段就是虚拟机将常量池内的符号引用替换为直接引用的过程**。解析动作主要针对类或接口、字段、类方法、接口方法、方法类型、方法句柄和调用限定符进行引用。

> 符号引用以一组符号来描述所引用的对象，符号可以使任何字面量，只要能无歧义的定位到目标即可。符号引用与虚拟机实现的内存布局无关，引用的目标并不一定是已经加载到虚拟机内存中的内容。
>
> 直接引用是可以直接指向目标的指针、相对偏移量或者是一个能定位到目标的句柄。如果使用了直接引用，则引用目标必定在虚拟机的内存中。

当程序执行方法的时候，系统需要明确知道这个方法所处的位置。Java 为每一个类都准备了一张方法表来存放类中所有的方法。当需要调用一个类的方法的时候，只要知道这个方法在方法表中的偏移量就能调用这个方法了。通过解析操作符号引用就能直接变成为目标方法在类中方法表的位置，从而方法才能被调用。

综上，解析阶段是虚拟机将常量池内的符号引用替换为直接引用的过程，也就是得到类或者字段、方法在内存中的指针或者偏移量。

### 初始化

初始化阶段是执行初始化方法 `<clinit>()` 方法的过程，是类加载的最后一步，这一步 JVM 才开始真正执行类中定义的 Java 程序代码（字节码）。`clinit` 是 `class` 类构造器对静态变量，静态代码块进行初始化。`init` 是 `instance` 实例构造器，对非静态变量解析初始化。

对于初始化，以下几种情况必须对类进行初始化：

1. 当遇到 `new`、`getstatic`、`putstatic`、`invokestatic` 这 4 条字节码指令。
2. 使用 `java.lang.reflect` 包的方法对类进行反射调用时如果类没有初始化，则需要先进行初始化。
3. 初始化一个类，父类还没有初始化，则需要先初始化父类。
4. 虚拟机启动时，用户需要定义一个需要执行的主类，虚拟机会先初始化这个类。
5. `MethodHandle` 和 `VarHandle` 可以看做轻量级的反射调用机制，使用这两个调用就要先使用 `findStaticVarHandle` 来初始化要调用的类。
6.  当一个接口中定义了 JDK 8 新加入的默认方法（被 `default` 关键字修饰的接口方法）时，如果有这个接口的实现类发生了初始化，那该接口要在其之前被初始化。

## 类卸载

卸载类，即该类的 Class 对象被 GC。

需要满足三个条件才能卸载 / 认为该类是废弃的类：

1. 该类的所有实例对象都被 GC，也就是说堆中不存在该类的实例对象。
2. 该类没有在其他任何地方被引用。
3. 该类的类加载器的实例已经被 GC。

所以在 JVM 生命周期内，由 JVM 自带的类加载器（JDK 自带的 `BootstrapClassLoader`，`ExtClassLoader`，`AppClassLoader`）加载的类是不会被卸载的，但是自定义的类加载器加载的类是可能被卸载的。
