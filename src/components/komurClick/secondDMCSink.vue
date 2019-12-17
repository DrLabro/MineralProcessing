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
      <span style="color:orange">Second Overscreen Exit</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="600px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">SINK (DMC 2nd)</v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12"> 
              <v-card-title> Overscreen </v-card-title>
              <v-flex pa-5> 
                <v-flex>
                    <span style="color:orange">Solid Flow rate (t/h) : {{$store.getters.secondDMCsink_Solid_Flow_Rate_th}}  </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">Solid Flow rate (m3/h): {{$store.getters.secondDMCsink_Solid_Flow_Rate_m3t}} </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Flow rate (t/h): {{$store.getters.secondDMCsink_Medium_Flow_Rate_th}}  </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Flow rate (m3/h): {{$store.getters.secondDMCsink_Medium_Flow_Rate_m3h}} </span>
                </v-flex>           
                <v-flex>
                    <span style="color:orange">feed Flow rate (t/h): {{$store.getters.secondDMCsink_Feed_Flow_Rate_th}} </span>
                </v-flex>                         
                <v-flex>
                    <span style="color:orange">feed Flow rate (m3/h): {{$store.getters.secondDMCsink_Feed_Flow_Rate_m3h}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">Ash,%: {{$store.getters.secondDMCsink_Ash}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">Inlet pressure bar: {{$store.getters.secondDMCsink_Inlet_Pressure_Bar}}</span>
                    <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
                </v-flex>              
                <v-flex>
                    <span style="color:white">Coal Mass (Sample), kg: {{$store.getters.secondDMCsink_Coal_Mass}}</span>
                    <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:white">Coal density: {{$store.getters.secondDMCsink_Coal_Density}}</span>
                    <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:orange">Coal Volume (Sample): {{$store.getters.secondDMCsink_Coal_Volume}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">medium Mass (Sample), kg: {{$store.getters.secondDMCsink_Medium_Mass}}</span>
                    <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium density: {{$store.getters.secondDMCsink_Medium_Density}}</span>
                </v-flex>              
                <v-flex>
                    <span style="color:orange">medium Volume (Sample): {{$store.getters.secondDMCsink_Medium_Volume}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">MCR: {{$store.getters.secondDMCsink_MCR}}</span>
                </v-flex>
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

  },
  computed: {
    ...mapGetters([
    ])
  },
  data() {
    return {
      dialog: false,
      mediumProperties: false
    };
  }
};
</script>
