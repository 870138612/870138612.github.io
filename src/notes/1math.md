---
title: 高等数学
star: true
icon: page
order: 99
cover: /home/sky.jpg
category:
    - 高等数学
tag: 
    - 高等数学
---


### 数列极限与连续

- 若$\lim{f(x)}$存在，$\lim{g(x)}$不存在，则$\lim{[f(x)}\pm{g(x)}]$必不存在.
- 若$\lim{f(x)}$不存在，$\lim{g(x)}$不存在，则$\lim{[f(x)}\pm{g(x)}]$不一定存在.
- 若$\lim{f(x)}=A\not=0$，$\lim{f(x)g(x)}=A\lim{g(x)}$，即乘除法中非零因子可以先提出.

- 泰勒公式

$$
\sin x = x -\frac{x^3}{6} + o(x^3)
$$
$$
\arcsin x = x+\frac{x^3}{6}+o(x^3)
$$
$$
\cos x =1-\frac{x^2}{2}+\frac{x^4}{24}+o(x^4)
$$
$$
\tan x=x+\frac{x^3}{3}+o(x^3)
$$
$$
\arctan x=x-\frac{x^3}{3}+o(x^3)
$$
$$
\ln(1+x) =x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3)
$$
$$
e ^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+o(x^3)
$$
$$
(1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+o(x^2)
$$
$$
\frac{1}{1-x}=1+x+x^2+x^3...
$$
$$
\frac{1}{1+x}=1-x+x^2-x^3...
$$

### 数列极限

- 等比数列前$n$项的和$S_n=\begin{cases} na_1 &r=1\\ \frac{a_1(1-r^n)}{1-r} & r\not=1\end{cases}$.
- $\sqrt{ab} \le {\frac{a+b}{2}} \le\sqrt{\frac{a^2+b^2}{2}},(a,b\ge0)$.
- 当$0<x<\frac{\pi}{4}$时，$x<\tan x<\frac{4}{\pi}x$.
- 当$0<x<\frac{\pi}{2}$，$\sin x>\frac{2}{\pi}x$.

### 一元函数微分学

- 若$f(x)$是可导的偶函数，则$f'(x)$是奇函数.
- 若$f(x)$是可导的奇函数，则$f'(x)$是偶函数.
- 若$f(x)$是可导的周期为$T$的周期函数，则$f'(x)$是以周期为$T$的周期函数.

::: info 墙外抢救

- $f(x)=(x+1)(x-1)|(x+1)(x-1)(x-2)|$，判断不可导点.

    - 让绝对值内的值等于0，求出对应的点，再计算绝对值外值等于0的点，若有重合则不属于不可导点，此点被抢救.

    - 绝对值内$f(x)$为0的点：$x=-1$，$x=1$，$x=2$，在绝对值外$f(x)$为0的点$x=-1$，$x=1$，存在重合的$x=-1$，$x=1$，因此不可导点只有一个$x=2$.


:::   

- 基本求导公式

$$
\sin'x=\cos x
$$
$$
\cos'x=-\sin x
$$
$$
\tan'x=\sec^2x
$$
$$
\cot'x=-\csc^2x
$$
$$
\arcsin'x=\frac{1}{\sqrt{1-x^2}}
$$
$$
\arccos'x=-\frac{1}{\sqrt{1-x^2}}
$$
$$
\arctan'x=\frac{1}{1+x^2}
$$
$$
\sec'x=\sec x\cdot{\tan x}
$$
$$
\csc'x=-\csc x\cdot{\cot x}
$$
$$
\ln'(x+\sqrt{x^2+1})=\frac{1}{\sqrt{x^2+1}}
$$
$$
\ln'(x+\sqrt{x^2-1})=\frac{1}{\sqrt{x^2-1}}
$$

- 反函数的导数
    - 设$y=f(x)$为单调，可导函数，且$f'(x)\not=0$，则存在反函数$x=\varphi(y)$，且$\frac{dx}{dy}=\frac{1}{\frac{dy}{dx}}$，即$\varphi'(y)=\frac{1}{f'(x)}$.
    - 记$f'(x)=y'_x$，$\varphi'(y)=x'_y$，则

$$
y''_{xx}=-\frac{x'_{yy}}{(x'_y)^3}
$$


- 参数方程确定的函数的导数
    - 设函数$y=y(x)$由参数方程为$\begin{cases}x=\varphi(t)\\y=\psi(t) \end{cases}$确定，$t$是参数，$\varphi(t)$，$\psi(t)$均可导，$\varphi'(x)\not=0$则

$$
\frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}=\frac{\psi'(t)}{\varphi'(t)}
$$

- 若$\varphi$，$\psi$二阶均可导，$\varphi'(x)\not=0$则

