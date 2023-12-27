import{_ as Q,D as e,o as t,c as l,I as i,w as r,R as o,k as a}from"./chunks/framework.XJWvSVd6.js";const k=JSON.parse('{"title":"06 中央处理器 (7~8)","description":"","frontmatter":{},"headers":[],"relativePath":"15-central-processor-3.md","filePath":"15-central-processor-3.md","lastUpdated":1703696768000}'),d={name:"15-central-processor-3.md"},h=o('<h1 id="_06-中央处理器-7-8" tabindex="-1">06 中央处理器 (7~8) <a class="header-anchor" href="#_06-中央处理器-7-8" aria-label="Permalink to &quot;06 中央处理器 (7\\~8)&quot;">​</a></h1><h2 id="精简指令系统计算机" tabindex="-1">精简指令系统计算机 <a class="header-anchor" href="#精简指令系统计算机" aria-label="Permalink to &quot;精简指令系统计算机&quot;">​</a></h2><p>精简指令系统计算机（RISC）是 80 年代提出的一种新的设计思想，目前运行中的许多计算机都采用了 RISC 体系结构或采用了 RISC 设计思想。</p><h3 id="risc-的特点和优势" tabindex="-1">RISC 的特点和优势 <a class="header-anchor" href="#risc-的特点和优势" aria-label="Permalink to &quot;RISC 的特点和优势&quot;">​</a></h3><h4 id="risc-的主要特点" tabindex="-1">RISC 的主要特点 <a class="header-anchor" href="#risc-的主要特点" aria-label="Permalink to &quot;RISC 的主要特点&quot;">​</a></h4><ol><li>指令总数较少（一般不超过 100 条）；</li><li>基本寻址方式种类少（一般限制在 2 ～ 3 种）；</li><li>指令格式少（一般限制在 2 ～ 3 种），而且长度一致；</li><li>除取数和存数指令（Load/Store）外，大部分指令在单周期内完成；</li><li>只有取数和存数指令能够访问存储器，其余指令的操作只限于在寄存器之间进行；</li><li>CPU 中通用寄存器的数目应相当多（32 个以上，有的可达上千个）；</li><li>为提高指令执行速度，绝大多数采用硬联线控制实现，不用或少用微程序控制实现；</li><li>采用优化的编译技术，力求以简单的方式支持高级语言。</li></ol><h4 id="risc-的优势" tabindex="-1">RISC 的优势 <a class="header-anchor" href="#risc-的优势" aria-label="Permalink to &quot;RISC 的优势&quot;">​</a></h4><p>计算机执行一个程序所用的时间 t 可用下式表示：</p>',8),c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.052ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 4885 950","aria-hidden":"true"},p=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D461",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(361,0)"},[a("text",{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"},"＝")]),a("g",{"data-mml-node":"mi",transform:"translate(1361,0)"},[a("path",{"data-c":"1D43C",d:"M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(1865,0)"},[a("path",{"data-c":"D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(2643,0)"},[a("path",{"data-c":"1D436",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(3403,0)"},[a("path",{"data-c":"D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(4181,0)"},[a("path",{"data-c":"1D447",d:"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z",style:{"stroke-width":"3"}})])])],-1),T=[p],m=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("mi",null,"t"),a("mi",null,"＝"),a("mi",null,"I"),a("mi",null,"×"),a("mi",null,"C"),a("mi",null,"×"),a("mi",null,"T")],-1),_=o('<p>式中：I 是高级语言编译后在机器上执行的机器指令总数，C 是执行每条机器指令所需的平均周期数，T 是每个周期的执行时间。</p><p>由于 RISC 机器的指令比较简单，故完成同样的任务要比 CISC 机器使用更多的指令，因此 RISC 的 I 要比 CISC 多 20％～ 40％。但是因为 RISC 的大多数指令只需单周期实现，所以 C 值要比 CISC 小得多。同时因为 RISC 结构简单，所以完成一个操作所经过的数据通路较短，使 T 值有所减少，根据上述统计折算下来，RISC 的处理速度要比相同规模的 CISC 提高 3 ～ 5 倍。</p><h3 id="risc-基本技术" tabindex="-1">RISC 基本技术 <a class="header-anchor" href="#risc-基本技术" aria-label="Permalink to &quot;RISC 基本技术&quot;">​</a></h3><h4 id="risc-寄存器管理技术" tabindex="-1">RISC 寄存器管理技术 <a class="header-anchor" href="#risc-寄存器管理技术" aria-label="Permalink to &quot;RISC 寄存器管理技术&quot;">​</a></h4><p>计算机中最慢的操作是访问存储器的操作，因此在 RISC 中，为了减少访存的频度，通常在 CPU 芯片上设置大量寄存器，把常用的数据保存在这些寄存器中。</p><p>在 RISCⅡ 中使用了重叠寄存器窗口技术，即设置一个数量比较大的寄存器堆，并把它划分成很多窗口。每个过程使用其中相邻的 3 个窗口和一个公共的窗口，而在这相邻的 3 个窗口中有一个窗口与前一个过程公用，还有一个窗口是与下一个过程公用的。</p><h4 id="流水线技术" tabindex="-1">流水线技术 <a class="header-anchor" href="#流水线技术" aria-label="Permalink to &quot;流水线技术&quot;">​</a></h4><p>一条指令通常可分为取指、译码、执行、写回等多个阶段，要想在一个周期内串行完成这些操作是不可能的，因此，采用流水线技术势在必行。</p><p>当出现数据相关和程序转移情况时，流水线结构就可能发生断流的问题，这将会影响流水线的效率。</p><h4 id="延时转移技术" tabindex="-1">延时转移技术 <a class="header-anchor" href="#延时转移技术" aria-label="Permalink to &quot;延时转移技术&quot;">​</a></h4><p>在流水线中，取下一条指令是同上一条指令的执行并行进行的，当遇到转移指令时，流水线就可能断流。RISC 机器中，当遇到转移指令时，可以采用延迟转移方法或优化延迟转移方法。在采取延迟转移方法时，编译程序自动在转移指令之后，插入一条（或几条，根据流水线情况而定）空指令，以延迟后继指令进入流水线的时间。所谓优化延迟转移方法，是将转移指令与前条指令对换位置，提前执行转移指令，可以节省一个机器周期。</p><h2 id="微处理器中的新技术" tabindex="-1">微处理器中的新技术 <a class="header-anchor" href="#微处理器中的新技术" aria-label="Permalink to &quot;微处理器中的新技术&quot;">​</a></h2><p>下面介绍微处理器中的几种新技术。</p><h3 id="超标量和超流水线技术" tabindex="-1">超标量和超流水线技术 <a class="header-anchor" href="#超标量和超流水线技术" aria-label="Permalink to &quot;超标量和超流水线技术&quot;">​</a></h3><p>超标量技术是通过重复设置多个功能部件，并让这些功能部件同时工作来提高指令的执行速度，实际上是以增加硬件资源为代价来换取处理器性能的。使用超标量技术的处理器在一个时钟周期内可以同时发射多条指令。</p><p>超流水线仍然是一种流水线技术，可以认为它是将标量流水线的子过程（段）再进一步细分，使得子过程数（段数）大于或等于 8 的情况。也就是说只需要增加少量硬件，通过各部分硬件的充分重叠工作来提高处理器性能。采用超流水线技术的处理器在一个时钟周期内可以分时发射多条指令。</p><h3 id="epic-的指令级并行处理" tabindex="-1">EPIC 的指令级并行处理 <a class="header-anchor" href="#epic-的指令级并行处理" aria-label="Permalink to &quot;EPIC 的指令级并行处理&quot;">​</a></h3><p>EPIC 架构是 Itanium 挑战 RISC 架构的基础，它的设计思想就是用智能化的软件来指挥硬件，以实现指令级并行计算。采用 EPIC 架构的处理器在运行中，首先由编译器分析指令之间的依赖关系，将没有依赖关系的 3 条指令组合成一个 128 位的指令束。在低端 CPU 中，每个时钟周期调度 1 个指令束，CPU 等待所有的指令都执行完后再调度下一个指令束。在高端的 CPU 中，每个时钟周期可以调用多个指令束，类似于现在的超标量设计。</p><h3 id="超线程技术" tabindex="-1">超线程技术 <a class="header-anchor" href="#超线程技术" aria-label="Permalink to &quot;超线程技术&quot;">​</a></h3><p>超线程（简称“HT”）是 Intel 公司提出的一种提高 CPU 性能的技术，简单地说就是将一个物理 CPU 当作两个逻辑 CPU 使用，使 CPU 可以同时执行多重线程，从而发挥更大的效率。超线程技术利用特殊的硬件指令，把两个逻辑内核模拟成两个物理芯片，让单个处理器都能使用线程级并行计算，进而兼容多线程操作系统和应用软件，减少了 CPU 的闲置时间，提高 CPU 的运行效率。</p><h3 id="双核与多核技术" tabindex="-1">双核与多核技术 <a class="header-anchor" href="#双核与多核技术" aria-label="Permalink to &quot;双核与多核技术&quot;">​</a></h3><ol><li><p>双核处理器</p><p>双核处理器是指在一个处理器上集成两个运算核心，从而提高计算能力。</p></li><li><p>超线程技术与双核心技术的区别</p><p>可以简单地把双核心技术理解为两个“物理”处理器，是一种“硬”的方式；而超线程技术只是两个“逻辑”处理器，是一种“软”的方式。</p></li></ol>',22);function C(u,x,f,I,b,P){const s=e("mjx-assistive-mml"),n=e("mjx-container");return t(),l("div",null,[h,i(n,{class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},{default:r(()=>[(t(),l("svg",c,T)),i(s,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:r(()=>[m]),_:1})]),_:1}),_])}const q=Q(d,[["render",C]]);export{k as __pageData,q as default};
