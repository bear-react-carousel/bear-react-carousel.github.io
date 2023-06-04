"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[2538],{6691:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7462),n=a(7294),o=a(5962),i=a(6451),s=a(1262);const l=e=>n.createElement(s.Z,null,(()=>n.createElement(o.ZP,(0,r.Z)({data:i.UF,isEnableNavButton:!0,staticHeight:"250px"},e))))},6451:(e,t,a)=>{a.d(t,{HN:()=>s,UF:()=>i,Wc:()=>o,Wh:()=>l});var r=a(5962),n=a(7294);const o=[{id:1,image:a(8040).Z},{id:2,image:a(103).Z},{id:3,image:a(6383).Z},{id:4,image:a(3801).Z},{id:5,image:a(7828).Z},{id:6,image:a(8045).Z}],i=o.map((e=>({key:e.id,children:n.createElement(r.df,{as:"card",imageUrl:e.image})}))),s=o.map((e=>({key:e.id,children:n.createElement(r.df,{as:"image",imageUrl:e.image})}))),l=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"gray"},{id:4,color:"white"},{id:5,color:"black"},{id:6,color:"yellow"},{id:7,color:"purple"},{id:8,color:"red"}].map((e=>({key:e.id,children:n.createElement(r.df,null,n.createElement("div",{style:{height:"100%",backgroundColor:e.color}}))})))},1958:(e,t,a)=>{a.d(t,{HN:()=>n.HN,Wh:()=>n.Wh,ZP:()=>r.Z});var r=a(6691),n=a(6451)},2418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),o=a(1958);const i={sidebar_position:2},s="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Let's discover Bear Carousel in less than 1 minutes.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Why Bear Carousel",permalink:"/docs/why"},next:{title:"Feature",permalink:"/docs/category/feature"}},d={},c=[{value:"Getting Started",id:"getting-started-1",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Installation",id:"installation",level:2},{value:"Start your project",id:"start-your-project",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Let's discover ",(0,n.kt)("strong",{parentName:"p"},"Bear Carousel in less than 1 minutes"),"."),(0,n.kt)("h2",{id:"getting-started-1"},"Getting Started"),(0,n.kt)("p",null,"Get started in ",(0,n.kt)("strong",{parentName:"p"},"your project"),"."),(0,n.kt)("p",null,"Or ",(0,n.kt)("strong",{parentName:"p"},"try Bear Carousel immediately")," with ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://codesandbox.io/s/bear-react-carousel-9h6eu?file=/src/CustomCarousel.tsx"},"CodeSandbox")),"."),(0,n.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 14 or above:"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://react.dev/"},"React.js")," version 18 or above:")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add bear-react-carousel\n")),(0,n.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,n.kt)("h2",{id:"start-your-project"},"Start your project"),(0,n.kt)("p",null,"Add the required ",(0,n.kt)("inlineCode",{parentName:"p"},"style files")," to your project ",(0,n.kt)("inlineCode",{parentName:"p"},"entry point")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/App.tsx"',title:'"/src/App.tsx"'},"import 'bear-react-carousel/dist/index.css';\n")),(0,n.kt)("p",null,"Then use code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import BearCarousel, {TBearSlideItemDataList, BearSlideItem} from 'bear-react-carousel';\n\nconst images = [\n    {id: 1, color: 'green'},\n    {id: 2, color: 'blue'},\n    {id: 3, color: 'gray'},\n    {id: 4, color: 'white'},\n    {id: 5, color: 'black'},\n    {id: 6, color: 'yellow'},\n    {id: 7, color: 'purple'},\n    {id: 8, color: 'red'},\n];\n\nexport const CustomBanner = () => {\n    const bearSlideItemData: TBearSlideItemDataList = images.map(row => {\n        return {\n            key: row.id,\n            children: <BearSlideItem>\n                <div style={{height: '100%', backgroundColor: row.color}}/>\n            </BearSlideItem>\n        };\n    });\n    return <BearCarousel\n        data={bearSlideItemData} \n        staticHeight=\"250px\"\n        isEnableNavButton\n        isEnablePagination\n        isDebug\n    />\n}\n")),(0,n.kt)("p",null,"Then you will see this"),(0,n.kt)(o.ZP,{data:o.Wh,staticHeight:"250px",isEnableNavButton:!0,isEnablePagination:!0,isDebug:!0,mdxType:"Carousel"}))}m.isMDXComponent=!0},8040:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/01-a170f00f5cf1b8fb5d630d7758bc44d4.jpg"},103:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/02-a92b63414c2b4851ffa4e32f207a370c.jpg"},6383:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/03-8a0319b7a927801be533e99af07fb9da.jpg"},3801:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/04-298adf91855c46f658637944f50ca075.jpg"},7828:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/05-6a010b8086a12edec2903da9a667655d.jpg"},8045:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/06-ab711cfd4180c33b05df0af695291b51.jpg"}}]);