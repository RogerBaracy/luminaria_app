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
            <a href="#dotnet" class="text-primary"> Instalando Dotenv </a>
          </li>
          <li>
            <a href="#firebase" class="text-primary"> Instalando Firebase </a>
          </li>
          <li>
            <a href="#referencias" class="text-primary"> Referências </a>
          </li>
        </ol>
      </q-card-section>
    </q-card>
    <q-card class="q-mt-md">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="introducao">
          Introdução
        </div>
      </q-card-section>
      <q-card-section class="text-primary">
        Esse tópico da documentação se refere a aplicação web, <br>
        nessa aplicação enviaremos comandos de voz e ações dos botões para o firebase
      </q-card-section>
    </q-card>
    <q-card class="q-mt-md">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="quasar_cli">
          Instalando Quasar/cli
        </div>
      </q-card-section>
      <q-card-section class="text-primary">
        teste
      </q-card-section>
    </q-card>
    <q-card class="q-mt-md">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="quasar">
          Criando um projeto com Quasar Framework
        </div>
      </q-card-section>
      <q-card-section class="text-primary">
        teste
      </q-card-section>
    </q-card>
    <q-card class="q-mt-md">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="dotenv">
          Instalando Dotenv
        </div>
      </q-card-section>
      <q-card-section class="text-primary">
        teste
      </q-card-section>
    </q-card>
    <q-card class="q-mt-md">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="firebase">
          Instalando Firebase
        </div>
      </q-card-section>
      <q-card-section class="text-primary">
        teste
      </q-card-section>
    </q-card>
    <q-card class="q-mt-md">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="referencias">
          Referências
        </div>
      </q-card-section>
      <q-card-section class="text-primary">
        teste
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class DocApp extends Vue {}
</script>
