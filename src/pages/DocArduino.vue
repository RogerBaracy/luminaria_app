<template>
  <q-page padding>
    <q-card>
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h4 text-white">
          Documentação Arduíno
        </div>
      </q-card-section>
      <q-card-section>
        <ol>
          <li><a href="#introducao">Introdução</a></li>
          <li><a href="#node">Criando um projeto Node</a></li>
          <li><a href="#johnny_five"> Instalando Johnny Five JS </a></li>
          <li><a href="#dotenv"> Instalando Dotenv </a></li>
          <li><a href="#firebase"> Instalando Firebase </a></li>
          <li>
            <a href="#config_env" class="text-primary">
              Configurando o acesso ao Banco de Dados
            </a>
          </li>
          <li>
            <a href="#ide" class="text-primary">
              Configurando a IDE do Arduíno
            </a>
          </li>
          <li>
            <a href="#code" class="text-primary"> Explicando o código </a>
          </li>
        </ol>
      </q-card-section>
    </q-card>
    <CardItem :propData="data" />
    <q-card class="my-card" flat bordered>
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
            O código JavaScript que executará no Arduíno é bem simples.
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-primary">
            Primeiro crie um arquivo index.js.
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-primary">
            No arquivo index.js importe o Firebase, dotenv e o Johnny Five.
          </p>
        </div>
        <div class="row box-code">
          <pre>
          <code> 
              import firebase from "firebase";
              import five from "johnny-five";
              import dotenv from "dotenv";
          </code>
          </pre>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-primary">
            Inicialize o dotenv.
          </p>
        </div>
        <div class="row box-code">
          <pre>
          <code> 
              dotenv.config();
          </code>
          </pre>
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
            Inicialize o Firebase
          </p>
        </div>
        <div class="row box-code">
          <pre>
            <code>               
              firebase.initializeApp(firebaseConfig);
              const db = firebase.database();
            </code>
          </pre>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-primary">
            Inicialize o Arduíno e implemente a lógica
          </p>
        </div>
        <div class="row box-code">
          <pre>
            <code>               
              const board = new five.Board();
              board.on("ready", function () {
                const led = {    
                  green: new five.Led(8),
                  yellow: new five.Led(9),
                  red: new five.Led(10)
                }

                db.ref("color").on("value", (snapshot) => {
                  const color = snapshot.val();
                  switch (color) {
                    case "amarelo":
                      led.yellow.on();
                      break;
                    case "verde":
                      led.green.on();
                      break;
                    case "vermelho":
                      led.red.on();
                      break;
                    case "ligar":
                      led.yellow.on();
                      led.green.on();
                      led.red.on();
                      break;
                    case "desligar":
                      led.yellow.off();
                      led.green.off();
                      led.red.off();
                      break;
                  }
                });
            </code>
          </pre>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CardItem from '../components/documentation/CardItems.vue';
import data from './data/docArduino';
@Component({
  components: {
    CardItem
  }
})
export default class DocArduino extends Vue {
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
