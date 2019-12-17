<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn 
          fab    
          x-small
          class="transparent"
          absolute    
          @click.native.stop="calculateSR"
          ></v-btn>
      </template>
      <span style="color:orange">Bottom Screen</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="700px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">SLIME TANK PROPERTIES</v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card>
              <v-flex>
                <span style="color:orange">Solid(t/h) : {{$store.getters.hydrocyclone_uf_solid}} </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">Water% : {{$store.getters.hydrocyclone_uf_water}} </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">SR : {{$store.getters.slimeTank2_SR}}  </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">SR (required) Max :  </span>
                <input v-model="slimeTank2_SRmax" @input="changeSRmax" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Required Water : {{$store.getters.slimeTank2_RequiredWater}} </span>
              </v-flex>   
              <v-flex>
                <span style="color:red">Water Addition(W3) : {{$store.getters.slimeTank2_W3}} </span>
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
    calculateSR() {
      let newValue = (100 * (parseFloat(this.$store.getters.hydrocyclone_uf_solid) / (parseFloat(this.$store.getters.hydrocyclone_uf_solid) + parseFloat(this.$store.getters.hydrocyclone_uf_water)))).toFixed(3)
      this.$store.commit("setX", {
        x: 'slimeTank2_SR',
        value: newValue
      });
      return this.dialog = true

    },

    changeSRmax(event) {
      this.$store.commit("setX", {
        x: 'slimeTank2_SRmax',
        value: event.target.value
      })
      this.calculateRequiredWater()
    },

    calculateRequiredWater() {
      let newValue = 100 * this.$store.getters.hydrocyclone_uf_solid / this.$store.getters.slimeTank2_SRmax
      this.$store.commit("setX", {
        x: 'slimeTank2_RequiredWater',
        value: newValue
      })
      this.calculateW3()
    },
    calculateW3() {
      let newValue = this.$store.getters.slimeTank2_RequiredWater - this.$store.getters.hydrocyclone_uf_water
      this.$store.commit("setX", {
        x: 'slimeTank2_W3',
        value: newValue
      })      
    }
  },
  computed: {
    ...mapGetters([
      "slimeTank2_SRmax"
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

