(function(e){function t(t){for(var o,c,u=t[0],i=t[1],l=t[2],s=0,p=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={2:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{0:"6a54145b",3:"ac48e1dc",4:"71806a56",5:"1ff887cf",6:"5cb6dc90",7:"3dd3ed6d"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;a.push([0,1]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var o=n("2b0e"),r=n("f476"),a=n("42d2"),c=n("b178");o["a"].use(c["a"],{config:{},lang:r["a"],iconSet:a["a"]});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},i=[],l=n("60a3"),s=function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};let f=class extends l["c"]{};f=s([l["a"]],f);var p=f,d=p,h=n("2877"),b=Object(h["a"])(d,u,i,!1,null,null,null),m=b.exports,v=n("4bde"),y=n("2f62"),w=Object(v["store"])((function({Vue:e}){e.use(y["a"]);const t=new y["a"].Store({modules:{},strict:!1});return t})),g=n("8c4f");const O=[{path:"/",redirect:"/home"},{path:"/home",component:()=>n.e(0).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(1),n.e(7)]).then(n.bind(null,"8b24"))}]},{path:"/documentation/firebase",component:()=>n.e(0).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(5).then(n.bind(null,"ae3d"))}]},{path:"/documentation/app",component:()=>n.e(0).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(3).then(n.bind(null,"4c15"))}]},{path:"/documentation/arduino",component:()=>n.e(0).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(4).then(n.bind(null,"f0d6"))}]},{path:"*",component:()=>n.e(6).then(n.bind(null,"e51e"))}];var j=O,P=Object(v["route"])((function({Vue:e}){e.use(g["a"]);const t=new g["a"]({scrollBehavior:()=>({x:0,y:0}),routes:j,mode:"hash",base:""});return t})),x=async function(){const e="function"===typeof w?await w({Vue:o["a"]}):w,t="function"===typeof P?await P({Vue:o["a"],store:e}):P;e.$router=t;const n={router:t,store:e,render:e=>e(m),el:"#q-app"};return{app:n,store:e,router:t}},_={failed:"Action failed",success:"Action was successful",enable_dark:"Theme dark"},k={failed:"Ocorreu um erro",success:"Executado com Sucesso",enable_dark:"Tema Escuro"},S={"en-us":_,"pt-br":k},E=n("a925");o["a"].use(E["a"]);const T=new E["a"]({locale:"en-us",fallbackLocale:"en-us",messages:S});var V=Object(v["boot"])((({app:e})=>{e.i18n=T})),M=n("bc3a"),q=n.n(M),A=Object(v["boot"])((({Vue:e})=>{e.prototype.$axios=q.a}));const C="";async function L(){const{app:e,store:t,router:n}=await x();let r=!1;const a=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},c=window.location.href.replace(window.location.origin,""),u=[V,A];for(let l=0;!1===r&&l<u.length;l++)if("function"===typeof u[l])try{await u[l]({app:e,router:n,store:t,Vue:o["a"],ssrContext:null,redirect:a,urlPath:c,publicPath:C})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==r&&new o["a"](e)}L()},"31cd":function(e,t,n){}});