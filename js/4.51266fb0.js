(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"row items-center justify-evenly"},[e.hasRecognition?n("q-btn",{staticClass:"q-ml-sm",attrs:{loading:e.loading,md:"",color:"primary",icon:"mic"},on:{click:function(t){return e.listenVoicer()}},scopedSlots:e._u([{key:"loading",fn:function(){return[n("q-spinner-audio",{attrs:{color:"white"}})]},proxy:!0}],null,!1,2599416898)}):e._e()],1)},i=[],s=n("60a3"),r=n("2591"),c=function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let a=class extends s["c"]{constructor(){super(...arguments),this.hasRecognition=!1,this.loading=!1}mounted(){const e={apiKey:"AIzaSyCxQRLn_1qRq982h1tJBvCvIOH9r35CacE",authDomain:"478966688341.firebaseapp.com",databaseURL:"https=//luminaria-web-default-rtdb.firebaseio.com",projectId:"478966688341",storageBucket:"478966688341.appspot.com",messagingSenderId:"478966688341",appId:"1=478966688341=web=0051c5046d1d9b190fc2dc"};r["a"].initializeApp(e);const t=window.webkitSpeechRecognition||window.SpeechRecognition;this.hasRecognition=!!t}listenVoicer(){this.loading=!0;const e=window.webkitSpeechRecognition||window.SpeechRecognition,t=new e;t.interimResults=!0,t.lang="pt-br",t.continuous=!0,t.start();var n="";t.onresult=e=>{if(e.results){for(let t=e.resultIndex;t<e.results.length;t++)e.results[t].isFinal?n=e.results[t][0].transcript.trim():n+=e.results[t][0].transcript;setTimeout((()=>{const e=r["a"].database();t.stop(),this.loading=!1,console.log(n),e.ref("color").set(n.toLowerCase())}),500)}}}};a=c([s["a"]],a);var l=a,u=l,p=n("2877"),d=Object(p["a"])(u,o,i,!1,null,null,null);t["default"]=d.exports}}]);