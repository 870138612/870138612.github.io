---
title: 简历项目详解
icon: biji1
date: 2023-07-28
star: 1
category:
  - 笔记
tag:
  - 简历
  - 谷粒商城
  - 黑马点评
---

八股经历大约两个月终于是啃（抄）完了，得上点硬菜了，以下针对我简历上的两个项目进行复习。

包含[谷粒商城](https://www.bilibili.com/video/BV1np4y1C7Yf/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)，[黑马点评](https://www.bilibili.com/video/BV1cr4y1671t/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)。（点击跳转 B 站网课）

<!-- more -->

## 谷粒商城

项目整体较为复杂，项目中可能会涉及到的疑问点参考诚哥的博客文章[秋招笔记整理](https://www.jcwang.top/2022/10/14/%E6%88%91%E7%9A%84%E7%A7%8B%E6%8B%9B%E7%AC%94%E8%AE%B0%E6%95%B4%E7%90%86/)。（貌似已经删除了）

首先是简历部分：

```
恐龙商城                                                                  2022.3-2022.8
springcloud，springsecurity，springboot，mybatis，redis，rabbitmq，sentinel，nginx，docker，elasticSearch
商城页面由 Nginx 代理实现动静分离，请求负载均衡，拆分为网关，订单，购物车，秒杀等微服务。
实现单点登录，商品缓存快速查询，订单创建幂等性。秒杀遵从服务单一职责，独立部署，定时上架，库存预热快速扣减，秒杀连接加密，恶意请求拦截，流量错峰，后端限流，队列削峰。
● 网关微服务实现集群状态下的负载均衡，使得来自同一个主域名的不同请求分发到对应的微服务。
● Redis 存储 Token，SpringSecurity完成多微服务下的用户登录验证和状态刷新。
● SpringSchedule 定时任务上架秒杀商品。
● 前端限流，后端验证登录，Sentinel 框架熔断降级的流量错峰保证在秒杀高流量的情况下项目稳定。
● Redis 验证秒杀中的一人一单，信号量 Semaphore 实现库存的快速扣减，解决并发安全问题。
● RabbitMQ 完成秒杀订单创建，实现队列削峰，减少数据库压力，采用手动 ack 确保订单创建成功。
● RabbitMQ 延时队列模拟订单过期，过期订单的解锁订单和解锁库存流程通过 RabbitMq 消息队列实现。
```

> 为什么叫做恐龙商城？因为诚哥写的就是恐龙商城✨。

下面逐句进行分析。

### 介绍下项目的技术选型

项目中使用到的技术栈为 **springcloud**，**springboot**，**mybatis**，**redis**，**rabbitmq**，**sentinel**，**nginx**，**docker**，使用 **springcloud（Nacos** 作为注册中心和配置中心，简化多服务器的管理，并将项目拆分为多个微服务（模块），微服务之间使用 **openfeign** 
调用，**mybatis** 作为数据库框架，**redis** 作为缓存，分布式锁，**rabbitmq** 队列削峰，**sentinel** 熔断降级限流，主要用在秒杀部分，**nginx** 动静分离，负载均衡，**docker** 容器化部署，**zipkin** 链路追踪，分析请求到每个模块的运行耗时，另外还用到了 **jmeter** 进行压力测试，**visualVM** 
查看堆内存情况。


### Nginx 反向代理在计算机网络的第几层？

Nginx 反向代理包含 7 层反向代理（应用层）和 4 层反向代理（传输层）两种。

7 层代理是写在 `http` 模块中的，而4层代理是写在 `stream` 模块中，与 `http` 模块并列。

4 层代理是基于 **ip 和端口**转发的，基于 **TCP/UDP** 协议。

7 层代理可以 基于 **URL 和 ip 以及 cookie 和请求头**进行分流。

**七层代理写法：**

```nginx
http {
    # 写在http模块中基于内容和协议的交换 nginx代理服务器其实建立了两次TCP连接
    upstream web {
        server 192.168.1.100:80;
        server 192.168.1.101:80;
    }
    server {
        listen 80;
        location / {
            proxy_pass http://web;              
            root html;
            index index.html index.htm;
        } 
    }
}
```

**四层代理写法：**

```nginx
stream {
    # 写在stream中 基于ip和端口进行转发 实际上是修改了请求头中的目标ip和端口
    server {
        listen 30028;
        proxy_pass appserver;
    }
    upstream appserver {
        server 10.0.0.12:8080;
        server 10.0.0.13:8080;
    }
}
```

4 层代理设备将 client 发送报文中的目标地址（原来为 4 层代理的 ip 地址）修改为目标内部服务器的地址，这样 client 就可以和 server 建立 TCP 连接并发送数据。
在 `stream` 中，server 一定要配置 `port`，`proxy_pass` 配置行直接加集群名，不能加 `http://`。

> 在本项目中，upstream 使用的是七层代理的配置方法。

### Nginx 的负载均衡算法有哪些？

☀️详见 [Nginx 负载均衡](https://ylzhong.top/discovery/middleware/1nginx.html#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1)

负载均衡策略有：轮训，最小连接，ip_hash，hash，权重，随机。

### Nginx 动静分离

项目编译完成之后会产生一些不会发生变化的静态文件，放入到 Nginx 的 `html` 目录下，通过 Nginx 配置进行获取这些静态文件，后端 tomcat 服务器应该用来处理请求而不是返回这些静态数据。开启 Nginx 缓冲（buffer）之后还能解决高并发下的连接积压问题。

> 连接：Tomcat 端到 Server 端的连接

### Nginx 反向代理怎么配置的？反向代理跟正向代理的区别是什么？Nginx 可以配置正向代理吗？

☀️详见 [正向代理和反向代理](https://ylzhong.top/discovery/middleware/1nginx.html#%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86)

- 反向代理通过在 `location` 里添加 `proxy_pass` 进行请求代理。

```nginx
http {
    # 写在http模块中基于内容和协议的交换 Nginx代理服务器其实建立了两次TCP连接
    upstream web {
        server 192.168.1.100:80;
        server 192.168.1.101:80;
    }
    server {
        listen 80;
        location / {
            proxy_pass http://web;              
            root html;
            index index.html index.htm;
        } 
    }
}
```

- 正向代理通过客户端代理转发请求，例如 VPN。反向代理通过服务端代理转发请求例如 Nginx 反向代理。

- Nginx 可以配置正向代理，例如 A 能访问外网，BCD 不能访问外网但是能访问 A，则可以通过正向代理将请求代理转发给 A 进行外网访问。（类似 VPN 代理模式，在本机进行代理转发）

### 分微服务的原则是什么？

1. **单一职责原则**：每个微服务应该只负责一个特定的业务功能。例如网关微服务只用来做请求转发，秒杀微服务只做秒杀，即使因为高流量导致秒杀微服务宕机也不会影响到正常的订单微服务。
2. **业务领域驱动划分**：根据应用程序的业务需求和领域知识来对服务进行划分。同上，每一个微服务需要做的业务清晰明了。
3. **最小可行服务**：在进行微服务划分时，应该尽量保持服务的粒度足够小，以降低系统复杂性和提高灵活性。拆分成微服务之后，各个微服务之间的调用变得更加灵活。
4. **高内聚低耦合**：微服务划分应该追求高内聚低耦合的原则。各个微服务之间的耦合度应该尽可能的小。
5. **数据自治原则**：每个微服务应该对其所使用的数据有完全的控制权。每一个微服务都对自己所属的数据库架构有完全控制权。
6. **技术多样性**：微服务架构允许使用不同的技术栈来实现不同的服务。

### 单点登录怎么实现的？

使用 SpringSecurity 框架实现。

首先需要考虑用户的数据应该存储在哪。

- 如果使用 session 保存用户数据则会导致其他的服务器无法获取用户数据。
- 如果使用 cookie 存储用户数据，由于 cookie 存储在客户端，容易篡改，不安全。
- 采用 Nginx 的 hash 一致性负载均衡算法，让所有来源相同的请求定位到同一个服务器，但是如果服务器宕机，则数据会丢失，不可行。

本项目使用 `Redis` 进行用户数据统一存储。添加依赖之后将 session 存储方式改为 redis。

> 谷粒商城项目课程中使用 SpringSession 进行登录数据存储，后续自己改为 SpringSecurity 框架实现认证授权功能。

在配置类中添加了 `jwtAuthenticationTokenFilter`（OncePerRequestFilter 的实现类，每次请求都会拦截），和 `UsernamePasswordAuthenticationFilter`（登录认证的过滤器，在配置中需要认证的请求都会被要求登录）。

其中**登录的密码查询**是需要自己去实现接口 `UserDetailsService`，并重写方法。

```java
@Service
public class UserDetailServiceImpl implements UserDetailsService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //根据用户名查询用户信息
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(User::getUserName, username);
        User user = userMapper.selectOne(wrapper);
        //判断是否查到用户 如果没有查到则抛出异常
        if (Objects.isNull(user)) {
            throw new RuntimeException("用户不存在");
        }
        //TODO 查询权限信息封装
        return new LoginUser(user);
    }
}
```

返回值为实现接口 `UserDetails` 的 LoginUser 类。

```java
UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword());
        Authentication authenticate = authenticationManager.authenticate(authenticationToken);//通过UserDetails实现类查询用户账号和密码，并进行认证
```

密码编码器：

```java
@Bean
public PasswordEncoder passwordEncoder(){
    return new BCryptPasswordEncoder();
}
```

### SpringSecurity 认证整体流程

1. 用户提交用户名、密码被 `SecurityFilterChain` 中的 `UsernamePasswordAuthenticationFilter` 过滤器获取到， 封装为 `Authentication`，通常情况下是 `UsernamePasswordAuthenticationToken` 这个实现类。
2. 然后过滤器将 `Authentication` 提交至认证管理器（`AuthenticationManager<<interface>>`，实现类为 `ProviderManager`，内部包含 `DaoAuthenticationProvider` 用来查找用户数据并认证）进行认证 `authenticationManager.authenticate`
   (authenticationToken)，通过 `UserDetailsService` 实现类获取包含用户账号密码的 `UserDetails` 实现类 ，密码加密解密通过 `PasswordEncoder` 实现类 `BCryptPasswordEncoder` 完成，认证成功则返回 `Authentication`，否则返回空。通过 `.getPrincipal` 从 `Authentication` 中获取用户数据（`UserDetails` 的实现类）。
3. 认证成功之后通过 userId 生成 JWT 返回给前端，封装用户部分数据保存到 Redis 中，Redis 数据的 key 是 `"LOGIN:"+userId`。
4. `SecurityContextHolder` 安全上下文容器将第2步填充了信息的 `Authentication` ，通过 `SecurityContextHolder.getContext().setAuthentication(…)` 方法，设置到其中。

`SecurityContextHolder` 可以看成一个 `ThreadLocal` 用来在一次会话中共享数据。

上述流程在分布式下有时候不能保持登录状态，可以将用户数据保存至 Redis 中。

### 分布式下的用户登录状态保持

第二次会话时开启新的线程就会导致不能获取之前的用户数据，不能保持登录状态。

可将 Redis 作为分布式下用户数据的存储介质。

在第二步认证成功之后通过 userId 生成 JWT 返回给前端，封装用户部分数据保存到 Redis 中，Redis 数据的 key 是 `"LOGIN:"+userId`。

添加 `OncePerRequestFilter` 过滤器，需要重写 `doFilterInternal` 方法，每次请求都会被拦截。如果请求中没有携带 Token 则表示是不需要登录的请求，直接放行，携带了 Token 通过 JWT 工具类进行解密获得 userId，如果解密为有效的 userId，则可以作为 key（`"LOGIN:"+userId`）去 Redis 
中找到用户数据，并添加到 `SecurityContextHolder` 中，这样只要客户端保存正确的 Token 就能保持登录状态。

登录状态续期可以通过给 Redis 添加新的过期时间进行续期。

### 项目中用到了哪些 SpringSecurity 过滤器？

 `UsernamePasswordAuthenticationFilter` 用来做登录认证，`OncePerRequestFilter` 用来做每一个请求拦截并根据情况做业务处理之后放行。

### 如果想要用户仅仅在一段时间内免登录怎么办？

在 `OncePerRequestFilter` 过滤器添加 Redis 数据的时候加上过期时间，在通过 key（`"LOGIN:"+userId`）获取 Redis 数据失败的时候则认为是用户的免登录时间已经过期。（用户数据在 Redis 中过期，则需要重新登录并将用户数据保存至 Redis，返回新的 Token）

### JWT（Token）如何生成的？

☀️详见 [15 分钟学会 JWT 的使用](https://www.bilibili.com/video/BV1cK4y197EM/?spm_id_from=333.788.recommend_more_video.1&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)

使用 JJWT 生成 JWT。

JWT 由三个部分构成，用 `.` 拼接：

- Header，包含类型和加密算法，此部分通过 BASE64 编码之后得到第一个部分（需要一个 key 作为秘钥）。

  ```json
  {
    "typ":"JWT",
    "alg":"HS256"
  }
  ```

- Payload，载荷，用于存放主要信息，通过 BASE64 编码之后得到 Token 的第二个部分。

  ```json
  {
  	"sub":"123456",
  	"name":"zyl"
  }
  ```

- Signature，通过对 Header 和 Payload 进行相加得到的数据通过 HS256 加盐得到最终的 Signature。

```java
String encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
String signature = HMACSHA256(encodedString, secret);
```

最后 HS256 加盐算法中的秘钥 `secret` 也可以通过 BASE64 编码获得，保存在服务器端，用来验证传回的 JWT 正确性。

### 数据更新之后对缓存如何操作？缓存一致性解决办法？

项目中使用 SpringCache 作为缓存框架。使用 `@Cacheable` 快速添加返回结果到缓存。

缓存一致性的解决方案有**双写模式**和**失效模式**。

- **双写模式**：对数据库进行数据修改之后，会接着把新数据写入 Redis。
- **失效模式**：对数据库进行数据修改之后，会让旧的缓存数据失效，`SpringCache` 中的 `@CacheEvict` 执行缓存失效。

双写模式下如果有两个数据同时写数据库，执行流程：1 修改数据库，2 修改数据库，2 更新缓存，1 更新缓存，这样会导致现在的缓存数据是 1 修改的数据，并不是后执行的 2 修改的数据，存在暂时脏数据问题，需要等到缓存失效之后才能得到最新的正确数据。

![image-20230628213424542](/markdown/image-20230628213424542.png)

失效模式下如果有三个进程，1 修改数据库，1 删除缓存，3 查询缓存没有，3 读数据库，2 修改数据库，2 删除缓存，3 更新缓存，此时缓存中为旧数据，同样存在脏数据问题。

![image-20230628214754324](/markdown/image-20230628214754324.png)

两种方式都会存在脏数据问题，只能通过添加过期时间缓解，对于经常变化的数据就应该直接查询数据库，放入缓存的数据应该是变化度不高的数据。

如果硬要解决缓存一致性问题，可以在并发读写，写写下加锁，读读不需要添加锁。（不建议）

::: info 不要过度设计

缓存只要保证最终一致性不需要强一致性，为了强一致性牺牲可用性不划算。

:::

### 缓存穿透，缓存雪崩，缓存击穿问题

☀️详见 [缓存穿透，缓存雪崩，缓存击穿](https://ylzhong.top/database/2redis/1redis.html#%E7%BC%93%E5%AD%98%E7%A9%BF%E9%80%8F-%E9%9B%AA%E5%B4%A9-%E5%87%BB%E7%A9%BF)

- 缓存穿透：查询空数据，解决：缓存空数据并添加过期时间、布隆过滤器。
- 缓存雪崩：大量的 key 失效，解决：添加随机过期时间。
- 缓存击穿：热点 key 失效，解决：使用同步锁控制只能有一个线程去数据库中查询数据并更新缓存，秒杀场景下商品的过期时间应该在秒杀场结束之后。

```java
@Cacheable(value = {"category"}, key = "#root.method.name",sync = true)
//默认是没有加锁的  所以没有解决缓存击穿问题 使用sync=true 进行加锁  本地锁
```

常规数据使用 `SpringCache` 可以满足大部分要求。

### 订单创建的幂等性如何实现？

当用户点击多次提交订单的时候应该保证只会产生一个唯一的订单，也就是接口的幂等性。

实现方式为从购物车页面点击确认订单的时候会在后端生成一个**防重令牌**，令牌的 key 和 `memberId` 有关，值为随机生成的 UUID，并将令牌放入 Redis 中，返回令牌到前端。

此时前端提交订单的时候就会将令牌进行提交，后端从数据库中获取对应的令牌，如果比对成功则创建订单并将令牌删除，否则不会创建订单。这样就保证了在确认页面只有第一次点击订单能创建成功。

![image-20230630165509583](/markdown/image-20230630165509583.png)

多线程下验证令牌和删除令牌的过程应该是原子性的，所以使用 Lua 脚本实现。

```java
String script = "if redis.call('get', key[1]) == ARGV[1] then return redis.call('del', keyS[1]) else return 0 end";
String orderToken = vo.getOrderToken();
Long execute = template.execute(new DefaultRedisScript<Long>(script, Long.class),
                Arrays.asList(OrderConstant.USER_ORDER_Token_PREFIX + memberResponseVo.getId()),
                orderToken);
```

`execute` 方法传入三个参数，分别是 Lua 脚本，keyS，ARGV。

验证成功之后再次验证价格，保存订单数据（商品信息，价格），锁定库存（库存模块完成，发生异常则能本地回滚），如果库存锁定成功则发送订单消息给队列创建订单（订单号，商品编号，价格，收货人，订单状态等）。

为了防止库存锁定之后订单服务出现问题，应该设置库存释放的死信队列，存活时间大于订单的释放时间，超时之后检查订单是否是取消状态，取消状态进行库存释放。需要注意一个订单只会释放一次库存，因此库存工作单中需要添加字段保证只会释放一次库存，项目中库存的释放统一由一个队列完成，因此不会存在并发问题。由于库存工作单存在状态标识，重复的库存释放消息只会执行一次。

如果订单支付成功，则支付宝会进行异步回调，此时可以发送订单已支付消息到队列中修改订单状态。

![image-20230702160233816](/markdown/image-20230702160233816.png)

### 延时关单如何实现的？

使用 RabbitMQ 的死信队列实现，将队列添加 `x-message-ttl` 属性，让消息在一定时间之后成为死信交给死信交换机，后续可进行库存释放操作。

### 秒杀的流程是啥样的？

- 秒杀开始前通过 `@Scheduled` 进行定时上架商品，查询近期的秒杀场次，保存至 Redis 用于后续秒杀的时间和场次合法性校验，查询 SKU 信息保存至 Redis 加速查询，同时通过 UUID 生成随机码保存到 SKU 详情数据。
- 秒杀商品的信号量 key 为 `SKU_STOCK_SEMAPHORE + Token`，Token 是生成的 SKU 随机码，通过 `semaphore.trySetPermits(seckillSkuVo.getSeckillCount())` 设置对应 SKU 信号量的许可证数量（秒杀库存数量）。
- 秒杀开始判断用户是否登录，登录的话进行合法性校验，包含当前所处时间是否处于秒杀时间，检验随机码是否正确（在秒杀开始时返回到前端的随机码，用于防止恶意请求），验证购买数量是否超额。
- 合法性校验通过之后进行占位（防止一个用户并发秒杀），使用 `SETNX` 进行占位（原子操作），key 为 `userId+'_'+skuId`，同时还需要添加过期时间，过期时间为**场次结束时间-当前时间**，让一个用户只能对同一个商品秒杀一次，**遵从请求的幂等性**。
- `boolean b = semaphore.tryAcquire(num, 100, TimeUnit.MILLISECONDS)` 如果获取信号量成功则表示秒杀成功，将 **OrderSn**，**UserId**，**SkuId**，**SeckillSkuPrice**，**Num**，**PromotionSessionId** 封装发送到 RabbitMQ 
  的`order-event
  -exchange` 交换机，路由键为 `order.seckill.order`，返回 OrderSn 到前端，前端可以使用一个页面让用户选择收货地址。

`SETNX` 占位成功表示这个用户没有买过商品，通过 Redission 的 `Semaphore` 模拟库存扣减。

![image-20230628222659062](/markdown/image-20230628222659062.png)

- 等待一段时间之后如果没有出现差错则订单已经创建在数据库中了，为未支付状态。

![image-20230628225544890](/markdown/image-20230628225544890.png) 

☀️详见 [RabbitMQ](https://ylzhong.top/discovery/middleware/2mq.html)

### 服务单一职责，独立部署，定时上架

服务单一职责：秒杀项目是一个独立的微服务即使发生宕机也不会影响订单微服务。

定时上架使用 `@Scheduled(cron = "0 */1 * * * ?")` 完成，参数为 Cron 表达式。

### 库存预热快速扣减如何实现？

预热通过定时上架商品为 Redis 信号量完成，快速扣减使用 Redission 的 `Semaphore` 完成。

### 秒杀连接加密，恶意请求拦截如何实现？

秒杀在快开始的时候才会将随机的 UUID 设置到 SKU 详情中，请求携带这个 UUID 才是正确的请求参数，同时秒杀商品信号量的 `Semaphore` 的 key 也是 SkuId 生成的 UUID 组合起来的，而不是 SkuId，如果是 SkuId 则很容易被人猜到。

恶意请求拦截体现在对请求的合法性校验上，包含时间段校验，随机码校验，SkuId 和秒杀场次的对应正确性校验，一人一单的秒杀幂等性问题。

### 流量错峰，队列削峰如何实现？

其实这两个是差不多的意思，在秒杀项目中为了防止数据库同时创建多个订单导致压力剧增，可以使用队列进行削峰填谷。而流量错峰可以使用验证码机制或者是添加购物车让大量请求不在同一个时间点到达。

同时在创建秒杀单时可以通过分布式锁对秒杀单的创建流程上锁，防止大量请求同时到达数据库（使用分布式锁可以解决缓存击穿问题）。

### 限流熔断降级如何实现？

后端限流在本项目中使用 Sentinel 框架实现限流熔断降级。

- **熔断**：A 调用 B，如果因为某些原因 B 宕机，则可以将 B 直接断路，不再调用 B 的服务。这样 B 的问题就不会影响到 A 的运作。`@FeignClient(value = "gulimall-seckill",fallback = SeckillFallbackService.class)
  `，调用失败之后回调方法。Sentinel 中可以设置 RT（每秒的并发数），异常比例，异常数进行服务熔断。
- **降级**：服务器压力剧增时，可以进行降级，就是将服务器停止服务，直接返回降级数据（前方拥堵，请稍后再试）。以上两者都是为了集群的大部分可用，防止整体崩溃，牺牲自己，用户最终的体验都是部分服务不可用。熔断是服务故障触发系统主动规则，降级是全局考虑，停止正常的服务，释放资源。
- **限流**：对请求的 QPS 进行限制，使得请求不会超过服务器能接受的最大压力。

## 黑马点评

黑马点评为 B 站 Redis 课程中涉及到的项目，项目整体都是在介绍 Redis 的数据结构以及对应方法。

☀️详见 [黑马点评](https://www.bilibili.com/video/BV1cr4y1671t/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)

项目中同样包含登录部分，Session 共享问题，因此可以参考 SpringSecurity 的登录认证流程，Redis 存储用户数据。

☀️详见 [谷粒商城实现单点登录](https://ylzhong.top/note/1other/0aboutprojects.html#%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95%E6%80%8E%E4%B9%88%E5%AE%9E%E7%8E%B0%E7%9A%84)

```
小众点评                                                           2022.9-2022.12
springboot，mybatis，redis，nginx，docker
点评平台由 Nginx 实现动静分离，围绕 Redis 实现用户登录，解决 Session 共享问题，登录认证，缓存加速，点赞，热门文章排序，共同关注和取关，查询附近的店铺笔记，用户签到，UV 统计。
● 使用手机号验证码登录，实现用户登录状态刷新。
● Redis 作为缓存加速商品信息和笔记的读取。
● 通过 Redis 的各种数据结构实现点赞排行榜，共同关注和取关，查询附近的店铺笔记，用户签到，UV 统计。
```

下面针对简历逐句分析

### 点评平台由 Nginx 实现动静分离

Nginx 动静分离的好处参考谷粒商城项目。

☀️详见 [Nginx 动静分离](https://ylzhong.top/discovery/middleware/1nginx.html#%E5%8A%A8%E9%9D%99%E5%88%86%E7%A6%BB)。

### Redis 实现用户登录，登录状态刷新

此项目中的登录没有使用 `SpringSecurity` 作为框架，使用 Redis 解决 Session 共享问题。

用户输入手机号之后，会在后端生成一个 Redis 的 String 数据，key 为手机号码，Value 为验证码，验证码可通过 UUID 生成并截取后 6 个数字。并添加过期时间，防止一个手机号码在短时间内多次点击发送验证码。

登录时后端验证验证码成功之后，生成一个 JWT（Token）返回给前端，并存储为 String 类型到 Redis。如果没有查询到用户数据则默认注册。同样添加过期时间，表示免登录时间。

拦截器通过实现接口 `HandlerInterceptor` 并重写方法 `preHandle`。在实现了 `WebMvcConfigurer` 的配置类中添加拦截器 `registry.addInterceptor`。如果请求不携带 
token 则直接放行，表示这个请求不需要用户验证。有 token 则去 Redis 中寻找，如果没有找到，则表示登录状态过期，需要重新登录。找到了则将对应的用户数据查询并封装放入 `ThreadLocal` 中，用来在这次会话中共享数据，**为了防止线程复用导致后续的用户用到了之前数据，则在每次线程执行 `preHandle` 方法前都执行一次 `remove` 将 
`ThreadLocal` 清除数据**。

用户登录状态刷新可以在每次请求的时候获取正确的 Token，通过方法 `stringRedisTemplate.expire(key, LOGIN_USER_TTL, TimeUnit.SECONDS)` 刷新免登录时间。

> 登录部分有修改，没有黑马点评中的 `LoginIntercepter`。

### JWT（TOKEN）如何生成？

☀️详见 [JWT 如何生成？](https://ylzhong.top/note/1other/0aboutprojects.html#jwt-token-%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90%E7%9A%84)

### 点赞

对于每一个文章的点赞统计通过 Set 集合实现，点赞数为集合的大小，由于 Set 的去重性质可以让用户只能点一次，`SISMEMBER` 判断用户是否点赞过。

没有点赞过则点赞先更新数据库再修改缓存值。

### 热门文章排序

通过 Sorted Set 实现，member 存储文章的 id，score 存储对应文章的点赞数目。

`ZADD key score1 member1 score2 member2` 添加一个元素或者多个元素。

`ZREVRANGE key start end` 通过 score 进行排序（score 从大到小），查询从 start 到 end 之间的元素。

### 关注和取关

表设计三个字段 `id`，`userId`，`follow_userId`。

关注就添加表项，取关就删除表项。

### 共同关注

通过 Set 数据结构完成。

`SADD s1 m1 m2`，相当于 s1 用户关注了 m1、m2。

`SADD s2 m2 m3`，相当于 s1 用户关注了 m1、m2。

`SINTER s1 s2` 查询两个集合的交集，也就是共同关注。

### 查询附近的店铺笔记

使用 GEO 数据结构，代表地理坐标。

`GEOSEARCH g1 FROMLONLAT 116 40 BYRADIUS 10 km WITHDIST `，查询经度为 116，纬度为 40 半径为 10km 内的所有 GEO 坐标，并返回对应到圆心的距离。

### 签到功能

通过 BitMap 实现签到功能，很好的减少存储数据的大小，Redis 中使用 String 数据类型实现 Key，因此最大容量为 512MB。

`SETBIT user1 0 1`，表示将 offset 为 0 的位置设置为 1，也就是第一天签到了则标记为 1，第二天签到则执行 `SETBIT user1 1 1`。通过 `BITCOUNT user1` 来查询出现1的个数。

### 统计连续签到

将 BitMap 和 1 做与运算得到的值就能判断最后一天是否签到，签到则将连续签到值加一，再将 BitMap 右移移位做同样的与操作并统计，知道出现某天没有签到，得到连续签到的天数。

例如 BitMap 值为 `01011`，相当于连续签到了两天。

与 1 操作得到值 `00001`，值为 1 表示签到了，`count++`。`01011` 算术右移得到 `00101`，与 1 得到 1 表示签到了，`count++`。`00101` 算术右移得到 `00010`，与 1 得到 0 表示没有签到，则连续签到的天数是 2。

### UV 统计

使用 HyperLogLog 实现大流量的独立访客统计，单个 HHL 的内存永远小于 16kB，作为代价，存在 0.81% 的误差，并且不会存储数据本身，只会统计元素的个数，并且重复的元素只会统计一次。

`PFADD hl1 e1 e2 e2` 添加三个元素，`PFCOUNT hl1` 返回值为 2，表示 hl1 里的不重复元素个数。

## 其它问题	

### 如何使用 SETNX+EX 实现分布式锁？

> 原文回答：redis 中执行 SETNX+EX 这个语句是原子性的。 当然前面如果释放锁的时间太短提早释放了，那么就有问题，所以可以用一个 lua 脚本将判断是否是当前线程的锁和取消所（删除 key）原子实现

`SETNX+EX` 是原子操作，判断是否有值和设置值是原子执行的。

多线程下仅仅使用 `SETNX` 作为分布式锁会存在问题，如果一个线程加锁之后出现错误没有释放锁，则其他的线程都获取不到这个锁。

解决办法是添加过期时间，但是也可能存在 A 在锁的过期时间内没有执行完，B 获得了锁，A 执行完之后会释放锁，导致双方都无锁。因此在删除锁之前需要判断是否是当前线程拥有的锁，检查和删除操作必须为原子操作使用 Lua 脚本实现。

如果设置的过期时间太长影响性能，时间太短会导致业务还没有处理完成就释放锁了。并且不支持重入。

综合来说使用 `SETNX+EX` 实现分布式锁还存在问题。

### Redission 实现分布式锁的自动续期

Redission 中通过看门狗机制实现分布式锁的自动续期，保证在业务执行时不会因为时间到期而释放锁。

☀️详见 [分布式锁](https://ylzhong.top/database/2redis/2lock.html)

### 如何保证消息可靠性？

> 原文回答：生产者到 broker 的 confirm，broker 到消费者的时候手动确认机制，持久化。当然如果 kafka 的话其实可以确认的时候给一个 offset，避免了重复。（这个是面试跟我说的，说主要是想问下根 kafka 的区别。）

#### 消息丢失

- 消息发送由于网络问题没有到达服务器。
  - 做好容错机制（try-catch）失败之后要有重试机制，可记录到数据库，采用定期重发的机制。
- 消息抵达 Broker，Broker 在持久化之前宕机。
  - publisher 也必须加入确认回调机制，确认成功的消息，修改数据库的消息状态。
  - 交换机持久化，队列持久化，消息持久化。

> 交换机持久化，在服务器宕机重启之后会恢复交换机，不会丢失相关信息。
> 消息持久化和队列持久化需要同时开启，如果仅仅开启消息持久化则宕机重启之后队列消失则消息也就消失，仅仅开启队列持久化则宕机重启之后消息会消失。
> 都是通过创建的时候添加参数 `durable` 为 `true`。

- 自动 ack 状态下，消费者收到消息但是没有执行完业务。
  - 开启手动 ack，消息成功才会移除消息，失败或者来不及处理就 NACK 并重新加入队列。

消息投递 `Exchange` 会回调 `confirmCallback`，消息投递给 `Queue` 失败会回调 `returnCallback`。`ack` 表示消息成功消费。

![image-20230617224404357](https://ylzhong.top/markdown/image-20230617224404357.png)

#### 消息重复

- ack 时消息宕机，导致消息重新放入队列被消费。
  - 消费者的业务接口应该设计为幂等性，比如库存工作单的状态标志。
- 消费失败，消息又重新放回队列中。
  - RabbitMQ 中的每一个消息都有 `redelivered` 字段，获取消息是否是被重新投递的。

#### 消息积压

- 上线更多消费者。
- 上线专门的队列消费服务，先将消息取出，后面再进行消费。

### 让你设计一个网站的文章的点击量排名，你怎么实现？

>  原文回答：首先肯定用 zset，然后 key、value 怎么存储呢？我说 value 每次 +1，面试官说不对。

也不知道为啥不对。

Sorted Set 可以用来设计排行榜，如果文章的阅读量很多，使用的存储空间就比较大，并且统计的性能较慢。

针对热门文章的 UV 统计可以使用 HyperLogLog 实现，命令为 `PFADD key element` 添加元素，但是这个数据结构不会存储元素，仅仅会存储集合的个数，使用 `PFCOUNT` 返回集合个数。

HyperLogLog 并不会精确计数，存在误差（0.81%）。排名的话不用 ZSET 用啥呢？

### 秒杀包含什么？具体的测试流程是怎么样的？

> 原文回答：我说了一些优化，查看堆内存，更改堆内存的新生代和老年代的分配，从并发量 550 到 600了。

秒杀包含定时上架秒杀商品，使用 `SETNX` 实现用户秒杀的占位，Redission 的 `Semaphore` 模拟库存快速，还有通过队列削峰，延时队列模拟订单释放过程。

使用 **JConsole** 查看堆内存情况，发现老生代 GC 很频繁，更改了新生代和老年代的内存分配，并发量从 550 提高到了 600。

更改老年代：新生代的内存比例为 4:1，表示老年代占堆内存的 80%。

```java
-XX:NewRatio=4
```

请求测试通过 **Jmeter** 完成，创建并登录 1000 个用户，通过 CSV 数据文件存储 1000 个用户 Token，再通过这 1000 个用户 Token 模拟秒杀过程。

### 项目中遇到的难点是怎么解决的呢？

> 原文回答：我说一开始用的 chales，发现不能通过端口看，然后网上查能看端口的，找到了 tcpdump。

测试时出现请求不能连通的情况因此使用 `tcpdump` 进行抓包。

监听虚拟机的 `80` 端口，抓包来源为 `192.168.1.103`（本机IP）的 telnet 包。

```
tcpdump tcp port 80 host 192.168.1.103
```

使用 **ZipKin** 做链路追踪时发现查询 SKU 数据花费较长的时间，后续改为使用 `CompletableFuture` 进行异步查询减少了请求的时间。先查询 SKU 主体信息 `CompletableFuture.supplyAsync`，之后异步查询 `.thenAcceptAsync` SKU 的图片、介绍、规格参数、销售属性组合，`allof(...).get()` 
之后将数据返回。（需要传入线程池）

### 创建线程的方法

1、继承 `Thread` 类， 重写 `run` 方法

2、实现 `Runnable` 接口实现 `run` 方法

3、实现 `Callable` 接口，实现 `call` 方法，该方式可以获取线程的执行结果。

```java
FutureTask<String> task = new FutureTask<>(() -> {
    return "abc";//实现Callable接口重写Call方法。
});
```

### Redis 怎么做的持久化？

Redis 的持久化方案有 RDB 和 AOF。

RDB 是读取内存快照，AOF 可以看做命令日志文件。

|                |           RDB            |                   AOF                   |
| :------------: |:------------------------:|:---------------------------------------:|
|   持久化方式   |       定时对整个内存创建快照        |               记录每一次执行的命令                |
|   数据完整性   |     不完整，两次备份之间的操作会丢失     |              相对完整，取决于刷盘策略               |
|    文件大小    |        会有压缩，文件体积小        |               记录命令，文件体积很大               |
|  宕机恢复速度  |            很快            |                    慢                    |
| 数据恢复优先级 |     低，因为数据完整性不如 AOF      |                高，数据完整性更高                |
|  系统占用资源  |  高，大量 CPU 和内存消耗（创建快照时）   | 低，主要是磁盘 IO 资源，但是 AOF 重写时会占用大量 CPU 和内存资源 |
|    使用场景    | 可以容忍数据部分不完整，追求更快的启动速度的场景 |            对数据完整性安全性要求较高的场景             |

☀️详见 [Redis 持久化](https://ylzhong.top/database/2redis/4redispersistence.html)

### Redis 的集群和哨兵机制的区别？

Redis 集群和哨兵都可以用来提高 Redis 实例的可扩展性和可用性。

**分片集群**

- 解决海量存储问题和高并发写问题。
- 集群中有多个 master，每一个 master 保存不同的数据。
- 每一个 master 都可以有多个 slave 节点。
- master 之间通过 ping 检测彼此健康状况。
- 客户端请求可以访问集群任意节点，最终都会被转发到正确的节点上。
- 从节点提供 slot 数据备份以及故障转移，保证可用性，主节点宕机可以从从节点中产生新的主节点。

**哨兵**

- 监控：不断监控 slave 和 master 是否正常工作。
- 自动故障恢复：如果 master 故障，sentinel 会将一个 slave 提升为master，当故障实例恢复之后也是以新的 master 为主节点。
- 通知：充当 Redis 客户端的服务发现来源，当集群发生故障转移时，会将最新的消息发送给 Redis 客户端。

Redis 集群用来提高 Redis 服务器的读写性能和可用性，而 Redis 哨兵只是用来提高 Redis 服务实例的可用性。通常情况下，使用 Redis 集群和哨兵结合方式会比只使用集群或者只使用哨兵的方式更加高效，可以大大提升 Redis 数据库的性能。

☀️详见 [Redis 集群](https://ylzhong.top/database/2redis/5rediscluster.html)

### Redis 能做消息队列吗？

**List 实现消息队列**

生产者生产消息通过 `lpush` 放入 Redis 中，消费者消费消息通过 `rpop` 获取消息。但是对于 `rpop` 命令没有消息也会返回，有新消息也不会通知，只能通过死循环来获取消息，浪费性能。

**Streams**

Streams 是一种 Redis（5.0 版本）专门为消息队列定义的一种数据结构。

添加消息命令：`XADD users * name jack age 21` 就是创建名为 `users` 的队列，向消息队列中发送一条消息，名字是 `jack` 年龄是 `21`。

消费消息命令：`XREAD COUNT 1 STREAMS users 0`，表示从队列 `users` 中读取一条消息，是从第一个消息开始读。`XREAD COUNT 1 BLOCK 0 STREAMS users 0`，添加 `BLOCK 0` 表示阻塞等待消息，`0` 表示等待时间为永久。

### Redis 如何批量处理 key？

使用原生批命令（`mset, mget`）或 pipeline 批量处理。

原生批命令一命令多个 key，但 pipeline 支持多命令（存在事务），非原子性。

Redis 命令执行包含四个阶段：发送命令，命令排队，命令执行，返回结果，一般是等待上一条命令的返回再执行下一条命令，效率很低。

原生批命令能一次发送多条命令，并将结果一次性返回，有效减少了 RTT，但是并不是所有命令都支持批量操作。

pipeline 能将多种命令一起打包发送给 Redis，在每个命令之间不需要等待结果返回，只需要在最后时刻一起读取响应并返回，有效减少 RTT。

### Redis 的发布订阅机制

 Redis 的发布订阅实现了类似 RabbitMQ 的消息推送功能。 发布订阅机制包含 2 个对象，发布者和订阅者，当两者建立发布订阅关系后，当发布者向 Redis 中发布消息时，订阅者就能收到这个消息，就像上面的业务场景，支付接口只需要向特定频道发送消息，其他下游业务订阅这个频道，就能收相应消息，然后做出业务处理即可。

使用 `subscribe sub` 订阅 `sub` 频道，使用 `publish sub "I am zyl"` 向 `sub` 中发布消息。
