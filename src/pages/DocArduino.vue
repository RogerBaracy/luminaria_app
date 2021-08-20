<template>
  <q-page padding>
    <q-card>
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h4 text-white">
          Documentação Arduíno
        </div>
      </q-card-section>
      <q-card-section>
        <ol>
          <li><a href="#introducao">Introdução</a></li>
          <li><a href="#node">Criando um projeto Node</a></li>
          <li><a href="#johnny_five"> Instalando Johnny Five JS </a></li>
          <li><a href="#dotenv"> Instalando Dotenv </a></li>
          <li><a href="#firebase"> Instalando Firebase </a></li>
          <li>
            <a href="#config_env" class="text-primary"> Configurando o acesso ao Banco de Dados </a>
          </li>
          <li>
            <a href="#ide" class="text-primary"> Configurando a IDE do Arduíno </a>
          </li>
          <li>
            <a href="#code" class="text-primary"> Explicando o código </a>
          </li>

          
        </ol>
      </q-card-section>
    </q-card>
    <CardItem :propData="data"/>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CardItem from '../components/documentation/CardItems.vue';
import data from './data/docArduino';
@Component({
  components: {
    CardItem
  }
})
export default class DocArduino extends Vue {
  private data = data;
}
</script>
