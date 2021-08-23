(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0130":function(a,e,t){},"4c15":function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{attrs:{padding:""}},[t("q-card",[t("q-card-section",{staticStyle:{background:"radial-gradient(circle, #35a2ff 0%, #014a88 100%)"}},[t("div",{staticClass:"text-h4 text-white"},[a._v("\n        Documentação Aplicação Web\n      ")])]),t("q-card-section",[t("ol",[t("li",[t("a",{staticClass:"text-primary",attrs:{href:"#introducao"}},[a._v("Introdução ")])]),t("li",[t("a",{staticClass:"text-primary",attrs:{href:"#quasar_cli"}},[a._v("Instalando Quasar/cli\n          ")])]),t("li",[t("a",{staticClass:"text-primary",attrs:{href:"#quasar"}},[a._v("Criando um projeto com Quasar Framework\n          ")])]),t("li",[t("a",{staticClass:"text-primary",attrs:{href:"#dotenv"}},[a._v(" Instalando Dotenv ")])]),t("li",[t("a",{staticClass:"text-primary",attrs:{href:"#firebase"}},[a._v(" Instalando Firebase ")])]),t("li",[t("a",{staticClass:"text-primary",attrs:{href:"#config_env"}},[a._v("\n            Configurando o acesso ao Banco de Dados\n          ")])]),t("li",[t("a",{staticClass:"text-primary",attrs:{href:"#code"}},[a._v("Explicando o código")])]),t("li",[t("a",{staticClass:"text-primary",attrs:{href:"#sample"}},[a._v("Exemplo Simplificado")])])])])],1),t("CardItem",{attrs:{propData:a.data}}),t("q-card",{attrs:{flat:"",bordered:""}},[t("q-card-section",{staticStyle:{background:"radial-gradient(circle, #35a2ff 0%, #014a88 100%)"}},[t("div",{staticClass:"text-h5 text-white",attrs:{id:"code"}},[a._v("\n        Explicando o código\n      ")])]),t("q-card-section",[t("div",{staticClass:"row"},[t("p",{staticClass:"text-primary"},[a._v("\n          Crie um arquivo .html ou com a extensão do framework que vc esteja\n          usando.\n        ")])])]),t("q-card-section",[t("div",{staticClass:"row"},[t("p",{staticClass:"text-primary"},[a._v("\n          Crie um botão que execute uma função para capturar o audio pelo\n          microfone. "),t("br"),a._v("\n          Exemplo:\n        ")])]),t("div",{staticClass:"row box-code"},[t("code",[a._v(' < button onclick="escutar()" > Escutar < /button >')])])]),t("q-card-section",[t("div",{staticClass:"row"},[t("p",{staticClass:"text-primary"},[a._v("\n          Faça o import da biblioteca do Firebase: "),t("br")])]),t("div",{staticClass:"row box-code"},[t("code",[a._v(' import firebase from "firebase"; ')])])]),t("q-card-section",[t("div",{staticClass:"row"},[t("p",{staticClass:"text-primary"},[a._v("\n          Crie um objeto JavaScript com as configuraçoẽs de acesso ao\n          Firebase. "),t("br"),a._v("\n          Exemplo:\n        ")])]),t("div",{staticClass:"row box-code"},[t("pre",[a._v("          "),t("code",[a._v(" \n            const firebaseConfig = {\n              apiKey: process.env.API_KEY,\n              authDomain: process.env.AUTH_DOMAIN,\n              databaseURL: process.env.DATABASE_URL,\n              projectId: process.env.PROJECT_ID,\n              storageBucket: process.env.STORAGE_BUCKET,\n              messagingSenderId: process.env.MESSAGING_SENDER_ID,\n              appId: process.env.APP_ID\n            }\n          ")]),a._v("\n        ")])])]),t("q-card-section",[t("div",{staticClass:"row"},[t("p",{staticClass:"text-primary"},[a._v("\n          Crie a função JavaScript para capturar o audio do microfone e enviar\n          para o Firebase"),t("br"),a._v("\n          Exemplo:\n        ")])]),t("div",{staticClass:"row box-code"},[t("pre",[a._v("        "),t("code",[a._v(" \n          function escutar() {\n            // Initialize Firebase\n            if (!firebase.apps.length) {\n              firebase.initializeApp(this.firebaseConfig);\n            }\n            \n            const SpeechRecognition =\n              window.webkitSpeechRecognition || window.SpeechRecognition;\n            const recognition = new SpeechRecognition();\n            recognition.interimResults = false;\n            recognition.lang = 'pt-br';\n            recognition.continuous = false;\n            recognition.maxAlternatives = 1;\n\n            recognition.start();\n            var transcript = '';\n            recognition.onresult = (event) => {\n              if (event.results) {\n                for (let i = event.resultIndex; i <\t event.results.length; i++) {\n                  if (event.results[i].isFinal) {\n                    transcript = event.results[i][0].transcript.trim();\n                  } else {\n                    transcript += event.results[i][0].transcript;\n                  }\n                }\n                setTimeout(() => {\n                  recognition.stop();\n                  this.loading = false;\n                  console.log(transcript);\n                  const db = firebase.database();\n                  db.ref('color').set(transcript.toLowerCase());\n                }, 500);\n              }\n            };\n          }\n        ")]),a._v("\n        ")])])]),t("q-card",{attrs:{flat:"",bordered:""}},[t("q-card-section",{staticStyle:{background:"radial-gradient(circle, #35a2ff 0%, #014a88 100%)"}},[t("div",{staticClass:"text-h5 text-white",attrs:{id:"sample"}},[a._v("\n          Exemplo Simplificado\n        ")])]),t("q-card-section",[t("div",{staticClass:"row"},[t("p",{staticClass:"text-primary"},[a._v("\n            Caso você esteja em um ambiente onde a segurança não seja um\n            requisito ex: Localhost "),t("br"),a._v("\n            Você pode cirar um arquivo .html e consumir o Firebase por cdn e\n            colocar as credências diretamente numa variavel no mesmo arquivo.\n          ")])]),t("a",{staticClass:"text-primary",attrs:{download:"sample.html",href:"files/sample.html",role:"button"}},[a._v("\n          Download do exemplo\n        ")])])],1)],1)],1)},o=[],s=t("60a3"),n=t("8f97");const i=[{ancora:"introducao",title:"Introdução",content:["Esse tópico da documentação se refere a aplicação web, <br /> nessa aplicação enviaremos comandos de voz e ações dos botões para o firebase"]},{ancora:"quasar_cli",title:"Instalando Quasar/cli",content:['Quasar Framework, é um framework front-end que utiliza VueJs, e possibilita builds para multi-plataformas (Web, Mobile e Desktop)<br /> <a href="https://quasar.dev/" target="_blank"> https://quasar.dev/ </a> <br />',"A instalação desse framework é opcional, você pode trabalhar com o framework de sua preferência ou até mesmo usando Html, css e JavaScript sem frameworks <br />","Para utilizar o Quasar Framework o Node.js >=12.22.1 é requerido. <br/> Execute o comando:","yarn global add @quasar/cli <br/> ou  <br/> npm install -g @quasar/cli",'link para a documentação: <a href="https://quasar.dev/quasar-cli/installation" target="_blank" class="text-primary">https://quasar.dev/quasar-cli/installation</a>']},{ancora:"quasar",title:"Criando um projeto com Quasar Framework",content:["quasar create &lt;folder_name&gt;"]},{ancora:"dotenv",title:"Instalando o DotEnv",content:["O DotEnv é nescessário para que as chaves de acesso ao Firebase não fiquem expostas no Github e na página web. Execute o comando:","npm install dotenv <br> ou <br> yarn add dotenv"]},{ancora:"firebase",title:"Instalando o FireBase",content:["Para a aplicação web se conectar ao banco de dados precisamos ter o pacote do Firebase instalado no projeto, para isso executamos o comando:","npm install firebase <br> ou <br> yarm add firebase"]},{ancora:"config_env",title:"Configurando o acesso ao banco de dados",content:["Crie um arquivo .env na raiz do projeto",'Leia a etapa 3 da documentação do Firebase no link: <a href="https://firebase.google.com/docs/web/setup" target="_blank" class="text-primary">Add Firebase in Project Web</>','Para conseguir as configurações de acesso ao seu banco de dados criado no Firebase acesse esse link descrito na documentação do Firebase: <a href="https://support.google.com/firebase/answer/7015592#zippy=%2Cneste-artigo" target="_blank">Arquivo de Configuração</>',"Agora no arquivo .env crie as variaveis com as configurações de acesso ao Firebase do seu projeto. Exemplo:","API_KEY= xxxxxxxxxxxxxxxxxxxxxxxxxxx <br> AUTH_DOMAIN= 111111111111.firebaseapp.com <br> DATABASE_URL= https=//xxxxxxxxxxxxxxxxxx.firebaseio.com <br> PROJECT_ID= 111111111111 <br> STORAGE_BUCKET= xxxxxxxxxxxxx.appspot.com <br> MESSAGING_SENDER_ID= 111111111111111 <br> APP_ID= 1=111111111111111=web=xxxxxxxxxxxxxxxxxxx"]}];var c=i,l=function(a,e,t,r){var o,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(a,e,t,r);else for(var i=a.length-1;i>=0;i--)(o=a[i])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let d=class extends s["d"]{constructor(){super(...arguments),this.data=c}};d=l([Object(s["a"])({components:{CardItem:n["a"]}})],d);var p=d,u=p,x=(t("df76"),t("2877")),m=Object(x["a"])(u,r,o,!1,null,null,null);e["default"]=m.exports},"8f97":function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",a._l(a.data,(function(e,r){return t("q-card",{key:r,staticClass:"q-mt-md",attrs:{id:e.ancora}},[t("q-card-section",{staticStyle:{background:"radial-gradient(circle, #35a2ff 0%, #014a88 100%)"}},[t("div",{staticClass:"text-h5 text-white"},[a._v("\n        "+a._s(e.title)+"\n      ")])]),a._l(e.content,(function(e){return t("q-card-section",{key:e,staticClass:"text-primary",domProps:{innerHTML:a._s(e)}})}))],2)})),1)},o=[],s=t("60a3"),n=function(a,e,t,r){var o,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(a,e,t,r);else for(var i=a.length-1;i>=0;i--)(o=a[i])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let i=class extends s["d"]{};n([Object(s["c"])("propData",{type:Array})],i.prototype,"data",void 0),i=n([s["a"]],i);var c=i,l=c,d=t("2877"),p=Object(d["a"])(l,r,o,!1,null,null,null);e["a"]=p.exports},df76:function(a,e,t){"use strict";t("0130")}}]);