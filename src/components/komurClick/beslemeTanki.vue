<template>
  <v-layout row justify-center>
    <v-tooltip top>
        <template v-slot:activator="{ on }">
            <v-btn
            fab
            x-small
            class="transparent"
            absolute
            v-on="on" 
            @click="dialog = true"
            >
            </v-btn>
        </template>
        <span style="color:orange">BESLEME TANKI</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="290">
        <v-form>
          <v-card>
              Vortex Çapı: <input v-model="firstname" @input="changeName" name="firstname"> 
              Spigot Çapı:  <input v-model="lastname" @input="changeLast" name="lastname">
              Other Çapı: <input v-model="email" @input="changeEmail" name="email">
          </v-card>
        </v-form>
    </v-dialog>
</v-layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
  export default {
    methods: {
      changeName: function(event) {
      this.$store.commit('changeName', event.target.value)
      },
      changeLast: function(event) {
        this.$store.commit('changeLast', event.target.value)
      },
      changeEmail: function(event) {
      this.$store.commit('changeEmail', event.target.value)
      }
    },
    computed: {
        ...mapGetters([
            'firstname',
            'lastname',
            'email'
        ])
    },
    data () {
      return {
        dialog: false,
      }
    },
    mapGetters
  }
</script>

