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
      <span style="color:orange">First Overscreen Exit</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="600px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">FLOAT (DMC 1st)</v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12"> 
              <v-flex pa-5> 
                <v-flex>
                    <v-tooltip right>
                      <template v-slot:activator="{ on }">
                        <span v-on="on" style="color:orange">Solid Flow rate (t/h) : {{$store.getters.firstDMCfloat_Solid_Flow_Rate_th}}  </span>
                      </template>
                        <span >Needed sink and float "ash" value</span>
                    </v-tooltip>                  
                </v-flex>
                <v-flex>
                    <span style="color:orange">Solid Flow rate (m3/h): {{$store.getters.firstDMCfloat_Solid_Flow_Rate_m3t}} </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Flow rate (t/h): {{$store.getters.firstDMCfloat_Medium_Flow_Rate_th}}  </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Flow rate (m3/h): {{$store.getters.firstDMCfloat_Medium_Flow_Rate_m3h}} </span>
                </v-flex>           
                <v-flex>
                    <span style="color:orange">feed Flow rate (t/h): {{$store.getters.firstDMCfloat_Feed_Flow_Rate_th}} </span>
                </v-flex>                         
                <v-flex>
                    <span style="color:orange">feed Flow rate (m3/h): {{$store.getters.firstDMCfloat_Feed_Flow_Rate_m3h}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">Ash,%: </span>
                    <input v-model="$store.getters.firstDMCfloat_Ash" @input="getAsh" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:white">Inlet pressure bar:</span>
                    <input v-model="$store.getters.firstDMCfloat_Inlet_Pressure_Bar" @input="getInletPressure" placeholder="doldur" />
                </v-flex>              
                <v-flex>
                    <span style="color:white">Coal Mass (Sample), kg:</span>
                    <input v-model="$store.getters.firstDMCfloat_Coal_Mass" @input="getCoalMass" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:white">Coal density: </span>
                    <input v-model="$store.getters.firstDMCfloat_Coal_Density" @input="getCoalDensity" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:orange">Coal Volume (Sample): {{$store.getters.firstDMCfloat_Coal_Volume}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">medium Mass (Sample), kg: </span>
                    <input v-model="$store.getters.firstDMCfloat_Medium_Mass" @input="getMediumMass" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium density: {{$store.getters.firstDMCPropertiesSGom}}</span>
                </v-flex>              
                <v-flex>
                    <span style="color:orange">medium Volume (Sample): {{$store.getters.firstDMCfloat_Medium_Volume}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">MCR: {{$store.getters.firstDMCfloat_MCR}}</span>
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


    getInletPressure(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfloat_Inlet_Pressure_Bar',
            value: event.target.value
        });
    },    

    getCoalMass(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfloat_Coal_Mass',
            value: event.target.value
        });
        this.calCoalVolume()
    },
    
    getCoalDensity(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfloat_Coal_Density',
            value: event.target.value
        });
        this.calCoalVolume()
    },
    
    getMediumMass(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfloat_Medium_Mass',
            value: event.target.value
        });
        this.calMediumVolume()
    },

    getAsh(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfloat_Ash',
            value: event.target.value
        });
        this.calSolidFlow()
    },    
    
    calSolidFlow() {  //M45
      let newValue = this.$store.getters.firstDMCMedium_m3floatrate * (this.$store.getters.firstDMCfeed_Ash - this.$store.getters.firstDMCsink_Ash)/(this.$store.getters.firstDMCfloat_Ash - this.$store.getters.firstDMCsink_Ash)
      this.$store.commit("setX", {
        x: 'firstDMCfloat_Solid_Flow_Rate_th',
        value: newValue
      });
      this.calSolidFlowM3()
    },

    calSolidFlowM3() { //M46
      let newValue = this.$store.getters.firstDMCfloat_Solid_Flow_Rate_th /1.5
      this.$store.commit("setX", {
        x: 'firstDMCfloat_Solid_Flow_Rate_m3t',
        value: newValue
      });
      this.calFeedFlowM3()
    },    

    calMediumFlowM3() { //M48
      let newValue = this.$store.getters.firstDMCfloat_Solid_Flow_Rate_m3t * this.$store.getters.firstDMCfloat_MCR
      this.$store.commit("setX", {
        x: 'firstDMCfloat_Medium_Flow_Rate_m3h',
        value: newValue
      });
      this.calMediumFlow()
    },     
    
    calMediumFlow() { //M47
      let newValue = this.$store.getters.firstDMCfloat_Medium_Flow_Rate_m3h * this.$store.getters.firstDMCPropertiesSGom
      this.$store.commit("setX", {
        x: 'firstDMCfloat_Medium_Flow_Rate_th',
        value: newValue
      });
      this.calFeedFlow()
    },   
    
    calFeedFlow() { //M49
      let newValue = parseFloat(this.$store.getters.firstDMCfloat_Solid_Flow_Rate_th + this.$store.getters.firstDMCfloat_Medium_Flow_Rate_th).toFixed(3)
      this.$store.commit("setX", {
        x: 'firstDMCfloat_Feed_Flow_Rate_th',
        value: newValue
      });
    },      

    calFeedFlowM3() { //M50
      let newValue = parseFloat(this.$store.getters.firstDMCfloat_Solid_Flow_Rate_m3t + this.$store.getters.firstDMCfloat_Medium_Flow_Rate_m3h).toFixed(3)
      this.$store.commit("setX", {
        x: 'firstDMCfloat_Feed_Flow_Rate_m3h',
        value: newValue
      });
    },       

    calCoalVolume() { //54
      let newValue = parseFloat(this.$store.getters.firstDMCfloat_Coal_Mass / this.$store.getters.firstDMCfloat_Coal_Density).toFixed(3)
      this.$store.commit("setX", {
        x: 'firstDMCfloat_Coal_Volume',
        value: newValue
      });
      this.calMCR()
    },   

    calMediumVolume() { //57
      let newValue = parseFloat(this.$store.getters.firstDMCfloat_Medium_Mass / this.$store.getters.firstDMCPropertiesSGom).toFixed(3)
      this.$store.commit("setX", {
        x: 'firstDMCfloat_Medium_Volume',
        value: newValue
      });
      this.calMCR()
    },       

    calMCR() { //58
      let newValue = parseFloat(this.$store.getters.firstDMCfloat_Medium_Volume / this.$store.getters.firstDMCfloat_Coal_Volume).toFixed(3)
      this.$store.commit("setX", {
        x: 'firstDMCfloat_MCR',
        value: newValue
      });
      this.calMediumFlowM3()
    },       

  },
  computed: {
    ...mapGetters([
    ])
  },
  data() {
    return {
      dialog: false,
      mediumProperties: false,
      e1:1
    };
  }
};
</script>
