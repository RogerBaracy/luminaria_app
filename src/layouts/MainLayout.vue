<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Luminária App
        </q-toolbar-title>
        <div class="q-mr-md">
          <q-toggle
            data-cy="alter-theme"
            :label="$t('enable_dark')"
            color="black"
            v-bind:false-value="false"
            v-bind:true-value="true"
            v-model="isDark"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8"> </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
  {
    title: 'Home',
    caption: 'Página Inicial',
    icon: 'home',
    target: '_self',
    link: 'home'
  },
  {
    title: 'Doc Firebase: 1º Passo',
    caption: 'Documentação Firebase',
    icon: 'school',
    target: '_self',
    link: 'documentation/firebase'
  },
  {
    title: 'Doc App: 2º Passo',
    caption: 'Documentação Luminária App',
    icon: 'school',
    target: '_self',
    link: 'documentation/app'
  },
  {
    title: 'Doc Arduíno: 3º Passo',
    caption: 'Documentação Luminária Arduíno',
    icon: 'school',
    target: '_self',
    link: 'documentation/arduino'
  },
  {
    title: 'Github App',
    caption: 'Github Luminária App',
    icon: 'code',
    target: '_blank',
    link: 'https://github.com/RogerBaracy/luminaria_app'
  },
  {
    title: 'Github Arduíno',
    caption: 'Github Luminária Arduíno',
    icon: 'code',
    target: '_blank',
    link: 'https://github.com/RogerBaracy/luminaria_arduino'
  }
];

import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  private leftDrawerOpen = false;
  private essentialLinks = linksData;
  private isDark = true;
  private mounted() {
    this.$q.dark.set(true);
  }
  @Watch('isDark')
  changeIsDark(newValue: boolean) {
    this.$q.dark.set(newValue);
  }
}
</script>
