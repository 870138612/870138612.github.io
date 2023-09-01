import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c as u,e as d,a as o,w as s,b as n,f as r,d as a}from"./app-95c5722f.js";const k="/markdown/image-20230514210704461.png",v={},m=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"一切就从这里开始吧"),n("p",null,"笔记来源网络，仅做个人学习，非商业用途。")],-1),h=r('<h2 id="jvm-jre-jdk" tabindex="-1"><a class="header-anchor" href="#jvm-jre-jdk" aria-hidden="true">#</a> JVM JRE JDK</h2><p>JVM 是 java 虚拟机，针对不同系统有不同的实现，常用的为 HotSpot VM。</p><p>JDK 是功能齐全的 SDK，包含 JRE 和一些其他的工具，例如 javac，java等。</p><p>JRE 是 Java 运行时环境，仅包含 Java 应用程序运行时的必要环境。</p><p><img src="'+k+`" alt="image-20230514210704461"></p><h2 id="什么是字节码-采用字节码的好处" tabindex="-1"><a class="header-anchor" href="#什么是字节码-采用字节码的好处" aria-hidden="true">#</a> 什么是字节码？采用字节码的好处？</h2><p>JVM 能理解的代码就是字节码，字节码解决了传统解释语言运行效率低的问题，还具有很好的可移植性，一次编译，任何地方运行。</p><p><code>.java</code> 文件经过 javac 编译之后变成 <code>.class</code> 文件，<code>.class</code> 通过解释器和 JIT（运行时编译器）编译成机器可以理解的代码，JIT 完成一次编译之后，就会将对应的机器码保存下来，之后复用，其中编译的是热点代码。所以 Java 也是编译与解释共存的语言。</p><h2 id="java-和-c-的区别" tabindex="-1"><a class="header-anchor" href="#java-和-c-的区别" aria-hidden="true">#</a> Java 和 C++ 的区别</h2><p>Java 和 C++ 都是面向对象的语言，都支持封装继承多态。</p><p>Java 不支持通过指针来直接访问内存，程序内存更加安全。</p><p>Java 的类是单继承的，C++ 支持多继承。</p><p>Java 有自动的垃圾回收机制，不需要手动释放内存。</p><h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h2><p>Java 有 8 种基本数据类型：</p><ul><li>6 种数字类型 <ul><li>4 种整数类型：<code>byte</code>、<code>short</code>、<code>int</code>、<code>long</code></li><li>2 种浮点数类型：<code>float</code>、<code>double</code></li></ul></li><li>1 种字符类型：<code>char</code></li><li>1 种布尔类型：<code>boolean</code></li></ul><h3 id="基本类型和包装类型" tabindex="-1"><a class="header-anchor" href="#基本类型和包装类型" aria-hidden="true">#</a> 基本类型和包装类型</h3><ul><li>包装类型能用于泛型，而基本类型不可以。</li><li>基本数据类型的局部变量存放在 Java 虚拟机栈中的局部变量表中（线程私有），基本数据类型的成员变量没有被 <code>static</code> 修饰的话放在堆中。而包装类型属于对象类型。</li><li>包装类型占用的空间比基本类型要大。</li><li>成员包装类型不赋值就是 <code>null</code>，而基本类型有默认值并且不是 <code>null</code>。</li><li>基本数据类型使用 <code>==</code> 进行比较，而包装类型通过 <code>equals()</code> 进行比较。</li></ul><p>在 Hot Spot 虚拟机中引入 JIT 优化之后，会对对象进行逃逸分析，如果对象的作用范围没有超过当前方法，则可能通过标量替换来实现栈（线程私有）上分配，避免堆上分配对象。</p><h3 id="包装类的缓存机制" tabindex="-1"><a class="header-anchor" href="#包装类的缓存机制" aria-hidden="true">#</a> 包装类的缓存机制</h3><p><code>Byte</code>，<code>Short</code>，<code>Integer</code>，<code>Long</code> 这 4 种包装类默认创建了数值 <strong>[-128，127]</strong> 的相应类型的缓存数据，8 位补码的表示范围。</p><p><code>Character</code> 创建了 <strong>[0，127]</strong> 范围的缓存数据，7 位无符号数的表示范围，<code>Boolean</code> 直接返回 <code>True</code> 或者是 <code>False</code>。</p><h3 id="自动拆装箱" tabindex="-1"><a class="header-anchor" href="#自动拆装箱" aria-hidden="true">#</a> 自动拆装箱</h3><p>装箱就是使用包装类的 <code>valueOf</code> 方法，拆箱就是使用 <code>xxValue</code> 方法。</p><p><code>Integer i = 10</code> 等价于 <code>Integer i = Integer.valueOf(10)</code>，</p><p><code>int n = i </code> 等价于 <code>int n = i.intValue()</code>。</p><h3 id="浮点数运算的时候会有精度丢失的风险" tabindex="-1"><a class="header-anchor" href="#浮点数运算的时候会有精度丢失的风险" aria-hidden="true">#</a> 浮点数运算的时候会有精度丢失的风险？</h3><p>计算机组成原理第二章浮点加减法，具体从浮点数加减法的步骤说起。</p><ul><li>对阶；</li><li>尾数求和；</li><li>舍入；</li><li>规格化；</li><li>溢出判断。</li></ul><h3 id="如何解决浮点数运算的时候精度丢失问题" tabindex="-1"><a class="header-anchor" href="#如何解决浮点数运算的时候精度丢失问题" aria-hidden="true">#</a> 如何解决浮点数运算的时候精度丢失问题？</h3><p>使用 <code>BigDecimal</code> 类进行浮点数运算，不会造成精度丢失问题。</p><h3 id="超过-long-64-位补码的范围数字应该如何表示" tabindex="-1"><a class="header-anchor" href="#超过-long-64-位补码的范围数字应该如何表示" aria-hidden="true">#</a> 超过 long 64 位补码的范围数字应该如何表示？</h3><p>通过 <code>BigInteger</code> 存储，<code>BigInteger</code> 内部使用 <code>int[]</code> 存储任意大小的整型数据。</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example</span><span class="token punctuation">{</span>
    <span class="token comment">//成员变量</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//栈中分配的局部变量，没有逃逸出本方法</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     <span class="token comment">// 带参数的方法中的局部变量</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> num2 <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 栈中分配的局部变量</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态变量" tabindex="-1"><a class="header-anchor" href="#静态变量" aria-hidden="true">#</a> 静态变量</h3><p>静态变量就是被 <code>static</code> 修饰的变量，被 <code>static</code> 修饰的变量为类所共享的，无论创建了多少个类实例，这个变量都是共享的，只会分配一次内存，静态变量通过类名 <code>.</code> 进行访问。</p><p>通常情况下被 <code>final</code> 修饰的 <code>static</code> 变量会成为常量。</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="静态方法为什么不能调用非静态成员" tabindex="-1"><a class="header-anchor" href="#静态方法为什么不能调用非静态成员" aria-hidden="true">#</a> 静态方法为什么不能调用非静态成员？</h3><p>静态方法属于类，在类加载的时候就会分配内存，通过类名直接访问，非静态方法属于实例对象，需要通过类的实例对象去调用。</p><p>在类的非静态成员不存在的时候静态方法就已经存在，此时调用内存中不存在的非静态成员不合法。</p><h3 id="重载和重写" tabindex="-1"><a class="header-anchor" href="#重载和重写" aria-hidden="true">#</a> 重载和重写</h3><p>重载就是对同一个方法根据输入的不同作出不同的方法处理。</p><p>重写一般在子类继承父类，输入的数据一样，但是方法内的代码不同。</p><p><strong>重载</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;输入了一个参数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">,</span> <span class="token class-name">String</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;输入了两个参数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重写</strong></p>`,48),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"class"),a(),n("span",{class:"token class-name"},"F"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"void"),a(),n("span",{class:"token function"},"method"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),a("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"父类方法"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"class"),a(),n("span",{class:"token class-name"},"S"),a(),n("span",{class:"token keyword"},"extends"),a(),n("span",{class:"token class-name"},"F"),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),a(`
    `),n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"void"),a(),n("span",{class:"token function"},"method"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),a("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"子类方法"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("p",null,"重写发生在运行时，是子类对父类方法的实现过程重新编写",-1),f=n("ol",null,[n("li",null,"方法名，参数列表必须相同，子类方法返回值类型比父类方法返回值类型更小或者是相等，子类抛出的异常应该小于或者等于父类，访问修饰符范围大于等于父类"),n("li",null,[a("如果父类方法访问修饰符是 "),n("code",null,"private/final/static"),a(" 则子类不能重写方法，被 "),n("code",null,"static"),a(" 修饰的方法能被再次声明。")]),n("li",null,"构造方法无法被重写")],-1),_=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"class"),a(),n("span",{class:"token class-name"},"F"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"static"),a(),n("span",{class:"token keyword"},"void"),a(),n("span",{class:"token function"},"method"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),a("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"父类方法"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"class"),a(),n("span",{class:"token class-name"},"S"),a(),n("span",{class:"token keyword"},"extends"),a(),n("span",{class:"token class-name"},"F"),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token comment"},"//此方法不能添加@Override，但是可以再次声明"),a(`
    `),n("span",{class:"token keyword"},"public"),a(),n("span",{class:"token keyword"},"static"),a(),n("span",{class:"token keyword"},"void"),a(),n("span",{class:"token function"},"method"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),a("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"子类方法"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("p",null,[n("strong",null,"方法的重写要遵循“两同两小一大”")],-1),x=n("p",null,"“两同”即方法名相同、形参列表相同；",-1),J=n("p",null,"“两小”指的是子类方法返回值类型应比父类方法返回值类型更小或相等，子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等；",-1),S=n("p",null,"“一大”指的是子类方法的访问权限应比父类方法的访问权限更大或相等。",-1);function V(I,A){const c=i("Tabs");return p(),u("div",null,[m,d(" more "),h,o(c,{id:"220",data:[{id:"父类"},{id:"子类"}],active:0},{title0:s(({value:e,isActive:t})=>[a("父类")]),title1:s(({value:e,isActive:t})=>[a("子类")]),tab0:s(({value:e,isActive:t})=>[b]),tab1:s(({value:e,isActive:t})=>[g]),_:1}),y,f,o(c,{id:"248",data:[{id:"父类"},{id:"子类"}],active:0},{title0:s(({value:e,isActive:t})=>[a("父类")]),title1:s(({value:e,isActive:t})=>[a("子类")]),tab0:s(({value:e,isActive:t})=>[_]),tab1:s(({value:e,isActive:t})=>[w]),_:1}),j,x,J,S])}const T=l(v,[["render",V],["__file","1java.html.vue"]]);export{T as default};