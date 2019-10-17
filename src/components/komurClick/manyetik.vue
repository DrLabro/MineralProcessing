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
          src="../../assets/manyetik.png"
        >
        </v-img>
        <v-card-title>Cihaz Bilgilerini Giriniz...</v-card-title>
            <v-flex>
              <span style="color:orange" >Manyetik --> </span>
              <input v-model="manyetik" @input="changemanyetik">
            </v-flex>                   
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
  export default {
   methods: {
      changemanyetik: function(event) {
      this.$store.commit('changemanyetik', event.target.value)
      }
    },
    computed: {
        ...mapGetters([
            'manyetik'
        ])
    },
    data () {
      return {
        dialog: false,
      }
    }
  }
</script>