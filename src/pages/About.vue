<template>
  <q-page padding>
    <q-card>
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h4 text-white">
          Sobre o projeto
        </div>
      </q-card-section>
    </q-card>
    <CardItem v-bind:propData="data" />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CardItem from '../components/documentation/CardItems.vue';
import data from './data/about';
@Component({
  components: {
    CardItem
  }
})
export default class About extends Vue {
  private data = data;
}
</script>
