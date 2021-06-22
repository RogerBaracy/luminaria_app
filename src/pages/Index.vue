<template>
  <q-page class="row items-center justify-evenly">
    <q-btn color="primary" @click="changeStatus()">
      {{ textBtn }}
    </q-btn>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class PageIndex extends Vue {
  private status = false;
  private textBtn = 'Ligar';
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
    console.log(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
  }
  

  changeStatus() {
    const db = firebase.database();
    this.status = !this.status;
    if (this.status === true) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      db.ref('status').set(true);
      this.textBtn = 'Desligar';
    } else {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      db.ref('status').set(false);
      this.textBtn = 'Ligar';
    }
  }
}
</script>
