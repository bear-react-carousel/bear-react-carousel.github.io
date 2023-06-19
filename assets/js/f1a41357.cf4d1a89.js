"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[1299],{6451:(e,t,a)=>{a.d(t,{HN:()=>s,UF:()=>l,Wc:()=>n,Wh:()=>c});var o=a(5962),r=a(7294);const n=[{id:1,image:a(8040).Z},{id:2,image:a(103).Z},{id:3,image:a(6383).Z},{id:4,image:a(3801).Z},{id:5,image:a(7828).Z},{id:6,image:a(8045).Z}],l=n.map((e=>({key:e.id,children:r.createElement(o.B2,{bgUrl:e.image})}))),s=n.map((e=>({key:e.id,children:r.createElement(o.e3,{imageUrl:e.image})}))),c=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"gray"},{id:4,color:"white"},{id:5,color:"black"},{id:6,color:"yellow"},{id:7,color:"purple"},{id:8,color:"red"}].map((e=>({key:e.id,children:r.createElement(o.B2,null,r.createElement("div",{style:{height:"100%",backgroundColor:e.color}}))})))},9988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>C,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var o=a(7462),r=a(7294),n=a(3905),l=a(6451),s=a(5962),c=a(1262);const i=()=>{const[e,t]=(0,r.useState)(),[a,o]=(0,r.useState)();return r.createElement(c.Z,null,(()=>r.createElement("div",null,r.createElement(s.ZP,{setController:t,onSlideChange:o,data:l.UF,slidesPerView:1,isCenteredSlides:!0,height:"200px",isEnableNavButton:!0,isEnablePagination:!0,isDebug:!0}),r.createElement("div",{className:"button-group mt-2"},new Array(a?.page.pageTotal).fill("").map(((t,a)=>r.createElement("button",{type:"button",className:"button button--sm button--info",onClick:()=>e?.slideToPage(a+1)},"Page ",a+1)))))))},u={sidebar_position:8,tags:["Controller"]},d="Manual Control",m={unversionedId:"feature/manual-control",id:"feature/manual-control",title:"Manual Control",description:"Manual control navigation items Controller",source:"@site/docs/feature/manual-control.mdx",sourceDirName:"feature",slug:"/feature/manual-control",permalink:"/docs/feature/manual-control",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/docs/feature/manual-control.mdx",tags:[{label:"Controller",permalink:"/docs/tags/controller"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,tags:["Controller"]},sidebar:"tutorialSidebar",previous:{title:"Responsive",permalink:"/docs/feature/responsive"},next:{title:"Sync Control",permalink:"/docs/feature/sync-control"}},p={},g=[],b={toc:g},f="wrapper";function C(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,o.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"manual-control"},"Manual Control"),(0,n.kt)("p",null,"Manual control navigation items ",(0,n.kt)("a",{parentName:"p",href:"/docs/components/bear-carousel#controller"},"Controller")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import BearCarousel, {Controller,ICarouselState} from 'bear-react-carousel';\nimport {useState} from 'react';\n\nconst SyncCarousel = () => {\n    const [controller, setController] = useState<Controller>();\n    const [carouselState, setCarouselState] = useState<ICarouselState>();\n\n    const handleSlide = (page: number) => {\n        controller?.slideToPage(page);\n    }\n\n    return <div>\n        <BearCarousel\n            // ...ignore some\n             onSlideChange={setCarouselState}\n             setController={setController}\n        />\n\n        currentPage: {carouselState?.page.pageTotal}\n    </div>\n}\n")),(0,n.kt)("p",null,"Try click button"),(0,n.kt)(i,{mdxType:"ManualControlCarousel"}))}C.isMDXComponent=!0},8040:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/01-a170f00f5cf1b8fb5d630d7758bc44d4.jpg"},103:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/02-a92b63414c2b4851ffa4e32f207a370c.jpg"},6383:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/03-8a0319b7a927801be533e99af07fb9da.jpg"},3801:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/04-298adf91855c46f658637944f50ca075.jpg"},7828:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/05-6a010b8086a12edec2903da9a667655d.jpg"},8045:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/06-ab711cfd4180c33b05df0af695291b51.jpg"}}]);