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
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
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
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    caption: 'Página Inicial',
    icon: 'home',
    target:'_self',
    link: 'home'
  },
  {
    title: 'Doc App',
    caption: 'Documentação Luminária App',
    icon: 'school',
    target:'_self',
    link: 'documentation/app'
  },
  {
    title: 'Docs Arduíno',
    caption: 'Documentação Luminária Arduíno',
    icon: 'school',
    target:'_self',
    link: 'documentation/arduino'
  },
  {
    title: 'Github App',
    caption: 'Github Luminária App',
    icon: 'code',
    target:'_blank',
    link: 'https://github.com/RogerBaracy/luminaria_app'
  },
  {
    title: 'Github Arduíno',
    caption: 'Github Luminária Arduíno',
    icon: 'code',
    target:'_blank',
    link: 'https://github.com/RogerBaracy/luminaria_arduino'
  },
];

import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = linksData;
}
</script>
