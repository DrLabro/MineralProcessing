<template>
  <v-card
    class="mx-auto"
    max-width="400"
    outlined="true"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      src="../../assets/spiral.png"      
    >
    </v-img>
    <v-card-title>
      <span style="color:white" class="display-1 font-weight-light">Spiral Ayırıcı</span>
    </v-card-title>
    <v-card-text class="caption font-weight-bold">
      <v-row>
      <span style="color:orange" class="font-weight-light"> Spiral:  </span>
      <span style="color:white" class="font-weight-bold"><v-spacer></v-spacer> {{ $store.getters.spiral }} mm </span>
      </v-row>
    </v-card-text>
  </v-card>
</template>