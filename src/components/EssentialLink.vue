<template>
  <q-item clickable tag="a" v-bind:target="target" v-on:click="redirect()">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class EssentialLink extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, default: '' }) readonly caption!: string;
  @Prop({ type: String, default: '#' }) readonly link!: string;
  @Prop({ type: String, default: '' }) readonly icon!: string;
  @Prop({ type: String, default: '_blank' }) readonly target!: string;

  private redirect() {
    if (this.target === '_self') {
      this.$router.push({ path: `/${this.link}` });
    }else{
      window.open(this.link, '_blank');
    }
  }
}
</script>
