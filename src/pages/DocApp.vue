<template>
  <q-page padding>
    <q-card>
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h4 text-white">
          Documentação Aplicação Web
        </div>
      </q-card-section>
      <q-card-section>
        <ol>
          <li><a href="#introducao" class="text-primary">Introdução </a></li>
          <li>
            <a href="#quasar_cli" class="text-primary"
              >Instalando Quasar/cli
            </a>
          </li>
          <li>
            <a href="#quasar" class="text-primary"
              >Criando um projeto com Quasar Framework
            </a>
          </li>
          <li>
            <a href="#dotenv" class="text-primary"> Instalando Dotenv </a>
          </li>
          <li>
            <a href="#firebase" class="text-primary"> Instalando Firebase </a>
          </li>
          <li>
            <a href="#config_env" class="text-primary">
              Configurando o acesso ao Banco de Dados
            </a>
          </li>
          <li>
            <a href="#code" class="text-primary">Explicando o código</a>
          </li>
          <li>
            <a href="#sample" class="text-primary">Exemplo Simplificado</a>
          </li>
        </ol>
      </q-card-section>
    </q-card>
    <CardItem v-bind:propData="data" />

    <q-card flat bordered>
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="code">
          Explicando o código
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-primary">
            Crie um arquivo .html ou com a extensão do framework que vc esteja
            usando.
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-primary">
            Crie um botão que execute uma função para capturar o audio pelo
            microfone. <br />
            Exemplo:
          </p>
        </div>
        <div class="row box-code">
          <code> < button onclick="escutar()" > Escutar < /button ></code>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-primary">
            Faça o import da biblioteca do Firebase: <br />
          </p>
        </div>
        <div class="row box-code">
          <code> import firebase from "firebase"; </code>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-primary">
            Crie um objeto JavaScript com as configuraçoẽs de acesso ao
            Firebase. <br />
            Exemplo:
          </p>
        </div>
        <div class="row box-code">
          <pre>
            <code> 
              const firebaseConfig = {
                apiKey: process.env.API_KEY,
                authDomain: process.env.AUTH_DOMAIN,
                databaseURL: process.env.DATABASE_URL,
                projectId: process.env.PROJECT_ID,
                storageBucket: process.env.STORAGE_BUCKET,
                messagingSenderId: process.env.MESSAGING_SENDER_ID,
                appId: process.env.APP_ID
              }
            </code>
          </pre>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-primary">
            Crie a função JavaScript para capturar o audio do microfone e enviar
            para o Firebase<br />
            Exemplo:
          </p>
        </div>
        <div class="row box-code">
          <pre>
          <code> 
            function escutar() {
              // Initialize Firebase
              if (!firebase.apps.length) {
                firebase.initializeApp(this.firebaseConfig);
              }
              
              const SpeechRecognition =
                window.webkitSpeechRecognition || window.SpeechRecognition;
              const recognition = new SpeechRecognition();
              recognition.interimResults = false;
              recognition.lang = 'pt-br';
              recognition.continuous = false;
              recognition.maxAlternatives = 1;

              recognition.start();
              var transcript = '';
              recognition.onresult = (event) => {
                if (event.results) {
                  for (let i = event.resultIndex; i &lt	 event.results.length; i++) {
                    if (event.results[i].isFinal) {
                      transcript = event.results[i][0].transcript.trim();
                    } else {
                      transcript += event.results[i][0].transcript;
                    }
                  }
                  setTimeout(() => {
                    recognition.stop();
                    this.loading = false;
                    console.log(transcript);
                    const db = firebase.database();
                    db.ref('color').set(transcript.toLowerCase());
                  }, 500);
                }
              };
            }
          </code>
          </pre>
        </div>
      </q-card-section>
      <q-card flat bordered>
        <q-card-section
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
          <div class="text-h5 text-white" id="sample">
            Exemplo Simplificado
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <p class="text-primary">
              Caso você esteja em um ambiente onde a segurança não seja um
              requisito ex: Localhost <br />
              Você pode cirar um arquivo .html e consumir o Firebase por cdn e
              colocar as credências diretamente numa variavel no mesmo arquivo.
            </p>
          </div>
          <a download="sample.html" class="text-primary" href="files/sample.html" role="button">
            Download do exemplo
          </a>
        </q-card-section>
      </q-card>
    </q-card>
  </q-page>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CardItem from '../components/documentation/CardItems.vue';
import data from './data/docApp';
@Component({
  components: {
    CardItem
  }
})
export default class DocApp extends Vue {
  private data = data;
}
</script>
<style>
.box-code {
  background: #ccc;
  color: blue;
  padding: 5px;
}
</style>
