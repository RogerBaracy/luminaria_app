<template>
  <q-page padding>
    <h5>Documentação App</h5>
    <ol>
      <li><a href="#introducao">Introdução</a>   </li>
      <li><a href="#quasar_cli">Instalando Quasar/cli</a></li>
      <li><a href="#quasar">Criando um projeto com Quasar Framework</a></li>
      <li><a href="#dotnet"> Instalando Dotenv </a></li>
      <li><a href="#firebase"> Instalando Firebase </a></li>
    </ol>
    <h5 class="text-primary" id="introducao">
      Introdução
    </h5>

    <h5 class="text-primary" id="quasar_cli">
      Instalando Quasar/cli
    </h5>

    <h5 class="text-primary" id="quasar">
      Criando um projeto com Quasar Framework
    </h5>

    <h5 class="text-primary" id="dotnet">
      Instalando Dotenv
    </h5>
    
    <h5 class="text-primary" id="firebase">
      Instalando Firebase
    </h5>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class DocApp extends Vue {}
</script>
