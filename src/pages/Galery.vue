<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        padding
        height="800px"
        control-type="push"
        control-color="primary"
        class="shadow-2 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap"> 
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="images/a1.jpg" /> 
            <q-img class="rounded-borders col-6 full-height" src="images/a2.jpg" />
          </div>
        </q-carousel-slide>
         <q-carousel-slide :name="2" class="column no-wrap"> 
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="images/a3.jpg" /> 
            <q-img class="rounded-borders col-6 full-height" src="images/a4.jpg" />
          </div>
        </q-carousel-slide>
         <q-carousel-slide :name="3" class="column no-wrap"> 
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="images/a5.jpg" /> 
            <q-img class="rounded-borders col-6 full-height" src="images/a6.jpg" />
          </div>
        </q-carousel-slide>
         <q-carousel-slide :name="4" class="column no-wrap"> 
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="images/a7.jpg" /> 
            <q-img class="rounded-borders col-6 full-height" src="images/a8.jpg" />
          </div>
        </q-carousel-slide>        
      </q-carousel>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Galery extends Vue {
  private slide = 1;
}
</script>
