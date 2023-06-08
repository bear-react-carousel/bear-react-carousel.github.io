"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[444],{531:(e,t,l)=>{l.d(t,{Z:()=>a});const a={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1540},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}}},8826:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>z,contentTitle:()=>B,default:()=>V,frontMatter:()=>w,metadata:()=>P,toc:()=>L});var a=l(7462),o=l(7294),r=l(3905),i=l(9521),n=l(531),s=l(4040),c=l(5962);const d=new Array(12).fill("").map(((e,t)=>({level:t,totalAmount:100*t,rule:[{title:"Rem",value:200*t,hasUpTo:!0},{title:"Cache",value:120*t,hasUpTo:!0}]}))),p=d.map(((e,t)=>({text:`LV ${e.level}`,value:String(t)}))),u=e=>{let{isActive:t=!1,levelName:l,totalAmount:a,rules:r=[]}=e;return o.createElement(k,{"data-active":t},o.createElement(x,null,o.createElement(b,null,l),r.map(((e,t)=>{const l=e.value;return o.createElement(v,{key:`vipLevelCard__level-${t}`},o.createElement(g,null,o.createElement(f,null,e.title),o.createElement(h,null,"function"==typeof l?l():l)))}))),o.createElement($,null,o.createElement(v,null,o.createElement(g,null,o.createElement(f,null,"Amount"),o.createElement(h,null,0===a?"Free":`$${a}`)))))},m=(0,o.memo)(u),x=i.ZP.div`
    flex: 1 1 auto;
    padding: 10px 12px 0;
    z-index: 2;

    ${s.BC.lg`
        padding: 19px 15px 0;
    `}
`,b=i.ZP.div`
    width: 100%;
    font-size: 14px;
    height: 30px;
    border-radius: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color .2s ease-in;

    ${s.BC.sm`
        width: 110px;
    `}
    ${s.BC.lg`
        font-size: 18px;
    `}
`,v=i.ZP.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    color: #4a4a4a;
    border-bottom: solid 1px #e8e8e8;
    position: relative;
    min-height: 44px;

    &:last-child {
        border-bottom: none;
    }
    
    ${s.BC.lg`
        padding: 15px 0;
        min-height: 60px;
    `}
    
`,g=i.ZP.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,f=i.ZP.div`
    font-size: 10px;
    transition: color .2s ease-in;

    ${s.BC.lg`
        font-size: 12px;
    `}
`,h=i.ZP.div`
    font-size: 12px;
    font-weight: 700;
    transition: color .2s ease-in;
    color: #00a3e0;

    ${s.BC.lg`
        font-size: 12px;
    `}
`,$=i.ZP.div`
    background-color: #36393f;
    width: 100%;
    padding: 0 12px;
    transition: background-color .2s ease-in;
    z-index: 1;
    border-radius: 0 0 5px 5px;

    ${v} {
        color: #fff;
        min-height: auto;

        ${h} {
            color: #fff;
        }
    }
    
    ${s.BC.lg`
        padding: 0 15px;
    `}
`,k=i.ZP.div`
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    transition: transform .2s ease-in;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        z-index: -1;
        background-image: linear-gradient(to bottom, #00e0ff, #6ab8ff);
        transition: opacity .2s ease-in;
        border-radius: 5px;
    }
    
    
    ${s.BC.lg`
        z-index: 1;

        :hover, &[data-active="true"] {
            z-index: 2;
            transform: scale(1.1);
            
            :before {
                opacity: 1;
            }

            ${v} {
                border-bottom-color: rgba(232,232,232,.6);
            }

            ${b} {
                background-color: rgba(255,255,255,.2);
            }
            
          
            ${x} {
               ${f} {color: #fff;}
               ${h} {color: #000;}
            }
            
            ${$} {
                background-color: #fff;
                ${f} {color: #004e6b;}
                ${h} {color: #004e6b;}
            }

         
        }
    `}
    
`;var E=l(1262);const C=e=>{let{}=e;const[t,l]=(0,o.useState)(0),[a,r]=(0,o.useState)(),i=(0,o.useMemo)((()=>d.map((e=>({key:e.level,children:o.createElement(c.B2,{className:"py-4"},o.createElement(m,{rules:e.rule,levelName:`LV ${e.level}`,totalAmount:e.totalAmount,isActive:t===Number(e.level)}))})))),[t]),u=(0,o.useMemo)((()=>o.createElement(s.kC,{horizontal:s.cv.center},o.createElement(y,null,o.createElement("select",{title:"level",value:t,onChange:e=>x(Number(e.target.value))},p?.map((e=>o.createElement("option",{value:e.value},e.text))))))),[t]),x=e=>{l(e),a?.slideToActualIndex(e)};return o.createElement(Z,null,o.createElement(s.tC,{gridTheme:n.Z},u,o.createElement(E.Z,null,(()=>o.createElement(c.ZP,{setController:r,isEnableLoop:!1,isCenteredSlides:!0,isEnableNavButton:!0,slidesPerView:1,spaceBetween:20,height:"270px",data:i,isSlideItemMemo:!0,breakpoints:{576:{slidesPerView:"auto"}}})))))},y=i.ZP.div`
  color: #737b8c;
  padding: 10px 0;
`,Z=i.ZP.div`
  .${c.eb.navPrevButton}, .${c.eb.navNextButton} {
    top: -50px;
    bottom: unset;
  }

`,w={},B="Vip Level",P={unversionedId:"examples/vip-rule",id:"examples/vip-rule",title:"Vip Level",description:"The implementation code is here",source:"@site/docs/examples/vip-rule.mdx",sourceDirName:"examples",slug:"/examples/vip-rule",permalink:"/docs/examples/vip-rule",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/docs/examples/vip-rule.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text Animations",permalink:"/docs/examples/text-animations"}},z={},L=[],A={toc:L},T="wrapper";function V(e){let{components:t,...l}=e;return(0,r.kt)(T,(0,a.Z)({},A,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vip-level"},"Vip Level"),(0,r.kt)(C,{mdxType:"VipLevelCarousel"}),(0,r.kt)("p",null,"The implementation code is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/src/examples/VipLevelCarousel/VipLevelCarousel.tsx"},"here")))}V.isMDXComponent=!0}}]);