$$
\frac{d^2y}{dx^2}=
\frac{d(\frac{dy}{dx})/dt}{dx/dt}=
\frac{\psi''(t)\varphi'(t)-\psi'(t)\varphi''(t)}{[\varphi'(t)]^3}
$$

- 莱布尼茨公式
    - 设$u=u(x)$，$v=v(x)$均$n$阶导，则

$$
(uv)^{(n)}=u^{(n)}v+C_n^1u^{(n-1)}v'+C_n^2u^{(n-2)}v''+...+C_n^{n-1}u'v^{(n-1)}+uv^{(n)}
$$

- 曲率公式
$$
K=\frac{|y''|}{(1+y'^2)^\frac{3}{2}}
$$

### 一元函数微分学应用-几何应用

- 设函数$f(x)$二阶可导，在$x=x_0$处取得最大值，则有$f''(x_0)\le0$.
- 二阶可导点是拐点的必要条件：设$f''(x_0)$存在，且点$(x_0,f(x_0))$为曲线的拐点，则$f''(x_0)=0$.
- 二阶可导点是拐点的充分条件
    - 在某点去心领域内二阶导数存在，在该点的左右两边$f''(x_0)$变号，则为拐点.
    - $f(x)$在$x=x_0$的某邻域内三阶可导，$f''(x_0)=0$，$f'''(x_0)\not = 0$，则为拐点.
    - 设$f(x)$在$x_0$处$n$阶可导，且$f^{(m)}(x_0)=0(m=2,...,n-1)$，$f^{(n)}(x_0) \not = 0(n\ge3)$，则当$n$为奇数时，点$(x_0,f(x_0))$为曲线的拐点.

- 设多项式$f(x)=(x-a)^ng(x)(n>1)$，且$g(a) \not = 0$，则当$n$为偶数时，$x=a$是$f(x)$的极值点，则当$n$为奇数时，$x=a$是$f(x)$的拐点.
- 设多项式$f(x)=(x-a_1)^{n_1}(x-a_2)^{n_2}...(x-a_k)^{n_k}$，其中$n_i$是正整数，$a_i$是实数，且互不相等，记$k_1$为$n_i=1$的个数，$k_2$为$n_i>1$且$n_i$为偶数的个数，$k_3$为$n_i>1$且$n_i$为奇数个数，则极值点的个数为$k_1+2k_2+k_3-1$，拐点个数为$k_1+2k_2+3k_3-2$.

### 一元函数微分学应用-中值定理、微分等式和微分不等式

- 费马定理：设$f(x)$在点$x_0$处满足$\begin{cases}可导\\ 取极值 \end{cases}$，则$f'(x)=0$.
- 罗尔定理：设$f(x)$满足$\begin{cases}在[a,b] 上连续 \\ 在(a,b)上可导 \\f(a)=f(b) \end{cases}$，则存在$\xi \in(a,b)$，使得$f'(\xi)=0$.
- 设$f(x)$在$(a,b)$内可导，$\lim_{x\rightarrow a^+} {f(x)}=\lim_{x \to b^-}{f(x)}=A$，则在$(a,b)$内至少存在一点$\xi$，使$f'(\xi)=0$.
- 使用罗尔定理需要构造辅助函数$F(x)$.
    - 见到$f'(x)+f(x)\varphi' (x)$，令$F(x)=f(x)e^{\varphi(x)}$.
    - 见到 $f'(x)+f(x)$，令$F(x)=f(x)e^x$.
    - 见到$f'(x)-f(x)$，令$F(x)=f(x)e^{-x}$.
    - 见到$f'(x)+kf(x)$，令$F(x)=f(x)e^{kx}$.
    - $(uv)''=u''v+2u'v'+uv''$.
    - 见到$f(x)f'(x)$，令$F(x)=f^2(x)$. 
    - 见到 $[f'(x)]^2+f(x)f''(x)$，令$F(x)=f(x)f'(x)$.
- 拉格朗日中值定理，函数在$(a,b)$上可导，在$[a,b]$上连续

$$
f(b)-f(a)=f'(\xi)(b-a),\xi\in(a,b)
$$

- 带拉格朗日余项的$n$阶泰勒公式

$$
f(x)=f(x_0)+f'(x_0)(x-x_0)+...+\frac{1}{n!}f^{(n)}(x-x_0)^n \\
+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}
$$

- 柯西中值定理，条件同上

$$
\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\eta)}
$$

- 若$f(x)$在区间$I$上$n$阶可导，且$f^{(n)}(x)\not= 0$，即$f^{(n)}(x) = 0$无实根，于是$f(x)=0$至多有$n$个实根.

### 一元函数积分学的性质与概念

- 连续函数$f(x)$必有原函数$F(x)$.
- 含有第一类间断点和无穷间断点的函数$f(x)$在包含该间断点的区间内必没有原函数$F(x)$，没有原函数，则不定积分不存在.
- 区间有限，函数有界，则定积分存在.
- 可积函数必有界，即若定积分$\int_{a}^{b}f(x)dx$存在，则$f(x)$在$[a,b]$上必有界.
- $\int_{a}^{b}dx=b-a=L$，其中$L$是$[a,b]$的长度.
- 无论$a,b,c$大小如何，总有

$$
\int_{a}^{b}f(x)dx=\int_{a}^{c}f(x)dx+\int_{c}^{b}f(x)dx
$$

- 设$k_1$，$k_2$为常数，则

$$
\int_{a}^{b}k_1f(x)\pm k_2g(x)dx=k_1\int_{a}^{b}f(x)dx\pm k_2\int_{a}^{b}g(x)dx
$$

- 设$f(x)$在$[a,b]$上连续，则在$[a,b]$上至少存在一点$\xi$，使得

$$
\int_{a}^{b}f(x)dx=f(\xi)(b-a)
$$

- 变限积分的性质
    - 函数$f(x)$在$I$上可积，则函数$F(x)=\int_{a}^{x}f(t)dt$在$I$上连续.
    - 函数$f(x)$在$I$上连续，则函数$F(x)=\int_{a}^{x}f(t)dt$在$I$上可导，且$F'(x)=f(x)$.
    - 若$x=x_0\in I$是$f(x)$唯一的可去间断点，则$F(x)=\int_{a}^{x}f(t)dt$在$x_{0}$处可导，且$F'(x_0)=\lim_{x\rightarrow x_{0}}f(x)$.
    - 若$x=x_{0}\in I$是$f(x)$唯一的跳跃间断点，则$F(x)=\int_{a}^{x}f(t)dt$在$x_{0}$处不可导，且

$$
\begin{cases}F'_-(x_0)=\lim_{x\rightarrow x_0^-}f(x), \\F'_+(x_0)=\lim_{x\rightarrow x_0^+}f(x), \end{cases}
$$

- 两个重要结论

$$
\int_{0}^{1}\frac{1}{x^p}dx\begin{cases}收敛，0<p<1 \\
发散，p \ge1\end{cases}\\
\int_{1}^{+\infty}\frac{1}{x^p}dx\begin{cases} 收敛，p>1\\
发散，p\le1\end{cases}\\
当(ax+b)>k>0时，\int_{1}^{+\infty}\frac{1}{(ax+b)^p}dx依然满足\begin{cases}收敛，p>1\\
发散，p\le1\end{cases}
$$

- 当$f(x)$为奇函数，且$\int_{-\infty}^{+\infty}f(x)dx$收敛时

$$
\int_{-\infty}^{+\infty}f(x)dx=2\int_{0}^{+\infty}f(x)dx
$$

- 当$f(x)$为偶函数，且$\int_{-\infty}^{+\infty}f(x)dx$收敛时

$$
\int_{-\infty}^{+\infty}f(x)dx=0
$$

### 一元函数积分学的计算

- 基本积分公式

$$
\int a^xdx= \frac{a^x}{\ln a}+C\\
$$

$$
\int \tan x dx= -\ln |\cos x|+C\\
$$

$$
\int \cot x dx= \ln|\sin x| + C\\
$$

$$
\int \frac{1}{a^2+x^2}dx = \frac{1}{a}\arctan \frac{x}{a}+C(a>0)
$$

$$
\int \frac{1}{\sqrt{a^2-x^2}}dx = \arcsin\frac{x}{a}+C(a>0)
$$

$$
\int \sec xdx= \ln|\sec x +\tan x|+C\\
$$

$$
\int \csc dx= \ln|\csc x -\cot x|+C\\
$$

$$
\int \sec x \tan xdx= \sec x+C\\
$$

$$
\int \csc x \cot x dx = -\csc x+C\\
$$

$$
\int \frac{1}{x^2-a^2}dx = \frac{1}{2a}\ln{|\frac{x-a}{x+a}|}+C
$$

$$
\int \sqrt{a^2-x^2}dx = \frac{a^2}{2}\arcsin\frac{x}{a}+\frac{x}{2}\sqrt{a^2-x^2}+C
$$

$$
\int \tan^2xdx =\tan x -x +C
$$

$$
\int \cot^2xdx = -\cot x-x+C
$$

- 分部积分法，适用于对$\int vdu$积分较为容易的情景

$$
\int udv= uv - \int vdu\\
反 对 幂 三 指\\

u\leftarrow   \rightarrow v
$$

:::info 表格法求不定积分

求$\int(x^2+x)e^xdx$

作两行表格，第一行写$u$(易于求导的变量)，第二行写$v$(易于求原函数的变量)

|  |  |  | |  |
| :-: | :--: | :-: | :-: | :-: |
| $x^2+x$ | $2x+1$ | 2 | 0 | 求导 |
| $e^x$ | $e^x$ | $e^x$ | $e^x$ | 求原函数 |

从第一列开始，与右下角项进行相乘，采用加减交替的形式算总和。
$$
∫(x2+x)exdx\int(x^2+x)e^xdx\\
=(x^2+x)e^x-(2x+1)e^x+2e^x+C
$$
:::