<!--
 * @Author: PlanC
 * @Date: 2020-08-20 13:58:36
 * @LastEditTime: 2020-08-20 14:15:25
 * @FilePath: \Screeps\commit.md
-->

程序员养蛊模拟器

*这篇指南主要分为三部分：介绍游戏、购买建议、编程建议及工具提供。最后，还有一点非常“邪典”的故事进行分享。*

 Tip:另外，建议先上[官网](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://screeps.com/)试玩，不要直接用steam客户端游戏，省得记录了时间，被劝退时不好退款。**玩这个游戏需要阅读大量英文API以及一定编程能力，非程序员和英文水平不佳者请慎重购买**，至于编程语言的问题...我不觉得这是个什么大的障碍。毕竟程序员这个群体，自学能力还是要有的(被逼的)，一周上手一门语言应该是常态。



\>简介

Screeps:[官方网站](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://screeps.com/)，是一款多人在线沙盒RTS游戏，唯一不同的是，这是一款面向程序员游戏。

> \#Discussions_QuoteBlock_Author
>
> The world's first MMO sandbox game for programmers

Screep其实意味着'Scripting Creeps'，玩家与这个游戏唯一的互动方式，是通过编写自己的AI脚本，而这些AI将运行在服务器上，全年365天无休地进行模拟。

游戏经过两年的发展，游戏元素丰富到了具备了极佳的可玩性：能源采集、矿物采集、地区控制、十余种功能建筑、全球贸易市场、战争、塔防、通过化学合成新的元素(想起被化学支配的恐怖了么)、生物改造以及正在调整测试的PVE模式(PowerBank Rob,on issue)。



\>编程语言

游戏推荐使用JavaScript进行游玩，但是Python、Rust、Kotlin等脚本语言也是支持的，同时C等编译语言也可以通[Binary Library](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://docs.screeps.com/modules.html#Binary-modules)的形式进行游戏编程；但是出于编程及效率考虑，我们的做法是顶层使用JS作为胶水，底层使用C编写算法库进行一些搜索算法的运算(游戏也提供了一些用C实现的基本搜索算法，所以底层编码技能并不是必须的)。可以在[这里](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://docs.screeps.com/third-party.html)找到具体的解释。



\>这个圣诞正是入坑时机

在2018.12.15前，游戏主要有三个镜面(Shard 0~2)，每个镜面具有70k个可控制地区，然而已经被各种大牛瓜分得差不多了。但是游戏目前上线了新的“镜面3”，在这个镜面里，所有玩家都只有20CPU的限制(无论你是否订阅了包月"Full CPU")，可以说大家都是从零起跑。



\>关于回本

这是一个很有意思的事情，它在理论上可行，甚至可以达成稳定的收益。
游戏中可以通过内部市场获得[Subscription Token](steam://openurl/https://steamcommunity.com/market/listings/464350/Subscription Token)，而它又可以在Steam市场进行售卖。而你的AI几乎可以无限制的挖矿下去(只要代码写得好，在Shard3就可以达成免费白嫖)。
所以，AI挖矿->游戏内市场点数->Subscription Token->Steam钱包。妙就妙在，这游戏只要写完AI你大部分时候就不用管了，所以挂个十年八年，等到你的帝国达到一定体积，几乎可以按周产生收益。



\>这是程序员的大蛊

之所以说这是程序员的蛊，因为这个游戏的决胜只取决于你的脚本。你的AI的每次进化和迭代，其实是你自身的进化。有蛊就一定有牺牲品，你的AI可能顶不过更优秀的种群而被淘汰，于是你就会不断想办法去优化你的AI，甚至涉及之前根本不想涉及的算法——这种从游戏而来的“学习源动力”非常微妙，但无论如何这确实最终提升了你自身的能力。

开局一个脚本，让后放着让AI自己跑，等自己忙完了回来看看，哦哟，不错，挖了多少多少矿，GCL升了多少，简直太适合我们这种开始养老的人了；或者在周末编写战争脚本，谋划着对邻居的一场突袭，都是非常有意思的事情。可以说，这个游戏既提供了“挂机”式的悠闲，也提供略带“刺激”的参与模式，无论你最近是否有空跟进游戏进程，你都在无形中参与到了游戏的过程中。

从某种意义上，自己写的AI就像自己养的宠物一样，它会自己生存、繁衍；同时，当你觉得它太蠢了的时候，你可以迭代你的脚本教会它们新的东西。唯一不同的是，你不需要铲屎。

编程，特别是编写属于自己的代码，对我来说一直都是一件非常爽的事。我编写自己的代码块、使用别人的API，就像小时候搭积木，把积木一块一块累积起来，最终搭建出自己的世界一样。
更爽的是，参与这个游戏，就意味着在旁人看来你无时无刻都在写代码而不是在“玩游戏”(具体方法见最后)。上班摸鱼，我特喵爽爆。



\>游戏购买

游戏主要在Steam上售卖，分为两个部分：“本体”和“订阅”。
本体提供了你访问官方服务器和搭建私人服务器的基本功能，唯一的限制是20CPU的运算限制，而“订阅”则允许你解锁无限的可运行CPU资源(在镜面3不起效)。

**所以，我建议的购买模式是【只购买本体】，然后到镜面3游玩，反正在这里大家都是20CPU的限制，起跑线都是一样的。**等到熟悉游戏、积累到一定GCL等级之后，再考虑订阅无限的CPU，去其它镜面开疆扩土。下面一节会给出订阅与不订阅的考虑标准。



\>订阅与不订阅，pay 2 win?

在镜面0、1和镜面2，某种意义上是的，但从我个人角度来看，这个游戏真正能让你制胜的是时间和AI效率；订阅虽然能让你解锁无限的CPU，但是如果你的GCL上不去，你的CPU依然是存在限制的，详细可以参见：[How does CPU limit work](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://docs.screeps.com/cpu-limit.html)以及[Global Control Level](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://docs.screeps.com/control.html#Global-Control-Level)



\>文档及第三方工具

游戏的文档及API：
[游戏文档](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://docs.screeps.com/index.html)、[API文档](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://docs.screeps.com/api/)

同时，我强烈建议阅读[这篇文章](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://docs.screeps.com/architecture.html)，会对游戏的运行机制有极大的帮助，对优化代码效率也有作用。当然，Github的助力也是必不可少的，阅读大佬的代码本身也是非常有意思的事情：[TooAngel](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://github.com/TooAngel/screeps)

最近和朋友在镜面3玩得不亦乐乎，但是游戏自带的编辑器确实很蛋疼——一来是卡，二来是网络不好的话会有谜之回滚。所以，想要真正畅玩这个游戏，我不建议用Steam下载的游戏客户端或Web端进行游戏。



\>正确的游玩方式

我建议的游(bian)玩(cheng)方式是，WebStorm+Grunt+[ScreepsAutocomplete](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://github.com/Garethp/ScreepsAutocomplete)。
当然，WebStorm并不是必备的，相信各位专业前端可能会选择ATOM或是VS Code、ST之类编辑器，毕竟比较“优雅”，各取所好吧。

在拥有Node.js环境的情况下，朋友帮忙集成了这个环境和相应配置：
从此，编码只需要在本地，而监视游戏运行情况只需要打开Web端就可以了，无需steam，随时随地观察和调整你的AI。

Screep游戏本地编码环境(为避免大量外链导致锁仓，请手动复制链接到浏览器访问)：

- (朋友源库@Gitee) [https://gitee.com/shenpibaipao/ScreepLocalCodeIDE](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://gitee.com/shenpibaipao/ScreepLocalCodeIDE)
- (网友备份库@Github) [https://github.com/WhiteRobe/ScreepLocalCodingEnv](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://github.com/WhiteRobe/ScreepLocalCodingEnv)

或直接使用Git拉取仓库：

git clone git@gitee.com:shenpibaipao/ScreepLocalCodeIDE.git git clone git@github.com:WhiteRobe/ScreepLocalCodingEnv.git



\>老板来了也不用Alt+Tab了

真正的程序员是不需要界面的：Grafana是一款数据可视化工具，要想视奸的AI的活动，其实某种意义上只需要各类统计数据就行了，所以这时候你连Web端都不用打开了。(需要这个插件的支持：[ScreepsPlus Grafana](steam://openurl_external/https://steamcommunity.com/linkfilter/?url=https://screepspl.us/services/grafana/)）

**上班玩游戏不再是梦想，无时无刻都是公司眼中的“模范员工”！**



\---------
更新：

\>关于世界观

Screeps这个游戏太过于硬核，非程序员直接劝退，我不会强行安利这个游戏给各位。

但我发现了一些很有意思的事情，分享给大家。先说一些背景，方便理解下面那些脑洞大开的事：



- ①Screeps这个游戏的玩法就是编写AI脚本(对的，就是写代码)，让AI去采集资源、扩张、提炼元素、交易以及发动战争。游戏世界分为若干个镜面，每个镜面间会有传送门进行串联。每个镜面中由NxN个扇区组成，当一个边缘扇区没有任何玩家时，系统会自动将这个扇区清理和回收，以节省系统资源；当扇区数目不足时，再在边缘扩充扇区。



- ②游戏官服的运行速度取决于CPU的运算能力，其标准单位时间为1Tick，根据服务器的负担，1Tick会约等于现实世界中的若干秒；简而言之，当一个镜面(服务器)的玩家过多或世界过大时，1Tick换算成现实时间就越长，也就是运行越慢、延迟越高。


**现在开始说故事：**

镜面0是游戏中最老牌的服务器，玩家数目巨多且随着世界的扩展，因此1Tick对应的时间非常之长。一部分老牌玩家受不了这么长的执行时间，因此就从镜面0撤走，去往镜面1——但这个代价是非常大的，几乎等同于存档归零。

当然，镜面0的玩家数目也会因此减少；而这毕竟是个MMO游戏，谁都不希望自己的服务器人烟稀少。

于是，镜面0中部分疯狂的玩家注意到了规则①，于是他们组成了一个新的组织：The Langoliers(蟹爪，或者意译成“归零者”)，目标是协助内迁、摧毁所有镜面0边缘的玩家帝国，迫使镜面向内塌缩，以减小服务器负担。当然，如果组织内部成员随着镜面的塌缩而演变为边缘国家时，要么选择内迁，要么一起摧毁，没有例外。

他们这么做的目的是：既然玩家因为受不了镜面0的高延迟而搬走，那么为了拯救镜面0的生态，干脆反其道而行——我来帮镜面0回收垃圾(减小世界尺寸以减小延迟)，然后吸引玩家回归，同时有秩序地建立世界而不是过度扩充扇区。

出于同样一个"拯救镜面0生态"的目的，另一个联盟成立了——The Church of The End(末日教会)。他们的目标是，消灭所有不属于镜面0的国家。他们会狂热地通过传送门去往镜面1，消灭“叛徒”，迫使这些玩家回到镜面0建立帝国、加入教会。

莫名其妙中，一种谜之世界观居然被建立起来了。



> \#Discussions_QuoteBlock_Author
>
> 来源：
>
>
>
> https://blog.screeps.com/2017/12/world-review-q3-2017/#more


\------------------------
有API的地方就有世界，有世界的地方就有脑洞。
这硬核游戏还能这么玩，也是很刺激了。
