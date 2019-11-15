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
                <span style="color:orange">Solid(t/h):  </span>
                <input v-model="elekalt_solid" @input="changeSolid" placeholder="doldur" />
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
                <span style="color:orange">u' : {{$store.getters.elekcikis_u_ust}} </span>
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
    changeSolid(event) {
      this.$store.commit("setX", {
        x: 'elekcikis_solid',
        value: event.target.value
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
        value: newWaterSR
      });
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
        value: newUUstu
      });
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
      e1: 0
    };
  }
};
</script>

