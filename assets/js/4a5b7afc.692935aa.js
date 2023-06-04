"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[5004],{6451:(e,t,a)=>{a.d(t,{HN:()=>r,UF:()=>o,Wc:()=>s,Wh:()=>d});var i=a(5962),n=a(7294);const s=[{id:1,image:a(8040).Z},{id:2,image:a(103).Z},{id:3,image:a(6383).Z},{id:4,image:a(3801).Z},{id:5,image:a(7828).Z},{id:6,image:a(8045).Z}],o=s.map((e=>({key:e.id,children:n.createElement(i.df,{as:"card",imageUrl:e.image})}))),r=s.map((e=>({key:e.id,children:n.createElement(i.df,{as:"image",imageUrl:e.image})}))),d=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"gray"},{id:4,color:"white"},{id:5,color:"black"},{id:6,color:"yellow"},{id:7,color:"purple"},{id:8,color:"red"}].map((e=>({key:e.id,children:n.createElement(i.df,null,n.createElement("div",{style:{height:"100%",backgroundColor:e.color}}))})))},2311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var i=a(7462),n=a(7294),s=a(3905),o=a(5962),r=a(6451),d=a(1262);const c=()=>{const[e,t]=n.useState(0),a=n.useMemo((()=>r.Wc.map((a=>{const i=a.id===e;return{key:a.id,children:n.createElement(o.df,{as:"image",imageUrl:a.image,onClick:()=>t(a.id),style:i?{transition:"filter .4s",filter:"blur(4px)"}:void 0})}}))),[e]);return n.createElement(d.Z,null,(()=>n.createElement(o.ZP,{data:a,slidesPerView:3,isEnableNavButton:!0,aspectRatio:{widthRatio:16,heightRatio:9},isSlideItemMemo:!0})))},l={sidebar_position:9},m="Update Slide Content",u={unversionedId:"feature/update-slide-content",id:"feature/update-slide-content",title:"Update Slide Content",description:"If you want to change the content of the slide item, such as changing the display switching of a certain value, you can choose to play tricks on the key, or turn on the isSlideItemMemo mode, and use useMemo deps to determine whether to switch the item",source:"@site/docs/feature/update-slide-content.mdx",sourceDirName:"feature",slug:"/feature/update-slide-content",permalink:"/docs/feature/update-slide-content",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/feature/update-slide-content.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Sync Control",permalink:"/docs/feature/sync-control"},next:{title:"Props Try",permalink:"/docs/props-try"}},p={},h=[{value:"Use Key Cache",id:"use-key-cache",level:2},{value:"Use Memo Cache",id:"use-memo-cache",level:2}],g={toc:h},f="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(f,(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"update-slide-content"},"Update Slide Content"),(0,s.kt)("p",null,"If you want to change the content of the slide item, such as changing the display switching of a certain value, you can choose to play tricks on the ",(0,s.kt)("inlineCode",{parentName:"p"},"key"),", or turn on the ",(0,s.kt)("inlineCode",{parentName:"p"},"isSlideItemMemo")," mode, and use ",(0,s.kt)("inlineCode",{parentName:"p"},"useMemo")," deps to determine whether to switch the item"),(0,s.kt)("h2",{id:"use-key-cache"},"Use Key Cache"),(0,s.kt)("admonition",{title:"Tip",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"This is a ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"default cache mode")),", and it will decide whether to regenerate the slideItem based on all key values, because we don't want to regenerate the SlideItem when the slide index changes, but there is a need to update the SlideItem")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const StateCarousel = () => {\n    const [activeId, setActiveId] = React.useState(0);\n\n    const myData = images.map(row => {\n        const isActive = row.id === activeId;\n        return {\n            key: [row.id, isActive].join('-'),\n            children: <BearSlideItem as=\"image\"\n                 imageUrl={row.image}\n                 onClick={() => setActiveId(row.id)}\n                 style={isActive ? {transition: 'filter .4s', filter: 'blur(4px)'}: undefined}\n            />\n        };\n    });\n\n    return <BearCarousel\n        // ...ignore some\n        data={myData}\n    />\n}\n")),(0,s.kt)("h2",{id:"use-memo-cache"},"Use Memo Cache"),(0,s.kt)("p",null,"If you don't want to mess with the id, you can use useMemo's deps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"const StateCarousel = () => {\n    const [activeId, setActiveId] = React.useState(0);\n\n    const myData = React.useMemo(() => images.map(row => {\n        const isActive = row.id === activeId;\n        return {\n            key: row.id,\n            children: <BearSlideItem as=\"image\"\n                 imageUrl={row.image}\n                 onClick={() => setActiveId(row.id)}\n                 style={isActive ? {transition: 'filter .4s', filter: 'blur(4px)'}: undefined}\n            />\n        };\n    }), [activeId]);\n\n    return <BearCarousel\n        // ...ignore some\n        data={myData}\n        isSlideItemMemo\n    />\n}\n")),(0,s.kt)("p",null,"Try click slideItem"),(0,s.kt)(c,{mdxType:"StateCarousel"}))}k.isMDXComponent=!0},8040:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/01-a170f00f5cf1b8fb5d630d7758bc44d4.jpg"},103:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/02-a92b63414c2b4851ffa4e32f207a370c.jpg"},6383:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/03-8a0319b7a927801be533e99af07fb9da.jpg"},3801:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/04-298adf91855c46f658637944f50ca075.jpg"},7828:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/05-6a010b8086a12edec2903da9a667655d.jpg"},8045:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/06-ab711cfd4180c33b05df0af695291b51.jpg"}}]);