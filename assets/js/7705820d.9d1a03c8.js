"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[4706],{6451:(e,n,a)=>{a.d(n,{HN:()=>c,UF:()=>s,Wc:()=>o,Wh:()=>i});var t=a(5962),r=a(7294);const o=[{id:1,image:a(8040).Z},{id:2,image:a(103).Z},{id:3,image:a(6383).Z},{id:4,image:a(3801).Z},{id:5,image:a(7828).Z},{id:6,image:a(8045).Z}],s=o.map((e=>({key:e.id,children:r.createElement(t.B2,{bgUrl:e.image})}))),c=o.map((e=>({key:e.id,children:r.createElement(t.e3,{imageUrl:e.image})}))),i=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"gray"},{id:4,color:"white"},{id:5,color:"black"},{id:6,color:"yellow"},{id:7,color:"purple"},{id:8,color:"red"}].map((e=>({key:e.id,children:r.createElement(t.B2,null,r.createElement("div",{style:{height:"100%",backgroundColor:e.color}}))})))},595:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>f});var t=a(7462),r=a(7294),o=a(3905),s=a(6451),c=a(5962),i=a(1262);const l=()=>{const e=r.useRef(null),n=r.useRef(null);return r.createElement(i.Z,null,(()=>r.createElement("div",null,r.createElement(c.ZP,{ref:e,syncCarouselRef:n,data:s.UF,slidesPerView:3,isCenteredSlides:!0,height:"200px",isEnableNavButton:!0,isEnablePagination:!0,isDebug:!0}),r.createElement(c.ZP,{ref:n,syncCarouselRef:e,data:s.UF,slidesPerView:1,isCenteredSlides:!0,height:"200px",isEnableNavButton:!0,isEnablePagination:!0,isDebug:!0}))))},d={sidebar_position:8},u="Sync Control",p={unversionedId:"feature/sync-control",id:"feature/sync-control",title:"Sync Control",description:"Synchronous control navigation items, currently only supports one-way synchronization",source:"@site/docs/feature/sync-control.mdx",sourceDirName:"feature",slug:"/feature/sync-control",permalink:"/docs/feature/sync-control",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/docs/feature/sync-control.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Responsive",permalink:"/docs/feature/responsive"},next:{title:"Update Slide Content",permalink:"/docs/feature/update-slide-content"}},m={},f=[],g={toc:f},y="wrapper";function b(e){let{components:n,...a}=e;return(0,o.kt)(y,(0,t.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sync-control"},"Sync Control"),(0,o.kt)("p",null,"Synchronous control navigation items, currently ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"only supports one-way synchronization"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import BearCarousel from "bear-react-carousel";\n\nconst SyncCarousel = () => {\n    const syncCarouselRefA = React.useRef<BearCarousel>(null);\n    const syncCarouselRefB = React.useRef<BearCarousel>(null);\n\n    return <div>\n        <BearCarousel\n            // ...ignore some\n             ref={syncCarouselRefA}\n             syncCarouselRef={syncCarouselRefB}\n        />\n        <BearCarousel\n            // ...ignore some\n            ref={syncCarouselRefB}\n            syncCarouselRef={syncCarouselRefA}\n        />\n    </div>\n}\n')),(0,o.kt)("p",null,"Try slide item A or B"),(0,o.kt)(l,{mdxType:"SyncCarousel"}))}b.isMDXComponent=!0},8040:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01-a170f00f5cf1b8fb5d630d7758bc44d4.jpg"},103:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/02-a92b63414c2b4851ffa4e32f207a370c.jpg"},6383:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/03-8a0319b7a927801be533e99af07fb9da.jpg"},3801:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/04-298adf91855c46f658637944f50ca075.jpg"},7828:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/05-6a010b8086a12edec2903da9a667655d.jpg"},8045:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/06-ab711cfd4180c33b05df0af695291b51.jpg"}}]);