import{_ as Q,D as l,o as t,c as e,k as a,I as i,w as o,R as s}from"./chunks/framework.XJWvSVd6.js";const d="/assets/image_XFnXmNfFCs.bNo9Cbri.png",h="/assets/image_9Baif46xo6.D2bza5lg.png",p="/assets/image_EtHuVeyeL9.8PJ8Qk94.png",c="/assets/image_bVULjXOOHQ.Bwn2xl8x.png",m="/assets/image_sBezGaPus7.WdO2_wFY.png",R=JSON.parse('{"title":"07 总线 (1~2)","description":"","frontmatter":{},"headers":[],"relativePath":"16-bus-1.md","filePath":"16-bus-1.md","lastUpdated":1703696768000}'),u={name:"16-bus-1.md"},T=s('<h1 id="_07-总线-1-2" tabindex="-1">07 总线 (1~2) <a class="header-anchor" href="#_07-总线-1-2" aria-label="Permalink to &quot;07 总线 (1\\~2)&quot;">​</a></h1><p>大多数计算机系统中，无论是计算机内部各部分之间，还是计算机与外部设备之间，数据传送都是通过总线（Bus）进行的。可以说，总线是计算机及其系统的重要组成部分。本章介绍总线的有关概念、总线仲裁方法、总线操作定时与常见总线标准。</p><p>本章学习内容：</p><ul><li>7.1 总线概述</li><li>7.2 总线仲裁</li><li>7.3 总线定时控制</li><li>7.4 总线标准</li></ul><p>本章学习要求：</p><ul><li>理解：总线的基本概念</li><li>了解：总线的分类</li><li>掌握：总线的性能指标</li><li>理解：总线集中仲裁方式</li><li>了解：总线定时控制方式</li><li>了解：系统总线标准</li><li>了解：外部总线标准</li></ul><p>总线是一组能为多个部件分时共享的公共信息传送线路。共享是指总线上可以挂接多个部件，各个部件之间相互交换的信息都可以通过这组公共线路传送；分时是指同一时刻总线上只能传送一个部件发送的信息。</p><h2 id="总线概述" tabindex="-1">总线概述 <a class="header-anchor" href="#总线概述" aria-label="Permalink to &quot;总线概述&quot;">​</a></h2><h3 id="总线的基本概念" tabindex="-1">总线的基本概念 <a class="header-anchor" href="#总线的基本概念" aria-label="Permalink to &quot;总线的基本概念&quot;">​</a></h3><p>总线采用分时共享技术，当总线空闲（所有部件都以高阻状态连接在总线上）时，如果有一个部件要与目的部件通信，则发起通信的部件驱动总线，发出地址和数据。其他以高阻状态连接在总线上的部件如果收到与自己相符的地址信息后，即接收总线上的数据。发送部件完成通信后，将总线让出（输出变为高阻态）。</p><h4 id="三态门和总线电路" tabindex="-1">三态门和总线电路 <a class="header-anchor" href="#三态门和总线电路" aria-label="Permalink to &quot;三态门和总线电路&quot;">​</a></h4><p>所谓高阻状态又称为浮空状态，输出呈高阻状态即相当于输出开路（隔断），输出端对地的电阻无限大，与外界断开联系。具备高阻状态的门电路称为三态门，即具有 3 种逻辑状态（逻辑“0”、逻辑“1”和高阻状态）的门电路。三态门除了正常的输入端和输出端之外，还有一个控制端 G（或 G）。</p><h4 id="总线事务" tabindex="-1">总线事务 <a class="header-anchor" href="#总线事务" aria-label="Permalink to &quot;总线事务&quot;">​</a></h4><p>通常把在总线上一对设备之间的一次信息交换过程称为一个“总线事务”，把发出总线事务请求的部件称为主设备，与主设备进行信息交换的对象称为从设备。例如 CPU 要求读取存储器中某单元的数据，则 CPU 是主设备，而存储器是从设备。总线事务类型通常根据它的操作性质来定义，典型的总线事务类型有“存储器读”、“存储器写”、“I/O 读”、“I/O 写”、“中断响应”等，一次总线事务简单来说包括两个阶段：地址阶段和数据阶段。</p><h4 id="总线使用权" tabindex="-1">总线使用权 <a class="header-anchor" href="#总线使用权" aria-label="Permalink to &quot;总线使用权 &amp;#x20;&quot;">​</a></h4><p>主设备发出总线请求并获得总线使用权后，就立即开始向从设备进行一次信息传送。这种以主设备为参考点，向从设备发送信息或接收从设备送来的信息的工作关系，称为主从关系。主设备负责控制和支配总线，向从设备发出命令来指定数据传送方式与数据传送地址信息。各设备之间的主从关系不是固定不变的，只有获得总线使用权的设备才是主设备，如 CPU 等。但主存总是从设备，因为它不会主动提出要与谁交换信息的要求。</p><h3 id="总线的分类" tabindex="-1">总线的分类 <a class="header-anchor" href="#总线的分类" aria-label="Permalink to &quot;总线的分类&quot;">​</a></h3><h4 id="按功能层次分类" tabindex="-1">按功能层次分类 <a class="header-anchor" href="#按功能层次分类" aria-label="Permalink to &quot;按功能层次分类&quot;">​</a></h4><ol><li><p>片内总线</p><p>芯片内部的总线，它是 CPU 芯片内部寄存器与寄存器之间、寄存器与 ALU 之间的公共连接线。</p></li><li><p>系统总线</p><p>计算机系统内各功能部件（CPU、主存、I/O 接口）之间相互连接的总线，系统总线也称为内总线，是构成计算机的主要组成部分。</p></li><li><p>通信总线（外总线）</p><p>用于计算机系统之间或计算机系统与其他系统（远程通信设备、测试设备之间信息传送的总线。</p></li></ol><h4 id="按数据线的多少分类" tabindex="-1">按数据线的多少分类 <a class="header-anchor" href="#按数据线的多少分类" aria-label="Permalink to &quot;按数据线的多少分类&quot;">​</a></h4><ol><li><p>并行总线</p><p>含有多条双向数据线的总线，可以实现一个数据的多位同时传输。具有数据传输率高的优点，但当数据线较长时，数据各位到达接收端时的延迟可能不一致，会造成传输错误。</p></li><li><p>串行总线</p><p>只含有一条双向数据线或两条单向数据线的总线，可以实现一个数据的各位按照一定的速度和顺序依次传输。由于按位串行传输数据对数据线传输特性的要求不高，在长距离连线情况下仍可以有效地传送数据。</p></li></ol><h3 id="总线的组成及性能指标" tabindex="-1">总线的组成及性能指标 <a class="header-anchor" href="#总线的组成及性能指标" aria-label="Permalink to &quot;总线的组成及性能指标&quot;">​</a></h3><h4 id="总线结构" tabindex="-1">总线结构 <a class="header-anchor" href="#总线结构" aria-label="Permalink to &quot;总线结构&quot;">​</a></h4><p>在单机系统中，从系统总线角度出发，总线的基本结构有：</p><ol><li>单总线结构：只有一条系统总线，所有部件通过系统总线接入。</li><li>双总线结构：在单总线的基础上增加一条专用于 CPU 和主存之间的数据传送通路。</li><li>三总线结构：在双总线的基础上再增加一条 I/O 总线。</li></ol><p>双总线结构：</p><p><img src="'+d+'" alt=""></p><p>三总线结构：</p><p><img src="'+h+'" alt=""></p><h4 id="总线特性" tabindex="-1">总线特性 <a class="header-anchor" href="#总线特性" aria-label="Permalink to &quot;总线特性&quot;">​</a></h4><ul><li>物理特性</li><li>功能特性</li><li>电气特性</li><li>时间特性</li></ul><h4 id="总线的性能指标" tabindex="-1">总线的性能指标 <a class="header-anchor" href="#总线的性能指标" aria-label="Permalink to &quot;总线的性能指标&quot;">​</a></h4>',32),_=a("li",null,[a("p",null,"总线宽度"),a("p",null,"总线宽度指的是总线的线数，它决定了总线所占的物理空间和成本。对总线宽度最直接的影响是地址线和数据线的数量，地址线的宽度指明了总线能直接访问存储器的地址空间范围，数据线的宽度指明了访问一次存储器或外设时能够交换的数据位数。")],-1),x=a("p",null,"总线带宽",-1),b=a("p",null,"总线带宽定义为总线的最大数据传输率，即每秒传输的字节数。总线的带宽公式为：",-1),f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.7ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 6055.6 1000","aria-hidden":"true"},k=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mo",transform:"translate(1036.8,0)"},[a("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(2092.6,0)"},[a("path",{"data-c":"1D44A",d:"M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(3140.6,0)"},[a("path",{"data-c":"D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(3918.6,0)"},[a("path",{"data-c":"1D439",d:"M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(4667.6,0)"},[a("g",{"data-mml-node":"mo"},[a("path",{"data-c":"2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z",style:{"stroke-width":"3"}})])]),a("g",{"data-mml-node":"mi",transform:"translate(5167.6,0)"},[a("path",{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",style:{"stroke-width":"3"}})])])],-1),g=[k],q=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("mi",null,"B"),a("mo",null,"="),a("mi",null,"W"),a("mi",null,"×"),a("mi",null,"F"),a("mrow",{"data-mjx-texclass":"ORD"},[a("mo",null,"/")]),a("mi",null,"N")],-1),P=a("p",null,"其中，W 为数据总线宽度，通常以字节为单位；F 为总线的时钟频率；N 为完成一次数据传送所用的时钟周期数。",-1),w=a("li",null,[a("p",null,"总线负载"),a("p",null,"总线负载指连接在总线上的最大设备数量。大多数总线的负载能力是有限的。")],-1),L=a("li",null,[a("p",null,"总线复用"),a("p",null,"总线分时复用是指在不同时段利用总线上同一个信号线传送不同信号。采用这种方式的目的是减少总线数量，提高总线的利用率。")],-1),H=a("li",null,[a("p",null,"总线猝发传输"),a("p",null,"猝发（突发）式数据传输是一种总线传输方式，即在一个总线周期中可以传输存储地址连续的多个数据。")],-1),B=s('<h2 id="总线仲裁" tabindex="-1">总线仲裁 <a class="header-anchor" href="#总线仲裁" aria-label="Permalink to &quot;总线仲裁&quot;">​</a></h2><p>总线是由多个部件和设备所共享的，连接到总线上的功能模块有主动和被动两种形态，CPU 可以做主方也可以做从方，而存取器模块只能用作从方。为了保证同一时刻只有一个申请者使用总线，总线控制机构中设置有总线判优和仲裁控制逻辑，即按照一定的优先次序来决定哪个部件首先使用总线，只有获得总线使用权的部件，才能开始数据传送。总线判优按其仲裁控制机构的设置可分为集中式控制和分布式控制两种。</p><h3 id="集中仲裁方式" tabindex="-1">集中仲裁方式 <a class="header-anchor" href="#集中仲裁方式" aria-label="Permalink to &quot;集中仲裁方式&quot;">​</a></h3><h4 id="链式查询方式" tabindex="-1">链式查询方式 <a class="header-anchor" href="#链式查询方式" aria-label="Permalink to &quot;链式查询方式&quot;">​</a></h4><p>链式查询方式的总线控制器使用三根控制线与所有部件和设备相连，这三根控制线是：</p><ul><li>总线请求（BR）</li><li>总线忙（BS）</li><li>总线批准（BG）</li></ul><p>链式查询方式：</p><p><img src="'+p+'" alt=""></p><p>链式查询的优点是只用很少几根线就能按一定的优先次序来实现总线控制，并很容易扩充。缺点是对查询链的故障很敏感，如果第 i 个部件中的查询链电路有故障，那么第 i 个以后的部件都不能工作。另外，因为查询的优先级是固定的，所以若优先级较高的部件出现频繁的总线请求时，优先级较低的部件就可能会难以得到响应。</p><h4 id="计数器定时查询方式" tabindex="-1">计数器定时查询方式 <a class="header-anchor" href="#计数器定时查询方式" aria-label="Permalink to &quot;计数器定时查询方式 &amp;#x20;&quot;">​</a></h4><p>总线上的每个部件可以通过公共的 BR 线发出请求，总线控制器收到请求之后，在 BS 为“0”的情况下，让计数器开始计数，定时地查询各个部件以确定是谁发出的请求。当查询线上的计数值与发出请求的部件号一致时，该部件就使 BS 线置“1”，获得了总线使用权，并中止计数查询，直至该部件完成数据传送之后，撤消 BS 信号。</p><p>计数器定时查询方式：</p><p><img src="'+c+'" alt=""></p><p>这种计数可以从“0”开始，也可以从中止点开始。如果从“0”开始，各部件的优先次序和链式查询方式相同，优先级的次序是固定的。如果从中止点开始，即为循环优先级，各个部件使用总线的级别将相等。计数器的初始值还可以由程序来设置，这就可以方便地改变优先次序，增加系统的灵活性。</p><h4 id="独立请求方式" tabindex="-1">独立请求方式 <a class="header-anchor" href="#独立请求方式" aria-label="Permalink to &quot;独立请求方式&quot;">​</a></h4><p>在这种方式中，每一个共享总线的部件均有一对控制线：总线请求 BRi 和总线批准 BGi。当某个部件请求使用总线时，便发出 BRi，总线控制器中有一排队电路，根据一定的优先次序决定首先响应哪个部件的请求 BRi，然后给该部件送回批准信号 BGi。</p><p>独立请求方式的优点是响应时间快，然而这是以增加控制线数和硬件电路为代价的。此方式对优先次序的控制也是相当灵活的，它可以预先固定，也可以通过程序来改变优先次序。</p><p>独立请求方式：</p><p><img src="'+m+'" alt=""></p><h3 id="分布仲裁方式" tabindex="-1">分布仲裁方式 <a class="header-anchor" href="#分布仲裁方式" aria-label="Permalink to &quot;分布仲裁方式&quot;">​</a></h3><p>分布仲裁方式不需要中央仲裁器，即总线控制逻辑分散在连接于总线上的各个部件或设备中。连接到总线上的主方可以启动一个总线周期，而从方只能响应主方的请求。每次总线操作，只能有一个主方占用总线使用权，但同一时间里可以有一个或多个从方。对多个主设备提出的占用总线请求，一般采用优先级、冲突检测或公平策略等方法进行仲裁。</p>',21);function C(y,M,v,D,S,N){const r=l("mjx-assistive-mml"),n=l("mjx-container");return t(),e("div",null,[T,a("ol",null,[_,a("li",null,[x,b,i(n,{class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},{default:o(()=>[(t(),e("svg",f,g)),i(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:o(()=>[q]),_:1})]),_:1}),P]),w,L,H]),B])}const U=Q(u,[["render",C]]);export{R as __pageData,U as default};
