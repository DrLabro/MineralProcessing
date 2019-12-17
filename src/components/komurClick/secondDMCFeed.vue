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
          <v-stepper-step :complete="e1 > 1" step="1">FEED (DMC 2nd)</v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12"> 
              <v-card-title> Feed DMC ( 2nd ) </v-card-title>
              <v-flex pa-5> 
                <v-flex>
                    <span style="color:orange">Solid Flow rate (t/h) : {{$store.getters.secondDMCfeed_Solid_Flow_Rate_th}}  </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">Solid Flow rate (m3/h): {{$store.getters.secondDMCfeed_Solid_Flow_Rate_m3t}} </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Flow rate (t/h): {{$store.getters.secondDMCfeed_Medium_Flow_Rate_th}}  </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Flow rate (m3/h): {{$store.getters.secondDMCfeed_Medium_Flow_Rate_m3h}} </span>
                </v-flex>           
                <v-flex>
                    <span style="color:orange">feed Flow rate (t/h): {{$store.getters.secondDMCfeed_Feed_Flow_Rate_th}} </span>
                </v-flex>                         
                <v-flex>
                    <span style="color:orange">feed Flow rate (m3/h): {{$store.getters.secondDMCfeed_Feed_Flow_Rate_m3h}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">Ash,%: {{$store.getters.secondDMCfeed_Ash}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">Inlet pressure bar: {{$store.getters.secondDMCfeed_Inlet_Pressure_Bar}}</span>
                    <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
                </v-flex>              
                <v-flex>
                    <span style="color:white">Coal Mass (Sample), kg: {{$store.getters.secondDMCfeed_Coal_Mass}}</span>
                    <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:white">Coal density: {{$store.getters.secondDMCfeed_Coal_Density}}</span>
                    <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:orange">Coal Volume (Sample): {{$store.getters.secondDMCfeed_Coal_Volume}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">medium Mass (Sample), kg: {{$store.getters.secondDMCfeed_Medium_Mass}}</span>
                    <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium density: {{$store.getters.secondDMCfeed_Medium_Density}}</span>
                </v-flex>              
                <v-flex>
                    <span style="color:orange">medium Volume (Sample): {{$store.getters.secondDMCfeed_Medium_Volume}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">MCR: {{$store.getters.secondDMCfeed_MCR}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">H, cm: {{$store.getters.secondDMCfeed_H_cm}}</span>
                    <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:orange">P, inlet pressure calculated: {{$store.getters.secondDMCfeed_Inlet_Pressure_Calculated}}</span>
                    <span style="color:orange">{{$store.getters.secondDMCfeed_Inlet_Pressure_Calculated2}}</span>
                </v-flex>  
              </v-flex>            
            </v-card>
            <v-row>
                <div class="text-center">
                    <v-dialog
                    width="500"
                    >
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on">
                        DMC 1ST Properties
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title> DMC 1ST Properties </v-card-title>
                        <v-flex pa-6>
                            <v-flex>
                                <span style="color:white">SGm: {{$store.getters.secondDMCfeed_MCR}}</span>
                                <input v-model="elekust_o" @input="changeO" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">SGum: {{$store.getters.secondDMCfeed_MCR}}</span>
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">SGom: {{$store.getters.secondDMCfeed_MCR}}</span>
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">SGum-SGom: {{$store.getters.secondDMCfeed_MCR}}</span>
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">(SGm-Sgom)/SGm: {{$store.getters.secondDMCfeed_MCR}}</span>
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">Top Size (Feed): {{$store.getters.secondDMCfeed_MCR}}</span>
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">Bottom Size (Feed): {{$store.getters.secondDMCfeed_MCR}}</span>
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">Dmean: {{$store.getters.secondDMCfeed_MCR}}</span>
                            </v-flex>  
                            <v-flex>
                                <span style="color:orange">RD50: {{$store.getters.secondDMCfeed_MCR}}</span>
                            </v-flex>                              
                        </v-flex>                                                                                                                                                                                                  
                    </v-card>
                    </v-dialog>
                </div>
            </v-row>
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


