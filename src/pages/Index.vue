<template>
  <q-page class="row items-center justify-evenly">
    <q-btn
      v-if="hasRecognition"
      v-bind:loading="loading"
      class="q-ml-sm glossy"
      size="xl"
      round
      color="primary"
      icon="mic"
      v-on:click="listenVoicer()"
    >
      <template v-slot:loading>
        <q-spinner-audio color="white" />
      </template>
    </q-btn>
    <q-fab
      v-model="showActions"
      external-label
      label="Comandos"
      vertical-actions-align="left"
      label-position="top"
      glossy      
      color="primary"
      icon="keyboard_arrow_down"
      direction="down"
    >
      <q-fab-action
        color="light-green-12"
        external-label
        @click="cmd('ligar')"
        icon="flash_on"
        label="Ligar"
      />
      <q-fab-action
        color="green"
        external-label
        glossy
        @click="cmd('verde')"
        icon="lightbulb"
        label="Verde"
      />
      <q-fab-action
        color="red"
        external-label
        glossy
        @click="cmd('vermelho')"
        icon="lightbulb"
        label="Vermelho"
      />
      <q-fab-action
        color="amber"
        external-label
        glossy
        @click="cmd('amarelo')"
        icon="lightbulb"
        label="Amarelo"
      />
      <q-fab-action
        color="grey"
        external-label
        glossy
        @click="cmd('desligar')"
        icon="flash_off"
        label="Desligar"
      />
    </q-fab>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class PageIndex extends Vue {
  private hasRecognition = false;
  private loading = false;
  private showActions = false;

  mounted() {
    const firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const SpeechRecognition =
      //@ts-ignore
      window.webkitSpeechRecognition || window.SpeechRecognition;
    SpeechRecognition
      ? (this.hasRecognition = true)
      : (this.hasRecognition = false);
  }

  private listenVoicer() {
    this.loading = true;
    //@ts-ignore
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'pt-br';
    recognition.continuous = true;

    recognition.start();
    var transcript = '';
    recognition.onresult = (event: any) => {
      if (event.results) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
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
  private cmd(action: string){
    const db = firebase.database();
    db.ref('color').set(action);
  }
}
</script>
