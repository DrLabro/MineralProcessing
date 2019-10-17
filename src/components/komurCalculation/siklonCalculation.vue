<template>
      <v-card class="grey">
      <p
      class="font-weight-black"
      > 
      Cyclone Calculation</p>
     <div
     class="font-weight-black"
     >
     <var>Cyclone Hesaplamasi Buraya Gelecek</var>
     </div>
     <div
     class="font-weight-black"
     >
     <v-divider></v-divider>
     <var> Value: </var>  <var> {{ total }} </var>
     </div>
      </v-card>
</template>

<script>
import store from '../../store/store'
export default {
computed: {
  total () {
    return store.getters.siklon
  }
  },
}
</script>