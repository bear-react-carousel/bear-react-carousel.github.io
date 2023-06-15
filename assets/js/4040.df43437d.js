/*! For license information please see 4040.df43437d.js.LICENSE.txt */
"use strict";(self.webpackChunkbear_react_carousel_doc=self.webpackChunkbear_react_carousel_doc||[]).push([[4040],{4040:(t,e,i)=>{i.d(e,{BC:()=>u,JX:()=>f,X2:()=>g,ai:()=>l,cv:()=>h,kC:()=>p,oZ:()=>m,tC:()=>W});var r=i(9521),n=i(7294);const d="styledGrid",a={gridGutterWidth:10,gridColumns:24,gridBreakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1540},containerMaxWidths:{sm:540,md:720,lg:960,xl:1140,xxl:1540},gridGutterWidthMedia:{sm:10,md:10,lg:10,xl:10,xxl:10}},l=Object.keys(a.containerMaxWidths);var o=(t=>(t.xs="xs",t.sm="sm",t.md="md",t.lg="lg",t.xl="xl",t.xxl="xxl",t))(o||{});const s=t=>(e,...i)=>r.iv`
          @media (min-width: ${e=>{var i;return null==(i=e.theme[d])?void 0:i.gridBreakpoints[t]}}px) {
            ${(0,r.iv)(e,...i)};
          };
    `,u={px2vw:(t,...e)=>r.iv`
  @media (max-width: ${t=>{var e;return null==(e=t.theme[d])?void 0:e.gridBreakpoints.sm}}px) {
      ${(t=>{let e=/(\d+)+(px)/gi;return t.map((t=>"string"==typeof t?t.replace(e,((t,e,i)=>{const r=Number(e);return 0===r?"0":isNaN(r)?t:function(t,e=320){return t/e*100+"vw"}(r)})):t))})((0,r.iv)(t,...e))};
  }
`,[o.sm]:s(o.sm),[o.md]:s(o.md),[o.lg]:s(o.lg),[o.xl]:s(o.xl),[o.xxl]:s(o.xxl)},x=(r.ZP.div.attrs((t=>({"data-grid":"container","data-debug":void 0})))`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${t=>{var e,i;return r.iv`
     box-sizing: border-box;
     padding-right: ${null==(e=t.theme[d])?void 0:e.gridGutterWidth}px;
     padding-left: ${null==(i=t.theme[d])?void 0:i.gridGutterWidth}px;

     ${!t.fluid&&r.iv`
        ${(t=>l.map((e=>{var i;return u[e]`
            max-width: ${null==(i=t.theme[d])?void 0:i.containerMaxWidths[e]}px;
        `})))(t)};
    `}
 `}}
`,t=>{var e;return t.noGutters?0:`-${null==(e=t.theme[d])?void 0:e.gridGutterWidth}px`}),g=r.ZP.div.attrs((t=>({"data-grid":"row","data-debug":void 0})))`
  box-sizing: border-box;
  padding-inline-start: 0; // 避免 ul 預設樣式位移
  
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  
  

  ${t=>r.iv`
     margin-right: ${x(t)};
     margin-left: ${x(t)};
     
     justify-content: ${t.horizontal?t.horizontal:void 0};
     align-items: ${t.vertical?t.vertical:void 0};

     // ps: 設定會 width 100% 會產生 margin 抵銷失敗


     ${!t.noGutters&&r.iv`
        ${(t=>l.map((e=>{var i,r;return u[e]`
            margin-left: -${null==(i=t.theme[d])?void 0:i.gridGutterWidthMedia[e]}px;
            margin-right: -${null==(r=t.theme[d])?void 0:r.gridGutterWidthMedia[e]}px;
        `})))(t)}
     `}

     ${t.noGutters&&r.iv`
        >[data-grid=col]{
            padding-right: 0;
            padding-left: 0;
        }
     `}
 `}
`;var h=(t=>(t.start="flex-start",t.center="center",t.end="flex-end",t))(h||{}),m=(t=>(t.row="row",t.column="column",t))(m||{});const p=r.ZP.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${t=>t.direction?t.direction:m.row};
  justify-content: ${t=>t.horizontal?t.horizontal:h.start};
  align-items: ${t=>t.vertical?t.vertical:h.start};
`;var c=(t=>(t.auto="auto",t.visible="visible",t.hidden="hidden",t))(c||{});const v=(t,e)=>{let i=0;switch(t){case!0:return"\n          display: block;\n          -ms-flex-preferred-size: 0;\n          -ms-flex-positive: 1;\n          flex-basis: 0;\n          flex-grow: 1;\n          max-width: 100%;\n        ";case c.auto:return"\n          display: block;\n          -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n          width: auto;\n          max-width: none;\n        ";case c.hidden:return"\n          display: none;\n        ";case c.visible:return"\n          display: block;\n        ";default:return i=100/e*("number"==typeof t?t:0),`\n            display: block;\n            -ms-flex: 0 0 ${i}%;\n            flex: 0 0 ${i}%;\n            max-width: ${i}%;\n        `}},f=r.ZP.div.attrs((t=>({"data-grid":"col","data-debug":void 0})))`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 1px;

  ${t=>{var e,i,n;return r.iv`
     padding-right: ${null==(e=t.theme[d])?void 0:e.gridGutterWidth}px;
     padding-left: ${null==(i=t.theme[d])?void 0:i.gridGutterWidth}px;

     >[data-grid=row]{
        flex: 0 1 100%;
    }

     min-width: 0; // 解決下層有使用 white-space: nowrap; 產生衝突跑版
     ${t.col&&v(t.col,null==(n=t.theme[d])?void 0:n.gridColumns)};

     ${(t=>l.map((e=>{var i,n,a;return u[e]`
             padding-right: ${null==(i=t.theme[d])?void 0:i.gridGutterWidthMedia[e]}px;
             padding-left: ${null==(n=t.theme[d])?void 0:n.gridGutterWidthMedia[e]}px;

            ${typeof t[e]<"u"&&r.iv`
                ${v(t[e],null==(a=t.theme[d])?void 0:a.gridColumns)};
            `}
    `})))(t)};
 `}}
`;var $,b={},w={get exports(){return b},set exports(t){b=t}},y={};w.exports=function(){if($)return y;$=1;var t=n,e=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(t,i,n){var l,o={},s=null,u=null;for(l in void 0!==n&&(s=""+n),void 0!==i.key&&(s=""+i.key),void 0!==i.ref&&(u=i.ref),i)r.call(i,l)&&!a.hasOwnProperty(l)&&(o[l]=i[l]);if(t&&t.defaultProps)for(l in i=t.defaultProps)void 0===o[l]&&(o[l]=i[l]);return{$$typeof:e,type:t,key:s,ref:u,props:o,_owner:d.current}}return y.Fragment=i,y.jsx=l,y.jsxs=l,y}();const _=r.f6,W=t=>{const{gridTheme:e,children:i}=t,{gridBreakpoints:r,containerMaxWidths:n,gridGutterWidthMedia:l,...o}=a,s={[d]:{...o,...e,gridBreakpoints:Object.assign({},r,null==e?void 0:e.gridBreakpoints),containerMaxWidths:Object.assign({},n,null==e?void 0:e.containerMaxWidths),gridGutterWidthMedia:Object.assign({},l,null==e?void 0:e.gridGutterWidthMedia)}};return b.jsx(_,{theme:s,children:i})}}}]);