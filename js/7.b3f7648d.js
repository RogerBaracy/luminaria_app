(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"8b24":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"row items-center justify-evenly"},[e.hasRecognition?o("q-btn",{staticClass:"q-ml-sm glossy",attrs:{loading:e.loading,size:"xl",round:"",color:"primary",icon:"mic"},on:{click:function(t){return e.listenVoicer()}},scopedSlots:e._u([{key:"loading",fn:function(){return[o("q-spinner-audio",{attrs:{color:"white"}})]},proxy:!0}],null,!1,2599416898)}):e._e(),o("q-fab",{attrs:{"external-label":"",label:"Comandos","vertical-actions-align":"left","label-position":"top",glossy:"",color:"primary",icon:"keyboard_arrow_down",direction:"down"},model:{value:e.showActions,callback:function(t){e.showActions=t},expression:"showActions"}},[o("q-fab-action",{attrs:{color:"light-green-12","external-label":"",icon:"flash_on",label:"Ligar"},on:{click:function(t){return e.cmd("ligar")}}}),o("q-fab-action",{attrs:{color:"green","external-label":"",glossy:"",icon:"lightbulb",label:"Verde"},on:{click:function(t){return e.cmd("verde")}}}),o("q-fab-action",{attrs:{color:"red","external-label":"",glossy:"",icon:"lightbulb",label:"Vermelho"},on:{click:function(t){return e.cmd("vermelho")}}}),o("q-fab-action",{attrs:{color:"amber","external-label":"",glossy:"",icon:"lightbulb",label:"Amarelo"},on:{click:function(t){return e.cmd("amarelo")}}}),o("q-fab-action",{attrs:{color:"grey","external-label":"",glossy:"",icon:"flash_off",label:"Desligar"},on:{click:function(t){return e.cmd("desligar")}}})],1)],1)},l=[],i=o("60a3"),a=o("2591"),r=function(e,t,o,n){var l,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(a=(i<3?l(a):i>3?l(t,o,a):l(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};let s=class extends i["d"]{constructor(){super(...arguments),this.hasRecognition=!1,this.loading=!1,this.showActions=!1}mounted(){const e={apiKey:"AIzaSyCxQRLn_1qRq982h1tJBvCvIOH9r35CacE",authDomain:"478966688341.firebaseapp.com",databaseURL:"https=//luminaria-web-default-rtdb.firebaseio.com",projectId:"478966688341",storageBucket:"478966688341.appspot.com",messagingSenderId:"478966688341",appId:"1=478966688341=web=0051c5046d1d9b190fc2dc"};a["a"].initializeApp(e);const t=window.webkitSpeechRecognition||window.SpeechRecognition;this.hasRecognition=!!t}listenVoicer(){this.loading=!0;const e=window.webkitSpeechRecognition||window.SpeechRecognition,t=new e;t.interimResults=!0,t.lang="pt-br",t.continuous=!0,t.start();var o="";t.onresult=e=>{if(e.results){for(let t=e.resultIndex;t<e.results.length;t++)e.results[t].isFinal?o=e.results[t][0].transcript.trim():o+=e.results[t][0].transcript;setTimeout((()=>{t.stop(),this.loading=!1,console.log(o);const e=a["a"].database();e.ref("color").set(o.toLowerCase())}),500)}}}cmd(e){const t=a["a"].database();t.ref("color").set(e)}};s=r([i["a"]],s);var c=s,u=c,d=o("2877"),b=Object(d["a"])(u,n,l,!1,null,null,null);t["default"]=b.exports}}]);