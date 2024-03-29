---
title: 并发编程二
icon: page
category:
  - Java
tag:
  - 并发编程
  
---

## Java 内存模型

### 指令重排序

- 编译器优化重排：编译器在不改变单线程程序语义的前提下，重新安排语句执行顺序。
- 指令并行重排：如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。

指令重排序可以保证串行语义的一致，但是没义务保证多线程之间语义的一致，在多线程下，指令重排可能会导致问题。
<!-- more -->
### 什么是 Java 内存模型？为什么需要 Java 内存模型？

JMM 是 Java 定义的并发编程相关的一组规范，除了抽象了线程和内存之间的关系之外，还规定了 Java 源代码到 CPU 可执行指令这个转化过程要遵循哪些和并发相关的原则和规范，主要目的是为了简化编程，增强代码的可移植性。

### 什么是主内存？什么是本地内存？

- 主内存：所有线程创建的对象实例都放在主内存中；
- 本地内存：每个线程都有私有的本地内存来存储共享变量的副本，并且每一个线程只能访问自己的本地内存，无法访问其他线程的本地内存。本地内存是 JMM 抽象出的概念，存储了主内存中的变量副本。

![jmm](/markdown/jmm.jpg)

### Java 内存结构和 Java 内存模型的区别

- Java 内存结构和运行时区域有关，定义了 JVM 在运行时如何分区存储数据，例如堆主要用来存放对象实例。
- JMM 和 Java 的并发编程有关，抽象了线程和内存之间的关系，规定了 Java 源代码到 CPU 可执行指令这个转化过程要遵循哪些并发相关的原则和规范，目的主要是简化多线程编程，增强程序的可移植性。

### happens-before

前一个操作的结果应该对后一个操作是可见的，无论这两个操作是不是在同一个线程里。

```java
int userNum = getUserNum(); 	// 1
int teacherNum = getTeacherNum();	 // 2
int totalNum = userNum + teacherNum;	// 3
```

在线程并发执行的时候，可能 1 2 操作的结果还没有存入变量中，3 操作已经开始执行，这时得到的结果就不是正确结果。（指令流水线数据相关）

### happens-before 常见规则

1. 程序顺序规则：一个线程内，书写在前的操作 happens-before 于书写在后面的操作；
2. 解锁规则：解锁 happens-before 加锁；
3. volatile 变量规则：对于一个 `volatile` 变量的写操作 happens-before 后面对这个变量的读操作，也就是对这个变量的修改对其后的所有操作都可见；
4. 传递规则：如果 A happens-before B，B happens-before C，则 A happens-before C；
5. 线程启动规则：Thread 对象的 `start()` 方法 happens-before 这个线程的每一个操作。

如果两个操作不满足上述条件的任意一个，则这两个操作就没有顺序保障，JVM 可以对这两个操作进行重排序。

### fail-safe 和 fail-fast
fail-safe 和 fail-fast 是多线程并发操作集合时的一种失败处理机制。

**fail-fast**：表示快速失败，在集合遍历过程中，一旦发现容器中的数据被修改了，会立刻抛出 `ConcurrentModificationException` 异常，从而导致遍历失败，例如 `HashMap`。

**fail-safe**：表示失败安全，也就是在这种机制下，出现集合元素的修改，不会抛出 `ConcurrentModificationException`。原因是采用安全失败机制的集合容器，在遍历时不是直接在集合内容上访问的，而是先复制原有集合内容，在拷贝的集合上进行遍历。由于迭代时是对原集合的拷贝进行遍历，所以在遍历过程中对原集合所作的修改并不能被迭代器检测到。常见的 
fail-safe 方式遍历的容器有 `ConcurrentHashMap`，`CopyOnWriteArrayList`。

## 并发编程的三个特性

**原子性：**

一次操作或者多次操作，要么所有的操作都能全部执行不会收到任何外界因素干扰而中断，要么都不执行。

`synchronized` 和各种 `Lock` 来实现原子性。

**可见性：**

