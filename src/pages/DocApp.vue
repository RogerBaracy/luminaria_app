<template>
  <q-page padding>
    <q-card>
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h4 text-white">
          Documentação App
        </div>
      </q-card-section>
      <q-card-section>
        <ol>
          <li><a href="#introducao" class="text-primary">Introdução </a></li>
          <li>
            <a href="#quasar_cli" class="text-primary"
              >Instalando Quasar/cli
            </a>
          </li>
          <li>
            <a href="#quasar" class="text-primary"
              >Criando um projeto com Quasar Framework
            </a>
          </li>
          <li>
            <a href="#dotenv" class="text-primary"> Instalando Dotenv </a>
          </li>
          <li>
            <a href="#firebase" class="text-primary"> Instalando Firebase </a>
          </li>
          <li>
            <a href="#config_env" class="text-primary"> Configurando o acesso ao Banco de Dados </a>
          </li>
          <li>
            <a href="#codigo" class="text-primary"> Explicando o código </a>
          </li>
          <li>
            <a href="#referencias" class="text-primary"> Referências </a>
          </li>
        </ol>
      </q-card-section>
    </q-card>
    <CardItem v-bind:propData="data" />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CardItem from '../components/documentation/CardItems.vue';
import data from './data/docApp';
@Component({
  components:{
    CardItem
  }
})
export default class DocApp extends Vue {
  private data = data;
}
</script>
