/*! For license information please see 2cd650a9.3fcff8b8.js.LICENSE.txt */
"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[400],{531:(e,t,n)=>{n.d(t,{Z:()=>o});const o={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1540},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}}},896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>J,contentTitle:()=>q,default:()=>te,frontMatter:()=>X,metadata:()=>Y,toc:()=>Q});var o=n(7462),r=n(7294),i=n(3905),a=n(531),l=n(4040),c=n(1262),d=n(5962),u=n(9521);n(5893);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var f=["shift","alt","meta","mod","ctrl"],p={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function m(e){return(p[e]||e).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function v(e,t){return void 0===t&&(t=","),e.split(t)}function h(e,t,n){void 0===t&&(t="+");var o=e.toLocaleLowerCase().split(t).map((function(e){return m(e)}));return s({},{alt:o.includes("alt"),ctrl:o.includes("ctrl")||o.includes("control"),shift:o.includes("shift"),meta:o.includes("meta"),mod:o.includes("mod")},{keys:o.filter((function(e){return!f.includes(e)})),description:n})}"undefined"!=typeof document&&(document.addEventListener("keydown",(function(e){void 0!==e.key&&y([m(e.key),m(e.code)])})),document.addEventListener("keyup",(function(e){void 0!==e.key&&x([m(e.key),m(e.code)])}))),"undefined"!=typeof window&&window.addEventListener("blur",(function(){g.clear()}));var g=new Set;function y(e){var t=Array.isArray(e)?e:[e];g.has("meta")&&g.forEach((function(e){return!function(e){return f.includes(e)}(e)&&g.delete(e.toLowerCase())})),t.forEach((function(e){return g.add(e.toLowerCase())}))}function x(e){var t=Array.isArray(e)?e:[e];"meta"===e?g.clear():t.forEach((function(e){return g.delete(e.toLowerCase())}))}function b(e,t){var n=e.target;void 0===t&&(t=!1);var o=n&&n.tagName;return t instanceof Array?Boolean(o&&t&&t.some((function(e){return e.toLowerCase()===o.toLowerCase()}))):Boolean(o&&t&&!0===t)}var k=function(e,t,n){void 0===n&&(n=!1);var o,r,i=t.alt,a=t.meta,l=t.mod,c=t.shift,d=t.ctrl,u=t.keys,s=e.key,f=e.code,p=e.ctrlKey,v=e.metaKey,h=e.shiftKey,y=e.altKey,x=m(f),b=s.toLowerCase();if(!n){if(i===!y&&"alt"!==b)return!1;if(c===!h&&"shift"!==b)return!1;if(l){if(!v&&!p)return!1}else{if(a===!v&&"meta"!==b&&"os"!==b)return!1;if(d===!p&&"ctrl"!==b&&"control"!==b)return!1}}return!(!u||1!==u.length||!u.includes(b)&&!u.includes(x))||(u?(o=u,void 0===r&&(r=","),(Array.isArray(o)?o:o.split(r)).every((function(e){return g.has(e.trim().toLowerCase())}))):!u)},w=(0,r.createContext)(void 0);function E(e,t){return e&&t&&"object"==typeof e&&"object"==typeof t?Object.keys(e).length===Object.keys(t).length&&Object.keys(e).reduce((function(n,o){return n&&E(e[o],t[o])}),!0):e===t}var P=(0,r.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}});var C=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},S="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function L(e,t,n,o){var i=(0,r.useRef)(null),a=(0,r.useRef)(!1),l=n instanceof Array?o instanceof Array?void 0:o:n,c=e instanceof Array?e.join(null==l?void 0:l.splitKey):e,d=n instanceof Array?n:o instanceof Array?o:void 0,u=(0,r.useCallback)(t,null!=d?d:[]),s=(0,r.useRef)(u);s.current=d?u:t;var f=function(e){var t=(0,r.useRef)(void 0);return E(t.current,e)||(t.current=e),t.current}(l),p=(0,r.useContext)(P).enabledScopes,g=(0,r.useContext)(w);return S((function(){if(!1!==(null==f?void 0:f.enabled)&&(e=p,t=null==f?void 0:f.scopes,0===e.length&&t?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),1):!t||e.some((function(e){return t.includes(e)}))||e.includes("*"))){var e,t,n=function(e,t){var n;(void 0===t&&(t=!1),!b(e,["input","textarea","select"])||b(e,null==f?void 0:f.enableOnFormTags))&&(null!=f&&null!=f.ignoreEventWhen&&f.ignoreEventWhen(e)||(null===i.current||document.activeElement===i.current||i.current.contains(document.activeElement)?(null==(n=e.target)||!n.isContentEditable||null!=f&&f.enableOnContentEditable)&&v(c,null==f?void 0:f.splitKey).forEach((function(n){var o,r=h(n,null==f?void 0:f.combinationKey);if(k(e,r,null==f?void 0:f.ignoreModifiers)||null!=(o=r.keys)&&o.includes("*")){if(t&&a.current)return;if(function(e,t,n){("function"==typeof n&&n(e,t)||!0===n)&&e.preventDefault()}(e,r,null==f?void 0:f.preventDefault),!function(e,t,n){return"function"==typeof n?n(e,t):!0===n||void 0===n}(e,r,null==f?void 0:f.enabled))return void C(e);s.current(e,r),t||(a.current=!0)}})):C(e)))},o=function(e){void 0!==e.key&&(y(m(e.code)),(void 0===(null==f?void 0:f.keydown)&&!0!==(null==f?void 0:f.keyup)||null!=f&&f.keydown)&&n(e))},r=function(e){void 0!==e.key&&(x(m(e.code)),a.current=!1,null!=f&&f.keyup&&n(e,!0))},d=i.current||(null==l?void 0:l.document)||document;return d.addEventListener("keyup",r),d.addEventListener("keydown",o),g&&v(c,null==f?void 0:f.splitKey).forEach((function(e){return g.addHotkey(h(e,null==f?void 0:f.combinationKey,null==f?void 0:f.description))})),function(){d.removeEventListener("keyup",r),d.removeEventListener("keydown",o),g&&v(c,null==f?void 0:f.splitKey).forEach((function(e){return g.removeHotkey(h(e,null==f?void 0:f.combinationKey,null==f?void 0:f.description))}))}}}),[c,f,p]),i}const A=[{id:"01h34ca9v94k026dte3bfczx5s",thumbUrl:"/img/racing/01.jpg",createdAt:"2023-06-17 17:52:23",fileSize:"1,123KB",fileName:"CleanShot 2023-06-17.png"},{id:"01h34ca9v94k026dte3bfczx5s",thumbUrl:"/img/racing/02.jpg",fileName:"CleanShot 2023-06-18.png",fileSize:"788KB",createdAt:"2023-06-17 17:52:23"},{id:"01h34ca9v94k026dte3bfczx5s",thumbUrl:"/img/racing/03.jpg",fileName:"CleanShot 2023-06-19.png",fileSize:"1,280KB",createdAt:"2023-06-17 17:52:23"}],Z=e=>{let{activeIndex:t=0,onClose:n}=e;const[o,i]=(0,r.useState)(),[a,l]=(0,r.useState)();L("esc",(e=>n()),[]),L("left",(e=>a.slideToPrevPage()),[a]),L("right",(e=>a.slideToNextPage()),[a]),(0,r.useEffect)((()=>{a?.slideToSourceIndex(t,{isUseAnimation:!1})}),[a]);const c=A.map((e=>({id:e.id,name:e.fileName,createdAt:e.createdAt,size:e.fileSize}))),u=()=>o?o.page.activePage:0,s=A?.map((e=>({key:e.id,children:r.createElement(d.e3,{imageUrl:e.thumbUrl})}))),f=c[u()-1];return r.createElement(I,null,r.createElement(K,{onClick:n},"\u2715"),r.createElement(d.ZP,{data:s,onSlideChange:i,height:"100%",setController:l}),f&&r.createElement(R,null,r.createElement(N,null,f.name),r.createElement(T,null,"Create at ",f.createdAt," - ",f.size),r.createElement(j,null,r.createElement("div",{className:"mr-2"},"Remove Thumb"),r.createElement("div",{className:"mr-2"},"Delete")),u()>1&&r.createElement(_,{type:"button",onClick:a?.slideToPrevPage},"\ufe64"),u()<c.length&&r.createElement(O,{type:"button",onClick:a?.slideToNextPage},"\ufe65")))},z=u.ZP.button`
  position: absolute;
  color: #fff;
  font-size: 20px;
  top: 0;
  bottom: 0;
`,_=(0,u.ZP)(z)`
  left: 10px;
`,O=(0,u.ZP)(z)`
  right: 10px;
`,j=u.ZP.div`
    display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
  text-decoration: underline;
`,T=u.ZP.div`
    font-size: 14px;
  margin-bottom: 5px;
`,N=u.ZP.div`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: bold;
`,R=u.ZP.div`
    height: 100px;
  background-color: #000000b3;
  text-align: center;
  padding-top: 10px;
  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`,K=(u.ZP.div`
  width: 100%;
  height: 100%;
`,u.ZP.div`
  position: fixed;
  right: 10px;
  top: 10px;
  //background: #727272;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 99;
  font-size: 18px;
`),I=(u.ZP.img`
    width: auto;
    height: auto;
    max-width: 80vw;
`,u.ZP.div`
    z-index: 997;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: auto;

    opacity: 1;
    pointer-events: auto;


  .${d.eb.slideItem}{
    overflow-y: auto;
  }

  .${d.eb.slideItemImage}{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      height: auto;
      padding-bottom: 140px;
      padding-top: 40px;
      max-height: 100%;
      max-width: 100%;
  }


`),U=e=>{let{name:t,thumbUrl:n,onPreview:o}=e;const[i,a]=(0,r.useState)(n),[l,c]=(0,r.useState)(!1);return r.createElement(F,{isEditMode:l,onClick:o},r.createElement(H,null,r.createElement(D,{style:{backgroundImage:`url('${i}')`}})),r.createElement($,null,r.createElement("div",{className:"d-flex flex-column flex-grow-1"},r.createElement(W,null,t),r.createElement(B,null,"2023-06-12"))))},M=u.ZP.div`
  display: flex;
  flex-direction: row;
  opacity: 0;
  transition: opacity .3s;
  flex: 1;
`,D=u.ZP.div`
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

`,B=u.ZP.div`
  color: #8d8b8b;
  font-size: 13px;
  flex: 0 0 auto;

`,$=u.ZP.div`
    display: flex;
  flex-direction: row;
  flex: 1;
`,W=u.ZP.div`
    font-size: 14px;
  word-break: break-all;
  padding-right: 20px;
  font-weight: 700;
  color: #fff;
  flex: 0 0 auto;

`,H=u.ZP.div`
    width: 112px;
    flex: 0 0 112px;
    margin-right: 20px;
  border-radius: 6px;
  overflow: hidden;
  padding: 4px;
  background-color: #363c42;
`,F=u.ZP.div`
    display: flex;
  flex-direction: row;
  height: 80px;
  padding: 5px;
  border-radius: 4px;
  transition: background-color .3s, opacity .3s;
  opacity: .9;

  ${e=>!1===e.isEditMode&&u.iv`
    cursor: pointer;
    :hover{
      background-color: #353535;
      opacity: 1;

      ${M}{
        opacity: 1;
      }
    }
  `}

`,G=()=>{const[e,t]=(0,r.useState)(void 0);return r.createElement(l.tC,{gridTheme:a.Z},r.createElement(c.Z,null,(()=>r.createElement("div",{style:{width:"375px"}},A.map(((e,n)=>r.createElement(U,{key:e.id,name:e.fileName,thumbUrl:e.thumbUrl,onPreview:()=>t(n)}))),void 0!==e&&r.createElement(Z,{activeIndex:e,onClose:()=>t(void 0)})))))},X={},q="Photo Preview",Y={unversionedId:"examples/photo-preview",id:"examples/photo-preview",title:"Photo Preview",description:"The implementation code is here",source:"@site/docs/examples/photo-preview.mdx",sourceDirName:"examples",slug:"/examples/photo-preview",permalink:"/docs/examples/photo-preview",draft:!1,editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/docs/examples/photo-preview.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deposit Tab",permalink:"/docs/examples/deposit-tab"},next:{title:"Text Animations",permalink:"/docs/examples/text-animations"}},J={},Q=[],V={toc:Q},ee="wrapper";function te(e){let{components:t,...n}=e;return(0,i.kt)(ee,(0,o.Z)({},V,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"photo-preview"},"Photo Preview"),(0,i.kt)(G,{mdxType:"PhotoPreview"}),(0,i.kt)("p",null,"The implementation code is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/main/src/examples/PhotoPreview/PhotoPreview.tsx"},"here")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Use shortcut keys to move\n\n[ < ] Slide to prev\n[ > ] Slide to next\n[ESC] Close Modal\n")))}te.isMDXComponent=!0},5251:(e,t,n)=>{var o=n(7294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,i={},d=null,u=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,o)&&!c.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:r,type:e,key:d,ref:u,props:i,_owner:l.current}}},5893:(e,t,n)=>{n(5251)}}]);