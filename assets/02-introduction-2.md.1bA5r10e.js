import{_ as d,D as i,o as l,c as n,k as t,a as m,I as a,w as e,R as o}from"./chunks/framework.ZzQqrmOI.js";const Q="/ccp-learning/assets/image_zfbRzZ6FXZ.DyjUzv5j.png",T="/ccp-learning/assets/image_foi09zhwPA.roK6NXK1.png",c="/ccp-learning/assets/image_QB2yIVsurt.1AioxwiW.png",O=JSON.parse('{"title":"01 概论 (3~4)","description":"","frontmatter":{},"headers":[],"relativePath":"02-introduction-2.md","filePath":"02-introduction-2.md","lastUpdated":1729696289000}'),p={name:"02-introduction-2.md"},f=o('<h1 id="_01-概论-3-4" tabindex="-1">01 概论 (3~4) <a class="header-anchor" href="#_01-概论-3-4" aria-label="Permalink to &quot;01 概论 (3\\~4)&quot;">​</a></h1><h2 id="计算机系统" tabindex="-1">计算机系统 <a class="header-anchor" href="#计算机系统" aria-label="Permalink to &quot;计算机系统&quot;">​</a></h2><p>一个完整的计算机系统包含硬件系统和软件系统两大部分。硬件通常是指一切看得见、摸得到的设备实体；软件通常是泛指各类程序和文件，它们实际上是由一些算法以及其在计算机中的表示所构成的。</p><h3 id="硬件与软件的关系" tabindex="-1">硬件与软件的关系 <a class="header-anchor" href="#硬件与软件的关系" aria-label="Permalink to &quot;硬件与软件的关系&quot;">​</a></h3><p>硬件是计算机系统的物质基础，软件是计算机系统的灵魂。硬件和软件是相辅相成的，不可分割的整体。当前计算机的硬件和软件正朝着互相渗透，互相融合的方向发展，在计算机系统中没有一条明确的硬件与软件的分界线。硬件和软件之间的界面是浮动的，对于程序设计人员来说，硬件和软件在逻辑上是等价的。</p><blockquote><p><strong>固件</strong></p><p>固件是指那些存储在能永久保存信息的器件（如 ROM）中的程序，是具有软件功能的硬件。固件的性能指标介于硬件与软件之间，吸收了软、硬件各自的优点,其执行速度快于软件，灵活性优于硬件，是软、硬件结合的产物。</p><p>对比理解：RAM、ROM、EPROM</p></blockquote><h3 id="系列机和软件养容" tabindex="-1">系列机和软件养容 <a class="header-anchor" href="#系列机和软件养容" aria-label="Permalink to &quot;系列机和软件养容&quot;">​</a></h3><p>系列机是指一个厂家生产的，具有相同的系统结构，但具有不同组成和实现的一系列不同型号的机器。</p><p>系列机的软件兼容分为向上兼容、向下兼容、向前兼容和向后兼容 4 种。向上（下）兼容指的是按某档次机器编制的程序，不加修改就能运行在比它更高（低）档的机器上；向前（后）兼容是指按某个时期投入市场的某种型号机器编制的程序，不加修改就能运行在它之前（后）投入市场的机器上。</p><h3 id="计算机系统的多层次结构" tabindex="-1">计算机系统的多层次结构 <a class="header-anchor" href="#计算机系统的多层次结构" aria-label="Permalink to &quot;计算机系统的多层次结构&quot;">​</a></h3><p>现代计算机系统是一个硬件与软件组成的综合体， 可以把它看作按功能划分的多级层次结构。</p><p><img src="'+Q+'" alt=""></p><ul><li>第零级是硬联逻辑级，这是计算机的内核，由门、触发器等逻辑电路组成。</li><li>第一级是微程序机器级。这级的机器语言是微指令集，用微指令编写的微程序一般是直接由硬件执行的。</li><li>第二级是传统机器级。这级的机器语言是该机的指令集，用机器指令编写的程序可以由微程序进行解释。</li><li>第三级是操作系统机器级。从操作系统的基本功能来看，一方面它要直接管理传统机器中的软硬件资源，另一方面它又是传统机器的延伸。</li><li>第四级是汇编语言机器级。这级的机器语言是汇编语言，完成汇编语言翻译的程序称为汇编程序。</li><li>第五级是高级语言机器级。这级的机器语言就是各种高级语言，通常用编译程序来完成高级语言翻译的工作。</li><li>第六级是应用语言机器级。这一级是为了使计算机满足某种用途而专门设计的，因此这一级语言就是各种面向问题的应用语言。</li></ul><p>把计算机系统按功能划分成多级层次结构，有利于正确理解计算机系统的工作过程，明确软件、硬件在计算机系统中的地位和作用。</p><h3 id="计算机系统的国产化替代" tabindex="-1">计算机系统的国产化替代 <a class="header-anchor" href="#计算机系统的国产化替代" aria-label="Permalink to &quot;计算机系统的国产化替代&quot;">​</a></h3><p>信创项目（工程）：党政机关电子公文系统安全可靠应用。</p><p>信创项目（工程） ← 安可工程 ← 国产化替代</p><p>信创项目的信息系统虽然不一定是涉密系统，但其敏感性极高，对外均是保密的。</p><h2 id="计算机的工作过程和主要性能指标" tabindex="-1">计算机的工作过程和主要性能指标 <a class="header-anchor" href="#计算机的工作过程和主要性能指标" aria-label="Permalink to &quot;计算机的工作过程和主要性能指标&quot;">​</a></h2><p>为使计算机按预定要求工作，首先要编制程序。程序是一个特定的指令序列，它告诉计算机要做哪些事，按什么步骤去做。指令是一组二进制信息的代码，用来表示计算机所能完成的基本操作。</p><h3 id="计算机的工作过程" tabindex="-1">计算机的工作过程 <a class="header-anchor" href="#计算机的工作过程" aria-label="Permalink to &quot;计算机的工作过程&quot;">​</a></h3>',21),h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.135ex",height:"1.781ex",role:"img",focusable:"false",viewBox:"0 -705 5363.7 787","aria-hidden":"true"},x=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",style:{"stroke-width":"3"}})]),t("g",{"data-mml-node":"mo",transform:"translate(751.2,0)"},[t("path",{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",style:{"stroke-width":"3"}})]),t("g",{"data-mml-node":"mi",transform:"translate(1751.4,0)"},[t("path",{"data-c":"1D44F",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z",style:{"stroke-width":"3"}})]),t("g",{"data-mml-node":"mo",transform:"translate(2402.7,0)"},[t("path",{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",style:{"stroke-width":"3"}})]),t("g",{"data-mml-node":"mi",transform:"translate(3402.9,0)"},[t("path",{"data-c":"1D450",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",style:{"stroke-width":"3"}})]),t("g",{"data-mml-node":"mo",transform:"translate(4113.7,0)"},[t("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),t("g",{"data-mml-node":"mo",transform:"translate(4891.7,0)"},[t("path",{"data-c":"3F",d:"M226 668Q190 668 162 656T124 632L114 621Q116 621 119 620T130 616T145 607T157 591T162 567Q162 544 147 529T109 514T71 528T55 566Q55 625 100 661T199 704Q201 704 210 704T224 705H228Q281 705 320 692T378 656T407 612T416 567Q416 503 361 462Q267 395 247 303Q242 279 242 241V224Q242 205 239 202T222 198T205 201T202 218V249Q204 320 220 371T255 445T292 491T315 537Q317 546 317 574V587Q317 604 315 615T304 640T277 661T226 668ZM162 61Q162 89 180 105T224 121Q247 119 264 104T281 61Q281 31 264 16T222 1Q197 1 180 16T162 61Z",style:{"stroke-width":"3"}})])])],-1),u=[x],_=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"a"),t("mo",null,"+"),t("mi",null,"b"),t("mo",null,"−"),t("mi",null,"c"),t("mo",null,"="),t("mo",null,"?")],-1),H=o('<p>计算机的控制器将控制指令逐条地执行，最终得到正确的结果，步骤如下：</p><ol><li>执行取数指令，从主存 5 号单元取出数 a，送入累加寄存器中。</li><li>执行加法指令，将累加寄存器中的内容 a 与从主存 6 号单元取出的数 b —起送到 ALU 中相加，结果 a+b 保留在累加寄存器中。</li><li>执行减法指令，将累加寄存器中的内容 a+b 与从主存 7 号单元取出的数 b 一起送到 ALU 中相减，结果 a+b-c 保留在累加寄存器中。</li><li>执行存数指令，把累加寄存器的内容 a+b-c 存至主存 8 号单元。</li><li>执行停机指令，计算机停止工作。</li></ol><p><img src="'+T+'" alt=""></p><h3 id="计算机的主要性能指标" tabindex="-1">计算机的主要性能指标 <a class="header-anchor" href="#计算机的主要性能指标" aria-label="Permalink to &quot;计算机的主要性能指标&quot;">​</a></h3><p>为了进一步了解计算机的特性，全面衡量一台计算机的性能，下面介绍计算机的主要性能指标。</p>',5),g=o('<li><p><strong>机器字长</strong></p><p>机器字长是指参与运算的数的基本位数，它是由加法器、寄存器的位数决定的，所以机器字长一般等于内部寄存器的大小。字长标志着精度，字长越长，计算的精度就越高。</p><p>在计算机中为了更灵活地表达和处理信息，以字节（Byte）为基本单位，字节用大写字母 B 表示。一个字节等于 8 位二进制位（bit），位用小写字母 b 表示。</p></li><li><p><strong>数据通路宽度</strong></p><p>数据总线一次所能并行传送信息的位数，称为数据通路宽度（指外部数据总线的宽度）。</p></li><li><p><strong>主存容量</strong></p><p>一个主存储器所能存储的全部信息量称为主存容量。通常，以字节数来表示存储容量，这样的计算机称为字节编址的计算机。</p><p><img src="'+c+'" alt=""></p><p>计算机的主存容量越大，存放的信息就越多，处理问题的能力就越强。</p></li>',3),w=t("p",null,[t("strong",null,"运算速度")],-1),y=t("p",null,"计算机的运算速度与许多因素有关，如机器的主频、执行什么样的操作以及主存本身的速度等。",-1),V=t("li",null,[t("p",null,"吞吐量和响应时间：吞吐量是指系统在单位时间内处理请求的数量。响应时间是指系统对请求作出响应的时间。")],-1),k=t("li",null,[t("p",null,"主频和 CPU 时钟周期：CPU 的主频又称为时钟频率，表示在 CPU 内数字脉冲信号振荡的速度。")],-1),b=t("li",null,[t("p",null,"CPI （Cycles per Instruction) ：是指每条指令执行所用的时钟周期数。")],-1),v=t("p",null,"CPU 执行时间：",-1),M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.059ex"},xmlns:"http://www.w3.org/2000/svg",width:"53.936ex",height:"5.285ex",role:"img",focusable:"false",viewBox:"0 -1426 23839.6 2336","aria-hidden":"true"},L=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"43",d:"M56 342Q56 428 89 500T174 615T283 681T391 705Q394 705 400 705T408 704Q499 704 569 636L582 624L612 663Q639 700 643 704Q644 704 647 704T653 705H657Q660 705 666 699V419L660 413H626Q620 419 619 430Q610 512 571 572T476 651Q457 658 426 658Q322 658 252 588Q173 509 173 342Q173 221 211 151Q232 111 263 84T328 45T384 29T428 24Q517 24 571 93T626 244Q626 251 632 257H660L666 251V236Q661 133 590 56T403 -21Q262 -21 159 83T56 342Z",style:{"stroke-width":"3"}}),t("path",{"data-c":"50",d:"M130 622Q123 629 119 631T103 634T60 637H27V683H214Q237 683 276 683T331 684Q419 684 471 671T567 616Q624 563 624 489Q624 421 573 372T451 307Q429 302 328 301H234V181Q234 62 237 58Q245 47 304 46H337V0H326Q305 3 182 3Q47 3 38 0H27V46H60Q102 47 111 49T130 61V622ZM507 488Q507 514 506 528T500 564T483 597T450 620T397 635Q385 637 307 637H286Q237 637 234 628Q231 624 231 483V342H302H339Q390 342 423 349T481 382Q507 411 507 488Z",transform:"translate(722,0)",style:{"stroke-width":"3"}}),t("path",{"data-c":"55",d:"M128 622Q121 629 117 631T101 634T58 637H25V683H36Q57 680 180 680Q315 680 324 683H335V637H302Q262 636 251 634T233 622L232 418V291Q232 189 240 145T280 67Q325 24 389 24Q454 24 506 64T571 183Q575 206 575 410V598Q569 608 565 613T541 627T489 637H472V683H481Q496 680 598 680T715 683H724V637H707Q634 633 622 598L621 399Q620 194 617 180Q617 179 615 171Q595 83 531 31T389 -22Q304 -22 226 33T130 192Q129 201 128 412V622Z",transform:"translate(1403,0)",style:{"stroke-width":"3"}})])]),t("g",{"data-mml-node":"mi",transform:"translate(2153,0)"},[t("text",{"data-variant":"normal",transform:"scale(1,-1)","font-size":"884px","font-family":"serif"},"执")]),t("g",{"data-mml-node":"mi",transform:"translate(3153,0)"},[t("text",{"data-variant":"normal",transform:"scale(1,-1)","font-size":"884px","font-family":"serif"},"行")]),t("g",{"data-mml-node":"mi",transform:"translate(4153,0)"},[t("text",{"data-variant":"normal",transform:"scale(1,-1)","font-size":"884px","font-family":"serif"},"时")]),t("g",{"data-mml-node":"mi",transform:"translate(5153,0)"},[t("text",{"data-variant":"normal",transform:"scale(1,-1)","font-size":"884px","font-family":"serif"},"间")]),t("g",{"data-mml-node":"mo",transform:"translate(6430.8,0)"},[t("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),t("g",{"data-mml-node":"mfrac",transform:"translate(7486.6,0)"},[t("g",{"data-mml-node":"mrow",transform:"translate(220,676)"},[t("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"43",d:"M56 342Q56 428 89 500T174 615T283 681T391 705Q394 705 400 705T408 704Q499 704 569 636L582 624L612 663Q639 700 643 704Q644 704 647 704T653 705H657Q660 705 666 699V419L660 413H626Q620 419 619 430Q610 512 571 572T476 651Q457 658 426 658Q322 658 252 588Q173 509 173 342Q173 221 211 151Q232 111 263 84T328 45T384 29T428 24Q517 24 571 93T626 244Q626 251 632 257H660L666 251V236Q661 133 590 56T403 -21Q262 -21 159 83T56 342Z",style:{"stroke-width":"3"}}),t("path",{"data-c":"50",d:"M130 622Q123 629 119 631T103 634T60 637H27V683H214Q237 683 276 683T331 684Q419 684 471 671T567 616Q624 563 624 489Q624 421 573 372T451 307Q429 302 328 301H234V181Q234 62 237 58Q245 47 304 46H337V0H326Q305 3 182 3Q47 3 38 0H27V46H60Q102 47 111 49T130 61V622ZM507 488Q507 514 506 528T500 564T483 597T450 620T397 635Q385 637 307 637H286Q237 637 234 628Q231 624 231 483V342H302H339Q390 342 423 349T481 382Q507 411 507 488Z",transform:"translate(722,0)",style:{"stroke-width":"3"}}),t("path",{"data-c":"55",d:"M128 622Q121 629 117 631T101 634T58 637H25V683H36Q57 680 180 680Q315 680 324 683H335V637H302Q262 636 251 634T233 622L232 418V291Q232 189 240 145T280 67Q325 24 389 24Q454 24 506 64T571 183Q575 206 575 410V598Q569 608 565 613T541 627T489 637H472V683H481Q496 680 598 680T715 683H724V637H707Q634 633 622 598L621 399Q620 194 617 180Q617 179 615 171Q595 83 531 31T389 -22Q304 -22 226 33T130 192Q129 201 128 412V622Z",transform:"translate(1403,0)",style:{"stroke-width":"3"}})])]),t("g",{"data-mml-node":"mtext",transform:"translate(2153,0)"},[t("path",{"data-c":"A0",d:"",style:{"stroke-width":"3"}}),t("text",{"data-variant":"normal",transform:"translate(250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"时"),t("text",{"data-variant":"normal",transform:"translate(1250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"钟"),t("text",{"data-variant":"normal",transform:"translate(2250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"周"),t("text",{"data-variant":"normal",transform:"translate(3250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"期"),t("text",{"data-variant":"normal",transform:"translate(4250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"数"),t("path",{"data-c":"A0",d:"",transform:"translate(5250,0)",style:{"stroke-width":"3"}})])]),t("g",{"data-mml-node":"mtext",transform:"translate(1796.5,-710)"},[t("path",{"data-c":"A0",d:"",style:{"stroke-width":"3"}}),t("text",{"data-variant":"normal",transform:"translate(250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"时"),t("text",{"data-variant":"normal",transform:"translate(1250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"钟"),t("text",{"data-variant":"normal",transform:"translate(2250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"频"),t("text",{"data-variant":"normal",transform:"translate(3250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"率"),t("path",{"data-c":"A0",d:"",transform:"translate(4250,0)",style:{"stroke-width":"3"}})]),t("rect",{width:"7853",height:"60",x:"120",y:"220"})]),t("g",{"data-mml-node":"mo",transform:"translate(15857.3,0)"},[t("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),t("g",{"data-mml-node":"mfrac",transform:"translate(16913.1,0)"},[t("g",{"data-mml-node":"mrow",transform:"translate(220,676)"},[t("g",{"data-mml-node":"mtext"},[t("path",{"data-c":"A0",d:"",style:{"stroke-width":"3"}}),t("text",{"data-variant":"normal",transform:"translate(250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"指"),t("text",{"data-variant":"normal",transform:"translate(1250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"令"),t("text",{"data-variant":"normal",transform:"translate(2250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"数"),t("path",{"data-c":"A0",d:"",transform:"translate(3250,0)",style:{"stroke-width":"3"}})]),t("g",{"data-mml-node":"mo",transform:"translate(3722.2,0)"},[t("path",{"data-c":"D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z",style:{"stroke-width":"3"}})]),t("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(4722.4,0)"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"43",d:"M56 342Q56 428 89 500T174 615T283 681T391 705Q394 705 400 705T408 704Q499 704 569 636L582 624L612 663Q639 700 643 704Q644 704 647 704T653 705H657Q660 705 666 699V419L660 413H626Q620 419 619 430Q610 512 571 572T476 651Q457 658 426 658Q322 658 252 588Q173 509 173 342Q173 221 211 151Q232 111 263 84T328 45T384 29T428 24Q517 24 571 93T626 244Q626 251 632 257H660L666 251V236Q661 133 590 56T403 -21Q262 -21 159 83T56 342Z",style:{"stroke-width":"3"}}),t("path",{"data-c":"50",d:"M130 622Q123 629 119 631T103 634T60 637H27V683H214Q237 683 276 683T331 684Q419 684 471 671T567 616Q624 563 624 489Q624 421 573 372T451 307Q429 302 328 301H234V181Q234 62 237 58Q245 47 304 46H337V0H326Q305 3 182 3Q47 3 38 0H27V46H60Q102 47 111 49T130 61V622ZM507 488Q507 514 506 528T500 564T483 597T450 620T397 635Q385 637 307 637H286Q237 637 234 628Q231 624 231 483V342H302H339Q390 342 423 349T481 382Q507 411 507 488Z",transform:"translate(722,0)",style:{"stroke-width":"3"}}),t("path",{"data-c":"49",d:"M328 0Q307 3 180 3T32 0H21V46H43Q92 46 106 49T126 60Q128 63 128 342Q128 620 126 623Q122 628 118 630T96 635T43 637H21V683H32Q53 680 180 680T328 683H339V637H317Q268 637 254 634T234 623Q232 620 232 342Q232 63 234 60Q238 55 242 53T264 48T317 46H339V0H328Z",transform:"translate(1403,0)",style:{"stroke-width":"3"}})])])]),t("g",{"data-mml-node":"mtext",transform:"translate(1213.2,-710)"},[t("path",{"data-c":"A0",d:"",style:{"stroke-width":"3"}}),t("text",{"data-variant":"normal",transform:"translate(250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"时"),t("text",{"data-variant":"normal",transform:"translate(1250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"钟"),t("text",{"data-variant":"normal",transform:"translate(2250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"频"),t("text",{"data-variant":"normal",transform:"translate(3250,0) scale(1,-1)","font-size":"884px","font-family":"serif"},"率"),t("path",{"data-c":"A0",d:"",transform:"translate(4250,0)",style:{"stroke-width":"3"}})]),t("rect",{width:"6686.4",height:"60",x:"120",y:"220"})])])],-1),P=[L],Z=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",{"data-mjx-auto-op":"false"},"CPU")]),t("mi",{mathvariant:"normal"},"执"),t("mi",{mathvariant:"normal"},"行"),t("mi",{mathvariant:"normal"},"时"),t("mi",{mathvariant:"normal"},"间"),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",{"data-mjx-auto-op":"false"},"CPU")]),t("mtext",null," 时钟周期数 ")]),t("mtext",null," 时钟频率 ")]),t("mo",null,"="),t("mfrac",null,[t("mrow",null,[t("mtext",null," 指令数 "),t("mo",null,"×"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",{"data-mjx-auto-op":"false"},"CPI")])]),t("mtext",null," 时钟频率 ")])],-1),z=t("li",null,[t("p",null,[t("strong",null,"MIPS 和 MFLOPS")]),t("p",null,"MlPS(Million Instructions per Second) 表示每秒执行多少百万条指令。")],-1);function A(C,q,D,j,S,R){const r=i("mjx-assistive-mml"),s=i("mjx-container");return l(),n("div",null,[f,t("p",null,[m("例如，计算"),a(s,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:e(()=>[(l(),n("svg",h,u)),a(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:e(()=>[_]),_:1})]),_:1}),m("（设 a、b、c 为已知的 3 个数，分别存放在主存的 5〜7 号单元中，结果将存放在主存的 8 号单元）。")]),H,t("ol",null,[g,t("li",null,[w,y,t("ul",null,[V,k,b,t("li",null,[v,a(s,{class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},{default:e(()=>[(l(),n("svg",M,P)),a(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:e(()=>[Z]),_:1})]),_:1})])])]),z])])}const U=d(p,[["render",A]]);export{O as __pageData,U as default};
