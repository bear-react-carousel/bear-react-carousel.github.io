(()=>{"use strict";var e,a,r,t,c,f={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return f[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=f,o.c=d,e=[],o.O=(a,r,t,c)=>{if(!r){var f=1/0;for(i=0;i<e.length;i++){r=e[i][0],t=e[i][1],c=e[i][2];for(var d=!0,b=0;b<r.length;b++)(!1&c||f>=c)&&Object.keys(o.O).every((e=>o.O[e](r[b])))?r.splice(b--,1):(d=!1,c<f&&(f=c));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[r,t,c]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var c=Object.create(null);o.r(c);var f={};a=a||[null,r({}),r([]),r(r)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,o.d(c,f),c},o.d=(e,a)=>{for(var r in a)o.o(a,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,r)=>(o.f[r](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",110:"66406991",342:"c1751846",357:"4a070847",444:"f867af4a",453:"30a24c52",533:"b2b675dd",654:"ce0a583d",948:"8717b14a",1477:"b2f554cd",1552:"e21316b6",1556:"8c49d961",1633:"031793e1",1713:"a7023ddc",1914:"d9f32620",1977:"99c5dc6d",2267:"59362658",2362:"e273c56f",2535:"814f3328",2538:"3021cf83",2646:"76b5f30f",3085:"1f391b9e",3089:"a6aa9e1f",3205:"a80da1cf",3237:"1df93b7f",3514:"73664a40",3515:"e6708e77",3608:"9e4087bc",3760:"c5fc451b",4013:"01a85c17",4706:"7705820d",5004:"4a5b7afc",5331:"b9c57940",5458:"5596359b",6103:"ccc49370",6796:"969d212d",6938:"608ae6a4",7178:"096bfee4",7414:"393be207",7563:"75f03148",7793:"43df0365",7918:"17896441",8610:"6875c492",8636:"f4f34a3a",9003:"925b3f96",9035:"4c9e35b1",9514:"1be78505",9642:"7661071f",9700:"e16015ca",9817:"14eb3368",9915:"736e6455"}[e]||e)+"."+{53:"7a93fc7d",110:"7144bab4",342:"0eb07cb1",357:"9c21b7a8",444:"11c732da",453:"5d718712",533:"2dd2513a",654:"5cb9a424",948:"579543cd",1477:"b5e09c70",1506:"16b381ec",1552:"0320d2fa",1556:"5262bbf6",1633:"f70fc15d",1713:"e551f696",1914:"7d0cd0bd",1977:"45a70fc2",2267:"9e501bd6",2362:"e0887618",2529:"21105bd5",2535:"cef58463",2538:"d616cdd6",2646:"662a5e09",3085:"f16affaa",3089:"d7b68039",3205:"9ff9f526",3237:"7098dc4c",3514:"2a65445a",3515:"b1c44452",3608:"e12d1f3e",3760:"9aa7c774",4013:"e106728a",4040:"f9d73ea8",4706:"8e66c885",4972:"9ad80e37",5004:"5bdc4e5a",5331:"59b7c801",5458:"bee75ff1",6103:"32019c2a",6409:"d339fa0b",6796:"4d2fec6d",6938:"984f63c4",7178:"896261c2",7414:"e417131d",7563:"979c4ada",7793:"6835ddbb",7918:"17c61439",8610:"d33f4a62",8636:"00f42927",9003:"fd1f7d9c",9035:"c86febc6",9514:"7507a401",9642:"6db88f34",9700:"c11b4fd8",9817:"7df06bb1",9915:"cd048afa"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},c="bear-react-carousel-doc:",o.l=(e,a,r,f)=>{if(t[e])t[e].push(a);else{var d,b;if(void 0!==r)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+r){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",c+r),d.src=e),t[e]=[a];var l=(a,r)=>{d.onerror=d.onload=null,clearTimeout(s);var c=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),c&&c.forEach((e=>e(r))),a)return a(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",o.gca=function(e){return e={17896441:"7918",59362658:"2267",66406991:"110","935f2afb":"53",c1751846:"342","4a070847":"357",f867af4a:"444","30a24c52":"453",b2b675dd:"533",ce0a583d:"654","8717b14a":"948",b2f554cd:"1477",e21316b6:"1552","8c49d961":"1556","031793e1":"1633",a7023ddc:"1713",d9f32620:"1914","99c5dc6d":"1977",e273c56f:"2362","814f3328":"2535","3021cf83":"2538","76b5f30f":"2646","1f391b9e":"3085",a6aa9e1f:"3089",a80da1cf:"3205","1df93b7f":"3237","73664a40":"3514",e6708e77:"3515","9e4087bc":"3608",c5fc451b:"3760","01a85c17":"4013","7705820d":"4706","4a5b7afc":"5004",b9c57940:"5331","5596359b":"5458",ccc49370:"6103","969d212d":"6796","608ae6a4":"6938","096bfee4":"7178","393be207":"7414","75f03148":"7563","43df0365":"7793","6875c492":"8610",f4f34a3a:"8636","925b3f96":"9003","4c9e35b1":"9035","1be78505":"9514","7661071f":"9642",e16015ca:"9700","14eb3368":"9817","736e6455":"9915"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,r)=>{var t=o.o(e,a)?e[a]:void 0;if(0!==t)if(t)r.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((r,c)=>t=e[a]=[r,c]));r.push(t[2]=c);var f=o.p+o.u(a),d=new Error;o.l(f,(r=>{if(o.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var c=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;d.message="Loading chunk "+a+" failed.\n("+c+": "+f+")",d.name="ChunkLoadError",d.type=c,d.request=f,t[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,r)=>{var t,c,f=r[0],d=r[1],b=r[2],n=0;if(f.some((a=>0!==e[a]))){for(t in d)o.o(d,t)&&(o.m[t]=d[t]);if(b)var i=b(o)}for(a&&a(r);n<f.length;n++)c=f[n],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(i)},r=self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})(),o.nc=void 0})();