<template>
  <v-card
    class="mx-auto"
    max-width="400"
    outlined="true"
  >
    <v-card-title>
      <span style="color:orange" class="display-1 font-weight-light">Hydrocyclone</span>
    </v-card-title>
    <v-card-text class="headline font-weight-bold">
      <v-row>
      <span style="color:orange" class="title font-weight-light"> Vortex Çapı: </span>
      <span style="color:white" class="title font-weight-bold"><v-spacer></v-spacer> {{ $store.getters.firstname }} </span>
      </v-row>
      <v-row>
      <span style="color:orange" class="title font-weight-light"> Spigot Çapı:</span>
      <span style="color:white" class="title font-weight-bold"><v-spacer></v-spacer> {{ $store.getters.lastname }} </span>
      </v-row>
      <v-row>
      <span style="color:orange" class="title font-weight-light"> Other Çapı:</span>
      <span style="color:white" class="title font-weight-bold"><v-spacer></v-spacer> {{ $store.getters.email }} </span>
      </v-row>
    </v-card-text>
  </v-card>
</template>