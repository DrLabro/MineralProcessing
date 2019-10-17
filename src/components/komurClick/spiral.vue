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
          src="../../assets/spiral.png"
        >
        </v-img>
        <v-card-title>Cihaz Bilgilerini Giriniz...</v-card-title>
            <v-flex>
              <span style="color:orange" >Spiral --> </span>
              <input v-model="spiral" @input="changespiral">
            </v-flex>                   
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
  export default {
   methods: {
      changespiral: function(event) {
      this.$store.commit('changespiral', event.target.value)
      }
    },
    computed: {
        ...mapGetters([
            'spiral'
        ])
    },
    data () {
      return {
        dialog: false,
      }
    }
  }
</script>