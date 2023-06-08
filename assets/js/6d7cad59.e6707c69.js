"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[8139],{6451:(e,t,l)=>{l.d(t,{HN:()=>i,UF:()=>o,Wc:()=>n,Wh:()=>c});var a=l(5962),r=l(7294);const n=[{id:1,image:l(8040).Z},{id:2,image:l(103).Z},{id:3,image:l(6383).Z},{id:4,image:l(3801).Z},{id:5,image:l(7828).Z},{id:6,image:l(8045).Z}],o=n.map((e=>({key:e.id,children:r.createElement(a.B2,{bgUrl:e.image})}))),i=n.map((e=>({key:e.id,children:r.createElement(a.e3,{imageUrl:e.image})}))),c=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"gray"},{id:4,color:"white"},{id:5,color:"black"},{id:6,color:"yellow"},{id:7,color:"purple"},{id:8,color:"red"}].map((e=>({key:e.id,children:r.createElement(a.B2,null,r.createElement("div",{style:{height:"100%",backgroundColor:e.color}}))})))},531:(e,t,l)=>{l.d(t,{Z:()=>a});const a={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1540},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}}},9810:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>k,contentTitle:()=>w,default:()=>T,frontMatter:()=>Q,metadata:()=>P,toc:()=>X});var a=l(7462),r=l(7294),n=l(3905),o=l(9521),i=l(4040),c=l(5962),m=l(6018),s=l(4184),d=l.n(s),u=l(531),b=l(7536),p=l(2604),E=l(2173),g=l(4004),f=l(6451),h=l(8241),C=l(1262);const v=f.Wc.map((e=>({key:e.id,children:r.createElement(c.B2,{bgUrl:e.image,bgSize:"cover"})})));const y=e=>{let{isLoadData:t}=e;const[l,n]=(0,r.useState)(),[o,s]=(0,r.useState)(),[f,y]=(0,r.useState)(!0),{control:Q,watch:w,setValue:P,getValues:k}=(0,b.cI)({defaultValues:{moveTime:400,autoPlayTime:3e3,aspectRatioWidth:40,aspectRatioHeight:9,staticHeight:200,isAutoMode:!1,isStaticHeightMode:!0,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,isEnableMouseMove:!0,isEnableAutoPlay:!1,isEnableNavButton:!0,isEnablePagination:!0,isEnableLoop:!0,isMount:!0}}),X=w("isDebug"),M=w("isMount"),J=w("isEnableLoop"),T=w("isEnablePagination"),H=w("isEnableNavButton"),N=w("isEnableMouseMove"),S=w("isEnableAutoPlay"),B=w("isAutoMode"),A=w("isStaticHeightMode"),L=w("slidesPerGroup"),R=w("slidesPerView"),W=w("spaceBetween"),_=w("aspectRatioWidth"),D=w("aspectRatioHeight"),I=w("addStaticHeight"),V=w("staticHeight"),j=w("autoPlayTime"),G=w("moveTime");(0,r.useEffect)((()=>{!0===B&&P("isStaticHeightMode",!0)}),[B]);const U=()=>{const e=o?.page.pageTotal??0;let t=[];return e>0&&(t=new Array(e).fill("").map(((e,t)=>r.createElement(g.zx,{color:"primary",key:`page_${t}`,className:"m-1",onClick:()=>(e=>{l?.slideToActualIndex(e)})(t+1)},t+1)))),r.createElement(x,null,t)};return r.createElement(C.Z,null,(()=>r.createElement(i.tC,{gridTheme:u.Z},r.createElement(i.X2,{className:"mb-1"},M&&r.createElement(i.JX,{xl:24},r.createElement(i.X2,null,r.createElement(i.JX,{col:24,className:"mb-4"},(()=>{let e=A&&(0,h.UE)(V)?`${V}px`:void 0;return e||(e=!A&&_>0&&D>0?{widthRatio:_,heightRatio:D,addStaticHeight:I}:void 0),r.createElement(c.ZP,{setController:n,onSlideChange:s,data:v,isDebug:X,isEnablePagination:T,isEnableMouseMove:N,isEnableNavButton:H,isEnableLoop:J,isEnableAutoPlay:S,slidesPerView:B?"auto":(0,m.IX)(R,1),slidesPerGroup:(0,m.IX)(L,1),spaceBetween:(0,m.IX)(W),autoPlayTime:(0,m.IX)(j),moveTime:(0,m.IX)(G),height:e})})()),r.createElement(i.JX,{col:24},U()))),r.createElement(i.JX,{lg:24,xl:24,className:d()({"d-none":!f})},r.createElement(Z,{className:d()({"d-none":!f})},r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"isAutoMode",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"isAutoMode",render:e=>{let{field:t}=e;return r.createElement(p.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"slidesPerView",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"slidesPerView",render:e=>{let{field:t}=e;return r.createElement(p.nv,(0,a.Z)({type:"number",placeholder:"1",disabled:B},t))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"staticHeightMode",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"isStaticHeightMode",render:e=>{let{field:t}=e;return r.createElement(p.iw,(0,a.Z)({},t,{disabled:B,checked:t.value}))}}))),r.createElement(i.JX,{md:12},A&&r.createElement(E.gQ,{label:"staticHeight",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"staticHeight",render:e=>{let{field:t}=e;return r.createElement(p.nv,(0,a.Z)({type:"number"},t))}})),!A&&r.createElement(r.Fragment,null,r.createElement(E.gQ,{label:"aspectRatio",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"aspectRatioWidth",render:e=>{let{field:t}=e;return r.createElement(p.nv,(0,a.Z)({type:"number"},t))}}),r.createElement(b.Qr,{control:Q,name:"aspectRatioHeight",render:e=>{let{field:t}=e;return r.createElement(p.nv,(0,a.Z)({type:"number"},t))}})),r.createElement(E.gQ,{label:"addStaticHeight",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"addStaticHeight",render:e=>{let{field:t}=e;return r.createElement(p.nv,(0,a.Z)({type:"text",placeholder:"1px"},t))}}))))),r.createElement(i.X2,null,r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"isMount",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"isMount",render:e=>{let{field:t}=e;return r.createElement(p.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"isDebug",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"isDebug",render:e=>{let{field:t}=e;return r.createElement(p.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"enableLoop",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"isEnableLoop",render:e=>{let{field:t}=e;return r.createElement(p.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"enablePagination",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"isEnablePagination",render:e=>{let{field:t}=e;return r.createElement(p.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"enableNavButton",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"isEnableNavButton",render:e=>{let{field:t}=e;return r.createElement(p.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"enableMouseMove",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"isEnableMouseMove",render:e=>{let{field:t}=e;return r.createElement(p.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"enableAutoPlay",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"isEnableAutoPlay",render:e=>{let{field:t}=e;return r.createElement(p.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"slidesPerGroup",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"slidesPerGroup",render:e=>{let{field:t}=e;return r.createElement(p.nv,(0,a.Z)({type:"number"},t))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"spaceBetween",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"spaceBetween",render:e=>{let{field:t}=e;return r.createElement(p.nv,(0,a.Z)({type:"number"},t))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"autoPlayTime",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"autoPlayTime",render:e=>{let{field:t}=e;return r.createElement(p.nv,(0,a.Z)({type:"number"},t))}}))),r.createElement(i.JX,{md:12},r.createElement(E.gQ,{label:"moveTime",labelCol:12,formCol:12},r.createElement(b.Qr,{control:Q,name:"moveTime",render:e=>{let{field:t}=e;return r.createElement(p.nv,(0,a.Z)({type:"number"},t))}}))))),r.createElement(i.JX,{lg:24,xl:!0,className:"mb-4"},r.createElement("pre",null,JSON.stringify(o,null,"\t")))))))},Z=o.ZP.div`
  padding: 8px;
  border: 1px dotted #00a3e0;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  margin-bottom: 20px;
