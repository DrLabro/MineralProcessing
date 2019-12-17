<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn 
          fab    
          x-small
          class="transparent"
          absolute    
          @click.native.stop="changeSolid"
          ></v-btn>
      </template>
      <span style="color:orange">First Overscreen Exit</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="700px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">SCREEN PROPERTIES</v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12"> 
              <v-card-title> Overscreen </v-card-title>
              <v-flex>
                <span style="color:orange">Solid(t/h): {{$store.getters.elekust_solid}}  </span>
              </v-flex>
              <v-flex>
                <span style="color:cyan">Moist%:  </span>
                <input v-model="elekust_moist" @input="changeMoist" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">water(moist): {{$store.getters.elekust_water_moist}}  </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">o:  </span>
                <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
              </v-flex>           
              <v-flex>
                <span style="color:orange">o': {{$store.getters.elekust_o_ustu}} </span>
              </v-flex>                         
            </v-card>
            <v-card class="mb-12">
              <v-card-title> Underscreen </v-card-title> 
              <v-flex>
                <span style="color:orange">Solid(t/h): {{$store.getters.elekust_underScreen_solid}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">SR%: {{$store.getters.elekust_underScreen_SR}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">Water(SR): {{$store.getters.elekust_underScreen_Water_SR}}</span>
              </v-flex>              
              <v-flex>
                <span style="color:orange">u: {{$store.getters.elekust_underScreen_U}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">u': {{$store.getters.elekust_underScreen_UUstu}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">f<sub>2</sub>: {{$store.getters.elekust_f}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">f<sub>2</sub>': {{$store.getters.elekust_U}}</span>
              </v-flex>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </v-layout>
</template>

<script>
//import store from "../../store/store";
import { mapGetters } from "vuex";

export default {
  methods: {
    
    changeSolid() {
      this.calculateWaterMoist()
      this.calculatedUnderScreenSolid()
      this.dialog = true
    },

    changeMoist(event) {
      this.$store.commit("setX", {
        x: 'elekust_moist',
        value: event.target.value
      });  
      this.calculateWaterMoist()
      this.calculateOUstu()       
    },

    changeO(event) {
      this.$store.commit("setX", {
        x: 'elekust_o',
        value: event.target.value
      });
    },

    calculateWaterMoist() {
     let calculatedWaterMoist = (this.elekust_solid * this.elekust_moist / 100 )
     this.$store.commit("setX", {
       x: 'elekust_water_moist',
       value: calculatedWaterMoist
     });
    },

    calculateOUstu() {
      let calculatedOUstu = this.elekust_moist / (100 - this.elekust_moist)
      this.$store.commit("setX", {
        x: 'elekust_o_ustu',
        value: calculatedOUstu
      });
    },

    calculatedUnderScreenSolid() {
      let newUnderScreenSolid = (this.$store.getters.solid - this.elekust_solid)
      this.$store.commit("setX", {
        x: 'elekust_underScreen_solid',
        value: newUnderScreenSolid
      });
      this.calculatedUnderScreenWaterSR()
      this.calculatedUnderScreenSR()
      this.calculatedUnderScreenU()
      this.calculatedUnderScreenUUstu()
    },

    calculatedUnderScreenSR() {
      let newUnderScreenSR = (100 * this.$store.getters.elekust_underScreen_solid) / (this.$store.getters.elekust_underScreen_solid + this.$store.getters.elekust_underScreen_Water_SR)
      this.$store.commit("setX", {
        x: 'elekust_underScreen_SR',
        value: newUnderScreenSR
      })
    },

    calculatedUnderScreenWaterSR() {
      let newUnderScreenWaterSR = parseFloat(this.$store.getters.waterMoist) + parseFloat(this.$store.getters.water) - parseFloat(this.elekust_water_moist)
      this.$store.commit("setX", {
        x: 'elekust_underScreen_Water_SR',
        value: newUnderScreenWaterSR
      });
    },

    calculatedUnderScreenU() {
      let newUnderScreenU = (this.$store.getters.solid * this.$store.getters.besleme_f - this.elekust_solid * this.elekust_o) / this.$store.getters.elekust_underScreen_solid
      this.$store.commit("setX", {
        x: 'elekust_underScreen_U',
        value: newUnderScreenU
      });      
    },

    calculatedUnderScreenUUstu() {
      let newUnderScreenUUstu = ((this.$store.getters.solid * this.$store.getters.besleme_f_ustu) - (this.elekust_solid * this.elekust_o_ustu)) / this.$store.getters.elekust_underScreen_solid
      this.$store.commit("setX", {
        x: 'elekust_underScreen_UUstu',
        value: newUnderScreenUUstu
      });
    },

    calculatef2() {
      
    }
  },
  computed: {
    ...mapGetters([
    'elekust_solid',
    'elekust_moist',
    'elekust_water_moist',
    'elekust_o',
    'elekust_o_ustu'
    ])
  },
  data() {
    return {
      dialog: false,
    };
  }
};
</script>
