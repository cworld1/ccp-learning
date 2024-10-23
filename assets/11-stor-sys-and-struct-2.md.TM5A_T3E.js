import{_ as Q,D as d,o as s,c as r,k as a,a as t,I as e,w as l,R as o}from"./chunks/framework.ZzQqrmOI.js";const m="/ccp-learning/assets/image_RUsfISRe-0.bCF-ckqu.png",T="/ccp-learning/assets/image_kpHXqUgxv8.oIt2ByIE.png",p="/ccp-learning/assets/image_5oLxCEv0Ty.E61seLYh.png",h="/ccp-learning/assets/image_RbRglKYzbe.PTljoXjD.png",c="/ccp-learning/assets/image_yxDqFqVsOK.JB2xArAg.png",u="/ccp-learning/assets/image_tYEMwcH5sE.ZOxJtWLi.png",D="/ccp-learning/assets/image_Wn8-5YHn3H.oetnbsQw.png",M="/ccp-learning/assets/image_TnUJvshHXh.RDZNL5Pm.png",R="/ccp-learning/assets/image_b9m9oVSJUQ.1OIceCza.png",_="/ccp-learning/assets/image_nGkb9-Gz41.9hl7ba_T.png",A="/ccp-learning/assets/image_V6v5NINqxy.WJQGwt4C.png",X=JSON.parse('{"title":"05 存储系统和结构 (4~6)","description":"","frontmatter":{},"headers":[],"relativePath":"11-stor-sys-and-struct-2.md","filePath":"11-stor-sys-and-struct-2.md","lastUpdated":1729696289000}'),x={name:"11-stor-sys-and-struct-2.md"},b=o('<h1 id="_05-存储系统和结构-4-6" tabindex="-1">05 存储系统和结构 (4~6) <a class="header-anchor" href="#_05-存储系统和结构-4-6" aria-label="Permalink to &quot;05 存储系统和结构 (4\\~6)&quot;">​</a></h1><h2 id="主存储器的连接与控制" tabindex="-1">主存储器的连接与控制 <a class="header-anchor" href="#主存储器的连接与控制" aria-label="Permalink to &quot;主存储器的连接与控制&quot;">​</a></h2><ul><li>由于存储芯片的容量有限的，主存储器往往要由一定数量的芯片构成。</li><li>而由若干芯片构成的主存必须与 CPU 连接，才能在 CPU 的正确控制下完成读写操作。</li></ul><h3 id="主存容量的扩展" tabindex="-1">主存容量的扩展* <a class="header-anchor" href="#主存容量的扩展" aria-label="Permalink to &quot;主存容量的扩展\\*&quot;">​</a></h3><p>不赘述。</p><h3 id="存储芯片的地址分配和片选" tabindex="-1">存储芯片的地址分配和片选 <a class="header-anchor" href="#存储芯片的地址分配和片选" aria-label="Permalink to &quot;存储芯片的地址分配和片选&quot;">​</a></h3>',6),P=a("li",null,"CPU 要实现对存储单元的访问，首先要选择存储芯片，即进行片选；",-1),g=a("li",null,"然后再从选中的芯片中依地址码选择出相应的存储单元，以进行数据的存取，这称为字选。",-1),f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.74ex",height:"1.914ex",role:"img",focusable:"false",viewBox:"0 -846 1210.9 846","aria-hidden":"true"},C=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"msup"},[a("g",{"data-mml-node":"mn"},[a("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(533,363) scale(0.707)"},[a("path",{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",style:{"stroke-width":"3"}})])])])],-1),w=[C],H=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msup",null,[a("mn",null,"2"),a("mi",null,"N")])],-1),k=a("li",null,"而存储芯片的片选信号则大多是通过高位地址译码后产生的。",-1),q=a("li",null,"片选信号的译码方法又可细分为线选法、全译码法和部分译码法。",-1),S=o('<h4 id="线选法" tabindex="-1">线选法 <a class="header-anchor" href="#线选法" aria-label="Permalink to &quot;线选法&quot;">​</a></h4><ul><li>线选法就是用除片内寻址外的高位地址线直接（或经反相器）分别接至各个存储芯片的片选端，当某地址线信息为“0”时，就选中与之对应的存储芯片。</li><li>注意，这些片选地址线每次寻址时只能有一位有效，不允许同时有多位有效，这样才能保证每次只选中一个芯片（或组）。</li></ul><p>假设 4 片 2K×8 的存储芯片，用线选法构成 8K×8 存储器，各芯片的地点范围如下：</p><p><img src="'+m+'" alt=""></p><ul><li>u 优点：不需要地址译码器，线路简单，选择芯片无须外加逻辑电路，但仅适用于连接存储芯片较少的场合。</li><li>缺点：不能充分利用系统的存储器空间，且把地址空间分成了相互隔离的区域，给编程带来了一定的困难。</li></ul><h4 id="全译码法" tabindex="-1">全译码法 <a class="header-anchor" href="#全译码法" aria-label="Permalink to &quot;全译码法&quot;">​</a></h4><ul><li>u 全译码法将除片内寻址外的全部高位地址线都作为地址译码器的输入，译码器的输出作为各芯片的片选信号，将它们分别接到存储芯片的片选端，以实现对存储芯片的选择。</li><li>优点：每片（或组）芯片的地址范围是唯一确定的，而且是连续的，也便于扩展，不会产生地址重叠的存储区；</li><li>缺点：对译码电路要求较高。</li></ul><p>CPU 地址线有 20 位，现用 4 片 2K×8 的存储芯片组成一个 8K×8 的存储器。全译码法要求除去芯片内寻址的 11 位地址线外，其余高 9 位用作译码，各芯片的地点范围如下：</p><p><img src="'+T+'" alt=""></p><h4 id="部分译码" tabindex="-1">部分译码 <a class="header-anchor" href="#部分译码" aria-label="Permalink to &quot;部分译码&quot;">​</a></h4><p>u 部分译码即用除片内寻址外的高位地址的一部分来译码产生片选信号。</p><p>如用 4 片 2K×8 的存储芯片组成 8K×8 存储器，需要 4 个片选信号，因此只需要用两位地址线来译码产生。</p>',12),V={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.144ex",height:"2.207ex",role:"img",focusable:"false",viewBox:"0 -893.3 5367.6 975.3","aria-hidden":"true"},y=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"msup"},[a("g",{"data-mml-node":"mn"},[a("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"TeXAtom",transform:"translate(533,363) scale(0.707)","data-mjx-texclass":"ORD"},[a("g",{"data-mml-node":"mo"},[a("path",{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mn",transform:"translate(389,0)"},[a("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}}),a("path",{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(500,0)",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mo",transform:"translate(1389,0)"},[a("path",{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mn",transform:"translate(2167,0)"},[a("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}}),a("path",{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",transform:"translate(500,0)",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mo",transform:"translate(3167,0)"},[a("path",{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",style:{"stroke-width":"3"}})])])]),a("g",{"data-mml-node":"mo",transform:"translate(3375.2,0)"},[a("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"msup",transform:"translate(4431,0)"},[a("g",{"data-mml-node":"mn"},[a("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mn",transform:"translate(533,363) scale(0.707)"},[a("path",{"data-c":"37",d:"M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",style:{"stroke-width":"3"}})])])])],-1),U=[y],L=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("msup",null,[a("mn",null,"2"),a("mrow",{"data-mjx-texclass":"ORD"},[a("mo",{stretchy:"false"},"("),a("mn",null,"20"),a("mo",null,"−"),a("mn",null,"13"),a("mo",{stretchy:"false"},")")])]),a("mo",null,"="),a("msup",null,[a("mn",null,"2"),a("mn",null,"7")])],-1),E=o('<p><img src="'+p+'" alt=""></p><h3 id="主存储器和-cpu-的连接" tabindex="-1">主存储器和 CPU 的连接 <a class="header-anchor" href="#主存储器和-cpu-的连接" aria-label="Permalink to &quot;主存储器和 CPU 的连接&quot;">​</a></h3><h4 id="主存和-cpu-之间的硬连接" tabindex="-1">主存和 CPU 之间的硬连接 <a class="header-anchor" href="#主存和-cpu-之间的硬连接" aria-label="Permalink to &quot;主存和 CPU 之间的硬连接&quot;">​</a></h4><p>主存与 CPU 的硬连接有 3 组连线：地址总线（AB）、数据总线（DB）和控制总线（CB）。此时，把主存看作一个黑盒子，存储器地址寄存器（MAR）和存储器数据寄存器（MDR）是主存和 CPU 之间的接口。MAR 可以接受来自程序计数器（PC）的指令地址或来自运算器的操作数地址，以确定要访问的单元。MDR 是向主存写入数据或从主存读出数据的缓冲部件。MAR 和 MDR 从功能上看属于主存，但在小微型机中常放在 CPU 内。</p><p>主存和 CPU 的硬连接：</p><p><img src="'+h+'" alt=""></p><h4 id="cpu-对主存的基本操作" tabindex="-1">CPU 对主存的基本操作 <a class="header-anchor" href="#cpu-对主存的基本操作" aria-label="Permalink to &quot;CPU 对主存的基本操作&quot;">​</a></h4><p>前面所说的 CPU 与主存的硬连接是两个部件之间联系的物理基础。而两个部件之间还有软连接，即 CPU 向主存发出的读或写命令，这才是两个部件之间有效工作的关键。</p><p>CPU 对主存进行读写操作时，首先 CPU 在地址总线上给出地址信号，然后发出相应的读或写命令，并在数据总线上交换信息。</p><ol><li><p>读操作：</p><p>读操作是指从 CPU 送来的地址所指定的存储单元中取出信息，再送给 CPU，其操作过程是：</p><ol><li>地址 →MAR→AB CPU 将地址信号送至地址总线；</li><li>Read CPU 发读命令；</li><li>Wait for MFC 等待存储器工作完成信号；</li><li>M(MAR)→DB→MDR 读出信息经数据总线送至 CPU。</li></ol></li><li><p>写操作 </p><p>写操作是指将要写入的信息存入 CPU 所指定的存储单元中，其操作过程是：</p><ol><li>地址 →MAR→AB CPU 将地址信号送至地址总线；</li><li>数据 →MDR→DB CPU 将要写入的数据送至数据总线；</li><li>Write CPU 发写命令；</li><li>Wait for MFC 等待存储器工作完成信号。</li></ol></li></ol><h3 id="主存的校验" tabindex="-1">主存的校验 <a class="header-anchor" href="#主存的校验" aria-label="Permalink to &quot;主存的校验&quot;">​</a></h3><p>计算机在运行过程中，主存要与 CPU 频繁地交换数据。为了检测和校正在存储过程中的错误，主存中常设置有差错校验电路。</p><h4 id="主存的奇偶校验" tabindex="-1">主存的奇偶校验 <a class="header-anchor" href="#主存的奇偶校验" aria-label="Permalink to &quot;主存的奇偶校验&quot;">​</a></h4><p>最简单的主存检验方法是奇偶校验，在微机中通常采用奇校验，即每个存储单元中共存储 9 位信息（其中 8 位数据，1 位奇偶校验位），信息中“1”的个数总是奇数。</p><p>当向主存写入数据时，奇偶校验电路首先会对一个字节的数据计算出奇偶校验位的值，然后再把所有的 9 位值一起送到主存中去。</p><p>读出数据时，某一存储单元的 9 位数据被同时读出，当 9 位数据里“1”的个数为奇数时，表示读出的 9 位数据正确；当“1”的个数为偶数时，表示读出数据出错，向 CPU 发出不可屏蔽中断，使系统停机并显示奇偶检验出错的信息。</p><h4 id="错误检验与校正-ecc" tabindex="-1">错误检验与校正（ECC） <a class="header-anchor" href="#错误检验与校正-ecc" aria-label="Permalink to &quot;错误检验与校正（ECC）&quot;">​</a></h4><p>ECC 不仅能检测错误还能在不打扰计算机工作的情况下改正错误，这对于网络服务器这样不允许随便停机的关键任务是至关重要的。</p><p>ECC 主存用一组附加数据位来存储一个特殊码，被称为“校验和”。对于每个二进制字都有相应的 ECC 码。产生 ECC 码所需的位数取决于系统所用的二进制字长。当从主存中读取数据时，将取到的实际数据和它的 ECC 码快速比较。如果匹配，则实际数据被传给 CPU；如果不匹配，则 ECC 码的结构能够将出错的一位（或几位）鉴别出来，然后改正错误，再将数据传给 CPU。</p><p>注意：此时主存中的出错位并没有改变，如果又要读取这个数据，需要再一次校正错误。</p><h3 id="pc-系列微机的存储器接口" tabindex="-1">PC 系列微机的存储器接口 <a class="header-anchor" href="#pc-系列微机的存储器接口" aria-label="Permalink to &quot;PC 系列微机的存储器接口&quot;">​</a></h3><h4 id="_8-位存储器接口" tabindex="-1">8 位存储器接口 <a class="header-anchor" href="#_8-位存储器接口" aria-label="Permalink to &quot;8 位存储器接口&quot;">​</a></h4><p>如果数据总线为 8 位（如微机系统中的 PC 总线），而主存按字节编址，则匹配关系比较简单。对于 8 位的微处理器，典型的时序安排是占用 4 个 CPU 时钟周期，称为 T1 ～ T4，构成一个总线周期。对于微型机来说，存储器就挂在总线上，故总线周期就等于存取周期，一个总线周期可读写 8 位。</p><h4 id="_16-位存储器接口" tabindex="-1">16 位存储器接口 <a class="header-anchor" href="#_16-位存储器接口" aria-label="Permalink to &quot;16 位存储器接口&quot;">​</a></h4><p>对于 16 位的微处理器 8086（或 80286），在一个总线周期内最多可读写两个字节，即从偶地址开始的字（规则字）。同时读写这个偶地址单元和随后的奇地址单元，用低 8 位数据总线传送偶地址单元的数据，用高 8 位数据总线传送奇地址单元的数据。如果读写的是非规则字，即是从奇地址开始的字，则需要安排两个总线周期才能实现。</p><p>为了实现这样的传送，需要将存储器分为两个存储体。一个存储体的地址均为偶数，称为偶地址（低字节）存储体，它与低 8 位数据总线相连；另一个存储体的地址均为奇数，称为奇地址（高字节）存储体，与高 8 位数据总线相连。</p><p>8086 的存储器组织：</p><p><img src="'+c+'" alt=""></p><p>8086 和主存之间可以传送一个字节（8 位）数据，也可以传送一个字（16 位）数据。任何两个连续的字节都可以作为一个字来访问，地址值较低的字节是低位有效字节，地址值较高的字节是高位有效字节。</p><p>8086 微处理器的地址线 A19 ～ A1 同时送至两个存储体，BHE（高位存储体）和最低位地址线 A0 用来选择一个或两个存储体进行数据传送。</p><p><img src="'+u+'" alt=""></p><h4 id="_32-位存储器接口" tabindex="-1">32 位存储器接口 <a class="header-anchor" href="#_32-位存储器接口" aria-label="Permalink to &quot;32 位存储器接口 &amp;#x20;&quot;">​</a></h4><p>由于 80386/80486 微处理器要保持与 8086 等微处理器兼容，这就要求在进行存储器系统设计时必须满足单字节、双字节和四字节等不同访问。为了实现 8 位、16 位和 32 位数据的访问，80386/80486 微处理器设有 4 个引脚$ \\bar{BE3}～ \\bar{BE0} $，以控制不同数据的访问。</p><h4 id="_64-位存储器接口" tabindex="-1">64 位存储器接口 <a class="header-anchor" href="#_64-位存储器接口" aria-label="Permalink to &quot;64 位存储器接口&quot;">​</a></h4>',34),v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.416ex",height:"2.566ex",role:"img",focusable:"false",viewBox:"0 -934 5046 1134","aria-hidden":"true"},Z=a("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[a("g",{"data-mml-node":"math"},[a("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD"},[a("g",{"data-mml-node":"mover"},[a("g",{"data-mml-node":"mrow"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(759,0)"},[a("path",{"data-c":"1D438",d:"M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mn",transform:"translate(1523,0)"},[a("path",{"data-c":"37",d:"M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",style:{"stroke-width":"3"}})])]),a("g",{"data-mml-node":"mo",transform:"translate(1011.5,244) translate(-250 0)"},[a("path",{"data-c":"AF",d:"M69 544V590H430V544H69Z",style:{"stroke-width":"3"}})])])]),a("g",{"data-mml-node":"mi",transform:"translate(2023,0)"},[a("text",{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"},"～")]),a("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(3023,0)"},[a("g",{"data-mml-node":"mover"},[a("g",{"data-mml-node":"mrow"},[a("g",{"data-mml-node":"mi"},[a("path",{"data-c":"1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mi",transform:"translate(759,0)"},[a("path",{"data-c":"1D438",d:"M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z",style:{"stroke-width":"3"}})]),a("g",{"data-mml-node":"mn",transform:"translate(1523,0)"},[a("path",{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",style:{"stroke-width":"3"}})])]),a("g",{"data-mml-node":"mo",transform:"translate(1011.5,244) translate(-250 0)"},[a("path",{"data-c":"AF",d:"M69 544V590H430V544H69Z",style:{"stroke-width":"3"}})])])])])],-1),B=[Z],O=a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mrow",{"data-mjx-texclass":"ORD"},[a("mover",null,[a("mrow",null,[a("mi",null,"B"),a("mi",null,"E"),a("mn",null,"7")]),a("mo",{stretchy:"false"},"¯")])]),a("mi",null,"～"),a("mrow",{"data-mjx-texclass":"ORD"},[a("mover",null,[a("mrow",null,[a("mi",null,"B"),a("mi",null,"E"),a("mn",null,"0")]),a("mo",{stretchy:"false"},"¯")])])],-1),I=o('<h2 id="提高主存读写速度的技术" tabindex="-1">提高主存读写速度的技术 <a class="header-anchor" href="#提高主存读写速度的技术" aria-label="Permalink to &quot;提高主存读写速度的技术&quot;">​</a></h2><p>近几年来主存技术一直在不断地发展，从最早使用的 DRAM 到后来的 FPM DRAM、EDO DRAM、SDRAM、DDR SDRAM 和 RDRAM，出现了各种主存控制与访问技术。它们的共同特点是使主存的读写速度有了很大的提高。</p><h3 id="主存与-cpu-速度的匹配" tabindex="-1">主存与 CPU 速度的匹配 <a class="header-anchor" href="#主存与-cpu-速度的匹配" aria-label="Permalink to &quot;主存与 CPU 速度的匹配&quot;">​</a></h3><p>主存的速度通常以纳秒（ns）表示，而 CPU 速度总是被表示为兆赫兹（MHz），最近一些更快更新的主存也用 MHz 来表示速度。</p><p>如果主存总线的速度与 CPU 总线速度相等，那么主存的性能将是最优的，然而通常主存的速度落后于 CPU 的速度。</p><h3 id="fpm-dram" tabindex="-1">FPM DRAM <a class="header-anchor" href="#fpm-dram" aria-label="Permalink to &quot;FPM DRAM&quot;">​</a></h3><p>传统的 DRAM 是通过分页技术进行访问的，在存取数据时，需要分别输入一个行地址和一个列地址，这会耗费时间。FPMDRAM 通过保持行地址不变而只改变列地址，可以对给定行的所有数据进行更快的访问。</p><p>FPM DRAM 还支持突发模式访问，所谓突发模式是指对一个给定的访问在建立行和列地址之后，可以访问后面 3 个相邻的地址，而不需要额外的延迟和等待状态。一个突发访问通常限制为 4 次正常访问。</p><p>为了描述这个过程，经常以每次访问的周期数表示计时。一个标准 DRAM 的典型突发模式访问表示为 x-y-y-y，x 是第一次访问的时间（延迟加上周期数），y 表示后面每个连续访问所需的周期数。标准的 FPMDRAM 可获得 5-3-3-3 的突发模式周期。</p><p>FPM DRAM 内存条主要采用 72 线的 SIMM 封装，其存取速度一般在 60 ～ 100ns 左右。</p><h3 id="edo-dram" tabindex="-1">EDO DRAM <a class="header-anchor" href="#edo-dram" aria-label="Permalink to &quot;EDO DRAM&quot;">​</a></h3><p>EDODRAM 是在 FPMDRAM 基础上加以改进的存储器控制技术。传统的 DRAM 和 FPM DRAM 在存取每一数据时，输入行地址和列地址后必须等待电路稳定，然后才能有效的读写数据，而下一个地址必须等待这次读写周期完成才能输出。而 EDO 输出数据在整个 CAS 周期都是有效的（包括预充电时间在内），EDO 不必等待当前的读写周期完成即可启动下一个读写周期，即可以在输出一个数据的过程中准备下一个数据的输出。EDODRAM 采用一种特殊的主存读出控制逻辑，在读写一个存储单元时，同时启动下一个（连续）存储单元的读写周期，从而节省了重选地址的时间，提高了读写速度。</p><p>EDODRAM 可获得 5-2-2-2 的突发模式周期，若进行 4 个主存传输，需要总共 11 个系统周期，而 FPMDRAM 的突发模式周期为 5-3-3-3，总共需要 14 个周期。与 FPMDRAM 相比，EDODRAM 的性能改善了 22％，而其制造成本与 FPMDRAM 相近。</p><p>FPM 和 EDO 两者的芯片制作技术其实是相同的，不同的是 EDO 所增加的机制必须在芯片组的支持下将发送的数据信号的处理时间缩短，以加快系统的整体执行效率。目前 EDODRAM 内存条主要采用 72 线的 SIMM 形式封装，也有少部分采用 168 线的 DIMM 封装，存取时间约为 50 ～ 70ns。</p><h3 id="sdram" tabindex="-1">SDRAM <a class="header-anchor" href="#sdram" aria-label="Permalink to &quot;SDRAM&quot;">​</a></h3><p>SDRAM 是一种与主存总线运行同步的 DRAM。SDRAM 在同步脉冲的控制下工作，取消了主存等待时间，减少了数据传送的延迟时间，因而加快了系统速度。SDRAM 仍然是一种 DRAM，起始延迟仍然不变，但总的周期时间比 FPM 或 EDO 快得多。SDRAM 突发模式可达到 5-1-1-1，即进行 4 个主存传输，仅需 8 个周期，比 EDO 快将近 20%。</p><p>SDRAM 的基本原理是将 CPU 和 RAM 通过一个相同的时钟锁在一起，使得 RAM 和 CPU 能够共享一个时钟周期，以相同的速度同步工作。</p><p>DRAM 采用新的双存储体结构，内含两个交错的存储矩阵，允许两个主存页面同时打开，当 CPU 从一个存储矩阵访问数据的同时，在主存控制器作用下另一个存储矩阵已准备好读写数据。通过两个存储矩阵的紧密配合，存取效率得到成倍提高。</p><p>SDRAM 普遍采用 168 线的 DIMM 封装，速度通常以 MHz 来标定，目前 SDRAM 的工作频率已达 100MHz、133MHz，能与当前的 CPU 同步运行，可提高整机性能大约 5％～ 10％。由于 SDRAM 的优良特性，使它成为当前主存市场的主流。</p><h3 id="ddr-sdram" tabindex="-1">DDR SDRAM <a class="header-anchor" href="#ddr-sdram" aria-label="Permalink to &quot;DDR SDRAM&quot;">​</a></h3><p>DDRSDRAM 也可以说是 SDRAM 的升级版本，它与 SDRAM 的主要区别是：DDRSDRAM 不仅能在时钟脉冲的上升沿读出数据而且还能在下降沿读出数据，不需要提高时钟频率就能加倍提高 SDRAM 的速度。</p><p>DDR 内存条的物理大小和标准的 DIMM 一样，区别仅在于内存条的线数。标准的 SDRAM 有 168 线（2 个小缺口），而 DDRSDRAM 有 184 线（多出的 16 个线占用了空间，故只有 1 个小缺口）。</p><h3 id="ddr2、ddr3-、ddr4-和-ddr5-sdram" tabindex="-1">DDR2、DDR3 、DDR4 和 DDR5 SDRAM <a class="header-anchor" href="#ddr2、ddr3-、ddr4-和-ddr5-sdram" aria-label="Permalink to &quot;DDR2、DDR3 、DDR4 和 DDR5 SDRAM&quot;">​</a></h3><h4 id="ddr2sdram" tabindex="-1">DDR2SDRAM <a class="header-anchor" href="#ddr2sdram" aria-label="Permalink to &quot;DDR2SDRAM&quot;">​</a></h4><p>DDR2 SDRAM 拥有两倍于上一代 DDRSDRAM 的预读取能力（即：4bit 数据读预取）。换句话说，DDR2SDRAM 每个时钟能够以 4 倍于外部总线的速度读/写数据。</p><h4 id="ddr3sdram" tabindex="-1">DDR3SDRAM <a class="header-anchor" href="#ddr3sdram" aria-label="Permalink to &quot;DDR3SDRAM&quot;">​</a></h4><p>DDR3SDRAM 可以看作是 DDR2 的改进版，DDR3 的预取设计位数提升至 8bit，其 DRAM 内核的频率达到了接口频率的 1/8。</p><h4 id="ddr4sdram" tabindex="-1">DDR4SDRAM <a class="header-anchor" href="#ddr4sdram" aria-label="Permalink to &quot;DDR4SDRAM&quot;">​</a></h4><p>DDR4 仍沿用了 DDR3 的 8bit 数据预取，它最重要的使命是提高频率和带宽，标准规定最低是 DDR41600，即从 1600MHz 开始运行，这将是 DDR3 频率的两倍。</p><h4 id="ddr5-sdram" tabindex="-1">DDR5 SDRAM <a class="header-anchor" href="#ddr5-sdram" aria-label="Permalink to &quot;DDR5 SDRAM&quot;">​</a></h4><p>4400MHz 对于 DDR5 来说可能只是起步，预计最终可以达到 6400MHz 左右，相比目前的 DDR4，频率提升了近一倍。DDR5 的变化不仅是频率的提高，因为允许加入内部 ECC 来制造 16Gb、32Gb 颗粒，单条容量也会大大提升。</p><p>DDRSDRAM 内存的发展趋势：</p><p><img src="'+D+'" alt=""></p><h3 id="rambus-dram" tabindex="-1">Rambus DRAM <a class="header-anchor" href="#rambus-dram" aria-label="Permalink to &quot;Rambus DRAM&quot;">​</a></h3><p>RambusDRAM 是继 SDRAM 之后的新型高速动态随机存储器。</p><p>使用 FPM/EDO 或 SDRAM 的传统主存系统称为宽通道系统，它们的主存通道和处理器的数据总线一样宽。RDRAM 却是一种窄通道系统，它一次只传输 16 位数据（加上 2 个可选的校验位），但速度却快得多。目前，RDRAM 的容量一般为 64Mb/72Mb 或 128Mb/144Mb，组织结构为 4M 或 8M×16 位、4M 或 8M×18 位（18 位的组织结构允许进行 ECC 检测）。</p><p>Rambus DRAM 引入了 RISC（精简指令集）的技术，依靠其极高的工作频率，通过减少每个周期的数据量来简化操作。RDRAM 的时钟频率可达到 400MHz，由于采用双沿传输，使原有的 400MHz 变为 800MHz。Rambus 结构的带宽视 Rambus 通路的个数而定，若是单通路，800MHz 的 RDRAM 带宽为 800MHz×16 位 ÷8=1.6GB/s，若是两个通路，则可提升为 3.2GB/s，若是 4 个通路的话，将达到 6.4GB/s。而 PC-133 的带宽为 133 MHz×64 位 ÷8=1.06GB/s，PC-266 则为 2.12GB/s。</p><p>由于是全新的设计，需要用 RIMM 插槽与芯片组配合。RDRAM 总线是一条经过总线上所有设备（RDRAM 芯片）和模块的连接线路，每个模块在相对的两端有输入和输出引脚，时钟信号需依次流过每个 RIMM 槽，然后再通过每个 RIMM 槽返回。因此，任何不含 RDRAM 芯片的 RIMM 插槽必须填入一个连接模块（Rambus 终结器）以保证路径是完整的。</p><p>此外，Rambus 主存还有一个特点，就是它的行地址与列地址的寻址总线是各自分离的独立总线，这就意味着行与列的选址几乎在同一时间内进行，从而进一步提高了工作效率；也正因为拥有这一优势，使得 Rambus 主存不仅可以弥补它在寻址时间上比传统的 SDRAM 较慢的缺点，而且在实际工作中所表现出来的性能更好。</p><p>目前，由 RDRAM 构成的系统存储器已经开始应用于现代微机之中，并可能成为服务器及其他高性能计算机的主流存储器系统。</p><h2 id="多体交叉存储技术" tabindex="-1">多体交叉存储技术 <a class="header-anchor" href="#多体交叉存储技术" aria-label="Permalink to &quot;多体交叉存储技术&quot;">​</a></h2><p>目前，主存的存取速度已成为计算机系统的瓶颈，除去通过寻找高速元件来提高访问速度外，也可以采用多个存储器并行工作，并且用交叉访问技术来提高存储器的访问速度。</p><h3 id="并行访问存储器" tabindex="-1">并行访问存储器 <a class="header-anchor" href="#并行访问存储器" aria-label="Permalink to &quot;并行访问存储器&quot;">​</a></h3><ul><li>常规的主存是单体单字存储器，只包含一个存储体。在高速的计算机中，普遍采用并行主存系统，即在一个存取周期内可以并行读出多个字，以解决 CPU 与主存之间的速度匹配问题。</li><li>多个并行工作的存储器共用一套地址寄存器和译码电路，按同一地址并行地访问各自的对应单元。</li><li>例如：CPU 送出地址 A，则 n 个存储器中的所有 A 单元同时被选中。假设每个存储器的字长为 w 位，则同时访问 n×w 位称为单体多字系统。</li></ul><p>单体多字并行存储系统：</p><p><img src="'+M+'" alt=""></p><ul><li>并行访问存储器按地址在一个存取周期内读出 n×w 位的指令或数据，使主存带宽提高 n 倍。</li><li>前提是：指令和数据在主存或者必须是连续存放的，若遇到转移指令，或操作数不能连续存放，起效果就不明显。</li><li>并行访问存储器的主要缺点是访问主存的冲突大。</li></ul><h3 id="交叉访问存储器" tabindex="-1">交叉访问存储器 <a class="header-anchor" href="#交叉访问存储器" aria-label="Permalink to &quot;交叉访问存储器&quot;">​</a></h3><ul><li>交叉访问存储器中有多个容量相同的存储模块（存储体），而且各存储模块具有各自独立的地址寄存器、读写电路和数据寄存器，这就是多体系统。各个存储体能并行工作，又能交叉工作。</li><li>存储器地址寄存器的低位部分经过译码选择不同的存储体，而高位部分则指向存储体内的存储字。</li></ul><p>多体交叉访问存储器：</p><p><img src="'+R+'" alt=""></p><ul><li>同时访问（并行访问）：所有模块同时启动一次存储周期，相对各自的数据寄存器并行地读出或写入信息；</li><li>交叉访问： M 个模块按一定的顺序轮流启动各自的访问周期，启动两个相邻模块的最小时间间隔等于单模块访问周期的 1/M。即互相错开一个存储体访问周期的 1/M，交叉进行工作。</li><li>同时访问多个存储模块能一次提供多个数据或多条指令。</li></ul><p>模 4 交叉编址：</p><p><img src="'+_+'" alt=""></p><p>这种交叉存储器中，连续地址分布在相邻的存储体中，而同一存储体内的地址则不连续。这种编址方式又称为横向编址。</p><p><img src="'+A+'" alt="模4交叉存取的时间关系" title="模4交叉存取的时间关系"></p><p>当出现数据相关和程序转移时，将破坏并行性，不能达到上述理想值。</p><p>注意：交叉访问存储器要求存储体的个数必须为 2 的幂。</p>',58);function z(F,j,N,G,K,J){const i=d("mjx-assistive-mml"),n=d("mjx-container");return s(),r("div",null,[b,a("ul",null,[P,g,a("li",null,[t("片内的字选是由 CPU 送出的 N 条低位地址线完成的，地址线直接接到所有存储芯片的地址输入端（N 由片内存储容量"),e(n,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:l(()=>[(s(),r("svg",f,w)),e(i,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:l(()=>[H]),_:1})]),_:1}),t("决定）。")]),k,q]),S,a("p",null,[t("Ø 由于寻址 8K×8 存储器时未用到高位地址 A19 ～ A13，所以只要 A12=A11=0，而无论 A19 ～ A13 取何值，均选中第一片；只要 A12=0，A11=1，而无论 A19 ～ A13 取何值，均选中第二片……也就是说，8K RAM 中的任一个存储单元，都对应有"),e(n,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:l(()=>[(s(),r("svg",V,U)),e(i,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:l(()=>[L]),_:1})]),_:1}),t("个地址，这种一个存储单元出现多个地址的现象称地址重叠。Ø 从地址分布来看，这 8KB 存储器实际上占用了 CPU 全部的空间（1MB）。每片 2K×8 的存储芯片有 1/4M=256K 的地址重叠区。")]),E,a("p",null,[t("64 位存储器系统由 8 个存储体组成，每个存储体的存储空间为 512MB（Pentium）或 8GB（PentiumPro），存储体选择通过选择信号 "),e(n,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:l(()=>[(s(),r("svg",v,B)),e(i,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:l(()=>[O]),_:1})]),_:1}),t(" 实现。如果要传送一个 64 位数，那么 8 个存储体都被选中；如果要传送一个 32 位数，那么 4 个存储体被选中；若要传送一个 16 位数，则有 2 个存储体被选中；若传送的是 8 位数，只有一个存储体被选中。")]),I])}const $=Q(x,[["render",z]]);export{X as __pageData,$ as default};
