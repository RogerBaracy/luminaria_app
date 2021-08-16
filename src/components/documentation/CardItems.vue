<template>
  <div>
    <q-card class="q-mt-md" v-for="(i, index) in data" v-bind:key="index" v-bind:id="i.ancora">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white">
          {{ i.title }}
        </div>
      </q-card-section>

      <q-card-section
        class="text-primary"
        v-for="c in i.content"
        v-bind:key="c"
        v-html="c"
      />
    </q-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator';
export interface Data {
  ancora: string,
  title: string;
  content: Array<string>;
}
@Component
export default class ComponentName extends Vue {
  @PropSync('propData', { type: Array }) data!: Array<Data>;
}
</script>
