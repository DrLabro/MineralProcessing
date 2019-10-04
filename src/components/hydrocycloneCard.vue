<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"      
        height="200px"  
    ></v-img>
    <v-card-title>
      <p>Hydrocyclone Separator</p>
    </v-card-title>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
          Vortex Çapı : {{ $store.getters.firstname }}
          <v-divider> </v-divider>
          Ortex Çapı : {{ $store.getters.lastname }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>