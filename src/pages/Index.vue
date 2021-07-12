<template>
  <q-page class="row items-center justify-evenly">
    <q-btn
      v-if="hasRecognition"
      v-bind:loading="loading"
      class="q-ml-sm"
      md
      color="primary"
      icon="mic"      
      v-on:click="listenVoicer()"
    >
      <template v-slot:loading>
        <q-spinner-audio color="white" />
      </template>
    </q-btn>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class PageIndex extends Vue {
  private hasRecognition = false;
  private loading = false;
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
    recognition.lang = 'pt-br' //this.$i18n.locale;    
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
          const db = firebase.database();
          recognition.stop();
          this.loading = false;
          console.log(transcript);
          db.ref('color').set(transcript.toLowerCase());
        }, 500);
      }
    };
  }
}
</script>
