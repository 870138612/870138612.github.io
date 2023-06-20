import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-0ea39463.js";const t="/markdown/image-20230619153337460.png",p="/markdown/image-20230619212929209.png",c="/markdown/image-20230620221443613.png",i="/markdown/image-20230620223832571.png",o={},l=e(`<h2 id="什么是单例池-作用是什么" tabindex="-1"><a class="header-anchor" href="#什么是单例池-作用是什么" aria-hidden="true">#</a> 什么是单例池？作用是什么？</h2><p><strong>单例Bean</strong>通过多次<code>getBean</code>方法都会获得同一个实例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.zyl&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext <span class="token operator">=</span>
                <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">AppConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> userService1 <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;userService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> userService2 <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;userService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userService1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userService2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建容器之后获取userService得到的是同一个实例。而这个实例就是放入单例池中，单例池可以看成是一个Map，保证Bean是单例。</p><h2 id="bean对象和普通对象之间的区别是什么" tabindex="-1"><a class="header-anchor" href="#bean对象和普通对象之间的区别是什么" aria-hidden="true">#</a> Bean对象和普通对象之间的区别是什么</h2><p>Bean对象本身就是普通对象，不过可能会经过初始化前和初始化后的增强。</p><h2 id="postconstruct是如何工作的" tabindex="-1"><a class="header-anchor" href="#postconstruct是如何工作的" aria-hidden="true">#</a> @PostConstruct是如何工作的</h2><p>创建Bean的过程：UserService类--&gt;无参构造方法--&gt;对象--&gt;依赖注入--&gt;初始化前（@PostConstruct）--&gt;初始化（InitializingBean）--&gt;初始化后（AOP）--&gt;放入Map单例池--&gt;Bean对象。</p><p><img src="`+t+`" alt="image-20230619153337460"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token comment">//想加入一个特定的User对象到UserService</span>
    <span class="token keyword">private</span> <span class="token class-name">User</span> admin<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostConstruct</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//mysql -&gt;管理员的信息-&gt;User对象-&gt;admin</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>@PostConstruct</code>，让Bean在初始化前进行增强。对应于创建Bean过程中的<strong>初始化前（调用@PostConstruct修饰的方法）</strong>，再通过反射去调用方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> userService1<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">PostConstruct</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>userService1<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bean的初始化是如何工作的" tabindex="-1"><a class="header-anchor" href="#bean的初始化是如何工作的" aria-hidden="true">#</a> Bean的初始化是如何工作的？</h2><p>初始化过程其实就是对应<code>afterPropertiesSet()</code>方法，通过判断</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> isInitializingBean <span class="token operator">=</span> <span class="token punctuation">(</span>bean <span class="token keyword">instanceof</span> <span class="token class-name">InitializingBean</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>bean实现了<code>InitializingBean</code>则调用<code>afterPropertiesSet()</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token keyword">implements</span> <span class="token class-name">InitializingBean</span> <span class="token punctuation">{</span>
    <span class="token comment">//想加入一个特定的User对象到UserService</span>
    <span class="token keyword">private</span> <span class="token class-name">User</span> admin<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//mysql -&gt;管理员的信息-&gt;User对象-&gt;admin</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bean初始化和实例化的区别是什么" tabindex="-1"><a class="header-anchor" href="#bean初始化和实例化的区别是什么" aria-hidden="true">#</a> Bean初始化和实例化的区别是什么？</h2><p>Bean的实例化就是步骤<strong>UserService类--&gt;无参构造方法--&gt;对象</strong>，而初始化就是调用<code>afterPropertiesSet()</code>（类需要实现<code>InitializingBean</code>接口）。</p><h2 id="初始化后是什么" tabindex="-1"><a class="header-anchor" href="#初始化后是什么" aria-hidden="true">#</a> 初始化后是什么？</h2><p>初始化后做的事情就是执行AOP，生成代理对象，并将代理对象放入单例池中。</p><h2 id="构造方法推断" tabindex="-1"><a class="header-anchor" href="#构造方法推断" aria-hidden="true">#</a> 构造方法推断</h2><p>Spring发现有多个构造方法的时候，<strong>如果有无参构造方法则调用无参构造，如果没有无参构造，并且有参构造不止一个则会报错</strong>。（例如不存在无参构造，但是存在多个不同参数的有参构造方法）</p><p>可以使用<code>@Autowired</code>注解默认使用的构造方法。</p><h2 id="先bytype再byname" tabindex="-1"><a class="header-anchor" href="#先bytype再byname" aria-hidden="true">#</a> 先ByType再ByName</h2><p>在单例池Map中会存在多个类型相同的Bean。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">UserService</span> <span class="token function">userService1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">UserService</span> <span class="token function">userService2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会产生两个UserService类型的Bean，但是名字不同。</p><p>依赖注入时，如果执行有参构造方法，发现UserService类型的Bean只有一个则直接注入（ByType），发现有多个则根据名称注入（ByName）。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span> 
