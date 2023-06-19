"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[2041],{6451:(e,t,a)=>{a.d(t,{HN:()=>l,UF:()=>r,Wc:()=>s,Wh:()=>u});var o=a(5962),n=a(7294);const s=[{id:1,image:a(8040).Z},{id:2,image:a(103).Z},{id:3,image:a(6383).Z},{id:4,image:a(3801).Z},{id:5,image:a(7828).Z},{id:6,image:a(8045).Z}],r=s.map((e=>({key:e.id,children:n.createElement(o.B2,{bgUrl:e.image})}))),l=s.map((e=>({key:e.id,children:n.createElement(o.e3,{imageUrl:e.image})}))),u=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"gray"},{id:4,color:"white"},{id:5,color:"black"},{id:6,color:"yellow"},{id:7,color:"purple"},{id:8,color:"red"}].map((e=>({key:e.id,children:n.createElement(o.B2,null,n.createElement("div",{style:{height:"100%",backgroundColor:e.color}}))})))},5321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>y,frontMatter:()=>p,metadata:()=>v,toc:()=>f});var o=a(7462),n=a(7294),s=a(3905),r=a(5962),l=a(6451),u=a(1262),i=a(9521);const c=e=>n.createElement(u.Z,null,(()=>n.createElement(m,null,n.createElement(r.ZP,(0,o.Z)({data:l.UF,isEnableNavButton:!0,renderNavButton:(e,t)=>n.createElement("div",{className:r.eb.navGroup},n.createElement(d,{type:"button",className:r.eb.navPrevButton,onClick:e},"\u304f"),n.createElement(d,{type:"button",className:r.eb.navNextButton,onClick:t},"\u304f")),height:"250px"},e))))),d=i.ZP.button`
  &.${r.eb.navPrevButton},
  &.${r.eb.navNextButton}
  {
    background: none;
    color: #00a400;
    font-weight: 900;
    font-size: 20px;
  }
`,m=i.ZP.div`
  .${r.eb.root}[data-first-page="true"],
  .${r.eb.root}[data-last-page="true"]{
       .${r.eb.navPrevButton},
       .${r.eb.navNextButton} {
         opacity: 1;
         pointer-events: auto;
       }
  }
`,p={sidebar_position:4,tags:["NavButton","Custom CSS"]},b="Custom Nav",v={unversionedId:"feature/custom-nav",id:"feature/custom-nav",title:"Custom Nav",description:"If you want to customize your own navigation buttons, you can do so. The following example includes how to overwrite styles and determine the styles for the first and last buttons.",source:"@site/docs/feature/custom-nav.mdx",sourceDirName:"feature",slug:"/feature/custom-nav",permalink:"/docs/feature/custom-nav",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/docs/feature/custom-nav.mdx",tags:[{label:"NavButton",permalink:"/docs/tags/nav-button"},{label:"Custom CSS",permalink:"/docs/tags/custom-css"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["NavButton","Custom CSS"]},sidebar:"tutorialSidebar",previous:{title:"Auto Play",permalink:"/docs/feature/auto-play"},next:{title:"Loop Mode",permalink:"/docs/feature/loop-mode"}},g={},f=[],C={toc:f},N="wrapper";function y(e){let{components:t,...a}=e;return(0,s.kt)(N,(0,o.Z)({},C,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"custom-nav"},"Custom Nav"),(0,s.kt)("p",null,"If you want to customize your own navigation buttons, you can do so. The following example includes how to overwrite styles and determine the styles for the first and last buttons."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import BearCarousel, {elClassName, IBearCarouselProps} from 'bear-react-carousel';\nimport styled from 'styled-components';\n\n<BearCarousel \n    // ...ignore some\n    isEnableNavButton\n    renderNavButton={(toPrev, toNext) => {\n        return <div className={elClassName.navGroup}>\n            <CustomButton type=\"button\" className={elClassName.navPrevButton} onClick={toPrev}>\n                {'\u304f'}\n            </CustomButton>\n            <CustomButton type=\"button\" className={elClassName.navNextButton} onClick={toNext}>\n                {'\u304f'}\n            </CustomButton>\n        </div>\n    }}\n/>\n\nconst CustomButton = styled.button`\n  &.${elClassName.navPrevButton},\n  &.${elClassName.navNextButton}\n  {\n    background: none;\n    color: #00a400;\n    font-weight: 900;\n    font-size: 20px;\n  }\n`;\n\n\nconst CustomNavCarouselRoot = styled.div`\n  .${elClassName.root}[data-first-page=\"true\"],\n  .${elClassName.root}[data-last-page=\"true\"]{\n       .${elClassName.navPrevButton},\n       .${elClassName.navNextButton} {\n         opacity: 1;\n         pointer-events: auto;\n       }\n  }\n`;\n\n")),(0,s.kt)("p",null,"Check nav left/right button"),(0,s.kt)(c,{height:"250px",isDebug:!0,mdxType:"Carousel"}))}y.isMDXComponent=!0},8040:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/01-a170f00f5cf1b8fb5d630d7758bc44d4.jpg"},103:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/02-a92b63414c2b4851ffa4e32f207a370c.jpg"},6383:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/03-8a0319b7a927801be533e99af07fb9da.jpg"},3801:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/04-298adf91855c46f658637944f50ca075.jpg"},7828:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/05-6a010b8086a12edec2903da9a667655d.jpg"},8045:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/06-ab711cfd4180c33b05df0af695291b51.jpg"}}]);