`,x=o.ZP.div`
  padding: 8px;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  margin-bottom: 20px;
`,Q={sidebar_position:3},w="Props Try",P={unversionedId:"props-try",id:"props-try",title:"Props Try",description:"Let's discover BearCarousel in less than 5 minutes.",source:"@site/docs/props-try.mdx",sourceDirName:".",slug:"/props-try",permalink:"/docs/props-try",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/docs/props-try.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Start NextJS",permalink:"/docs/started-nextjs"},next:{title:"Class Names",permalink:"/docs/class-names"}},k={},X=[],M={toc:X},J="wrapper";function T(e){let{components:t,...l}=e;return(0,n.kt)(J,(0,a.Z)({},M,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"props-try"},"Props Try"),(0,n.kt)("p",null,"Let's discover ",(0,n.kt)("strong",{parentName:"p"},"BearCarousel in less than 5 minutes"),"."),(0,n.kt)(y,{mdxType:"Carousel"}))}T.isMDXComponent=!0},8040:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/01-a170f00f5cf1b8fb5d630d7758bc44d4.jpg"},103:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/02-a92b63414c2b4851ffa4e32f207a370c.jpg"},6383:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/03-8a0319b7a927801be533e99af07fb9da.jpg"},3801:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/04-298adf91855c46f658637944f50ca075.jpg"},7828:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/05-6a010b8086a12edec2903da9a667655d.jpg"},8045:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/06-ab711cfd4180c33b05df0af695291b51.jpg"}}]);