当一个线程对共享变量进行修改，那么另外的线程都是能立即看到的。

`synchronized`、`volatile`、各种 `Lock` 实现可见性。

**有序性：**

由于指令重排序问题，代码的执行顺序未必就是编写代码的顺序。

使用 `volatile` 关键字可以禁止指令进行重排序优化。

## volatile 关键字

在 Java 中，`volatile` 关键字可以保证变量的可见性，如果将变量声明为 `volatile` ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。

**`volatile` 关键字能保证数据的可见性，但不能保证数据的原子性。`synchronized` 关键字两者都能保证。**

### volatile 如何禁止指令重排序？

如果将变量通过 `volatile` 修饰，则对这个变量读写的时候会添加上特定的读写屏障保证可见性。

在 CPU 的物理世界里，内存屏障通常有三种：

lfence: 读屏障（load fence)，即立刻让 CPU Cache 失效，从内存中读取数据，并装载入 Cache 中。

sfence: 写屏障（write fence）, 即立刻进行 flush，把缓存中的数据刷入内存中。

mfence: 全屏障（memory fence），即读写屏障，保证读写都串行化，确保数据都写入内存并清除缓存。

双检查单例模式：

```java
public class Singleton{
    private Singleton(){}//构造方法私有
    
    private static volatile Singleton SINGLETON;//volatile修饰的singleton 保证可见性
    
    public static Singleton getInstance() {
        if(SINGLETON == null) {
            synchronized(Singleton.class) {//对类对象加锁
                if(SINGLETON == null) {
                    SINGLETON = new Singleton();
                }
            }
        }
        return singleton;
    }
}
```

`volatile` 是“轻量级” `synchronized`，保证了共享变量的“可见性”（JMM 确保所有线程看到这个变量的值是一致的），当 CPU 写数据时，如果发现操作的变量是共享变量，即在其他 CPU 中也存在该变量的副本，**会发出信号通知其他 CPU 将该变量的缓存行置为无效状态，并且锁住缓存行**，因此当其他 CPU 
需要读取这个变量时，要等锁释放，并发现自己缓存行是无效的，那么它就会从内存重新读取。

## 乐观锁和悲观锁

### 什么是乐观锁？

乐观锁总是假设最好的情况，即认为将要修改的数据并没有被其他线程修改，修改失败采用重复尝试的办法。

验证数据是否被其他线程修改可通过版本号机制或者 CAS 算法。

在 Java 中 `java.util.concurrent.atomic` 包下面的原子变量类（比如 `AtomicInteger`、`LongAdder`）就是使用了乐观锁的一种实现方式 **CAS** 实现的。

`AtomicInteger` 类主要利用 CAS(compare and swap) + `volatile` 和 `native` 方法来保证原子操作，从而避免 `synchronized` 的高开销，执行效率大为提升。

### 什么是悲观锁？

悲观锁总是假设最坏的情况，认为共享资源总是会被其他线程修改了，所以在访问资源的时候采取加锁的方案，防止其他线程修改，像 Java 中 `synchronized` 和 `ReentrantLock` 等独占锁就是悲观锁思想的实现。

高并发的场景下，激烈的锁竞争会造成线程阻塞，大量阻塞线程会导致系统的上下文切换，增加系统的性能开销。并且悲观锁还可能会存在死锁问题，影响代码的正常运行。

### CAS

CAS 的全称是 **Compare And Swap（比较与交换）**，用于实现乐观锁，被广泛应用于各大框架中。CAS 的思想很简单，就是用一个预期值和要更新的变量值进行比较，两值相等才会进行更新。

CAS 是一个原子操作，底层依赖于一条 CPU 的原子指令。

CAS 涉及到三个操作数：

- **V**：要更新的变量（Var）
- **E**：预期值（Expected）
- **N**：拟写入的新值（New）

### ABA 问题

如果有一个线程将变量值 A 改为 B，之后又有一个线程将 B 改为 A，则第三个线程采用 CAS 进行修改的时候发现预期值 A 正确，则认为变量没有被修改，其实已经修改了两次。

