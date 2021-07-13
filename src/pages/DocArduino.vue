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
          <li><a href="#dotnet"> Instalando Dotenv </a></li>
          <li><a href="#firebase"> Instalando Firebase </a></li>
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
      <q-card-section class="text-primary"> teste</q-card-section>
    </q-card>

    <q-card class="q-mt-md">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="node">
          Criando um projeto Node
        </div>
      </q-card-section>
      <q-card-section class="text-primary"> teste</q-card-section>
    </q-card>

    <q-card class="q-mt-md">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="johnny_five">
          Instalando Johnny Five JS
        </div>
      </q-card-section>
      <q-card-section class="text-primary"> teste</q-card-section>
    </q-card>

    <q-card class="q-mt-md">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="dotenv">
          Instalando Dotenv
        </div>
      </q-card-section>
      <q-card-section class="text-primary"> teste</q-card-section>
    </q-card>

    <q-card class="q-mt-md">
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h5 text-white" id="firebase">
          Instalando Firebase
        </div>
      </q-card-section>
      <q-card-section class="text-primary"> teste</q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class DocArduino extends Vue {}
</script>