<span class="token keyword">public</span> <span class="token class-name">OrderService</span><span class="token punctuation">(</span><span class="token class-name">UserService</span> userService2<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//注入的是第二个名为“userService2”的Bean</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@Autowired</code>只能根据类型注入的，可以使用<code>@Qualifier</code>注解指定名称。</p><h2 id="springaop怎么工作的" tabindex="-1"><a class="header-anchor" href="#springaop怎么工作的" aria-hidden="true">#</a> SpringAOP怎么工作的？</h2><p>在初始化后（AOP）之后生成的代理对象是没有做依赖注入的。</p><p>如果需要代理的类没有实现接口则会通过CGLIB生成代理对象。</p><p>UserServiceProxy对象--&gt;UserService对象--&gt;UserServiceProxy.target=普通对象--&gt;放入Map单例池。</p><p>也就是生成一个父类对象，将普通对象赋值给父类对象的属性<code>target</code>，再对方法进行前后增强，实质就是换了一个对象调用普通对象的普通对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class UserServiceProxy extends UserService{
	UserService target;
	public void test(){
		//@Before 切面
		//target.test();//相当于执行普通对象的test()方法	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring事务底层如何工作" tabindex="-1"><a class="header-anchor" href="#spring事务底层如何工作" aria-hidden="true">#</a> Spring事务底层如何工作？</h2><p>事务本质也是通过代理对象调用普通对象的方法，并在前后做增强。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">UserServiceProxy</span> <span class="token keyword">extends</span> <span class="token class-name">UserService</span><span class="token punctuation">{</span>
	<span class="token class-name">UserService</span> target<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//@Transactional</span>
        <span class="token comment">//事务管理器新建一个数据库连接conn;ThreadLocal&lt;Map,conn&gt;</span>
		<span class="token comment">//conn.autocommit=false;//关闭自动提交</span>
        <span class="token comment">//target.test();//执行数据库操作</span>
        <span class="token comment">//没有出现异常则提交conn.commit();否则回滚conn.rollBack();</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring事务失效的原因" tabindex="-1"><a class="header-anchor" href="#spring事务失效的原因" aria-hidden="true">#</a> Spring事务失效的原因</h2><p>1、<strong>方法异常没有抛出</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Transactionl</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Spring事务&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//正常代码执行</span>
		<span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">//异常代码  被捕获</span>
	<span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出现异常&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这里并没有抛出异常，而是自己处理了 因此Spring无法感知</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异常不能被Spring感知就不会执行<code>rollBack</code>。</p><p>2、<strong>使用<code>@Transactionl</code>修饰的方法不是public方法</strong></p><p>通过实现类或者是父类生成代理对象，代理对象不能调用子类private方法。</p><p>3、<strong>自身调用</strong></p><p>事务是通过代理对象调用才能生效，如果在一个类里面调用本类的方法就相当于<code>this</code>调用，事务不会生效。</p><p>4、<strong>propagation事务传播机制设置错误</strong></p><p>如果内部方法的事务传播类型为不支持事务的传播类型，那么，内部方法的事务在Spring中会失效。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Transaction</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span><span class="token constant">NEVER</span><span class="token punctuation">)</span>
<span class="token comment">//如果有一个事务已经存在则会抛出异常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、<strong>数据库不支持事务</strong></p><p>6、<strong>异常类型错误</strong></p><p>7、<strong>没有被Spring管理</strong></p><h2 id="spring为什么要使用三级缓存来解决循环依赖" tabindex="-1"><a class="header-anchor" href="#spring为什么要使用三级缓存来解决循环依赖" aria-hidden="true">#</a> Spring为什么要使用三级缓存来解决循环依赖？</h2><p>Bean的创建生命周期</p><ol><li>创建普通对象；</li><li>填充属性；</li><li>填充其他属性；</li><li>其他操作；</li><li>初始化后；</li><li>放入单例池。</li></ol><p>三级缓存，就是三个Map集合。</p><p><strong>第一级缓存</strong>：singletonObjects，它用来存放经过完整Bean生命周期过程的单例Bean对象；</p><p><strong>第二级缓存</strong>：earlySingletonObjects，它用来保存哪些没有经过完整Bean生命周期的单例Bean对象，用来保证不完整的bean也是单例；</p><p><strong>第三级缓存</strong>：singletonFactories，它保存的就是一个lambda表达式，它主要的作用就是bean出现循环依赖后，某一个bean到底会不会进行AOP操作。</p><div class="hint-container info"><p class="hint-container-title">循环依赖为什么用三级缓存</p><p>AService和BService相互依赖。</p><p>如果采用以下方法：</p><p>创建AService普通对象之后放入二级缓存，注入BService时发现没有，转而去创建BService对象，BService对象需要依赖注入AService对象，因此从二级缓存中拿去AService进行依赖注入，完成创建周期后将BService放入一级缓存中，返回AService的创建过程就能进行BService的依赖注入，之后AService也完成创建周期。</p><p><strong>二级缓存就能解决普通对象的循环依赖问题，那三级缓存的作用？</strong></p><p>比如，可能AService会进行AOP操作，会创建AServiceProxy代理对象（<strong>正常情况是在属性注入之后进行AOP</strong>），然后将代理对象放入单例池中，但是BService进行属性赋值，依赖注入的时候是把二级缓存中的AService的普通对象进行赋值，同时存在普通对象和代理对象违背了单例池规则。</p><p>解决办法就是在AService创建普通对象之后存入一个Lamda表达式到三级缓存中。</p><ul><li><p>创建AService普通对象；</p></li><li><p>放入Lambda表达式到三级缓存中；</p></li><li><p>尝试注入BService发现没有；</p></li><li><p>创建BService普通对象，尝试注入AService属性；</p></li><li><p>发现一二级缓存都没有；</p></li><li><p>执行三级缓存中的Lambda表达式返回AService普通对象或者代理对象；</p></li><li><p>将返回的对象放入二级缓存中，称为早期Bean对象；</p></li><li><p>将二级缓存中的AService对象或者AService代理对象注入到BService中；</p></li><li><p>BService完成创建周期放入一级缓存；</p></li><li><p>AService普通对象注入一级缓存中的BService完整对象；</p></li><li><p>根据是否需要AOP决定最后放入单例池中的对象是普通对象还是代理对象。</p></li></ul><p><img src="`+p+'" alt="image-20230619212929209"></p><p>通过对注入属性添加<code>@Lazy</code>实现懒惰式加载，只有在调用方法用到属性的时候才会进行初始化，此时本类已经完成创建周期，因此不会出现循环依赖。</p></div><h2 id="springmvc处理请求的底层原理" tabindex="-1"><a class="header-anchor" href="#springmvc处理请求的底层原理" aria-hidden="true">#</a> SpringMVC处理请求的底层原理</h2><p>请求会被<code>DispatcherServlet</code>拦截，<code>DispatcherServlet</code>结构如图。</p><p><img src="'+c+'" alt="image-20230620221443613"></p><p><strong>SpringMVC中的一次请求流程：</strong></p><ol><li>客户端（浏览器）发送请求， <code>DispatcherServlet</code>拦截请求。</li><li><code>DispatcherServlet</code> 根据请求信息调用 <code>HandlerMapping</code> 。<code>HandlerMapping</code> 根据 uri 去匹配查找能处理的 <code>Handler</code>（也就是我们平常说的 <code>Controller</code> 控制器） ，并会将请求涉及到的拦截器和 <code>Handler</code> 一起封装。</li><li><code>DispatcherServlet</code> 调用 <code>HandlerAdapter</code>适配器执行 <code>Handler</code> 。</li><li><code>Handler</code> 完成对用户请求的处理后，会返回一个 <code>ModelAndView</code> 对象给<code>DispatcherServlet</code>，<code>ModelAndView</code>包含了数据模型以及相应的视图的信息。<code>Model</code> 是返回的数据对象，<code>View</code> 是个逻辑上的 <code>View</code>。</li><li><code>ViewResolver</code> 会根据逻辑 <code>View</code> 查找实际的 <code>View</code>。</li><li><code>DispaterServlet</code> 把返回的 <code>Model</code> 传给 <code>View</code>（视图渲染）。</li><li>把 <code>View</code> 返回给请求者（浏览器）。</li></ol><p><img src="'+i+'" alt="image-20230620223832571"></p>',68),r=[l];function d(u,v){return s(),a("div",null,r)}const g=n(o,[["render",d],["__file","0spring.html.vue"]]);export{g as default};