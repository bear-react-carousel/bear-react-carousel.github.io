"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[8964],{6691:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7462),s=a(7294),n=a(5962),o=a(6451),i=a(1262);const d=e=>s.createElement(i.Z,null,(()=>s.createElement(n.ZP,(0,r.Z)({data:o.UF,isEnableNavButton:!0,height:"250px"},e))))},6451:(e,t,a)=>{a.d(t,{HN:()=>i,UF:()=>o,Wc:()=>n,Wh:()=>d});var r=a(5962),s=a(7294);const n=[{id:1,image:a(8040).Z},{id:2,image:a(103).Z},{id:3,image:a(6383).Z},{id:4,image:a(3801).Z},{id:5,image:a(7828).Z},{id:6,image:a(8045).Z}],o=n.map((e=>({key:e.id,children:s.createElement(r.B2,{bgUrl:e.image})}))),i=n.map((e=>({key:e.id,children:s.createElement(r.e3,{imageUrl:e.image})}))),d=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"gray"},{id:4,color:"white"},{id:5,color:"black"},{id:6,color:"yellow"},{id:7,color:"purple"},{id:8,color:"red"}].map((e=>({key:e.id,children:s.createElement(r.B2,null,s.createElement("div",{style:{height:"100%",backgroundColor:e.color}}))})))},1958:(e,t,a)=>{a.d(t,{HN:()=>s.HN,Wh:()=>s.Wh,ZP:()=>r.Z});var r=a(6691),s=a(6451)},7488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(7462),s=(a(7294),a(3905));a(1958);const n={sidebar_position:4},o="Start NextJS",i={unversionedId:"faq/started-nextjs",id:"faq/started-nextjs",title:"Start NextJS",description:"Because it needs to use the actual rendered width of the dom, it does not support Server side render. The approach here is to let Nextjs only render on the client site",source:"@site/docs/faq/started-nextjs.mdx",sourceDirName:"faq",slug:"/faq/started-nextjs",permalink:"/docs/faq/started-nextjs",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/docs/faq/started-nextjs.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Overflow issues",permalink:"/docs/faq/overflow-issues"},next:{title:"Migration to 4.x version",permalink:"/docs/faq/migration-to-4"}},d={},c=[{value:"Getting Started",id:"getting-started",level:2}],l={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"start-nextjs"},"Start NextJS"),(0,s.kt)("admonition",{title:"Suggestion",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Because it needs to use the actual rendered width of the dom, it does not support Server side render. The approach here is to let Nextjs only render on the client site")),(0,s.kt)("p",null,"Let's discover ",(0,s.kt)("strong",{parentName:"p"},"Bear Carousel in less than 1 minutes"),"."),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"Or ",(0,s.kt)("strong",{parentName:"p"},"try in NextJS")," with ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://codesandbox.io/s/bear-react-carousel-nextjs-6jqj2o"},"CodeSandbox")),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},'import dynamic from "next/dynamic";\nimport { BearSlideCard } from "bear-react-carousel";\n\nimport "bear-react-carousel/dist/index.css";\n\nconst BearCarousel = dynamic(\n  () => import("bear-react-carousel").then((mod) => mod), {ssr: false}\n);\n\nconst Carousel = () => {\n  const images = [\n    { id: 1, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" },\n    { id: 2, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" },\n    { id: 3, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" }\n  ];\n\n  const bearSlideItemData = images.map((row) => {\n    return {\n      key: row.id,\n      children: <BearSlideCard bgUrl={row.imageUrl} />\n    };\n  });\n\n  return <BearCarousel data={bearSlideItemData} height="300px" />;\n}\n\nexport default Carousel;\n')))}p.isMDXComponent=!0},8040:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/01-a170f00f5cf1b8fb5d630d7758bc44d4.jpg"},103:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/02-a92b63414c2b4851ffa4e32f207a370c.jpg"},6383:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/03-8a0319b7a927801be533e99af07fb9da.jpg"},3801:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/04-298adf91855c46f658637944f50ca075.jpg"},7828:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/05-6a010b8086a12edec2903da9a667655d.jpg"},8045:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/06-ab711cfd4180c33b05df0af695291b51.jpg"}}]);