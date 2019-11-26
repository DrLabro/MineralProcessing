<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn 
          fab    
          x-small
          class="transparent"
          absolute    
          @click.native.stop="changeWaterSR" 
          ></v-btn>
      </template>
      <span style="color:orange">Bottom Screen</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="700px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">SCREEN PROPERTIES</v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card>
              <v-flex>
                <span style="color:orange">Solid(t/h): {{$store.getters.elekcikis_solid}}  </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">SR% :  </span>
                <input v-model="elekcikis_SR" @input="changeSR" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">water (SR) : {{$store.getters.elekcikis_waterSR}} </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">u :  </span>
                <input v-model="elekcikis_u" @input="changeU" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:cyan">u' : {{$store.getters.elekcikis_u_ust}} </span>
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
    changeSolid(event) {
      let newValue = this.$store.getters.elekust_underScreen_solid - this.$store.getters.eleksagalt_solid
      this.$store.commit("setX", {
        x: 'elekcikis_solid',
        value: newValue.toFixed(3)
      });
    },
    changeSR(event) {
      this.$store.commit("setX", {
        x: 'elekcikis_SR',
        value: event.target.value
      });
      this.changeUUstu()
    },
    changeWaterSR() {
      let newWaterSR = this.$store.getters.elekust_underScreen_Water_SR - this.$store.getters.eleksagalt_water_moist
      this.$store.commit("setX", {
        x: 'elekcikis_waterSR',
        value: newWaterSR.toFixed(3)
      });
      //this.calculateValues()
      this.changeSolid()
      return this.dialog = true;
    },
    changeU(event) {
      this.$store.commit("setX", {
        x: 'elekcikis_u',
        value: event.target.value
      });
    },
    changeUUstu() {
      let newUUstu = ( 100 - this.elekcikis_SR ) / this.elekcikis_SR
      this.$store.commit("setX", {
        x: 'elekcikis_u_ust',
        value: newUUstu.toFixed(3)
      });
    },
    calculateValues() {
      if (this.$store.getters.solid.length != 0)
      {
        let x = this.dataFromApi.data.result[0]
        let y =  this.dataFromApi.data.result[1]

        this.$store.commit("setX", {
          x: 'elekust_solid',
          value: x.toFixed(3)
        });

        this.$store.commit("setX", {
          x: 'eleksagalt_solid',
          value: y.toFixed(3)
        });      
      }
    }
  },
  computed: {
    ...mapGetters([
    'elekcikis_solid',
    'elekcikis_moist',
    'elekcikis_water_moist',
    'elekcikis_u',
    'elekcikis_u_ustu',
    ])
  },
  data() {
    return {
      dialog: false,
      e1: 0,
      dataFromApi: []
    };
  },
  mounted() {
    axios
    .get("http://localhost:6001/03c91e2d0e8b5f4ad25c3f254eb37135/?solid=250&moist=25&water=325&moist2=17.6&oustu=0.258&uustu=5.757")
    .then( response => (this.dataFromApi = response))
  }  
};
</script>

