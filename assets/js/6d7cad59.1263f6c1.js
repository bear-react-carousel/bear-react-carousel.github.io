"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[8139],{6451:(e,t,l)=>{l.d(t,{HN:()=>i,UF:()=>o,Wc:()=>n,Wh:()=>c});var a=l(5962),r=l(7294);const n=[{id:1,image:l(8040).Z},{id:2,image:l(103).Z},{id:3,image:l(6383).Z},{id:4,image:l(3801).Z},{id:5,image:l(7828).Z},{id:6,image:l(8045).Z}],o=n.map((e=>({key:e.id,children:r.createElement(a.df,{as:"card",imageUrl:e.image})}))),i=n.map((e=>({key:e.id,children:r.createElement(a.df,{as:"image",imageUrl:e.image})}))),c=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"gray"},{id:4,color:"white"},{id:5,color:"black"},{id:6,color:"yellow"},{id:7,color:"purple"},{id:8,color:"red"}].map((e=>({key:e.id,children:r.createElement(a.df,null,r.createElement("div",{style:{height:"100%",backgroundColor:e.color}}))})))},531:(e,t,l)=>{l.d(t,{Z:()=>a});const a={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1540},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}}},9810:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>k,contentTitle:()=>w,default:()=>T,frontMatter:()=>Q,metadata:()=>P,toc:()=>X});var a=l(7462),r=l(7294),n=l(3905),o=l(9521),i=l(4040),c=l(5962),m=l(6018),s=l(4184),d=l.n(s),u=l(531),p=l(7536),E=l(2604),b=l(2173),g=l(4004),f=l(6451),h=l(8241),v=l(1262);const y=f.Wc.map((e=>({key:e.id,children:r.createElement(c.df,{imageUrl:e.image,imageSize:"cover"})})));const C=e=>{let{isLoadData:t}=e;const l=(0,r.useRef)(null),[n,o]=(0,r.useState)(),[s,f]=(0,r.useState)(!0),{control:C,watch:Q,setValue:w,getValues:P}=(0,p.cI)({defaultValues:{moveTime:400,autoPlayTime:3e3,aspectRatioWidth:40,aspectRatioHeight:9,staticHeight:200,isAutoMode:!1,isStaticHeightMode:!0,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,isEnableMouseMove:!0,isEnableAutoPlay:!1,isEnableNavButton:!0,isEnablePagination:!0,isEnableLoop:!0,isMount:!0}}),k=Q("isDebug"),X=Q("isMount"),M=Q("isEnableLoop"),J=Q("isEnablePagination"),T=Q("isEnableNavButton"),H=Q("isEnableMouseMove"),N=Q("isEnableAutoPlay"),S=Q("isAutoMode"),B=Q("isStaticHeightMode"),R=Q("slidesPerGroup"),A=Q("slidesPerView"),L=Q("spaceBetween"),W=Q("aspectRatioWidth"),_=Q("aspectRatioHeight"),D=Q("addStaticHeight"),I=Q("staticHeight"),V=Q("autoPlayTime"),G=Q("moveTime");(0,r.useEffect)((()=>{!0===S&&w("isStaticHeightMode",!0)}),[S]);const U=()=>{const e=n?.page.pageTotal??0;let t=[];return e>0&&(t=new Array(e).fill("").map(((e,t)=>r.createElement(g.zx,{color:"primary",key:`page_${t}`,className:"m-1",onClick:()=>(e=>{l.current?.slideToActualIndex(e)})(t+1)},t+1)))),r.createElement(x,null,t)};return r.createElement(v.Z,null,(()=>r.createElement(i.tC,{gridTheme:u.Z},r.createElement(i.X2,{className:"mb-1"},X&&r.createElement(i.JX,{xl:24},r.createElement(i.X2,null,r.createElement(i.JX,{col:24,className:"mb-4"},r.createElement(c.ZP,{controllerRef:l,onChange:o,data:y,isDebug:k,isEnablePagination:J,isEnableMouseMove:H,isEnableNavButton:T,isEnableLoop:M,isEnableAutoPlay:N,slidesPerView:S?"auto":(0,m.IX)(A,1),slidesPerGroup:(0,m.IX)(R,1),spaceBetween:(0,m.IX)(L),autoPlayTime:(0,m.IX)(V),moveTime:(0,m.IX)(G),aspectRatio:!B&&W>0&&_>0?{widthRatio:W,heightRatio:_,addStaticHeight:D}:void 0,staticHeight:B&&(0,h.UE)(I)?`${I}px`:void 0})),r.createElement(i.JX,{col:24},U()))),r.createElement(i.JX,{lg:24,xl:24,className:d()({"d-none":!s})},r.createElement(Z,{className:d()({"d-none":!s})},r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"isAutoMode",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"isAutoMode",render:e=>{let{field:t}=e;return r.createElement(E.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"slidesPerView",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"slidesPerView",render:e=>{let{field:t}=e;return r.createElement(E.nv,(0,a.Z)({type:"number",placeholder:"1",disabled:S},t))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"staticHeightMode",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"isStaticHeightMode",render:e=>{let{field:t}=e;return r.createElement(E.iw,(0,a.Z)({},t,{disabled:S,checked:t.value}))}}))),r.createElement(i.JX,{md:12},B&&r.createElement(b.gQ,{label:"staticHeight",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"staticHeight",render:e=>{let{field:t}=e;return r.createElement(E.nv,(0,a.Z)({type:"number"},t))}})),!B&&r.createElement(r.Fragment,null,r.createElement(b.gQ,{label:"aspectRatio",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"aspectRatioWidth",render:e=>{let{field:t}=e;return r.createElement(E.nv,(0,a.Z)({type:"number"},t))}}),r.createElement(p.Qr,{control:C,name:"aspectRatioHeight",render:e=>{let{field:t}=e;return r.createElement(E.nv,(0,a.Z)({type:"number"},t))}})),r.createElement(b.gQ,{label:"addStaticHeight",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"addStaticHeight",render:e=>{let{field:t}=e;return r.createElement(E.nv,(0,a.Z)({type:"text",placeholder:"1px"},t))}}))))),r.createElement(i.X2,null,r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"isMount",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"isMount",render:e=>{let{field:t}=e;return r.createElement(E.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"isDebug",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"isDebug",render:e=>{let{field:t}=e;return r.createElement(E.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"enableLoop",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"isEnableLoop",render:e=>{let{field:t}=e;return r.createElement(E.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"enablePagination",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"isEnablePagination",render:e=>{let{field:t}=e;return r.createElement(E.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"enableNavButton",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"isEnableNavButton",render:e=>{let{field:t}=e;return r.createElement(E.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"enableMouseMove",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"isEnableMouseMove",render:e=>{let{field:t}=e;return r.createElement(E.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"enableAutoPlay",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"isEnableAutoPlay",render:e=>{let{field:t}=e;return r.createElement(E.iw,(0,a.Z)({},t,{checked:t.value}))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"slidesPerGroup",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"slidesPerGroup",render:e=>{let{field:t}=e;return r.createElement(E.nv,(0,a.Z)({type:"number"},t))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"spaceBetween",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"spaceBetween",render:e=>{let{field:t}=e;return r.createElement(E.nv,(0,a.Z)({type:"number"},t))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"autoPlayTime",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"autoPlayTime",render:e=>{let{field:t}=e;return r.createElement(E.nv,(0,a.Z)({type:"number"},t))}}))),r.createElement(i.JX,{md:12},r.createElement(b.gQ,{label:"moveTime",labelCol:12,formCol:12},r.createElement(p.Qr,{control:C,name:"moveTime",render:e=>{let{field:t}=e;return r.createElement(E.nv,(0,a.Z)({type:"number"},t))}}))))),r.createElement(i.JX,{lg:24,xl:!0,className:"mb-4"},r.createElement("pre",null,JSON.stringify(n,null,"\t")))))))},Z=o.ZP.div`
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
`,Q={sidebar_position:3},w="Props Try",P={unversionedId:"props-try",id:"props-try",title:"Props Try",description:"Let's discover BearCarousel in less than 5 minutes.",source:"@site/docs/props-try.mdx",sourceDirName:".",slug:"/props-try",permalink:"/docs/props-try",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/props-try.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Update Slide Content",permalink:"/docs/feature/update-slide-content"},next:{title:"Examples",permalink:"/docs/category/examples"}},k={},X=[],M={toc:X},J="wrapper";function T(e){let{components:t,...l}=e;return(0,n.kt)(J,(0,a.Z)({},M,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"props-try"},"Props Try"),(0,n.kt)("p",null,"Let's discover ",(0,n.kt)("strong",{parentName:"p"},"BearCarousel in less than 5 minutes"),"."),(0,n.kt)(C,{mdxType:"Carousel"}))}T.isMDXComponent=!0},8040:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/01-a170f00f5cf1b8fb5d630d7758bc44d4.jpg"},103:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/02-a92b63414c2b4851ffa4e32f207a370c.jpg"},6383:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/03-8a0319b7a927801be533e99af07fb9da.jpg"},3801:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/04-298adf91855c46f658637944f50ca075.jpg"},7828:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/05-6a010b8086a12edec2903da9a667655d.jpg"},8045:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/06-ab711cfd4180c33b05df0af695291b51.jpg"}}]);