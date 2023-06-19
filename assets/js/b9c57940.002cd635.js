"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[5331],{6691:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(7462),o=a(7294),r=a(5962),s=a(6451),n=a(1262);const l=e=>o.createElement(n.Z,null,(()=>o.createElement(r.ZP,(0,i.Z)({data:s.UF,isEnableNavButton:!0,height:"250px"},e))))},6451:(e,t,a)=>{a.d(t,{HN:()=>n,UF:()=>s,Wc:()=>r,Wh:()=>l});var i=a(5962),o=a(7294);const r=[{id:1,image:a(8040).Z},{id:2,image:a(103).Z},{id:3,image:a(6383).Z},{id:4,image:a(3801).Z},{id:5,image:a(7828).Z},{id:6,image:a(8045).Z}],s=r.map((e=>({key:e.id,children:o.createElement(i.B2,{bgUrl:e.image})}))),n=r.map((e=>({key:e.id,children:o.createElement(i.e3,{imageUrl:e.image})}))),l=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"gray"},{id:4,color:"white"},{id:5,color:"black"},{id:6,color:"yellow"},{id:7,color:"purple"},{id:8,color:"red"}].map((e=>({key:e.id,children:o.createElement(i.B2,null,o.createElement("div",{style:{height:"100%",backgroundColor:e.color}}))})))},1958:(e,t,a)=>{a.d(t,{HN:()=>o.HN,Wh:()=>o.Wh,ZP:()=>i.Z});var i=a(6691),o=a(6451)},9867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=a(7462),o=(a(7294),a(3905)),r=a(1958);const s={sidebar_position:1,tags:["Auto Height","Static Height","Aspect Ratio Height"]},n="Height",l={unversionedId:"feature/height",id:"feature/height",title:"Height",description:"It is recommended to use a static height, although the auto height is very convenient, but it will cause bad visual effects, flashing to open the layout (if you follow the image height)",source:"@site/docs/feature/height.mdx",sourceDirName:"feature",slug:"/feature/height",permalink:"/docs/feature/height",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/docs/feature/height.mdx",tags:[{label:"Auto Height",permalink:"/docs/tags/auto-height"},{label:"Static Height",permalink:"/docs/tags/static-height"},{label:"Aspect Ratio Height",permalink:"/docs/tags/aspect-ratio-height"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Auto Height","Static Height","Aspect Ratio Height"]},sidebar:"tutorialSidebar",previous:{title:"Feature",permalink:"/docs/category/feature"},next:{title:"Slides Perview",permalink:"/docs/feature/slide-preview"}},c={},d=[{value:"Auto Height",id:"auto-height",level:2},{value:"Static Height",id:"static-height",level:2},{value:"Aspect Ratio Height",id:"aspect-ratio-height",level:2}],h={toc:d},g="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(g,(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"height"},"Height"),(0,o.kt)("admonition",{title:"Suggestion",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to use a static height, although the auto height is very convenient, but it will cause bad visual effects, flashing to open the layout (if you follow the image height)")),(0,o.kt)("h2",{id:"auto-height"},"Auto Height"),(0,o.kt)("p",null,"If your height in slide card content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import BearCarousel, {TBearSlideItemDataList, BearSlideCard} from 'bear-react-carousel';\n\nconst data: TBearSlideItemDataList = images.map(row => {\n    return {\n        key: row.id,\n        children: <BearSlideCard>\n            <div style={{height: '200px', backgroundColor: row.color}}/>\n        </BearSlideCard>\n    };\n});\n\n<BearCarousel\n    // ...ignore some\n    data={data}\n/>\n")),(0,o.kt)("h2",{id:"static-height"},"Static Height"),(0,o.kt)("p",null,"You can use your own units ",(0,o.kt)("strong",{parentName:"p"},"like ",(0,o.kt)("inlineCode",{parentName:"strong"},"px"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"rem"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"%"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<BearCarousel\n    // ...ignore some\n    height="250px"\n/>\n')),(0,o.kt)(r.ZP,{mdxType:"Carousel"}),(0,o.kt)("h2",{id:"aspect-ratio-height"},"Aspect Ratio Height"),(0,o.kt)("p",null,"If you want to set the height proportionally, you can do"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<BearCarousel \n    // ...ignore some \n    height={{ widthRatio: 21, heightRatio: 9 }}\n/>\n")),(0,o.kt)("p",null,"You can move the window to see"),(0,o.kt)(r.ZP,{height:{widthRatio:21,heightRatio:9},mdxType:"Carousel"}))}u.isMDXComponent=!0},8040:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/01-a170f00f5cf1b8fb5d630d7758bc44d4.jpg"},103:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/02-a92b63414c2b4851ffa4e32f207a370c.jpg"},6383:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/03-8a0319b7a927801be533e99af07fb9da.jpg"},3801:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/04-298adf91855c46f658637944f50ca075.jpg"},7828:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/05-6a010b8086a12edec2903da9a667655d.jpg"},8045:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/06-ab711cfd4180c33b05df0af695291b51.jpg"}}]);