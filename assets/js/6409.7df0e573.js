"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[6409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=c(n),g=r,f=h["".concat(l,".").concat(g)]||h[g]||d[g]||o;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[h]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1262:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294),r=n(2389);function o(e){let{children:t,fallback:n}=e;return(0,r.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},5962:(e,t,n)=>{n.d(t,{B2:()=>me,ZP:()=>fe,e3:()=>_e,eb:()=>x});var i,r=n(7294),o=Object.defineProperty,s=(e,t,n)=>(((e,t,n)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n),a={},l={get exports(){return a},set exports(e){a=e}},c={};function u(e,t){var n=[];for(var i in e)t(e,i)&&n.push(i);return n.concat(Object.getOwnPropertySymbols(e).filter((t=>Object.getOwnPropertyDescriptor(e,t).enumerable)))}function h(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e,t){return h(e,t)&&void 0!==e[t]}function g(e){return null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName&&"function"==typeof e.isEqualNode}function f(e){return!!e&&function(e,t){return Object.prototype.toString.apply(t)==="[object "+e+"]"}("Function",e.asymmetricMatch)}l.exports=function(){if(i)return c;i=1;var e=r,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,i){var r,l={},c=null,u=null;for(r in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:u,props:l,_owner:s.current}}return c.Fragment=n,c.jsx=l,c.jsxs=l,c}();const _=(e,t,n,i,r,o)=>{r=r||[];var s=!0,a=function(e,t){var n=f(e),i=f(t);if(!n||!i){if(n)return e.asymmetricMatch(t);if(i)return t.asymmetricMatch(e)}}(e,t);if(void 0!==a)return a;for(var l=0;l<r.length;l++){var c=r[l](e,t);if(void 0!==c)return c}if(e instanceof Error&&t instanceof Error)return e.message==t.message;if(Object.is(e,t))return!0;if(null===e||null===t)return e===t;var h=Object.prototype.toString.call(e);if(h!=Object.prototype.toString.call(t))return!1;switch(h){case"[object Boolean]":case"[object String]":case"[object Number]":return typeof e==typeof t&&("object"!=typeof e&&"object"!=typeof t?Object.is(e,t):Object.is(e.valueOf(),t.valueOf()));case"[object Date]":return+e==+t;case"[object RegExp]":return e.source===t.source&&e.flags===t.flags}if("object"!=typeof e||"object"!=typeof t)return!1;if(g(e)&&g(t))return e.isEqualNode(t);for(var d=n.length;d--;){if(n[d]===e)return i[d]===t;if(i[d]===t)return!1}if(n.push(e),i.push(t),"[object Array]"==h&&e.length!==t.length)return!1;var m,v=u(e,o),p=v.length;if(u(t,o).length!==p)return!1;for(;p--;)if(!(s=o(t,m=v[p])&&_(e[m],t[m],n,i,r,o)))return!1;return n.pop(),i.pop(),s};function m(){try{return document.createEvent("MouseEvent"),!0}catch{return!1}}function v(e,t=0){const n=Number(e);return isNaN(n)?t:n}function p(e,t,n){return!1===function(e,t,n,i){const r=(null==i?void 0:i.customTesters)||[];return _(e,t,[],[],r,n?h:d)}(Object.keys(e).filter((t=>"function"!=typeof e[t]&&!n.includes(t))).map((t=>e[t])),Object.keys(t).filter((e=>"function"!=typeof t[e]&&!n.includes(e))).map((e=>t[e])))}function b(e,t=!0){if(e)return String(t)}const x={console:"bear-react-carousel__console",root:"bear-react-carousel__root",content:"bear-react-carousel__content",container:"bear-react-carousel__container",containerInit:"bear-react-carousel__container-init",slideItem:"bear-react-carousel__slide-item",slideItemImage:"bear-react-carousel__slide-item__image",slideItemCard:"bear-react-carousel__slide-item__card",navGroup:"bear-react-carousel__nav-group",navPrevButton:"bear-react-carousel__nav-prev-button",navNextButton:"bear-react-carousel__nav-next-button",navIcon:"bear-react-carousel__nav-icon",paginationGroup:"bear-react-carousel__pagination-group",paginationButton:"bear-react-carousel__pagination-button",paginationContent:"bear-react-carousel__pagination-content",testNumber:"bear-react-carousel__test-number",testWindowSize:"bear-react-carousel__window-size",cloneIconGroup:"bear-react-carousel__clone-icon-group",cloneIcon:"bear-react-carousel__clone-icon"},w=["color: #fff","display: block","line-height: 20px","padding-right: 8px"];function E(e,t,n){console.log(`%c ${e}`,t,n)}function y(e,t){E(e,w.concat(["background-color: #17a2b8"]).join(";"),t)}const P={primary:function(e,t){E(e,w.concat(["background-color: #007bff"]).join(";"),t)},success:function(e,t){E(e,w.concat(["background-color: #28a745"]).join(";"),t)},info:y,warning:function(e,t){E(e,w.concat(["background-color: #ffc107"]).join(";"),t)},danger:function(e,t){E(e,w.concat(["background-color: #ec2127"]).join(";"),t)},printInText:function(e,t=!0){const n=document.getElementById(x.console);if(n){const t=new Date,i=[t.getMinutes(),t.getSeconds()].join("");n.value=`${i}: ${e}\n${n.value}`}else t&&y("mobile",e)}};function I(e){var t=new Error(e);return t.source="ulid",t}var M="0123456789ABCDEFGHJKMNPQRSTVWXYZ",T=M.length,S=Math.pow(2,48)-1;function A(e){var t=Math.floor(e()*T);return t===T&&(t=T-1),M.charAt(t)}var D=function(e){return e||(e=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];t||(t=typeof window<"u"?window:null);var n=t&&(t.crypto||t.msCrypto);if(n)return function(){var e=new Uint8Array(1);return n.getRandomValues(e),e[0]/255};try{var i=require("crypto");return function(){return i.randomBytes(1).readUInt8()/255}}catch{}if(e){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch{}return function(){return Math.random()}}throw I("secure crypto unusable, insecure Math.random not allowed")}()),function(t){return isNaN(t)&&(t=Date.now()),function(e,t){if(isNaN(e))throw new Error(e+" must be a number");if(e>S)throw I("cannot encode time greater than "+S);if(e<0)throw I("time must be positive");if(!1===Number.isInteger(e))throw I("time must be an integer");for(var n=void 0,i="";t>0;t--)n=e%T,i=M.charAt(n)+i,e=(e-n)/T;return i}(t,10)+function(e,t){for(var n="";e>0;e--)n=A(t)+n;return n}(16,e)}}();function j(e){return{slidesPerView:e.slidesPerView,slidesPerGroup:e.slidesPerGroup,height:e.height,spaceBetween:e.spaceBetween,isCenteredSlides:e.isCenteredSlides,isEnableNavButton:e.isEnableNavButton,isEnablePagination:e.isEnablePagination,isEnablePageContent:e.isEnablePageContent,isEnableMouseMove:e.isEnableMouseMove,isEnableAutoPlay:e.isEnableAutoPlay,isEnableLoop:e.isEnableLoop,moveTime:e.moveTime,defaultActivePage:e.defaultActivePage,autoPlayTime:e.autoPlayTime,isDebug:e.isDebug}}function C(e,t){const n=function(e,t){const n=t.filter((t=>t<=e)).sort(((e,t)=>Number(t)-Number(e)));return n.length>0?n[0]:0}(window.innerWidth,Object.keys(t).map(Number));let i=e;n>0&&(i=Object.assign(e??{},t[n]));const r="auto"===i.slidesPerView?1:v(i.slidesPerView,1);return{...i,slidesPerViewActual:r,isEnableLoop:"auto"!==i.slidesPerView&&i.isEnableLoop,slidesPerGroup:i.slidesPerGroup>r?r:v(i.slidesPerGroup,1)}}function R(e){return"string"==typeof e?`height: ${e};`:typeof(null==e?void 0:e.widthRatio)<"u"?`aspect-ratio: ${e.widthRatio} / ${e.heightRatio};`:"height: inherit;"}class N{constructor(e,t){s(this,"_setting"),s(this,"_carouselId",`bear-react-carousel_${D().toLowerCase()}`),s(this,"init",((e,t)=>{this._setting=C(t,e)})),this.init(e,t)}get carouselId(){return this._carouselId}get setting(){return this._setting}get style(){return[{targetEl:`#${this._carouselId}`,styles:[R(this.setting.height)]},{targetEl:`#${this.carouselId} .${x.slideItem}`,styles:[`flex: ${"auto"===this.setting.slidesPerView?"0 0 auto;-webkit-flex: 0 0 auto;":`1 0 ${100/this.setting.slidesPerViewActual}%`};`,`padding-left: ${this.setting.spaceBetween/2}px;`,`padding-right: ${this.setting.spaceBetween/2}px;`]}].filter((e=>typeof e<"u")).map((e=>`${e.targetEl}{${e.styles.join("")}}`)).join("\r\n")}}class k{constructor(){s(this,"events",new Map)}on(e,t){this.events.has(e)||this.events.set(e,[]),this.events.get(e).push(t)}off(e,t){if(this.events.has(e)){const n=this.events.get(e),i=n.indexOf(t);i>=0&&n.splice(i,1)}}emit(e,...t){if(this.events.has(e))for(const n of this.events.get(e))n&&n(...t)}}var O=(e=>(e[e.mobile=0]="mobile",e[e.desktop=1]="desktop",e))(O||{});const z=!0,L=!0,B=!0,G={onMobileTouchStart:!0,onMobileTouchMove:!0,onMobileTouchEnd:!0,onWebMouseStart:!0,onWebMouseMove:!0,onWebMouseEnd:!0,onDragMove:!1,onDragEnd:!1},V={onSlideResetToMatchIndex:!0},W={play:!0,pause:!0},U={onResize:!0},$={onSyncControlMove:!1,onSyncControlDone:!1,onSlideToActualIndex:!1},F={[O.mobile]:"orientationchange",[O.desktop]:"resize"};class X{constructor(e){s(this,"_breakpoints"),s(this,"_configurator"),s(this,"_size"),s(this,"_device"),s(this,"_eventManager",new k),s(this,"_window"),s(this,"_detectDevice",(()=>{if(function(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}())return O.mobile;if(m())return O.desktop;throw new Error("Unable to detect device type")})),s(this,"_setSize",(()=>{this._size=function(e,t){const n=t.filter((t=>t<=e)).sort(((e,t)=>Number(t)-Number(e)));return n.length>0?n[0]:0}(window.innerWidth,Object.keys(this._breakpoints).map(Number))})),s(this,"_emitResize",(()=>{this._configurator.setting.isDebug&&U.onResize&&P.printInText("[WindowSizer.onResize]"),this._setSize(),this._eventManager.emit("resize",{windowSize:this._size})})),s(this,"onResize",(e=>{this._window.addEventListener(F[this._device],this._emitResize,!1),this._eventManager.on("resize",e)})),s(this,"offResize",(()=>{this._window.removeEventListener(F[this._device],this._emitResize,!1),this._eventManager.off("resize")})),this._breakpoints=e.breakpoints,this._configurator=e.configurator,this._window=e.win,this._device=this._detectDevice(),this._setSize()}get size(){return this._size}get device(){return this._device}}class Y{constructor(e,t){s(this,"_info"),s(this,"_formatElement"),s(this,"_configurator"),s(this,"_eventor",new k),s(this,"onChange",(e=>{this._eventor.on("change",e)})),s(this,"offChange",(()=>{this._eventor.off("change")})),s(this,"checkActualIndexInRange",(e=>{const{minIndex:t,maxIndex:n}=this.actual;return function(e,t){return e<=t.maxIndex&&e>=t.minIndex}(e,{minIndex:t,maxIndex:n})})),s(this,"init",((e=[])=>{const{slidesPerView:t,slidesPerViewActual:n,slidesPerGroup:i,isCenteredSlides:r,isEnablePagination:o,isEnableNavButton:s,isEnableLoop:a}=this._configurator.setting;let l=e.length;this.updateData(e);const c=this.formatElement.length,u=a?n:0,h=u,d={min:0,max:c-1};let g=Math.ceil(l/i);!a&&"auto"!==t&&!r&&(g-=t-i),this._info={sourceTotal:l,element:{activeIndex:0,firstIndex:0,lastIndex:c-1,total:c},actual:{activeIndex:0,minIndex:d.min,maxIndex:d.max,firstIndex:Math.ceil(u),lastIndex:Math.ceil(l+h-1)},page:{activePage:0,pageTotal:g},residue:c%i,isVisiblePagination:o&&this.formatElement.length>0,isVisibleNavButton:s&&this.formatElement.length>0},this._eventor.emit("change")})),s(this,"updateData",((e=[])=>{const{slidesPerViewActual:t,slidesPerGroup:n,isEnableLoop:i}=this._configurator.setting;return this._formatElement=function(e=[],t=1,n=1,i=!1){const r=[],o=i&&typeof window<"u";let s=0;const a="auto"===t?0:Math.ceil(t),l=e.length/n-(n-a);if(o){const t=e.length-a;for(const[n,i]of e.slice(-a).entries())r[s]={actualIndex:s,matchIndex:a+t+s,sourceIndex:e.length-1-n,inPage:l,isClone:!0,element:i.children},s+=1}let c=s,u=0;for(const[h,d]of e.entries())r[s]={key:String(d.key),actualIndex:s,matchIndex:s,sourceIndex:h,inPage:Math.ceil((u+1)/n),isClone:!1,element:d.children},s+=1,u+=1;if(o)for(const[h,d]of e.slice(0,a).entries())r[s]={key:`${d.key}_clone`,actualIndex:s,matchIndex:c,sourceIndex:h,inPage:1,isClone:!0,element:d.children},s+=1,c+=1;return r}(e,t,n,i),this.element})),s(this,"setActiveActual",((e,t)=>{this.actual.activeIndex=e,this.page.activePage=t,this._eventor.emit("change")})),this._configurator=e,this.init(t)}get nextPage(){return this._info.page.activePage+1}get nextPageFirstIndex(){const{setting:e}=this._configurator;return function(e,t,n,i){return e?t+n:t+i}(e.isCenteredSlides,this.actual.activeIndex,e.slidesPerGroup,e.slidesPerViewActual)}get prevPage(){var e;return(null==(e=this._info)?void 0:e.page.activePage)-1}get actual(){var e;return null==(e=this._info)?void 0:e.actual}get page(){var e;return null==(e=this._info)?void 0:e.page}get formatElement(){return this._formatElement}get element(){var e;return null==(e=this._info)?void 0:e.element}get residue(){var e;return(null==(e=this._info)?void 0:e.residue)??0}get isVisibleNavButton(){var e;return null==(e=this._info)?void 0:e.isVisibleNavButton}get isVisiblePagination(){var e;return null==(e=this._info)?void 0:e.isVisiblePagination}}const Z=()=>a.jsxs("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:[a.jsx("path",{d:"M808.768 197.312c10.432 0 17.408 6.912 17.408 17.344l0 485.568c0 10.368-6.976 17.344-17.408 17.344l-87.296 0c-19.136 0-34.944 15.552-34.944 34.624 0 19.136 15.808 34.688 34.944 34.688l104.768 0c38.464 0 69.824-31.168 69.824-69.312l0-520.32C896 159.168 864.64 128 826.176 128l-384 0c-38.4 0-69.824 31.232-69.824 69.312l0 34.688c0 19.072 15.68 34.688 34.88 34.688 19.2 0 34.88-15.616 34.88-34.688L442.112 214.656c0-10.432 6.976-17.344 17.408-17.344L808.768 197.312z",fill:"#ffffff"}),a.jsx("path",{d:"M128 363.968l0 469.376C128 867.84 160.32 896 199.808 896l394.944 0c39.488 0 71.872-28.16 71.872-62.656L666.624 363.968c0-34.432-32.384-62.592-71.872-62.592L199.808 301.376C160.32 301.376 128 329.536 128 363.968z",fill:"#ffffff"})]}),q=()=>a.jsx("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:a.jsx("path",{d:"M723.882667 895.701333c-9.6 0-19.285333-3.2-27.39199999-9.6l-423.808-340.906666a43.733333 43.733333 0 0 1-1e-8-68.096L694.698667 137.984A43.690667 43.690667 0 0 1 749.397333 206.08l-379.605333 305.109333 381.525333 306.77333401a43.690667 43.690667 0 0 1-27.434666 77.73866599z",fill:"#ffffff"})}),H=(0,r.forwardRef)((({element:e,index:t,actualIndex:n,matchIndex:i,sourceIndex:r,inPage:o,isActive:s=!1,isClone:l=!1,isDebug:c=!1},u)=>a.jsxs("div",{className:x.slideItem,ref:u,"data-testid":"bear-carousel-slideItem","data-actual":n,"data-match":b(l,i),"data-page":o,"data-source":r,"data-active":b(s),"data-is-clone":b(l),children:[e,c&&a.jsxs("div",{className:x.testNumber,children:[r,l&&a.jsxs("div",{className:x.cloneIconGroup,children:[a.jsx("div",{className:x.cloneIcon,children:a.jsx(Z,{})}),t]})]})]})));function J(e,t,n){return function(e){return Math.floor(100*e)/100}(-(e-t)/n)}class K{constructor(e){s(this,"_rootRef",(0,r.createRef)()),s(this,"_containerRef",(0,r.createRef)()),s(this,"_pageGroupRef",(0,r.createRef)()),s(this,"_navGroupRef",(0,r.createRef)()),s(this,"_slideItemRefs",(0,r.createRef)()),s(this,"_pageRefs",(0,r.createRef)()),s(this,"_configurator"),s(this,"_stater"),s(this,"_isAnimation",!1),s(this,"onSlideAnimation",(()=>{this.containerEl.addEventListener("transitionstart",this.animationStart,!1),this.containerEl.addEventListener("transitionend",this.animationEnd,!1)})),s(this,"offSlideAnimation",(()=>{this.containerEl.removeEventListener("transitionstart",this.animationStart,!1),this.containerEl.removeEventListener("transitionend",this.animationEnd,!1)})),s(this,"_getStartPosition",(e=>function(e,t,n){if(e){let e=0;return"auto"===t.slidesPerView&&(e=n.containerWidth/2-n.currItemWidth/2),e+n.currItemWidth*(t.slidesPerViewActual-1)/2}return 0}(this._configurator.setting.isCenteredSlides,{slidesPerView:this._configurator.setting.slidesPerView,slidesPerViewActual:this._configurator.setting.slidesPerViewActual},{containerWidth:this.rootEl.offsetWidth,currItemWidth:e}))),s(this,"getMovePercentage",(e=>{const{actual:t}=this._stater,n=this.slideItemEls[t.activeIndex].offsetWidth;return J(e,this._getStartPosition(n),n)})),s(this,"getPercentageToMovePx",(e=>{const{actual:t}=this._stater,n=this.slideItemEls[t.activeIndex].offsetWidth;return-n*e+this._getStartPosition(n)})),s(this,"getMoveDistance",(e=>{const t=this.slideItemEls[e];return this.slideItemEls[e]?function(e,t){return-e+t}(t.offsetLeft,this._getStartPosition(t.offsetWidth)):0})),s(this,"setNonSubjectTouch",(e=>{this.rootEl.setAttribute("data-touch",String(e))})),s(this,"syncActiveState",(e=>{var t,n,i;this.slideItemEls.forEach(((t,n)=>{!function(e,t,n){return t<=0&&0===e||t>=n&&e===n-1||t===e}(n,e,this.slideItemEls.length)?null!=t&&t.dataset.active&&t.removeAttribute("data-active"):t.setAttribute("data-active","true")}));const r=this.slideItemEls.find((e=>"true"===e.dataset.active)),o=parseInt(null==r?void 0:r.dataset.page);this._stater.isVisiblePagination&&this._stater.page.activePage>0&&this.pageEls.forEach(((e,t)=>{o===t+1?e.setAttribute("data-active","true"):null!=e&&e.dataset.active&&e.removeAttribute("data-active")}));const s=this._stater.isVisibleNavButton&&!this._configurator.setting.isEnableLoop;null==(t=this.navGroupEl)||t.setAttribute("data-first",b(s&&1===o)),null==(n=this.navGroupEl)||n.setAttribute("data-last",b(s&&o===this._stater.page.pageTotal));const a=1===this._stater.page.pageTotal;null==(i=this.rootEl)||i.setAttribute("data-onlyOne",a&&b(!0))})),s(this,"animationStart",(()=>{this._isAnimation=!0,this.containerEl.dataset.animation="true"})),s(this,"animationEnd",(()=>{this._isAnimation=!1,this.containerEl.removeAttribute("data-animation")})),this._slideItemRefs.current=[],this._pageRefs.current=[],this._configurator=e.configurator,this._stater=e.stater}get rootEl(){return this._rootRef.current}get containerEl(){return this._containerRef.current}get slideItemEls(){return this._slideItemRefs.current}get pageEls(){return this._pageRefs.current}get pageGroupEl(){return this._pageGroupRef.current}get navGroupEl(){return this._navGroupRef.current}get isUseAnimation(){return"0ms"!==this.containerEl.style.transitionDuration}get isAnimation(){return this._isAnimation}setSlideItemRefs(e,t){this._slideItemRefs.current[t]=e}setPageRefs(e,t){this._pageRefs.current[t]=e}transform(e,t=!1){return this.containerEl.style.transform=`translate(${e}px, 0px)`,this.containerEl.style.transitionDuration=t?`${this._configurator.setting.moveTime}ms`:"0ms",this}}class Q{constructor(e){s(this,"_configurator"),s(this,"_stater"),s(this,"_elementor"),s(this,"_eventor",new k),s(this,"onSlideBefore",(e=>{this._eventor.on("slideBefore",e)})),s(this,"onSlideAfter",(e=>{this._eventor.on("slideAfter",e)})),s(this,"offSlideBefore",(()=>{this._eventor.off("slideBefore")})),s(this,"offSlideAfter",(()=>{this._eventor.off("slideAfter")})),s(this,"slideResetToMatchIndex",(()=>{this._configurator.setting.isDebug&&V.onSlideResetToMatchIndex&&P.printInText("[Controller.slideResetToMatchIndex]");const{actual:e,formatElement:t}=this._stater;t[e.activeIndex].isClone&&this.slideToActualIndex(t[e.activeIndex].matchIndex,{isUseAnimation:!1})})),s(this,"slideToActualIndex",((e,t)=>{var n;const i=(null==t?void 0:t.isEmitEvent)??!0;if(i&&this._eventor.emit("slideBefore",e,null==t?void 0:t.isUseAnimation),this._stater.checkActualIndexInRange(e)){const{formatElement:i}=this._stater;this._stater.setActiveActual(e,(null==(n=i[e])?void 0:n.inPage)??1);const r=this._elementor.getMoveDistance(e);this._elementor.transform(r,(null==t?void 0:t.isUseAnimation)??!0).syncActiveState(e)}i&&this._eventor.emit("slideAfter",e,null==t?void 0:t.isUseAnimation)})),s(this,"slideToNextPage",(()=>{const{nextPage:e,formatElement:t,page:n,actual:i,residue:r,element:o,nextPageFirstIndex:s}=this._stater,{setting:a}=this._configurator,l=t[i.activeIndex];l.isClone&&this._elementor.isAnimation||function(e,t,n){return e.isClone?[{index:e.matchIndex,isUseAnimation:!1},{index:e.matchIndex+n.slidesPerGroup,isUseAnimation:!0}]:n.isLoopMode&&t.isOverflowPage&&t.residue>0?[{index:e.actualIndex+t.residue,isUseAnimation:!0}]:n.slidesPerViewActual<t.slideTotal&&!1===t.isOverflowIndex?[{index:e.actualIndex+n.slidesPerGroup,isUseAnimation:!0}]:[]}(l,{nextPage:e,residue:r,pageTotal:n.pageTotal,slideTotal:this._stater.formatElement.length,isOverflowPage:e>n.pageTotal,isOverflowIndex:s>o.lastIndex},{slidesPerGroup:a.slidesPerGroup,slidesPerViewActual:a.slidesPerViewActual,isLoopMode:a.isEnableLoop}).forEach((e=>this.slideToActualIndex(e.index,{isUseAnimation:e.isUseAnimation})))})),s(this,"slideToPrevPage",(()=>{const{nextPage:e,formatElement:t,page:n,actual:i,residue:r,element:o,nextPageFirstIndex:s}=this._stater,{setting:a}=this._configurator,l=t[i.activeIndex];l.isClone&&this._elementor.isAnimation||function(e,t,n){return e.isClone?[{index:e.matchIndex,isUseAnimation:!1},{index:e.matchIndex-1,isUseAnimation:!0}]:n.isLoopMode&&1===t.activePage&&t.residue>0?[{index:e.actualIndex-t.residue,isUseAnimation:!0}]:n.slidesPerViewActual>0?[{index:e.actualIndex-n.slidesPerGroup,isUseAnimation:!0}]:[]}(l,{activePage:this._stater.page.activePage,residue:r,pageTotal:n.pageTotal,slideTotal:this._stater.formatElement.length,isOverflowPage:e>n.pageTotal,isOverflowIndex:s>o.lastIndex},{slidesPerGroup:a.slidesPerGroup,slidesPerViewActual:a.slidesPerViewActual,isLoopMode:a.isEnableLoop}).forEach((e=>this.slideToActualIndex(e.index,{isUseAnimation:e.isUseAnimation})))})),this._configurator=e.configurator,this._stater=e.stater,this._elementor=e.elementor}slideToPage(e,t=!0){const{setting:n}=this._configurator,{actual:i}=this._stater,r=function(e,t,n){return(e-1)*t+1+(n-1)}(e=e>this._stater.page.pageTotal?this._stater.page.pageTotal:e,n.slidesPerGroup,i.firstIndex);this.slideToActualIndex(r,{isUseAnimation:t})}}class ee{constructor(e){s(this,"_configurator"),s(this,"_timer"),s(this,"_eventor",new k),s(this,"onTimeout",(e=>{window.addEventListener("focus",this.play,!1),window.addEventListener("blur",this.pause,!1),this.play(),this._eventor.on("timeout",e)})),s(this,"offTimeout",(()=>{window.removeEventListener("focus",this.play,!1),window.removeEventListener("blur",this.pause,!1),this.pause(),this._eventor.off("timeout")})),s(this,"play",(()=>{const{setting:e}=this._configurator;e.isDebug&&W.play&&P.printInText("[AutoPlayer.play]"),!this.isPlaying&&e.isEnableAutoPlay&&e.autoPlayTime>0&&(this._timer=setInterval((()=>{this._eventor.emit("timeout")}),e.autoPlayTime))})),s(this,"pause",(()=>{this._configurator.setting.isDebug&&W.play&&P.printInText("[AutoPlayer.pause]"),clearInterval(this._timer),this._timer=null})),this._configurator=e.configurator}get isPlaying(){return this._timer}}function te(e){const t=window.getComputedStyle(e).transform,n=t.includes("3d")?"3d":"2d";let i=function(e){var t;const n=e.match(/matrix.*\((.+?)\)/);return null===n?[]:null==(t=n[1])?void 0:t.split(", ").map(Number)}(t);switch(n){case"2d":return{x:i[4]??0,y:i[5]??0,z:0};case"3d":return{x:i[12]??0,y:i[13]??0,z:i[14]};default:return{x:0,y:0,z:0}}}const ne={pageX:0,pageY:0,x:0,y:0};class ie{constructor(){s(this,"_startPosition",ne),s(this,"touchStart",((e,t)=>{const{x:n}=te(t);this._startPosition.x=e.x-n})),s(this,"touchMove",((e,t)=>t.offsetLeft+e.x))}get startPosition(){return this._startPosition}}class re{constructor(e){s(this,"_event"),this._event=e}get x(){return this._event.targetTouches[0].pageX??0}get endX(){return this._event.targetTouches[0].clientX??0}get endY(){return this._event.targetTouches[0].pageY??0}}class oe{constructor(e){s(this,"_event"),this._event=e}get x(){return this._event.clientX}get endX(){return this._event.clientX}get endY(){return this._event.pageY}}class se{constructor(e){s(this,"_configurator"),s(this,"_elementor"),s(this,"_locator"),s(this,"_stater"),s(this,"_eventor",new k),s(this,"onDragStart",(e=>{this._elementor.containerEl.addEventListener("touchstart",this._onMobileTouchStart,{passive:!1}),this._elementor.containerEl.addEventListener("mousedown",this._onWebMouseStart,{passive:!1}),this._eventor.on("dragStart",e)})),s(this,"onDragMove",(e=>{this._eventor.on("dragMove",e)})),s(this,"onDragEnd",(e=>{this._eventor.on("dragEnd",e)})),s(this,"offDragStart",(()=>{this._elementor.containerEl.removeEventListener("touchstart",this._onMobileTouchStart,{passive:!1}),this._elementor.containerEl.removeEventListener("mousedown",this._onWebMouseStart,{passive:!1}),this._eventor.off("dragStart")})),s(this,"offDragMove",(()=>{this._eventor.off("dragMove")})),s(this,"offDragEnd",(()=>{this._eventor.off("dragEnd")})),s(this,"_onMobileTouchStart",(e=>{this._configurator.setting.isDebug&&G.onMobileTouchStart&&P.printInText("[Dragger._onMobileTouchStart]"),this._eventor.emit("dragStart");const{containerEl:t}=this._elementor;t&&(this._locator.touchStart(new re(e),t),t.addEventListener("touchmove",this._onMobileTouchMove,!1),t.addEventListener("touchend",this._onMobileTouchEnd,!1))})),s(this,"_onMobileTouchMove",(e=>{e.preventDefault(),this._configurator.setting.isDebug&&G.onMobileTouchMove&&P.printInText("[Dragger._onMobileTouchMove]");const t=this._locator.touchMove(new re(e),this._elementor.containerEl);this._dragMove(t)})),s(this,"_onMobileTouchEnd",(e=>{var t,n;this._configurator.setting.isDebug&&G.onMobileTouchEnd&&P.printInText("[Dragger._onMobileTouchEnd]"),null==(t=this._elementor.containerEl)||t.removeEventListener("touchmove",this._onMobileTouchMove,!1),null==(n=this._elementor.containerEl)||n.removeEventListener("touchend",this._onMobileTouchEnd,!1),this._dragEnd()})),s(this,"_onWebMouseStart",(e=>{var t;this._configurator.setting.isDebug&&G.onWebMouseStart&&P.printInText("[Dragger._onWebMouseStart]"),this._eventor.emit("dragStart");const{containerEl:n}=this._elementor;n&&(this._locator.touchStart(new oe(e),n),null==(t=this._elementor.rootEl)||t.addEventListener("mouseleave",this._onWebMouseEnd,!1),n.addEventListener("mousemove",this._onWebMouseMove,!1),n.addEventListener("mouseup",this._onWebMouseEnd,!1))})),s(this,"_onWebMouseMove",(e=>{e.preventDefault(),this._configurator.setting.isDebug&&G.onWebMouseMove&&P.printInText("[Dragger._onWebMouseMove]");const t=this._locator.touchMove(new oe(e),this._elementor.containerEl);this._dragMove(t)})),s(this,"_onWebMouseEnd",(e=>{var t,n,i;e.preventDefault(),this._configurator.setting.isDebug&&G.onWebMouseEnd&&P.printInText("[Dragger._onWebMouseEnd]"),null==(t=this._elementor.rootEl)||t.removeEventListener("mouseleave",this._onWebMouseEnd,!1),null==(n=this._elementor.containerEl)||n.removeEventListener("mousemove",this._onWebMouseMove,!1),null==(i=this._elementor.containerEl)||i.removeEventListener("mouseup",this._onWebMouseEnd,!1),this._dragEnd()})),s(this,"_dragEnd",(()=>{if(this._configurator.setting.isDebug&&G.onDragEnd&&P.printInText("[Dragger._dragEnd]"),this._elementor.setNonSubjectTouch(!0),this._elementor.slideItemEls){const e=this._elementor.slideItemEls.find((e=>"true"===e.dataset.active));if(e){const t=Number(e.dataset.actual);this._eventor.emit("dragEnd",t)}}})),this._configurator=e.configurator,this._elementor=e.elementor,this._elementor=e.elementor,this._stater=e.stater,this._locator=new ie}_dragMove(e){this._configurator.setting.isDebug&&G.onDragMove&&P.printInText("[Dragger._dragMove]"),this._elementor.setNonSubjectTouch(!1);const{startPosition:t}=this._locator,{setting:n}=this._configurator;if(this._elementor.containerEl&&n.isEnableMouseMove&&this._elementor.slideItemEls&&this._stater.page.pageTotal>1){const n=function(e,t){return t-e}(t.x,e),i=this._elementor.getMovePercentage(n);this._eventor.emit("dragMove",i),this._elementor.transform(n).syncActiveState(Math.round(i))}}}class ae{constructor(e){s(this,"_carouselRef"),s(this,"syncControlMove",(e=>{var t;if(null!=(t=this._configurator)&&t.setting.isDebug&&$.onSyncControlMove&&P.printInText("[SyncCarousel.syncControlMove]"),this._elementor){const t=this._elementor.getPercentageToMovePx(e);this._elementor.transform(t)}})),s(this,"syncControlDone",(e=>{var t,n;null!=(t=this._configurator)&&t.setting.isDebug&&$.onSyncControlDone&&P.printInText("[SyncCarousel.syncControlDone]"),null==(n=this._controller)||n.slideToActualIndex(e)})),s(this,"slideToActualIndex",((e,t=!0)=>{var n,i;null!=(n=this._configurator)&&n.setting.isDebug&&$.onSlideToActualIndex&&P.printInText("[SyncCarousel.slideToActualIndex]"),null==(i=this._controller)||i.slideToActualIndex(e,{isUseAnimation:t,isEmitEvent:!1})})),this._carouselRef=e}get _elementor(){var e,t;return null==(t=null==(e=this._carouselRef)?void 0:e.current)?void 0:t._elementor}get _configurator(){var e,t;return null==(t=null==(e=this._carouselRef)?void 0:e.current)?void 0:t._configurator}get _controller(){var e,t;return null==(t=null==(e=this._carouselRef)?void 0:e.current)?void 0:t._controller}}const le=({size:e=0})=>a.jsx("div",{"data-testid":"bear-carousel-windowSize",className:x.testWindowSize,children:e}),ce=(0,r.forwardRef)((({isActive:e=!1,onSlideToPage:t,page:n,pageContent:i},o)=>{const s=(0,r.useCallback)((()=>{t(n)}),[n]);return a.jsx("div",{className:x.paginationButton,ref:o,role:"button",onClick:s,"data-testid":"bear-carousel-page-button","data-active":b(e),"data-page":n,children:i&&a.jsx("div",{className:x.paginationContent,children:i})})})),ue=({className:e,testId:t,onClick:n})=>a.jsx("button",{"data-testid":t,type:"button",className:e,onClick:n,children:a.jsx("div",{className:x.navIcon,children:a.jsx(q,{})})}),he=({onClick:e})=>a.jsx(ue,{onClick:e,className:x.navNextButton,testId:"bear-carousel-navNextButton"}),de=({onClick:e})=>a.jsx(ue,{onClick:e,className:x.navPrevButton,testId:"bear-carousel-navPrevButton"}),ge=(0,r.forwardRef)((({id:e,style:t,className:n,setting:i,actual:r,isDebug:o=!1,extendStyle:s,isEnableGpuRender:l=!0,children:c},u)=>a.jsxs("div",{ref:u,id:e,"data-testid":"bear-carousel",style:t,className:[n,x.root].join(" ").trim(),"data-gpu-render":b(l),"data-per-view-auto":b("auto"===i.slidesPerView),"data-mouse-move":i.isEnableMouseMove,"data-actual":[r.minIndex,r.firstIndex,r.lastIndex,r.maxIndex].join(","),"data-debug":b(o),children:[a.jsx("style",{scoped:!0,dangerouslySetInnerHTML:{__html:s}}),c]})));class fe extends r.Component{constructor(e){super(e),s(this,"_isEnableGpuRender",m()),s(this,"state",{windowSize:0}),s(this,"_stater"),s(this,"_configurator"),s(this,"_windowSizer"),s(this,"_elementor"),s(this,"_controller"),s(this,"_autoPlayer"),s(this,"_dragger"),s(this,"_syncCarousel"),s(this,"_init",(()=>{if(this._elementor.containerEl){const e=this._elementor.containerEl.classList;e.contains(x.containerInit)||e.add(x.containerInit)}})),s(this,"_setControllerRef",(()=>{if(this.props.controllerRef){this.props.controllerRef.current=this._controller}})),s(this,"_onAutoPlay",(()=>{this._controller.slideToNextPage()})),s(this,"_onSlideBefore",(()=>{this._autoPlayer.pause()})),s(this,"_onSlideAfter",((e,t)=>{var n;null==(n=this._syncCarousel)||n.slideToActualIndex(e,t),this._autoPlayer.play()})),s(this,"_onDragStart",(()=>{this._controller.slideResetToMatchIndex(),this._autoPlayer.pause()})),s(this,"_onDragEnd",(e=>{var t;null==(t=this._controller)||t.slideToActualIndex(e)})),s(this,"_onDragMove",(e=>{var t;null==(t=this._syncCarousel)||t.syncControlMove(e)})),s(this,"_onChange",(()=>{if(this.props.onChange){const{element:e,actual:t,page:n}=this._stater;this.props.onChange({element:e,actual:t,page:n})}})),s(this,"_onResize",(e=>{e.windowSize!==this.state.windowSize?this.setState({windowSize:e.windowSize}):this._controller.slideToPage(1,!1)})),s(this,"_renderNavButton",(()=>{const{renderNavButton:e}=this.props;return typeof e<"u"?a.jsx(a.Fragment,{children:e(this._controller.slideToPrevPage,this._controller.slideToNextPage)}):a.jsxs("div",{ref:this._elementor._navGroupRef,className:x.navGroup,children:[a.jsx(de,{onClick:this._controller.slideToPrevPage}),a.jsx(he,{onClick:this._controller.slideToNextPage})]})})),s(this,"_renderSlideItems",(()=>{const{isDebug:e}=this.props,{actual:t,formatElement:n}=this._stater;return n.map(((n,i)=>{const r=n.actualIndex===t.activeIndex;return a.jsx(H,{ref:e=>this._elementor.setSlideItemRefs(e,i),element:n.element,actualIndex:n.actualIndex,matchIndex:n.matchIndex,inPage:n.inPage,sourceIndex:n.sourceIndex,isActive:r,isClone:n.isClone,isDebug:e,index:i},`bear-carousel_${n.key}`)}))})),s(this,"_renderPagination",(()=>{const{renderPagination:e}=this.props,{page:t}=this._stater,{isEnablePageContent:n}=this._configurator.setting;let i;typeof e<"u"&&(i=e(this._stater.page.pageTotal));const r=new Array(t.pageTotal).fill("").map(((e,r)=>a.jsx(ce,{ref:e=>this._elementor.setPageRefs(e,r),onSlideToPage:e=>this._controller.slideToPage(e),page:r+1,isActive:t.activePage===r+1,pageContent:n&&i[r]},`page_${r}`)));return a.jsx("div",{ref:this._elementor._pageGroupRef,"data-page-content":b(n),className:x.paginationGroup,children:r})}));const t=j(e);this._configurator=new N(e.breakpoints,t),this._windowSizer=new X({breakpoints:e.breakpoints,win:window,configurator:this._configurator}),this._stater=new Y(this._configurator,e.data),this._elementor=new K({configurator:this._configurator,stater:this._stater}),this._controller=new Q({configurator:this._configurator,stater:this._stater,elementor:this._elementor}),this._dragger=new se({configurator:this._configurator,elementor:this._elementor,stater:this._stater}),this._autoPlayer=new ee({configurator:this._configurator}),this._stater.onChange(this._onChange),this.state={windowSize:this._windowSizer.size}}componentDidMount(){this.props.isDebug&&z&&P.printInText("[componentDidMount]"),this.props.onMount&&this.props.onMount(),this._elementor&&(this._stater.page.pageTotal>0&&this._controller.slideToPage(this.props.defaultActivePage??1,!1),this._windowSizer.onResize(this._onResize),this._autoPlayer.onTimeout(this._onAutoPlay),this._dragger.onDragStart(this._onDragStart),this._dragger.onDragMove(this._onDragMove),this._dragger.onDragEnd(this._onDragEnd),this._controller.onSlideBefore(this._onSlideBefore),this._controller.onSlideAfter(this._onSlideAfter),this._syncCarousel=new ae(this.props.syncCarouselRef)),this._setControllerRef(),this._elementor.onSlideAnimation(),this._init()}componentWillUnmount(){this.props.isDebug&&L&&P.printInText("[componentWillUnmount]"),this._windowSizer.offResize(),this._autoPlayer.offTimeout(),this._dragger.offDragStart(),this._dragger.offDragMove(),this._dragger.offDragEnd(),this._controller.offSlideBefore(),this._controller.offSlideAfter(),this._elementor.offSlideAnimation(),this._stater.offChange()}shouldComponentUpdate(e,t){this._configurator.setting.isDebug&&B&&P.printInText("[shouldComponentUpdate]");const{windowSize:n}=t;return p(this.props,e,["data"])||this.state.windowSize!==n||this.props.data.length!==e.data.length?(this._configurator.init(e.breakpoints,j(e)),this._stater.init(e.data),setTimeout((()=>{this._controller.slideToPage(1,!1)}),0),!0):(e.isSlideItemMemo&&this.props.data!==e.data||!!function(e,t){return(null==e?void 0:e.map((e=>e.key)).join("_"))!==(null==t?void 0:t.map((e=>e.key)).join("_"))}(this.props.data,e.data))&&(this._stater.updateData(e.data),!0)}render(){const{style:e,className:t,isDebug:n}=this.props;return a.jsxs(ge,{id:this._configurator.carouselId,ref:this._elementor._rootRef,style:e,className:t,setting:this._configurator.setting,actual:this._stater.actual,isDebug:n,extendStyle:this._configurator.style,isEnableGpuRender:this._isEnableGpuRender,children:[this._stater.isVisibleNavButton&&this._renderNavButton(),a.jsx("div",{className:x.content,children:a.jsx("div",{ref:this._elementor._containerRef,className:x.container,"data-testid":"bear-carousel-container",children:this._renderSlideItems()})}),this._stater.isVisiblePagination&&this._renderPagination(),n&&a.jsx(le,{size:this._windowSizer.size})]})}}s(fe,"defaultProps",{data:void 0,slidesPerView:1,slidesPerGroup:1,moveTime:500,breakpoints:{},isCenteredSlides:!1,isEnableLoop:!1,isEnablePageContent:!1,isEnablePagination:!1,isEnableNavButton:!1,isEnableMouseMove:!0,isEnableAutoPlay:!1,isDebug:!1,spaceBetween:0,autoPlayTime:5e3,defaultActivePage:1,isSlideItemMemo:!1});const _e=({className:e,style:t,imageUrl:n,imageAlt:i,onClick:r,onClickAllowTime:o=150})=>{let s=0;return a.jsx("img",{style:t,className:[e,x.slideItemImage].join(" ").trim(),src:n,alt:i,draggable:"false",onMouseDown:r?e=>(e=>{e.preventDefault(),s=(new Date).getTime()})(e):void 0,onMouseUp:r?e=>(e=>{(new Date).getTime()-s<=o&&(e.preventDefault(),r&&r())})(e):void 0})},me=({className:e,style:t,bgUrl:n,bgSize:i,children:r,onClick:o,onClickAllowTime:s=150})=>{let l=0;return a.jsx("div",{className:[e,x.slideItemCard].join(" ").trim(),onMouseDown:e=>{e.preventDefault(),l=(new Date).getTime()},onClick:e=>{(new Date).getTime()-l<=s&&(e.preventDefault(),o&&o())},style:{...t,backgroundImage:n?`url(${n})`:void 0,backgroundSize:i},children:r})}}}]);