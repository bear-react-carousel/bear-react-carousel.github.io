"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[7793],{531:(e,t,a)=>{a.d(t,{Z:()=>i});const i={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1540},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}}},4774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>Z,frontMatter:()=>E,metadata:()=>B,toc:()=>T});var i=a(7462),o=a(7294),r=a(3905),n=a(4040),s=a(5962),l=a(9521);const c=[{id:1,subTitle:"MEAT & SEAFOOD",title:"FROM NORWAY",desc:"We offer huge variety of execeptionally fresh meat farmed in our personal farm",imageUrl:a(9578).Z,position:"right"},{id:2,subTitle:"WILD SALMON",title:"CUTTING & DELIVERY",desc:"We offer huge variety of execeptionally fresh meat farmed in our personal farm",imageUrl:a(8878).Z,position:"right"},{id:3,subTitle:"CUTTING & DELIVERY",title:"QUALITY MONITORING",desc:"We offer huge variety of execeptionally fresh meat farmed in our personal farm",imageUrl:a(3882).Z,position:"left"}];var m=a(531);const p=e=>{let{imageUrl:t,title:a,subTitle:i,desc:r,position:l="left"}=e;return o.createElement(s.df,{imageUrl:t},o.createElement(d,{position:l},o.createElement(u,null,i),o.createElement(g,null,a),o.createElement(x,null,r),o.createElement(n.kC,{direction:n.oZ.row},o.createElement(f,null,"Shop Now"),o.createElement(f,{isOutline:!0},"Home Store"))))},d=l.ZP.div`
    width: 500px;
    max-width: 100%;
    padding: 20px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    opacity: 0;
    
    transition: opacity 2s ease .7s, transform 2s ease .7s;
    
    ${e=>l.iv`
        ${n.BC.md`
            ${"left"===e.position&&l.iv`
                margin-left: 5%;
                margin-right: auto;
            `}
            ${"right"===e.position&&l.iv`
                margin-left: auto;
                margin-right: 0%;
            `}
        `}
    `}
    
`,f=l.ZP.button`
  background-color: #c4a265;
  border: 2px solid #c4a265;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  padding: 14px 10px;
  border-radius: 4px;
  margin-right: 20px;
  font-family: Blatant, sans-serif;
  transition: background-color .4s, color .4s;
  

  ${e=>e.isOutline&&l.iv`
     border-color: #fff;
     background-color: transparent;
  `}
  
  :hover{
    border-color: #c4a265;
    background-color: #b89352;
  }
  
  
    ${n.BC.lg`
        font-size: 16px;
      padding: 19px 26px;

    `}
`,x=l.ZP.h4`
    color: #a9aaab;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 15px;
    font-family: Blatant, sans-serif;
    margin-bottom: 1rem;

    ${n.BC.lg`
        font-size: 19px;
        line-height: 26px;

    `}

    ${n.BC.xxl`
        font-size: 16px;
        line-height: 33px;

    `}
`,g=l.ZP.h2`
    color: #b89352;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: Blatant, sans-serif;
    font-style: normal;
    margin-bottom: 1rem;
  line-height: 100%;
    
    ${n.BC.lg`
        font-size: 60px;
    `}
    
    ${n.BC.xxl`
        font-size: 60px;
    `}
`,u=l.ZP.h3`
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: Blatant, sans-serif;
    margin-bottom: 1rem;

    
    ${n.BC.lg`
        font-size: 30px;
    `}
    
    ${n.BC.xxl`
        font-size: 30px;
    `}
`;var h=a(1262);const b=e=>{let{isLoadData:t=!0}=e;const a=c.map((e=>({key:e.id,children:o.createElement(p,e)})));return o.createElement(A,null,o.createElement(n.tC,{gridTheme:m.Z},o.createElement(h.Z,null,(()=>o.createElement(s.ZP,{data:t?a:[],slidesPerView:1,staticHeight:"400px",isEnableLoop:!0,isEnableNavButton:!1,isEnablePagination:!0,autoPlayTime:5e3,moveTime:900,breakpoints:{576:{staticHeight:"400px",isEnableNavButton:!1},996:{staticHeight:"500px",isEnableNavButton:!0},1200:{staticHeight:"600px",isEnableNavButton:!0}}})))))},A=l.ZP.div`
  --primary-color: #c4a265;

  .${s.eb.slideItem}{
      ${d}{
        transform: translateY(80px);
      }

      &[data-active=true]{
          ${d}{
               transform: translateY(0);
               opacity: 1;
          }
      }
      
      
      &:before{
        content: "";
        background: url(${a(4049)}) center center repeat;
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
      }
  }
  
`,E={},y="Text Animations",B={unversionedId:"examples/text-animations",id:"examples/text-animations",title:"Text Animations",description:"",source:"@site/docs/examples/text-animations.mdx",sourceDirName:"examples",slug:"/examples/text-animations",permalink:"/docs/examples/text-animations",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/examples/text-animations.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Auto Play Progress",permalink:"/docs/examples/auto-play-progress"},next:{title:"Vip Level",permalink:"/docs/examples/vip-rule"}},v={},T=[],k={toc:T},C="wrapper";function Z(e){let{components:t,...a}=e;return(0,r.kt)(C,(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-animations"},"Text Animations"),(0,r.kt)(b,{mdxType:"TextAnimationsCarousel"}))}Z.isMDXComponent=!0},9578:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/01-d82506fa1159da1ed1d2e78f3e97b06c.jpg"},8878:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/02-444cf0b5c01b57bf21dba84e8f56bfed.jpg"},3882:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/03-d0863f8c1c1bd8da75e6b82fe67064b4.jpg"},4049:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAGFBMVEUAAAAbGxsiIiIZGRkgICAXFxcdHR0UFBS0jPoDAAAAVklEQVR42p3SOw4AIAhEQf/c/8YWFrsJxTPYEDLFItr89O7dGL84p9NarzLu7XTOq4wReTBGkQZj1CjeMeYEBSDChQjr262/Zv33KFzEqHB1jDlBAYgXyxoBwTNKsA4AAAAASUVORK5CYII="}}]);