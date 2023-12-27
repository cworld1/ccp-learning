import{_ as d,D as l,o as i,c as o,k as a,a as t,I as s,w as r,R as e}from"./chunks/framework.XJWvSVd6.js";const m="/assets/image_G6qu5kBo3B.W5w-Nw3y.png",h="/assets/image_nWG2tAdzvt.4kHUxsYv.png",Q="/assets/image_2kzJ0F7T4e.uuSObInv.png",c="/assets/image_wz_0iiqEc9.5v35WzKr.png",T="/assets/image_tK5vGQwXYp.-nLYDMSC.png",_="/assets/image_fIKU2vLXNF.BfO8FvNm.png",u="/assets/image_3cWPIku16D._z1gDo0o.png",x="/assets/image_VLtkwxoM6O.qQ3SAh_x.png",g="/assets/image_jQ-S9sRwkZ.IiseHy9i.png",b="/assets/image_qCEIKJtusb.ivV1oa-S.png",f="/assets/image_TPTEhSXQ0d.L74rddOb.png",H="/assets/image_u8AWRQ5V1_.o9bOtUH2.png",B=JSON.parse('{"title":"03 指令系统 (4~5)","description":"","frontmatter":{},"headers":[],"relativePath":"06-command-sys-2.md","filePath":"06-command-sys-2.md","lastUpdated":1703696768000}'),q={name:"06-command-sys-2.md"},I=e('<h1 id="_03-指令系统-4-5" tabindex="-1">03 指令系统 (4~5) <a class="header-anchor" href="#_03-指令系统-4-5" aria-label="Permalink to &quot;03 指令系统 (4\\~5)&quot;">​</a></h1><h2 id="指令类型" tabindex="-1">指令类型 <a class="header-anchor" href="#指令类型" aria-label="Permalink to &quot;指令类型&quot;">​</a></h2><p>一台计算机的指令系统可以有上百条指令，这些指令按其功能可以分成几种类型。</p><h3 id="数据传送类指令" tabindex="-1">数据传送类指令 <a class="header-anchor" href="#数据传送类指令" aria-label="Permalink to &quot;数据传送类指令&quot;">​</a></h3><h4 id="一般传送指令" tabindex="-1">一般传送指令 <a class="header-anchor" href="#一般传送指令" aria-label="Permalink to &quot;一般传送指令&quot;">​</a></h4><p>一般传送指令具有数据复制的性质，即数据从源地址传送到目的地址，而源地址中的内容保持不变。一般传送类指令常用助记符 MOV 表示，根据数据传送的源和目的的不同，又可分为：</p><ol><li><p>主存单元之间的传送。</p><p>MOV mem2,mem1，其含义为 (mem1)→mem2</p></li><li><p>从主存单元传送到寄存器。在有些计算机中，该指令用助记符 LOAD 表示。</p><p>MOV reg,mem，其含义为(mem)→reg</p></li><li><p>从寄存器传送到主存单元。在有些计算机里，该指令用助记符 STORE 表示。</p><p>MOV mem,reg，其含义为(reg)→mem</p></li><li><p>寄存器之间的传送。</p><p>MOV reg2,reg1，其含义为 (reg1)→reg2</p></li></ol><h4 id="堆栈操作指令" tabindex="-1">堆栈操作指令 <a class="header-anchor" href="#堆栈操作指令" aria-label="Permalink to &quot;堆栈操作指令&quot;">​</a></h4><p>堆栈指令实际上是一种特殊的数据传送指令，分为进栈（PUSH）和出栈（POP）两种，在程序中它们往往是成对出现的。</p><p>如果堆栈是主存的一个特定区域，那么对堆栈的操作也就是对存储器的操作。</p><h4 id="数据交换指令" tabindex="-1">数据交换指令 <a class="header-anchor" href="#数据交换指令" aria-label="Permalink to &quot;数据交换指令&quot;">​</a></h4><p>前述的传送都是单方向的。然而，数据传送也可以是双方向的，即将源操作数与目的操作数（一个字节或一个字）相互交换位置。</p><h3 id="运算类指令" tabindex="-1">运算类指令 <a class="header-anchor" href="#运算类指令" aria-label="Permalink to &quot;运算类指令&quot;">​</a></h3><h4 id="算术运算类指令" tabindex="-1">算术运算类指令 <a class="header-anchor" href="#算术运算类指令" aria-label="Permalink to &quot;算术运算类指令&quot;">​</a></h4><p>算术运算指令主要用于定点和浮点运算。这类运算包括定点加、减、乘、除指令，浮点加、减、乘、除指令以及加 1、减 1、比较等，有些机器还有十进制算术运算指令。</p><p>绝大多数算术运算指令都会影响到状态标志位，通常的标志位有进位、溢出、全零、正负和奇偶等。</p><h4 id="逻辑运算类指令" tabindex="-1">逻辑运算类指令 <a class="header-anchor" href="#逻辑运算类指令" aria-label="Permalink to &quot;逻辑运算类指令&quot;">​</a></h4><p>计算机都具有与、或、非、异或等逻辑运算指令。这类指令在没有设置专门的位操作指令的计算机中常用于对数据字（字节）中某些位（一位或多位）进行操作，常见的应用有：</p>',18),P=e('<li><p>按位测（位检查）</p><p>利用“与”指令可以屏蔽掉数据字（字节）中的某些位。通常让被检查数作为目的操作数，屏蔽字作为源操作数，要检测某些位，可使屏蔽字的相应位为“1” ，其余位为“0” ，然后执行“与”指令，则可取出所要检查的位来。</p><p><img src="'+m+'" alt=""></p></li><li><p>按位清（位清除）</p><p>利用“与”指令还可以使目的操作数的某些位置“0” 。只要源操作数的相应位为“0” ，其余位为“1” ，然后执行“与”指令即可。</p><p><img src="'+h+'" alt=""></p></li><li><p>按位置（位设置）</p><p>利用“或”指令可以使目的操作数的某些位置“1” 。只要源操作数的相应位为“1” ，其余位为“0” ，然后执行“或”指令即可。</p><p><img src="'+Q+'" alt=""></p></li>',3),k=a("p",null,"按位修改",-1),V={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"22.475ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 9934 950","aria-hidden":"true"},L=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D434",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mo",transform:"translate(972.2,0)"},[a("path",{"data-c":"2295",d:"M56 250Q56 394 156 488T384 583Q530 583 626 485T722 250Q722 110 625 14T390 -83Q249 -83 153 14T56 250ZM364 542Q308 539 251 509T148 418T96 278V270H369V542H364ZM681 278Q675 338 650 386T592 462T522 509T458 535T412 542H409V270H681V278ZM96 222Q104 150 139 95T219 12T302 -29T366 -42H369V230H96V222ZM681 222V230H409V-42H412Q429 -42 456 -36T521 -10T590 37T649 113T681 222Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mn",transform:"translate(1972.4,0)"},[a("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mo",transform:"translate(2750.2,0)"},[a("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(3806,0)"},[a("g",{"data-mml-node":"mover"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mo",transform:"translate(313.8,3) translate(-250 0)"},[a("path",{"data-c":"AF",d:"M69 544V590H430V544H69Z",style:{"stroke-width":"3"}})])])]),a("g",{"data-mml-node":"mi",transform:"translate(4378,0)"},[a("text",{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"},"，")]),a("g",{"data-mml-node":"mi",transform:"translate(5378,0)"},[a("path",{"data-c":"1D434",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mo",transform:"translate(6350.2,0)"},[a("path",{"data-c":"2295",d:"M56 250Q56 394 156 488T384 583Q530 583 626 485T722 250Q722 110 625 14T390 -83Q249 -83 153 14T56 250ZM364 542Q308 539 251 509T148 418T96 278V270H369V542H364ZM681 278Q675 338 650 386T592 462T522 509T458 535T412 542H409V270H681V278ZM96 222Q104 150 139 95T219 12T302 -29T366 -42H369V230H96V222ZM681 222V230H409V-42H412Q429 -42 456 -36T521 -10T590 37T649 113T681 222Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mn",transform:"translate(7350.4,0)"},[a("path",{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mo",transform:"translate(8128.2,0)"},[a("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(9184,0)"},[a("path",{"data-c":"1D434",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",style:{"stroke-width":"3"}})])])],-1),w=[L],C=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"A"),a("mo",null,"⊕"),a("mn",null,"1"),a("mo",null,"="),a("mrow",{"data-mjx-texclass":"ORD"},[a("mover",null,[a("mi",null,"x"),a("mo",{stretchy:"false"},"¯")])]),a("mi",null,"，"),a("mi",null,"A"),a("mo",null,"⊕"),a("mn",null,"0"),a("mo",null,"="),a("mi",null,"A")],-1),M=a("p",null,[a("img",{src:c,alt:""})],-1),S=a("li",null,[a("p",null,"判符合"),a("p",null,"若两数相符合，其异或之后的结果必定为“0” 。")],-1),A=a("li",null,[a("p",null,[t("清 0："),a("code",null,"XOR AL,AL")])],-1),v=e('<h4 id="移位类指令" tabindex="-1">移位类指令 <a class="header-anchor" href="#移位类指令" aria-label="Permalink to &quot;移位类指令&quot;">​</a></h4><p>移位指令分为算术移位、逻辑移位和循环移位三类，它们又可分为左移和右移两种。</p><ol><li><p>算术移位</p><p>算术移位的对象是带符号数，在移位过程中必须保持操作数的符号不变。当左移一位时，如不产生溢出，则数值 ×2；而右移一位时，如不考虑因移出舍去的末位尾数，则数值 ÷2。</p><p><img src="'+T+'" alt=""></p></li><li><p>逻辑移位</p><p>逻辑移位的对象是无符号数，因此移位时不必考虑符号问题。</p><p><img src="'+_+'" alt=""></p></li><li><p>循环移位</p><p>循环移位按是否与进位位一起循环又分为两种：</p><ul><li>小循环（不带进位循环）</li><li>大循环（带进位循环） <img src="'+u+'" alt=""></li></ul></li></ol><h3 id="程序控制类指令" tabindex="-1">程序控制类指令 <a class="header-anchor" href="#程序控制类指令" aria-label="Permalink to &quot;程序控制类指令&quot;">​</a></h3><h4 id="转移指令" tabindex="-1">转移指令 <a class="header-anchor" href="#转移指令" aria-label="Permalink to &quot;转移指令&quot;">​</a></h4><p>在程序执行过程中，通常采用转移指令来改变程序的执行顺序。转移指令又分无条件转移和条件转移两种：</p><ol><li>无条件转移又称必转，它在执行时将改变程序的常规执行顺序，不受任何条件的约束，直接把程序转向该指令指出的新的位置执行，其助记符一般为 JMP。</li><li>条件转移必须受到条件的约束，若条件满足时才执行转移，否则程序仍顺序执行。条件转移指令主要用于程序的分支，当程序执行到某处时，要在两个分支中选择一支，这就需要根据某些测试条件作出判断。</li></ol><p>注：</p><ul><li>无论是条件转移还是无条件转移都需要给出转移地址。</li><li>若采用相对寻址方式，转移地址为当前指令地址（即 PC 的值）和指令中给出的位移量之和，即(PC)+位移量 →PC；</li><li>若采用绝对寻址方式，转移地址由指令的地址码字段直接给出，即 A→PC。</li></ul><h4 id="子程序调用指令" tabindex="-1">子程序调用指令 <a class="header-anchor" href="#子程序调用指令" aria-label="Permalink to &quot;子程序调用指令&quot;">​</a></h4><p>子程序是一组可以公用的指令序列，只要知道子程序的入口地址就能调用它。通常把一些需要重复使用并能独立完成某种特定功能的程序单独编成子程序，在需要时由主程序调用它们，这样做既简化了程序设计，又节省了存储空间。</p><p>主程序和子程序是相对的概念，调用其他程序的程序是主程序；被其他程序调用的程序是子程序。</p><p>子程序调用指令，简称转子指令，其助记符一般为 CALL。而从子程序转向主程序的指令称为返回指令（RET）。转子指令安排在主程序中需要调用子程序的地方，转子指令是一地址指令。</p><p><img src="'+x+'" alt=""></p><p>转子指令和转移指令都可以改变程序的执行顺序，但事实上两者存在着很大的差别：</p><ol><li>转移指令使程序转移到新的地址后继续执行指令，不存在返回的问题，所以没有返回地址；而转子指令要考虑返回问题，所以必须以某种方式保存返回地址，以便返回时能找到原来的位置。</li><li>转移指令用于实现同一程序内的转移；而转子指令转去执行一段子程序，实现的是不同程序之间的转移。</li></ol><p>返回地址是转子指令的下一条指令的地址，保存返回地址的方法有多种：</p><ol><li>用子程序的第一个字单元存放返回地址。返回时将第一个字单元地址作为间接地址，采用间址方式返回主程序。这种方法可以实现多重转子，但不能实现递归循环。</li><li>用寄存器存放返回地址。转子指令先把返回地址放到某一个寄存器中，再由子程序将寄存器中的内容转移到另一个安全的地方，可以实现子程序的递归循环。</li><li>用堆栈保存返回地址。不管是多重转子还是子程序递归，最后存放的返回地址总是最先被使用的，堆栈的后进先出存取原则正好支持实现多重转子和递归循环。</li></ol><p>80X86 则采用堆栈来保存返回地址！</p><h4 id="返回指令" tabindex="-1">返回指令 <a class="header-anchor" href="#返回指令" aria-label="Permalink to &quot;返回指令 &amp;#x20;&quot;">​</a></h4><p>从子程序转向主程序的指令称为返回指令，其助记符一般为 RET，子程序的最后一条指令一定是返回指令。返回地址存放的位置决定了返回指令的格式，通常返回地址保存在堆栈中，所以返回指令常是零地址指令。</p><p>转子和返回指令也可以是带条件的，条件转子和条件返回与前述条件转移的条件是相同的。</p><h3 id="输入输出类指令" tabindex="-1">输入输出类指令 <a class="header-anchor" href="#输入输出类指令" aria-label="Permalink to &quot;输入输出类指令&quot;">​</a></h3><h4 id="独立编址的-i-o-指令" tabindex="-1">独立编址的 I/O 指令 <a class="header-anchor" href="#独立编址的-i-o-指令" aria-label="Permalink to &quot;独立编址的 I/O 指令&quot;">​</a></h4><p>独立编址方式使用专门的输入/输出指令（IN/OUT）。以主机为基准，信息由外设传送给主机称为输入，反之称为输出。指令中应给出外部设备编号（端口地址）。这些端口地址与主存地址无关，是另一个独立的地址空间。80x86 采用的就是独立编址方式。</p><p><img src="'+g+'" alt=""></p><h4 id="统一编址的-i-o-指令" tabindex="-1">统一编址的 I/O 指令 <a class="header-anchor" href="#统一编址的-i-o-指令" aria-label="Permalink to &quot;统一编址的 I/O 指令&quot;">​</a></h4><p>所谓统一编址就是把外设寄存器和主存单元统一编址。在这种方式下，不需要专门的 I/O 指令，就用一般的数据传送类指令来实现 I/O 操作。</p><p>一个外部设备通常至少有两个寄存器：数据寄存器和命令与状态寄存器。</p><p>每个外设寄存器都可以由分配给它们的唯一的主存地址来识别，主机可以像访问主存一样去访问外部设备的寄存器。</p><h4 id="两种编址方式比较" tabindex="-1">两种编址方式比较 <a class="header-anchor" href="#两种编址方式比较" aria-label="Permalink to &quot;两种编址方式比较&quot;">​</a></h4><p><img src="'+b+'" alt=""></p><p>另一张图：</p><p><img src="'+f+'" alt=""></p><h3 id="_80x86-指令系统举例" tabindex="-1">80x86 指令系统举例* <a class="header-anchor" href="#_80x86-指令系统举例" aria-label="Permalink to &quot;80x86 指令系统举例\\*&quot;">​</a></h3><ul><li>MOV 指令</li><li>PUSH/POP 指令</li><li>加、减和比较指令</li><li>乘法、除法指令</li><li>BCD 运算和 ASCII 运算</li><li>基本逻辑指令</li><li>位测试指令</li><li>移位与循环指令</li><li>转移控制指令</li><li>子程序调用和返回指令</li><li>输入输出指令</li></ul><h2 id="指令系统的发展" tabindex="-1">指令系统的发展 <a class="header-anchor" href="#指令系统的发展" aria-label="Permalink to &quot;指令系统的发展&quot;">​</a></h2><p>不同类型的计算机有各具特色的指令系统，由于计算机的性能、机器结构和使用环境不同，指令系统的差异也是很大的。</p><h3 id="x86-架构的扩展指令集" tabindex="-1">x86 架构的扩展指令集* <a class="header-anchor" href="#x86-架构的扩展指令集" aria-label="Permalink to &quot;x86 架构的扩展指令集\\*&quot;">​</a></h3><p>目前主流微机使用的指令系统都基于 x86 架构，为了提升处理器各方面的性能，Intel 和 AMD 公司又各自开发了一些新的扩展指令集。扩展指令集中包含了处理器对多媒体、3D 处理等方面的支持，能够提高处理器对这些方面处理的能力。</p><h3 id="从复杂指令系统到精简指令系统" tabindex="-1">从复杂指令系统到精简指令系统 <a class="header-anchor" href="#从复杂指令系统到精简指令系统" aria-label="Permalink to &quot;从复杂指令系统到精简指令系统&quot;">​</a></h3><p>从指令系统的完备性和有效性的角度来看，当然希望指令系统更丰富、功能更强。特别是系列机问世之后，为了能做到软件兼容，新设计的机型或高档机除了要继承老机器的指令系统中的全部指令外，还要增加若干新的指令，从而导致同一系列计算机的指令系统越来越复杂，机器结构也越来越复杂。这体现了计算机性能越强，其指令系统应越复杂的传统设计思想。我们称这些计算机为复杂指令系统计算机，简称 CISC（ComplexInstruction Set Computer）。</p><p>通过对传统的 CISC 指令系统进行测试表明，各种指令的使用频度相差很悬殊。最常使用的是一些比较简单的指令，这类指令的数量仅占指令总数的 20％，但在各种程序中出现的频度却占 80％；其余大多数指令是功能复杂的指令，这类指令的数量占指令总数的 80％，但其使用频度很低，仅占 20％。因此，人们把这种情况称为“20％-80％律”。1975 年 IBM 公司的 John Cocke 提出了精简指令系统的想法，各种精简指令系统计算机 RISC（ReducedInstruction Set Computer）随之诞生。</p><p><img src="'+H+'" alt=""></p><h3 id="vliw-和-epic" tabindex="-1">VLIW 和 EPIC <a class="header-anchor" href="#vliw-和-epic" aria-label="Permalink to &quot;VLIW 和 EPIC&quot;">​</a></h3><h4 id="vliw-和-epic-概念" tabindex="-1">VLIW 和 EPIC 概念 <a class="header-anchor" href="#vliw-和-epic-概念" aria-label="Permalink to &quot;VLIW 和 EPIC 概念&quot;">​</a></h4><p>VLIW 中文含义是“超长指令字”，即一种非常长的指令组合，它把许多条指令连在一起，增加了运算的速度。在这种指令系统中，编译器把许多简单、独立的指令组合到一条指令字中。当这些指令字从主存中取出放到处理器中时，它们被容易地分解成几条简单的指令，这些简单的指令被分派到一些独立的执行单元去执行。</p><p>EPIC 中文含义是“显式并行指令代码”。 EPIC 是从 VLIW 中衍生出来的，通过将多条指令放入一个指令字，有效的提高了 CPU 各个计算功能部件的利用效率，提高了程序的性能。</p><h4 id="intel-的-ia-64" tabindex="-1">Intel 的 IA-64 <a class="header-anchor" href="#intel-的-ia-64" aria-label="Permalink to &quot;Intel 的 IA-64&quot;">​</a></h4><p>IA-64 彻底突破 IA-32 的架构，最大限度地开发了指令级并行操作。</p><p>Intel 公司反对将 IA-64 划归到 RISC 或 CISC 的类别中，因为他们认为这是 EPIC 架构，是一种基于超长指令字的设计，它合并了 RISC 和 VLIW 技术方面的优势。最早采用这种技术的处理器是 Itanium。</p>',51);function O(Z,y,D,E,R,N){const n=l("mjx-assistive-mml"),p=l("mjx-container");return i(),o("div",null,[I,a("ol",null,[P,a("li",null,[k,a("p",null,[t("利用“异或”指令可以修改目的操作数的某些位，只要源操作数的相应位为“1” ，其余位为“0” ，异或之后就达到了修改这些位的目的（因为"),s(p,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:r(()=>[(i(),o("svg",V,w)),s(n,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:r(()=>[C]),_:1})]),_:1}),t("）。")]),M]),S,A]),v])}const j=d(q,[["render",O]]);export{B as __pageData,j as default};
