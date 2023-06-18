"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1262:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),o=r(2389);function i(e){let{children:t,fallback:r}=e;return(0,o.Z)()?n.createElement(n.Fragment,null,t?.()):r??null}},531:(e,t,r)=>{r.d(t,{Z:()=>n});const n={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1540},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}}},1502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>w,default:()=>S,frontMatter:()=>y,metadata:()=>P,toc:()=>O});var n=r(7462),o=r(7294),i=r(3905),a=r(531),l=r(4040),c=r(1262),p=r(9521);const s=e=>{let{name:t,thumbUrl:r,onPreview:n}=e;const[i,a]=(0,o.useState)(r),[l,c]=(0,o.useState)(!1);return o.createElement(b,{isEditMode:l,onClick:n},o.createElement(h,null,o.createElement(u,{style:{backgroundImage:`url('${i}')`}})),o.createElement(f,null,o.createElement("div",{className:"d-flex flex-column flex-grow-1"},o.createElement(x,null,t),o.createElement(m,null,"2023-06-12"))))},d=p.ZP.div`
  display: flex;
  flex-direction: row;
  opacity: 0;
  transition: opacity .3s;
  flex: 1;
`,u=p.ZP.div`
    width: 100%;
    height: 100%;
    background: center no-repeat;
    background-size: contain;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    text-transform: uppercase;

`,m=p.ZP.div`
  color: #8d8b8b;
  font-size: 13px;
  flex: 0 0 auto;

`,f=p.ZP.div`
    display: flex;
  flex-direction: row;
  flex: 1;
`,x=p.ZP.div`
    font-size: 14px;
  word-break: break-all;
  padding-right: 20px;
  font-weight: 700;
  color: #fff;
  flex: 0 0 auto;

`,h=p.ZP.div`
    width: 112px;
    flex: 0 0 112px;
    margin-right: 20px;
  border-radius: 6px;
  overflow: hidden;
  padding: 4px;
  background-color: #363c42;
`,b=p.ZP.div`
    display: flex;
  flex-direction: row;
  height: 80px;
  padding: 5px;
  border-radius: 4px;
  transition: background-color .3s, opacity .3s;
  opacity: .9;

  ${e=>!1===e.isEditMode&&p.iv`
    cursor: pointer;
    :hover{
      background-color: #353535;
      opacity: 1;

      ${d}{
        opacity: 1;
      }
    }
  `}

`,g=[{id:"01h34ca9v94k026dte3bfczx5s",thumbUrl:"/img/racing/01.jpg",createdAt:"2023-06-17 17:52:23",fileSize:"1,123KB",fileName:"CleanShot 2023-06-17.png"},{id:"01h34ca9v94k026dte3bfczx5s",thumbUrl:"/img/racing/02.jpg",fileName:"CleanShot 2023-06-18.png",fileSize:"788KB",createdAt:"2023-06-17 17:52:23"},{id:"01h34ca9v94k026dte3bfczx5s",thumbUrl:"/img/racing/03.jpg",fileName:"CleanShot 2023-06-19.png",fileSize:"1,280KB",createdAt:"2023-06-17 17:52:23"}],v=()=>{const[e,t]=(0,o.useState)(void 0);return o.createElement(l.tC,{gridTheme:a.Z},o.createElement(c.Z,null,(()=>o.createElement("div",{style:{width:"375px"}},g.map(((e,r)=>o.createElement(s,{key:e.id,name:e.fileName,thumbUrl:e.thumbUrl,onPreview:()=>t(r)})))))))},y={},w="Photo Preview",P={unversionedId:"examples/photo-preview",id:"examples/photo-preview",title:"Photo Preview",description:"The implementation code is here",source:"@site/docs/examples/photo-preview.mdx",sourceDirName:"examples",slug:"/examples/photo-preview",permalink:"/docs/examples/photo-preview",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/docs/examples/photo-preview.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deposit Tab",permalink:"/docs/examples/deposit-tab"},next:{title:"Text Animations",permalink:"/docs/examples/text-animations"}},k={},O=[],E={toc:O},j="wrapper";function S(e){let{components:t,...r}=e;return(0,i.kt)(j,(0,n.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"photo-preview"},"Photo Preview"),(0,i.kt)(v,{mdxType:"PhotoPreview"}),(0,i.kt)("p",null,"The implementation code is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/src/examples/PhotoPreview/PhotoPreview.tsx"},"here")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Use shortcut keys to move\n\n[ < ] Slide to prev\n[ > ] Slide to next\n[ESC] Close Modal\n")))}S.isMDXComponent=!0}}]);