解决 ABA 问题就是添加版本号或者是时间戳。

### CAS 问题

CAS 经常会用到自旋操作来进行重试，也就是不成功就一直循环执行直到成功。如果长时间不成功，会给CPU带来非常大的执行开销。

CAS 只对单个共享变量有效，当操作涉及跨多个共享变量时 CAS 无效。但是从 JDK 1.5 开始，提供了 `AtomicReference` 类来保证引用对象之间的原子性，可以把多个变量放在一个对象里来进行 CAS 操作。

## synchronized

### synchronized 是什么？有什么用？

`synchronized` 是 Java 中的一个关键字，翻译成中文是同步的意思，主要解决的是多个线程之间访问资源的同步性，可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。

早期版本中 `synchronized` 属于重量级锁，Java 6 之后对 `synchronized` 做了优化。

☀️详见 [synchronized 锁优化](https://ylzhong.top/java/3juc/4synchronizedlock.html)

### sychronized 修饰方法

`synchronized` 关键字的使用方式主要有下面 3 种：

:::tabs

@tab:active 修饰实例方法

```java
synchronized void method() {
    //锁对象
}
```

@tab 修饰静态方法

```java
synchronized static void method() {
    //锁类
}
```

@tab 修饰代码块

```java
synchronized(this) {
    //锁对象
}
synchronized(类.class) {
    //锁类
}
```

:::

`synchronized` 关键字加到 `static` 静态方法和 `synchronized(class)` 代码块上都是是给 Class 类上锁；

`synchronized` 关键字加到实例方法上是给对象实例上锁。

### synchronized 底层原理

**修饰同步代码块**

`synchronized` 同步语句块的实现使用的是 `monitorenter` 和 `monitorexit` 指令，其中 `monitorenter` 指令指向同步代码块的开始位置，`monitorexit` 指令则指明同步代码块的结束位置。

在执行 `monitorenter` 时，会尝试获取对象的锁，如果锁的计数器为 0 则表示锁可以被获取，获取后将锁计数器设为 1。

对象锁的的拥有者线程才可以执行 `monitorexit` 指令来释放锁。在执行 `monitorexit` 指令后，将锁计数器设为 0，表明锁被释放，其他线程可以尝试获取锁。

**修饰方法**

`synchronized` 修饰的方法并没有 `monitorenter` 指令和 `monitorexit` 指令，取得代之的是 `ACC_SYNCHRONIZED` 标识，该标识指明了该方法是一个同步方法。JVM 通过该 `ACC_SYNCHRONIZED` 访问标志来辨别一个方法是否声明为同步方法，从而执行相应的同步调用。

两者本质都是对对象监视器 **monitor** 的获取。

### synchronized 和 volatile 有什么区别？

- `volatile` 关键字是线程同步的轻量级实现，所以 `volatile` 性能肯定比 `synchronized` 关键字要好 。但是 `volatile` 关键字只能用于变量而 `synchronized` 关键字可以修饰方法以及代码块 。
- `volatile` 关键字能保证数据的可见性，但不能保证数据的原子性。`synchronized` 关键字两者都能保证。
- `volatile` 关键字主要用于解决变量在多个线程之间的可见性，而 `synchronized` 关键字解决的是多个线程之间访问资源的同步性。

### Lock 和 synchronized 有什么区别？

- `synchronized` 是 Java 中的同步关键字，`Lock` 是 J.U.C 包中提供的接口，这个接口有很多实现类，其中就包括 `ReentrantLock` 重入锁。
- `synchronized` 可以通过修饰类、方法或者代码块来实现不同的粒度锁。`Lock` 则通过 `lock()` 和 `unlock()` 方法声明加锁和解锁的位置。
- `Lock` 比 `synchronized` 的灵活性更高，`Lock` 可以自主决定什么时候加锁，什么时候释放锁，只需要调用 `lock()` 和 `unlock()` 这两个方法就行，同时 `Lock` 还 提供了非阻塞的竞争锁方法 `tryLock()` 方法，这个方法通过返回 true/false 来告诉当前线程是否已经有其他线程正在使用锁。
- `synchronized` 引入了偏向锁、轻量级锁、重量级锁以及锁升级的方式来优化加锁的性能，而 `Lock` 中则用到了自旋锁的方式来实现性能优化。

### wait 和 notify 为什么要在 synchronized 代码块中？
1. `wait` 和 `notify` 用来实现多线程之间的协调，`wait` 表示让线程进入到阻塞状态，`notify` 表示让阻塞的线程唤醒。
2. `wait` 和 `notify` 必然是成对出现的，如果一个线程被 `wait()` 方法阻塞，那么必然需要另外一个线程通过 `notify()` 方法来唤醒这个被阻塞的线程，从而实现多线程之间的通信。
3. 在通过共享变量来实现多个线程通信的场景里面，参与通信的线程必须要竞争到这个共享变量的锁资源，才有资格对共享变量做修改，修改完成后就释放锁，那么其他的线程就可以再次来竞争同一个共享变量的锁来获取修改后的数据，从而完成线程之前的通信。
4. 为了避免 `wait/notify` 的错误使用，JDK 强制要求把 `wait/notify` 写在同步代码块里面，否则会抛出 `IllegalMonitorStateException`。

## ReentrantLock

### ReentrantLock 是什么？

`ReentrantLock` 实现了 `Lock` 接口，是一个可重入且独占式的锁，和 `synchronized` 关键字类似。不过 `ReentrantLock` 更灵活、更强大，增加了轮询、超时、中断、公平锁和非公平锁等高级功能。

`ReentrantLock` 里面有一个内部类 `Sync`，`Sync` 继承 AQS（`AbstractQueuedSynchronizer`），添加锁和释放锁的大部分操作实际上都是在 `Sync` 中实现的。`Sync` 有公平锁 `FairSync` 和非公平锁 `NoFairSync` 两个子类，默认是非公平实现。

☀️详见 [AQS 抽象队列同步器](https://ylzhong.top/java/3juc/5aqs.html)

### 公平锁和非公平锁有什么区别？

- **公平锁**：锁被释放之后，先申请的线程先得到锁。性能较差一些，因为公平锁为了保证时间上的绝对顺序，上下文切换更频繁。
- **非公平锁**：锁被释放之后，后申请的线程可能会先获取到锁，是随机或者按照其他优先级排序的。性能更好，但可能会导致某些线程永远无法获取到锁。


### ReentrantLock 加锁解锁原理

以非公平实现为例。

 `NonfairSync` 继承自 AQS。

#### 加锁没有竞争流程

通过 CAS 操作修改 state 值为 1 表示加锁，成功之后修改锁的 Owner 为线程自己。

```java
final void lock() {
    if (compareAndSetState(0, 1))
        setExclusiveOwnerThread(Thread.currentThread());
    else
        acquire(1);
}
```

#### 加锁有竞争流程

- 有竞争时，Thread-1 的 CAS 操作失败，则会进入 `acquire(1)` 方法，则会通过 `tryAcquire(arg)` 再次尝试加锁，如果还是失败则会创建 Node 节点对象放入到 CLH 等待队列中，队列中的第一个节点为哨兵节点，不存放信息。

```java
public final void acquire(int arg) {
    if (!tryAcquire(arg) &&
        acquireQueued(addWaiter(Node.EXCLUSIVE), arg))
    selfInterrupt();
}
```

![image-20230725154347412](/markdown/image-20230725154347412.png)

- `acquireQueued()` 方法检查自己是不是首节点的后一个节点，如果是还会再次进行尝试加锁，如果加锁失败，则会修改前驱节点的 `waitStatus` 为 -1，表示前驱节点有责任唤醒后继的节点。

```java
final boolean acquireQueued(final Node node, int arg) {
    boolean failed = true;
    try {
        boolean interrupted = false;
        for (;;) {
            final Node p = node.predecessor();
            if (p == head && tryAcquire(arg)) {
                setHead(node);
                p.next = null; // help GC
                failed = false;
                return interrupted;
            }
            if (shouldParkAfterFailedAcquire(p, node) &&
                parkAndCheckInterrupt())
                interrupted = true;
        }
    } finally {
        if (failed)
            cancelAcquire(node);
    }
}
```

- `shouldParkAfterFailedAcquire` 第一次执行的时候会修改前驱节点的 `waitSatus`，返回 false，当前线程会再次进行加锁尝试，如果还是失败，第二次则会返回 true 并执行 `parkAndCheckInterrupt()`。Thread-1 进入阻塞状态。

![image-20230725154314997](/markdown/image-20230725154314997.png)

#### 解锁竞争成功流程

- 有多个线程竞争资源最后都变成阻塞状态。

![image-20230725155528080](/markdown/image-20230725155528080.png)

- Thread-0 释放锁，进入 `tryRelease` 流程，Owner 线程改为 null，state 设置为 0。

![image-20230725155457446](/markdown/image-20230725155457446.png)

- 此时当前队列不为空，且哨兵节点的 `waitStatus` 为-1，则将后继的节点 `unpark` 恢复运行，哨兵节点变成下一个节点，并设置工作线程为 null，原来的哨兵节点丢弃，后续线程竞争加锁流程同上。

![image-20230725160038069](/markdown/image-20230725160038069.png)

#### 解锁竞争失败流程

- 如果在将第一个阻塞队列节点中对应的线程 `unpark`，并且外部又来了一个竞争线程 Thread-4。
- 则两者会竞争，竞争失败的会再次进入队列中等待。

#### 可重入原理

- 加锁时如果发现 `exclusiveOwnerThread` 线程是自己则表示重入，将 `state++`。解锁时如果 `state` 不是 1 则不会解锁，而是将 `state--`，当 `state` 为 0 时才会真正解开。

#### 可打断原理

```java
if (shouldParkAfterFailedAcquire(p, node) &&
                    parkAndCheckInterrupt())
    throw new InterruptedException();
```

在 `park` 过程中如果被 `interrupt` 会进入上述语句，最后抛出异常，不会再进入循环中竞争锁。

#### 公平锁原理

- 非公平锁中，外部的竞争线程不会检查 AQS 队列，直接进行抢占锁。
- 公平锁中，外部的竞争线程会先检查 AQS 队列中是否有线程 Node，没有才去竞争，有线程 Node 则表示已经有先来的线程排队等待。

### synchronized 和 ReentrantLock 有什么区别？

- 两者都是可重入锁，也就是线程可以再次获取自己的内部锁。
- `synchronized` 依赖于 JVM 而 `ReentrantLock` 依赖于 API。
- `ReentrantLock` 比 `synchronized` 增加了一些高级功能：
  - 等待可中断：`ReentrantLock` 提供了一种能够中断等待锁的线程的机制，通过 `lock.lockInterruptibly()` 来实现这个机制。也就是说正在等待的线程可以选择放弃等待，改为处理其他事情。
  - 可实现公平锁：`ReentrantLock` 可以指定是公平锁还是非公平锁，而 `synchronized` 只能是非公平锁。
  - 可实现选择性通知（锁可以绑定多个条件）：`synchronized` 关键字与 `wait()` 和 `notify()` / `notifyAll()` 方法相结合可以实现等待/通知机制。`ReentrantLock` 也可以实现，但是需要借助于 `Condition` 接口与 `newCondition()` 方法。

### 可中断锁和不可中断锁有什么区别？

- **可中断锁**：获取锁的过程中可以被中断，不需要一直等到获取锁之后 才能进行其他逻辑处理。`ReentrantLock` 就属于是可中断锁。
- **不可中断锁**：一旦线程申请了锁，就只能等到拿到锁以后才能进行其他的逻辑处理。`synchronized` 就属于是不可中断锁。











