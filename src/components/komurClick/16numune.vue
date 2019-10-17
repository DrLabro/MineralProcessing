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
        <span style="color:orange">Numune Al (16)</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="290">
        <v-form>
          <v-card>
            NUMUNE AL
          </v-card>
        </v-form>
    </v-dialog>
</v-layout>
</template>

<script>
  export default {
    methods: {
    },
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

