(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Luminária App\n      ")]),a("div",{staticClass:"q-mr-md"},[a("q-toggle",{attrs:{"data-cy":"alter-theme",label:t.$t("enable_dark"),color:"black","false-value":!1,"true-value":!0},model:{value:t.isDark,callback:function(e){t.isDark=e},expression:"isDark"}})],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}}),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",target:t.target},on:{click:function(e){return t.redirect()}}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon,color:"primary"}})],1):t._e(),a("q-item-section",[a("q-item-label",{staticClass:"text-primary"},[t._v(t._s(t.title))]),a("q-item-label",{staticClass:"text-subtitle2 text-grey-8",attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},r=[],l=a("60a3"),c=function(t,e,a,n){var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(o<3?i(r):o>3?i(e,a,r):i(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let s=class extends l["d"]{redirect(){"_self"===this.target?this.$router.push({path:`/${this.link}`}):window.open(this.link,"_blank")}};c([Object(l["b"])({type:String,required:!0})],s.prototype,"title",void 0),c([Object(l["b"])({type:String,default:""})],s.prototype,"caption",void 0),c([Object(l["b"])({type:String,default:"#"})],s.prototype,"link",void 0),c([Object(l["b"])({type:String,default:""})],s.prototype,"icon",void 0),c([Object(l["b"])({type:String,default:"_blank"})],s.prototype,"target",void 0),s=c([l["a"]],s);var p=s,u=p,b=a("2877"),d=Object(b["a"])(u,o,r,!1,null,null,null),f=d.exports,g=function(t,e,a,n){var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(o<3?i(r):o>3?i(e,a,r):i(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};const k=[{title:"Home",caption:"Página Inicial",icon:"home",target:"_self",link:"home"},{title:"Sobre o projeto",caption:"Introdução",icon:"help",target:"_self",link:"about"},{title:"1º Passo: Firebase",caption:"Documentação Firebase",icon:"school",target:"_self",link:"documentation/firebase"},{title:"2º Passo: Aplicação Web",caption:"Documentação Aplicação Web",icon:"school",target:"_self",link:"documentation/app"},{title:"3º Passo: Arduíno",caption:"Documentação Arduíno",icon:"school",target:"_self",link:"documentation/arduino"},{title:"Galeria",caption:"Imagens do Projeto",icon:"photo",target:"_self",link:"galery"},{title:"Referências",caption:"Links importantes",icon:"link",target:"_self",link:"references"},{title:"Github Aplicação Web",caption:"Código Fonte Aplicação Web",icon:"code",target:"_blank",link:"https://github.com/RogerBaracy/luminaria_app"},{title:"Github Arduíno",caption:"Código Fonte Luminária Arduíno",icon:"code",target:"_blank",link:"https://github.com/RogerBaracy/luminaria_arduino"}];let h=class extends l["d"]{constructor(){super(...arguments),this.leftDrawerOpen=!1,this.essentialLinks=k,this.isDark=!0}mounted(){this.$q.dark.set(!0)}changeIsDark(t){this.$q.dark.set(t)}};g([Object(l["e"])("isDark")],h.prototype,"changeIsDark",null),h=g([Object(l["a"])({components:{EssentialLink:f}})],h);var m=h,y=m,v=Object(b["a"])(y,n,i,!1,null,null,null);e["default"]=v.exports}}]);