"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[444],{531:(e,t,l)=>{l.d(t,{Z:()=>a});const a={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1540},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}}},8826:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>z,contentTitle:()=>P,default:()=>N,frontMatter:()=>w,metadata:()=>B,toc:()=>A});var a=l(7462),r=l(7294),o=l(3905),n=l(9521),i=l(531),s=l(4040),c=l(5962);const d=new Array(12).fill("").map(((e,t)=>({level:t,totalAmount:100*t,rule:[{title:"Rem",value:200*t,hasUpTo:!0},{title:"Cache",value:120*t,hasUpTo:!0}]}))),u=d.map(((e,t)=>({text:`LV ${e.level}`,value:String(t)}))),p=e=>{let{isActive:t=!1,levelName:l,totalAmount:a,rules:o=[]}=e;return r.createElement(E,{"data-active":t},r.createElement(x,null,r.createElement(v,null,l),o.map(((e,t)=>{const l=e.value;return r.createElement(f,{key:`vipLevelCard__level-${t}`},r.createElement(g,null,r.createElement(b,null,e.title),r.createElement(h,null,"function"==typeof l?l():l)))}))),r.createElement($,null,r.createElement(f,null,r.createElement(g,null,r.createElement(b,null,"Amount"),r.createElement(h,null,0===a?"Free":`$${a}`)))))},m=(0,r.memo)(p),x=n.ZP.div`
    flex: 1 1 auto;
    padding: 10px 12px 0;
    z-index: 2;

    ${s.BC.lg`
        padding: 19px 15px 0;
    `}
`,v=n.ZP.div`
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
`,f=n.ZP.div`
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
    
`,g=n.ZP.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,b=n.ZP.div`
    font-size: 10px;
    transition: color .2s ease-in;

    ${s.BC.lg`
        font-size: 12px;
    `}
`,h=n.ZP.div`
    font-size: 12px;
    font-weight: 700;
    transition: color .2s ease-in;
    color: #00a3e0;

    ${s.BC.lg`
        font-size: 12px;
    `}
`,$=n.ZP.div`
    background-color: #36393f;
    width: 100%;
    padding: 0 12px;
    transition: background-color .2s ease-in;
    z-index: 1;
    border-radius: 0 0 5px 5px;

    ${f} {
        color: #fff;
        min-height: auto;

        ${h} {
            color: #fff;
        }
    }
    
    ${s.BC.lg`
        padding: 0 15px;
    `}
`,E=n.ZP.div`
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

            ${f} {
                border-bottom-color: rgba(232,232,232,.6);
            }

            ${v} {
                background-color: rgba(255,255,255,.2);
            }
            
          
            ${x} {
               ${b} {color: #fff;}
               ${h} {color: #000;}
            }
            
            ${$} {
                background-color: #fff;
                ${b} {color: #004e6b;}
                ${h} {color: #004e6b;}
            }

         
        }
    `}
    
`;var k=l(1262);const C=e=>{let{}=e;const[t,l]=(0,r.useState)(0),a=(0,r.useRef)(null),o=(0,r.useMemo)((()=>d.map((e=>({key:e.level,children:r.createElement(c.df,{as:"card",className:"py-4"},r.createElement(m,{rules:e.rule,levelName:`LV ${e.level}`,totalAmount:e.totalAmount,isActive:t===Number(e.level)}))})))),[t]),n=(0,r.useMemo)((()=>r.createElement(s.kC,{horizontal:s.cv.center},r.createElement(y,null,r.createElement("select",{title:"level",value:t,onChange:e=>p(Number(e.target.value))},u?.map((e=>r.createElement("option",{value:e.value},e.text))))))),[t]),p=e=>{l(e),a.current?.slideToActualIndex(e)};return r.createElement(Z,null,r.createElement(s.tC,{gridTheme:i.Z},n,r.createElement(k.Z,null,(()=>r.createElement(c.ZP,{controllerRef:a,isEnableLoop:!1,isCenteredSlides:!0,isEnableNavButton:!0,slidesPerView:1,spaceBetween:20,staticHeight:"270px",data:o,isSlideItemMemo:!0,breakpoints:{576:{slidesPerView:"auto"}}})))))},y=n.ZP.div`
  color: #737b8c;
  padding: 10px 0;
`,Z=n.ZP.div`
  .${c.eb.navPrevButton}, .${c.eb.navNextButton} {
    top: -50px;
    bottom: unset;
  }

`,w={},P="Vip Level",B={unversionedId:"examples/vip-rule",id:"examples/vip-rule",title:"Vip Level",description:"",source:"@site/docs/examples/vip-rule.mdx",sourceDirName:"examples",slug:"/examples/vip-rule",permalink:"/docs/examples/vip-rule",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/examples/vip-rule.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text Animations",permalink:"/docs/examples/text-animations"}},z={},A=[],L={toc:A},M="wrapper";function N(e){let{components:t,...l}=e;return(0,o.kt)(M,(0,a.Z)({},L,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vip-level"},"Vip Level"),(0,o.kt)(C,{mdxType:"VipLevelCarousel"}))}N.isMDXComponent=!0}}]);