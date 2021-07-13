<template>
  <q-page padding>
    <q-card>
      <q-card-section
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="text-h4 text-white">
          Documentação Firebase
        </div>
      </q-card-section>
      <q-card-section>
        <ol>
          <li><a href="#introducao" class="text-primary">Introdução </a></li>          
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
      </q-card-section>
    </q-card>
    
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class DocFirebase extends Vue {}
</script>
