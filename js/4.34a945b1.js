(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"row items-center justify-evenly"},[s("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.changeStatus()}}},[t._v("\n    "+t._s(t.textBtn)+"\n  ")])],1)},n=[],r=s("60a3"),c=s("2591"),i=function(t,e,s,a){var n,r=arguments.length,c=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,s):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,s,a);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,s,c):n(e,s))||c);return r>3&&c&&Object.defineProperty(e,s,c),c};let o=class extends r["c"]{constructor(){super(...arguments),this.status=!1,this.textBtn="Ligar"}mounted(){const t={apiKey:"AIzaSyCxQRLn_1qRq982h1tJBvCvIOH9r35CacE",authDomain:"478966688341.firebaseapp.com",databaseURL:"https=//luminaria-web-default-rtdb.firebaseio.com",projectId:"478966688341",storageBucket:"478966688341.appspot.com",messagingSenderId:"478966688341",appId:"1=478966688341=web=0051c5046d1d9b190fc2dc"};console.log(t),c["a"].initializeApp(t)}changeStatus(){const t=c["a"].database();this.status=!this.status,!0===this.status?(t.ref("status").set(!0),this.textBtn="Desligar"):(t.ref("status").set(!1),this.textBtn="Ligar")}};o=i([r["a"]],o);var u=o,l=u,p=s("2877"),f=Object(p["a"])(l,a,n,!1,null,null,null);e["default"]=f.exports}}]);