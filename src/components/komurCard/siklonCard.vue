<template>
  <v-card
    class="mx-auto"
    max-width="400"
    outlined="true"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      src="http://webshell.tufekcioglu.ideakup.com/upload/xlarge/0_hidrosiklon_YxKd5.png"      
    >
    </v-img>
    <v-card-title>
      <span style="color:white" class="display-1 font-weight-light">Hidrosiklon</span>
    </v-card-title>
    <v-card-text class="caption font-weight-bold">
      <v-row>
      <span style="color:orange" class="font-weight-light"> Şlam Tanki:  </span>
      <span style="color:white" class="font-weight-bold"><v-spacer></v-spacer> {{ $store.getters.siklon }} mm </span>
      </v-row>
    </v-card-text>
  </v-card>
</template>