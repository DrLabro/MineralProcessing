<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn 
          fab    
          x-small
          class="transparent"
          absolute    
          @click.native.stop="dialog = true"  
          ></v-btn>
      </template>
      <span style="color:orange">Bottom Screen</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="700px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">COAL SPIRAL FEED</v-stepper-step>
          <v-divider></v-divider>        
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card>
              <v-flex>
                <span style="color:orange">Solid(t/h) : {{$store.getters.hydrocyclone_uf_solid}}  </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">Water(t/h) : {{$store.getters.slimeTank2_RequiredWater}} </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">SR : {{ $store.getters.slimeTank2_SR }} </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">Feed Coal Ash :  </span>
                <input v-model="coal_feed_ash" @input="changeAsh" placeholder="doldur" />
              </v-flex>                                                     
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </v-layout>
</template>

<script>
import store from "../../store/store";
import { mapGetters } from "vuex";
export default {
  methods: {
    changeAsh(event) {
      this.$store.commit("setX", {
        x: 'coal_feed_ash',
        value: event.target.value
      });
    }
  },
  computed: {
    ...mapGetters([
      "coal_feed_ash"
    ])
  },
  data() {
    return {
      dialog: false,
      e1: 0
    };
  }
};
</script>

