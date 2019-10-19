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
          src="../../assets/tikiner.png"
        >
        </v-img>
        <v-card-title>Cihaz Bilgilerini Giriniz...</v-card-title>
            <v-flex>
              <span style="color:orange" >Tikiner --> </span>
              <input v-model="tikiner" @input="changetikiner">
            </v-flex>                   
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
   methods: {
      changetikiner: function(event) {
      this.$store.commit('changetikiner', event.target.value)
      }
    },
    computed: {
        ...mapGetters([
            'tikiner'
        ])
    },
    data () {
      return {
        dialog: false,
      }
    }
  }
</script>