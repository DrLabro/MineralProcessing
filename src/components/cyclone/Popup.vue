<template>
  <v-layout row justify-center>
    <v-tooltip top>
        <template v-slot:activator="{ on }">
            <v-btn depressed class="transparent" v-on="on" @click="dialog = true"></v-btn>
        </template>
        <span style="color:orange">cyclone</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="290">
        <v-form>
          <v-card>
              Vortex Çapı: <input @input="changeName" name="firstname"> 
              Spigot Çapı: <input @input="changeLast" name="lastname">
              Other Çapı: <input @input="changeEmail" name="email">
          </v-card>
        </v-form>
    </v-dialog>
</v-layout>
</template>

<script>
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
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

