<template>
  <v-card
    class="mx-auto"
    max-width="400"
    outlined="true"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      src="../../assets/tank.png"      
    >
    </v-img>
    <v-card-title>
      <span style="color:white" class="display-1 font-weight-light">Şlam Tankı</span>
    </v-card-title>
    <v-card-text class="caption font-weight-bold">
      <v-row>
      <span style="color:orange" class="font-weight-light"> Şlam Tanki:  </span>
      <span style="color:white" class="font-weight-bold"><v-spacer></v-spacer> {{ $store.getters.slamtanki }} mm </span>
      </v-row>
    </v-card-text>
  </v-card>
</template>