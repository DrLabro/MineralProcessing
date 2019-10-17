<template>
  <v-card class="mx-auto" max-width="1500" max-height="1200">
    <v-card-text>
      <v-flex xs12>
        <div style="color:white" class="title font-weight-light">
        Calculation Area</div>
      </v-flex>
      <v-layout row>
        <v-flex xs3 v-if="getStatusSlamTanki()"> 
          <slamTankiCalculation/>
        </v-flex>
        <v-flex xs3 v-if="getStatusSpiral()"> 
          <spiralCalculation/>
        </v-flex>
        <v-flex xs3 v-if="getStatusSiklon()"> 
          <siklonCalculation/>
        </v-flex> 
        <v-flex xs3 v-if="getStatusManyetik()"> 
          <manyetikCalculation/>
        </v-flex>                              
      </v-layout>
      <v-layout row>
          <v-flex xs3 v-if="getStatusTikiner()">
            <tikinerCalculation />
          </v-flex>
          <v-flex xs3 v-if="getStatusVakumFiltre()">
            <vakumFiltreCalculation />
          </v-flex>
      </v-layout>       
    </v-card-text>
  </v-card>
</template>

<script>
import slamTankiCalculation from '../komurCalculation/slamTankiCalculation'
import spiralCalculation from '../komurCalculation/spiralCalculation'
import siklonCalculation from '../komurCalculation/siklonCalculation'
import manyetikCalculation from '../komurCalculation/manyetikCalculation'
import tikinerCalculation from '../komurCalculation/tikinerCalculation'
import vakumFiltreCalculation from '../komurCalculation/vakumfiltreCalculation'
import store from '../../store/store'
export default {
methods: {
    getStatusSlamTanki: function getStatusSlamTanki() {
      if (store.getters.slamtanki.length !== 0 ) 
      {
        return true
      } 
    },
    getStatusSpiral: function getStatusSpiral() {
      if (store.getters.spiral.length !== 0 ) 
      {
        return true
      } 
    },
    getStatusSiklon: function getStatusSiklon() {
      if (store.getters.siklon.length !== 0 ) 
      {
        return true
      } 
    },
    getStatusManyetik: function getStatusManyetik() {
      if (store.getters.manyetik.length !== 0 ) 
      {
        return true
      } 
    },
    getStatusTikiner: function getStatusTikiner() {
      if (store.getters.tikiner.length !== 0 ) 
      {
        return true
      } 
    },
    getStatusVakumFiltre: function getStatusVakumFiltre() {
      if (store.getters.vakumFiltre.length !== 0 ) 
      {
        return true
      } 
    }                     
  },
  components: {
    slamTankiCalculation,
    spiralCalculation,
    siklonCalculation,
    manyetikCalculation,
    tikinerCalculation,
    vakumFiltreCalculation
  }
}
</script>
