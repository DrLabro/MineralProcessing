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
                <span style="color:orange">Solid(t/h) : {{$store.getters.elekcikis_solid}}  </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">Water% : {{$store.getters.elekcikis_waterSR}} </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">SR : {{$store.getters.slimeTank_SR}}  </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">SR (required) Max :  </span>
                <input v-model="todolist" @input="changeSRmax" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Required Water : {{$store.getters.slimeTank_requiredWater}}  </span>
              </v-flex>   
              <v-flex>
                <span style="color:red">Water Addition(W2) : {{$store.getters.slimeTank_WaterAddition}}  </span>
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
import axios from "axios";
export default {
  methods: {
    changeSRmax() {
      this.$store.commit("setX", {
        x: 'slimeTank_SRmax',
        value: event.target.value
      });
      this.calculateRequiredWater()
      this.calculateWaterAddition()
    },
    calculateRequiredWater() {
      let newValue = 100 * this.$store.getters.elekcikis_solid / this.$store.getters.slimeTank_SRmax
      this.$store.commit("setX", {
        x: "slimeTank_requiredWater",
        value: newValue.toFixed(3)
      });
    },
    calculateSR() {
      let newValue = 100 * this.$store.getters.elekcikis_solid / ( parseFloat(this.$store.getters.elekcikis_solid) + parseFloat(this.$store.getters.elekcikis_waterSR) )
      this.$store.commit("setX", {
        x: "slimeTank_SR",
        value: newValue.toFixed(3)
      })
      this.calculateWaterAddition()
      return this.dialog = true
    },
    calculateWaterAddition() {
      let newValue = ( this.$store.getters.slimeTank_requiredWater - this.$store.getters.elekcikis_waterSR )
      this.$store.commit("setX", {
        x: "slimeTank_WaterAddition",
        value: newValue.toFixed(3)
      })
    }
  },
  computed: {
    ...mapGetters([
    'slimeTank_SR',
    'slimeTank_SRmax',
    'slimeTank_requiredWater',
    'slimeTank_WaterAddition'
])
  },
  data() {
    return {
      dialog: false,
      e1: 0,
      todolist: []
    };
  },
};
</script>

