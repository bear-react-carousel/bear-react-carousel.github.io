"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[1552],{6451:(e,a,t)=>{t.d(a,{HN:()=>n,UF:()=>s,Wc:()=>r,Wh:()=>l});var o=t(5962),i=t(7294);const r=[{id:1,image:t(8040).Z},{id:2,image:t(103).Z},{id:3,image:t(6383).Z},{id:4,image:t(3801).Z},{id:5,image:t(7828).Z},{id:6,image:t(8045).Z}],s=r.map((e=>({key:e.id,children:i.createElement(o.df,{as:"card",imageUrl:e.image})}))),n=r.map((e=>({key:e.id,children:i.createElement(o.df,{as:"image",imageUrl:e.image})}))),l=[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"gray"},{id:4,color:"white"},{id:5,color:"black"},{id:6,color:"yellow"},{id:7,color:"purple"},{id:8,color:"red"}].map((e=>({key:e.id,children:i.createElement(o.df,null,i.createElement("div",{style:{height:"100%",backgroundColor:e.color}}))})))},531:(e,a,t)=>{t.d(a,{Z:()=>o});const o={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1540},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}}},4650:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>h,default:()=>E,frontMatter:()=>f,metadata:()=>x,toc:()=>k});var o=t(7462),i=t(7294),r=t(3905),s=t(9521),n=t(5962),l=t(4040),d=t(6451),c=t(531),p=t(1262);const m=d.Wc.map((e=>({key:e.id,paginationContent:i.createElement(i.Fragment,null,"test"),children:i.createElement(n.df,{imageUrl:e.image})}))),g=e=>{let{isLoadData:a=!0}=e;return i.createElement(b,{className:"mb-4 mb-lg-5"},i.createElement(l.tC,{gridTheme:c.Z},i.createElement(p.Z,null,(()=>i.createElement(n.ZP,{data:a?m:[],slidesPerView:1,slidesPerGroup:1,isEnablePagination:!0,isEnableNavButton:!0,isEnableLoop:!0,autoPlayTime:5e3,isEnableAutoPlay:!0,aspectRatio:{widthRatio:16,heightRatio:9},breakpoints:{1200:{aspectRatio:{widthRatio:32,heightRatio:9}}}})))))},u=s.F4`
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
`,b=s.ZP.div`
    
    .${n.eb.paginationContent}{
        display: none;
    }

    .${n.eb.paginationGroup}{
        bottom: 0;
    }
    .${n.eb.paginationButton}{
        &:after {
            content: '';
            width: 0;
            height: 4px;
            background-color: ${e=>e.theme.primaryColor};
            position: absolute;
            bottom: 0;
            left: 0;
        }

        &[data-active=true]:after {
            animation: ${u} ${5e3}ms linear infinite;
            animation-iteration-count: 1;
        }
    }

    
    

    ${e=>s.iv`
       ${l.BC.xl`
            .${n.eb.paginationGroup}{
                left: 0;
                right: 0;
                bottom: -35px;
                background-color: #fff;
                height: 70px;
                width: 70%;
                margin: auto;
                display: flex;
                box-shadow: none;
            }
    
             .${n.eb.paginationButton}{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                font-size: 12px;
                font-weight: bold;
                color: #000;
                position: relative;
                flex: 1;
                background: transparent;
                border: solid 1px #ededed;
                border-radius: 0;
                margin: 0;
                padding: 0;
                box-shadow: none;
    
            }
    
            .${n.eb.paginationContent}{
                display: flex;
            }
        `}
    `}   
    
`,f={},h="Auto Play Progress",x={unversionedId:"examples/auto-play-progress",id:"examples/auto-play-progress",title:"Auto Play Progress",description:"",source:"@site/docs/examples/auto-play-progress.mdx",sourceDirName:"examples",slug:"/examples/auto-play-progress",permalink:"/docs/examples/auto-play-progress",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/examples/auto-play-progress.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/docs/category/examples"},next:{title:"Text Animations",permalink:"/docs/examples/text-animations"}},y={},k=[],Z={toc:k},w="wrapper";function E(e){let{components:a,...t}=e;return(0,r.kt)(w,(0,o.Z)({},Z,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"auto-play-progress"},"Auto Play Progress"),(0,r.kt)(g,{mdxType:"AutoPlayProgressCarousel"}))}E.isMDXComponent=!0},8040:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/01-a170f00f5cf1b8fb5d630d7758bc44d4.jpg"},103:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/02-a92b63414c2b4851ffa4e32f207a370c.jpg"},6383:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/03-8a0319b7a927801be533e99af07fb9da.jpg"},3801:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/04-298adf91855c46f658637944f50ca075.jpg"},7828:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/05-6a010b8086a12edec2903da9a667655d.jpg"},8045:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/06-ab711cfd4180c33b05df0af695291b51.jpg"}}]);