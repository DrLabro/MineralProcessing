<template>
  <v-card
    class="mx-auto"
    max-width="1500"
    max-height="1200"
  >
    <v-card-text>
      <div
      style="color:orange" class="title font-weight-light"
      >
      Calculation Area</div>
      <p
      lass="font-weight-light"
      > 
      Cyclone Calculation ( Örnek ) </p>
     <div
     class="font-weight-black"
     >
     <var>toplam</var> = <var> ( </var> <var>vortex</var> * <var>spigot</var> <var> ) </var> <var> / </var> <var> other </var>
     </div>
     <div
     class="font-weight-black"
     >
     <v-divider></v-divider>
     <var> toplam : </var>  <var> {{ total }} </var>
     </div>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
import store from '../../store/store'
export default {
computed: {
  total () {
    return (store.getters.firstname * store.getters.lastname) / store.getters.email

  }
  },
components: {
  store
}
}
</script>