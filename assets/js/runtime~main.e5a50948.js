(()=>{"use strict";var e,a,c,r,t,f={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return f[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=f,b.c=d,e=[],b.O=(a,c,r,t)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],r=e[i][1],t=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&t||f>=t)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,t<f&&(f=t));if(d){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,r,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var f={};a=a||[null,c({}),c([]),c(c)];for(var d=2&r&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,b.d(t,f),t},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",59:"991a4981",342:"c1751846",357:"4a070847",444:"f867af4a",533:"b2b675dd",654:"ce0a583d",1086:"98d3be41",1299:"f1a41357",1477:"b2f554cd",1552:"e21316b6",1556:"8c49d961",1713:"a7023ddc",1977:"99c5dc6d",2535:"814f3328",2538:"3021cf83",2547:"a6899a3e",2646:"76b5f30f",2797:"3b46a5d6",2829:"85270c75",3085:"1f391b9e",3089:"a6aa9e1f",3237:"1df93b7f",3327:"877af6f3",3358:"c6bb85d1",3501:"65c9ee9d",3515:"e6708e77",3608:"9e4087bc",3760:"c5fc451b",4013:"01a85c17",4706:"7705820d",5004:"4a5b7afc",5331:"b9c57940",5334:"e296610c",6103:"ccc49370",6407:"e8850888",6505:"bbf96f8b",6796:"969d212d",7414:"393be207",7555:"64566cc6",7563:"75f03148",7793:"43df0365",7816:"06577f20",7918:"17896441",7920:"1a4e3797",8139:"6d7cad59",8382:"0897432f",8610:"6875c492",9514:"1be78505",9601:"71b5a0b7",9817:"14eb3368",9915:"736e6455"}[e]||e)+"."+{53:"56a64a64",59:"e1f73fba",342:"0eb07cb1",357:"db368f25",444:"22cee488",533:"35f3525c",654:"3f0de48f",1086:"8b655149",1299:"d5ccc007",1477:"869f95f0",1552:"8733d731",1556:"312e04b8",1713:"b9574b7c",1977:"45a70fc2",2529:"fda89642",2535:"d60a4379",2538:"5ce19428",2547:"92b4388a",2646:"cdcaf7a4",2797:"9e920476",2829:"44bbf738",3085:"5ebbe4e9",3089:"726bc429",3237:"04cb033c",3327:"ae63a858",3358:"3b842a8c",3501:"573cb3dd",3515:"cabd000a",3608:"18ebfe7f",3760:"f2e607a6",4013:"bef72b69",4040:"657bb784",4706:"d08bb56a",4972:"7d198819",5004:"8575f139",5331:"9b1fa9df",5334:"ca2468de",6103:"1eb74818",6407:"cb588110",6408:"54675304",6409:"adb965ba",6505:"1f517537",6796:"f3ca8d1f",6945:"4138f849",7414:"e417131d",7555:"d2bb2d77",7563:"979c4ada",7793:"c3494003",7816:"2a5df155",7918:"b774ec02",7920:"86ee7ebc",8139:"2c3b3632",8382:"79be2109",8610:"07a34d6b",8718:"b6415d01",8894:"c6eb1c94",9514:"714f34f6",9601:"14b95921",9724:"9d0c17bb",9817:"333d300e",9915:"6573da84"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},t="bear-react-carousel-doc:",b.l=(e,a,c,f)=>{if(r[e])r[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+c){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+c),d.src=e),r[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var t=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53","991a4981":"59",c1751846:"342","4a070847":"357",f867af4a:"444",b2b675dd:"533",ce0a583d:"654","98d3be41":"1086",f1a41357:"1299",b2f554cd:"1477",e21316b6:"1552","8c49d961":"1556",a7023ddc:"1713","99c5dc6d":"1977","814f3328":"2535","3021cf83":"2538",a6899a3e:"2547","76b5f30f":"2646","3b46a5d6":"2797","85270c75":"2829","1f391b9e":"3085",a6aa9e1f:"3089","1df93b7f":"3237","877af6f3":"3327",c6bb85d1:"3358","65c9ee9d":"3501",e6708e77:"3515","9e4087bc":"3608",c5fc451b:"3760","01a85c17":"4013","7705820d":"4706","4a5b7afc":"5004",b9c57940:"5331",e296610c:"5334",ccc49370:"6103",e8850888:"6407",bbf96f8b:"6505","969d212d":"6796","393be207":"7414","64566cc6":"7555","75f03148":"7563","43df0365":"7793","06577f20":"7816","1a4e3797":"7920","6d7cad59":"8139","0897432f":"8382","6875c492":"8610","1be78505":"9514","71b5a0b7":"9601","14eb3368":"9817","736e6455":"9915"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,c)=>{var r=b.o(e,a)?e[a]:void 0;if(0!==r)if(r)c.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>r=e[a]=[c,t]));c.push(r[2]=t);var f=b.p+b.u(a),d=new Error;b.l(f,(c=>{if(b.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var t=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+f+")",d.name="ChunkLoadError",d.type=t,d.request=f,r[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var r,t,f=c[0],d=c[1],o=c[2],n=0;if(f.some((a=>0!==e[a]))){for(r in d)b.o(d,r)&&(b.m[r]=d[r]);if(o)var i=o(b)}for(a&&a(c);n<f.length;n++)t=f[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},c=self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})(),b.nc=void 0})();