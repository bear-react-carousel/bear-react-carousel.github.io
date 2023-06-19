"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[2547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={slug:"Swiper carousel loop",title:"Swiper carousel design and how loop",authors:"imaginechiu",tags:["swiper"]},i="Swiper carousel design and how loop",l={permalink:"/blog/Swiper carousel loop",editUrl:"https://github.com/bear-react-carousel/bear-react-carousel.github.io/blob/blog/blog/2023-06-07-swiper-carousel-loop.md",source:"@site/blog/2023-06-07-swiper-carousel-loop.md",title:"Swiper carousel design and how loop",description:"Research carousel mechanism",date:"2023-06-07T00:00:00.000Z",formattedDate:"June 7, 2023",tags:[{label:"swiper",permalink:"/blog/tags/swiper"}],readingTime:2.52,hasTruncateMarker:!1,authors:[{name:"Imagine Chiu",title:"Front End Engineer @ Bearests",url:"https://github.com/imagine10255",imageURL:"https://github.com/imagine10255.png",key:"imaginechiu"}],frontMatter:{slug:"Swiper carousel loop",title:"Swiper carousel design and how loop",authors:"imaginechiu",tags:["swiper"]}},s={authorsImageUrls:[void 0]},p=[{value:"Normal State",id:"normal-state",level:2},{value:"Need Loop State",id:"need-loop-state",level:2},{value:"What problem can be solved",id:"what-problem-can-be-solved",level:2},{value:"What problems will you encounter",id:"what-problems-will-you-encounter",level:2},{value:"Ref",id:"ref",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Research carousel mechanism"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hUGGgfksWrUCK5VEVeUcfw@2x.png",alt:"swiper banner"})),(0,o.kt)("p",null,"Today, while researching whether a dynamic Swiper carousel would affect dynamic text in Loop mode, I noticed that the approach in the latest version of Swiper is somewhat different."),(0,o.kt)("p",null,"I\u2019ve been directly observing the elements as they move."),(0,o.kt)("h2",{id:"normal-state"},"Normal State"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2400/1*7qXF3NzsA0FnSKqU8k4sfQ.gif",alt:"Normal State"})),(0,o.kt)("p",null,"You can see that under normal circumstances, the method is similar to the general approach of implementing a carousel."),(0,o.kt)("h2",{id:"need-loop-state"},"Need Loop State"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2400/1*eHaFFqud-Mb3GVHVqEJLTw.gif",alt:"Need Loop State"})),(0,o.kt)("p",null,"We can see from the information in \u2018aria-label\u2019 that the active item is moved to the first position, then the sequence continues. For every move, we only need to activate the transition-duration animation. After the movement is completed, the animation is deactivated, and movement control should be locked until the completion of the movement."),(0,o.kt)("p",null,"actually not"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// active 5 (is last)\n1 / 5 (-1496 * 0)\n2 / 5 (-1496 * 1)\n3 / 5 (-1496 * 2)\n4 / 5 (-1496 * 3)\n5 / 5 (-1496 * 4)\n\n// click next, active 1 \n// then duration    0ms, transform: -4488px,\n// then duration: 900ms, transform: -5984px, \n// move\n2 / 5 (0)\n3 / 5 (-1496px)\n4 / 5 (-2992px)\n5 / 5 (-4488px)\n1 / 5 (-5984px)\n// then duration 0ms\n\n\n// click next, active 2\n// then duration    0ms, transform: -4488px,\n// then duration: 900ms, transform: -5984px,\n3 / 5 (0)\n4 / 5 (-1496px)\n5 / 5 (-2992px)\n1 / 5 (-4488px)\n2 / 5 (-5984px)\n// then duration 0ms\n")),(0,o.kt)("p",null,"The speed is too fast to see the flaws"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"containerEl.style.transform = `translate3d(${-1904}px, 0px, 0px)`;\ncontainerEl.style.transitionDuration = '0ms';\nsetTimeout(() => {\n    containerEl.style.transform = `translate3d(${-3808}px, 0px, 0px)`;\n    containerEl.style.transitionDuration = `${this._configurator.setting.moveTime}ms`;\n}, 0);\n")),(0,o.kt)("p",null,"So make up to move the next target sequence to the last one, then jump to the previous position, and then move to the last one"),(0,o.kt)("p",null,"The sorting has changed, so it becomes the judgment whether it is the last or the first, and it is judged by order"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"what-problem-can-be-solved"},"What problem can be solved"),(0,o.kt)("p",null,"I originally thought that to loop, one must copy and then instantly replace and reset. By doing so, we can avoid issues related to additional copying and the fact that objects are not identical. Each time, a new object needs to be created."),(0,o.kt)("p",null,"Because changing the array order requires re-Render"),(0,o.kt)("p",null,"It is worth thinking that if the order of the array is actually changed, you can consider whether to use css order to achieve the same effect"),(0,o.kt)("h2",{id:"what-problems-will-you-encounter"},"What problems will you encounter"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:2400/1*djAzNr7EbSSCExVz82fd2g.gif",alt:"Loop mode, total item 5, slidePreView 3"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When the number of Swiper\u2019s Loop is not divisible, it seems that the mobile computing has not been handled well.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When sliding manually, or when the number is insufficient, or moving from the first page to the last page, there will be some challenges"))),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As of now, the use of Clone might still be more advantageous than disadvantageous.")),(0,o.kt)("h2",{id:"ref"},"Ref"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/imagine10255/bear-react-carousel/tree/test/230610/loop-no-copy-slide/imagine10255"},"Test Not Clone Branch")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@imaginechiu/swiper-carousel-design-and-how-loop-88159a88f4ae"},"Swiper carousel design and how loop")))}u.isMDXComponent=!0}}]);