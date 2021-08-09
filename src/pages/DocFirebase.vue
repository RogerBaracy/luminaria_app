<template>
  <q-page padding>
    <q-card>
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h4 text-white">
          Documentação Firebase
        </div>
      </q-card-section>
      <q-card-section>
        <ol>
          <li><a href="#introducao" class="text-primary">Introdução </a></li>
          <li><a href="#firebase" class="text-primary">Projeto no Firebase </a></li>
          <li><a href="#realtime" class="text-primary">Banco de dados Realtime</a></li>
        </ol>
      </q-card-section>
    </q-card>

    <CardItem v-bind:propData="data" />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CardItem from '../components/documentation/CardItems.vue';
import data from './data/docFirebase';
@Component({
  components: {
    CardItem
  }
})
export default class DocFirebase extends Vue {
  private data = data;
}
</script>
