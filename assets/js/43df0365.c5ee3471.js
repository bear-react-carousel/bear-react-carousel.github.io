"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[7793],{531:(e,t,i)=>{i.d(t,{Z:()=>a});const a={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1540},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}}},6659:(e,t,i)=>{i.d(t,{Q:()=>a});const a=[{id:1,subTitle:"MEAT & SEAFOOD",title:"FROM NORWAY",desc:"We offer huge variety of execeptionally fresh meat farmed in our personal farm",imageUrl:i(9578).Z,position:"right"},{id:2,subTitle:"WILD SALMON",title:"CUTTING & DELIVERY",desc:"We offer huge variety of execeptionally fresh meat farmed in our personal farm",imageUrl:i(8878).Z,position:"right"},{id:3,subTitle:"CUTTING & DELIVERY",title:"QUALITY MONITORING",desc:"We offer huge variety of execeptionally fresh meat farmed in our personal farm",imageUrl:i(3882).Z,position:"left"}]},7534:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>T,default:()=>Z,frontMatter:()=>E,metadata:()=>B,toc:()=>k});var a=i(7462),o=i(7294),n=i(3905),r=i(4040),s=i(5962),l=i(9521),m=i(6659),p=i(531);const c=e=>{let{imageUrl:t,title:i,subTitle:a,desc:n,position:l="left"}=e;return o.createElement(s.B2,{bgUrl:t},o.createElement(d,{position:l},o.createElement(u,null,a),o.createElement(g,null,i),o.createElement(x,null,n),o.createElement(r.kC,{direction:r.oZ.row},o.createElement(f,null,"Shop Now"),o.createElement(f,{isOutline:!0},"Home Store"))))},d=l.ZP.div`
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
        ${r.BC.md`
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
  
  
    ${r.BC.lg`
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

    ${r.BC.lg`
        font-size: 19px;
        line-height: 26px;

    `}

    ${r.BC.xxl`
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
    
    ${r.BC.lg`
        font-size: 60px;
    `}
    
    ${r.BC.xxl`
        font-size: 60px;
    `}
`,u=l.ZP.h3`
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: Blatant, sans-serif;
    margin-bottom: 1rem;

    
    ${r.BC.lg`
        font-size: 30px;
    `}
    
    ${r.BC.xxl`
        font-size: 30px;
    `}
`;var h=i(1262);const b=e=>{let{isLoadData:t=!0}=e;const i=m.Q.map((e=>({key:e.id,children:o.createElement(c,e)})));return o.createElement(A,null,o.createElement(r.tC,{gridTheme:p.Z},o.createElement(h.Z,null,(()=>o.createElement(s.ZP,{data:t?i:[],slidesPerView:1,height:"400px",isEnableLoop:!0,isEnableNavButton:!1,isEnablePagination:!0,autoPlayTime:5e3,moveTime:900,breakpoints:{576:{height:"400px",isEnableNavButton:!1},996:{height:"500px",isEnableNavButton:!0},1200:{height:"600px",isEnableNavButton:!0}}})))))},A=l.ZP.div`
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
        background: url(${i(4049).Z}) center center repeat;
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
      }
  }
  
`,E={},T="Text Animations",B={unversionedId:"examples/text-animations",id:"examples/text-animations",title:"Text Animations",description:"The implementation code is here",source:"@site/docs/examples/text-animations.mdx",sourceDirName:"examples",slug:"/examples/text-animations",permalink:"/docs/examples/text-animations",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/docs/examples/text-animations.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Photo Preview",permalink:"/docs/examples/photo-preview"},next:{title:"Vip Level",permalink:"/docs/examples/vip-rule"}},v={},k=[],y={toc:k},C="wrapper";function Z(e){let{components:t,...i}=e;return(0,n.kt)(C,(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"text-animations"},"Text Animations"),(0,n.kt)(b,{mdxType:"TextAnimationsCarousel"}),(0,n.kt)("p",null,"The implementation code is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/src/examples/TextAnimationsCarousel/TextAnimationsCarousel.tsx"},"here")),(0,n.kt)("admonition",{title:"Tip",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"There is a bug that prevents the animation from proceeding when the Loop mode is resetting the position")))}Z.isMDXComponent=!0},9578:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/01-d82506fa1159da1ed1d2e78f3e97b06c.jpg"},8878:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/02-444cf0b5c01b57bf21dba84e8f56bfed.jpg"},3882:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/03-d0863f8c1c1bd8da75e6b82fe67064b4.jpg"},4049:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAGFBMVEUAAAAbGxsiIiIZGRkgICAXFxcdHR0UFBS0jPoDAAAAVklEQVR42p3SOw4AIAhEQf/c/8YWFrsJxTPYEDLFItr89O7dGL84p9NarzLu7XTOq4wReTBGkQZj1CjeMeYEBSDChQjr262/Zv33KFzEqHB1jDlBAYgXyxoBwTNKsA4AAAAASUVORK5CYII="}}]);