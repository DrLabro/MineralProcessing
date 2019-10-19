-<template>
  <v-layout row justify-center>
            <v-btn
            fab
            x-small
            class="transparent"
            absolute
            v-on="on" 
            @click="dialog = true"
            >
            </v-btn>
    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-img
          class="white--text align-end"
          height="350px"
          src="../../assets/siklon.png"
        >
        </v-img>
        <v-card-title>Cihaz Bilgilerini Giriniz...</v-card-title>
            <v-flex>
              <span style="color:orange" >Hidrosiklon --> </span>
              <input v-model="siklon" @input="changesiklon">
            </v-flex>                   
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
   methods: {
      changesiklon: function(event) {
      this.$store.commit('changesiklon', event.target.value)
      }
    },
    computed: {
        ...mapGetters([
            'siklon'
        ])
    },
    data () {
      return {
        dialog: false,
      }
    }
  }
</script>