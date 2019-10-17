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
          height="300px"
          src="../../assets/vakumFiltre.png"
        >
        </v-img>
        <v-card-title>Cihaz Bilgilerini Giriniz...</v-card-title>
            <v-flex>
              <span style="color:orange" >Vakum Filtre --> </span>
              <input v-model="vakumFiltre" @input="changevakumFiltre">
            </v-flex>                   
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
  export default {
   methods: {
      changevakumFiltre: function(event) {
      this.$store.commit('changevakumFiltre', event.target.value)
      }
    },
    computed: {
        ...mapGetters([
            'vakumFiltre'
        ])
    },
    data () {
      return {
        dialog: false,
      }
    }
  }
</script>