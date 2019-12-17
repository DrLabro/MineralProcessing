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
          <v-stepper-step :complete="e1 > 1" step="1">SINK (DMC 1st)</v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12"> 
              <v-flex pa-5> 
                <v-flex>
                    <span style="color:orange">Solid Flow rate (t/h) : {{$store.getters.firstDMCsink_Solid_Flow_Rate_th}}  </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">Solid Flow rate (m3/h): {{$store.getters.firstDMCsink_Solid_Flow_Rate_m3t}} </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Flow rate (t/h): {{$store.getters.firstDMCsink_Medium_Flow_Rate_th}}  </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Flow rate (m3/h): {{$store.getters.firstDMCsink_Medium_Flow_Rate_m3h}} </span>
                </v-flex>           
                <v-flex>
                    <span style="color:orange">feed Flow rate (t/h): {{$store.getters.firstDMCsink_Feed_Flow_Rate_th}} </span>
                </v-flex>                         
                <v-flex>
                    <span style="color:orange">feed Flow rate (m3/h): {{$store.getters.firstDMCsink_Feed_Flow_Rate_m3h}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">Ash,%: </span>
                    <input v-model="$store.getters.firstDMCsink_Ash" @input="getSink_Ash" placeholder="doldur"/>
                </v-flex>
                <v-flex>
                    <span style="color:white">Solid Mass (Sample), kg:</span>
                    <input v-model="$store.getters.firstDMCsink_Solid_Mass" @input="getSolidMass" placeholder="doldur"/>
                </v-flex>              
                <v-flex>
                    <span style="color:white">Solid density:</span>
                    <input v-model="$store.getters.firstDMCsink_Solid_Density" @input="getSolidDensity" placeholder="doldur"/>
                </v-flex>
                <v-flex>
                    <span style="color:orange">solid Volume (Sample): {{$store.getters.firstDMCsink_Ash}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">medium Mass (Sample): </span>
                    <input v-model="$store.getters.firstDMCsink_Medium_Mass" @input="getMediumMass" placeholder="doldur"/>
                </v-flex>
                <v-flex>
                    <span style="color:white">medium density: {{$store.getters.firstDMCPropertiesSGum}} </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Volume (Sample): {{$store.getters.firstDMCsink_Medium_Density}}</span>
                </v-flex>              
                <v-flex>
                    <span style="color:orange">MCR: {{$store.getters.firstDMCsink_MCR}}</span>
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
//import store from "../../store/store";
import { mapGetters } from "vuex";

export default {
  methods: {

    calSolidFlow() { // TETIKLENMIYOR  //M61
      let newValue = ( this.$store.getters.firstDMCMedium_m3floatrate - this.$store.getters.firstDMCsink_Solid_Flow_Rate_th ) 
        this.$store.commit("setX", {
            x: 'firstDMCsink_Solid_Flow_Rate_th',
            value: newValue
        });         
    }, 

    calSolidFlowM3() { // TETIKLENMIYOR  //M62
      let newValue = ( this.$store.getters.firstDMCsink_Solid_Flow_Rate_th / 2.5 ) 
        this.$store.commit("setX", {
            x: 'firstDMCsink_Solid_Flow_Rate_m3t',
            value: newValue
        });         
    },    

    calMediumFlow() { // TETIKLENMIYOR  //M63
      let newValue = ( this.$store.getters.firstDMCsink_Medium_Flow_Rate_m3h * this.$store.getters.firstDMCPropertiesSGum ) 
        this.$store.commit("setX", {
            x: 'firstDMCsink_Medium_Flow_Rate_th',
            value: newValue
        });         
    }, 
    
    calMediumFlowm3() { // TETIKLENMIYOR  //M64
      let newValue = ( this.$store.getters.firstDMCsink_Solid_Flow_Rate_m3t * this.$store.getters.secondDMCsink_Medium_Volume ) 
        this.$store.commit("setX", {
            x: 'firstDMCsink_Medium_Flow_Rate_m3h',
            value: newValue
        });         
    },    

    calFlowRate() { // TETIKLENMIYOR  //M65
      let newValue = parseFloat( this.$store.getters.firstDMCsink_Solid_Flow_Rate_th + this.$store.getters.secondDMCsink_Medium_Flow_Rate_th ).toFixed(3)
        this.$store.commit("setX", {
            x: 'firstDMCsink_Feed_Flow_Rate_th',
            value: newValue
        });         
    },  
    
    calFlowRatem3() { // TETIKLENMIYOR  //M66
      let newValue = parseFloat( this.$store.getters.firstDMCsink_Solid_Flow_Rate_m3t + this.$store.getters.secondDMCsink_Medium_Flow_Rate_th ).toFixed(3)
        this.$store.commit("setX", {
            x: 'firstDMCsink_Feed_Flow_Rate_m3h',
            value: newValue
        });         
    },   
    
    calSolidVolume() { // TETIKLENMIYOR  //M70
      let newValue = parseFloat( this.$store.getters.firstDMCsink_Solid_Mass / this.$store.getters.firstDMCsink_Solid_Density ).toFixed(3)
        this.$store.commit("setX", {
            x: 'firstDMCsink_Solid_Volume',
            value: newValue
        });         
    },    
    
    calMediumVolume() { // TETIKLENMIYOR  //M73
      let newValue = parseFloat( this.$store.getters.firstDMCsink_Medium_Mass / this.$store.getters.firstDMCPropertiesSGum ).toFixed(3)
        this.$store.commit("setX", {
            x: 'firstDMCsink_Medium_Volume',
            value: newValue
        });         
    },    
    
    calMCR() { // TETIKLENMIYOR  //M74
      let newValue = parseFloat( this.$store.getters.firstDMCsink_Medium_Volume / this.$store.getters.firstDMCsink_Solid_Volume ).toFixed(3)
        this.$store.commit("setX", {
            x: 'firstDMCsink_MCR',
            value: newValue
        });         
    },     

    getSink_Ash(event) {
        this.$store.commit("setX", {
            x: 'firstDMCsink_Ash',
            value: event.target.value
        });         
    },   

    getMediumMass(event) {
        this.$store.commit("setX", {
            x: 'firstDMCsink_Medium_Mass',
            value: event.target.value
        });         
    },
    
    getSolidDensity(event) {
        this.$store.commit("setX", {
            x: 'firstDMCsink_Solid_Density',
            value: event.target.value
        });         
    },
    
    getSolidMass(event) {
        this.$store.commit("setX", {
            x: 'firstDMCsink_Solid_Mass',
            value: event.target.value
        });         
    }    
      
  },
  computed: {
    ...mapGetters([
        'firstDMCsink_Solid_Flow_Rate_th',
        'firstDMCsink_Solid_Flow_Rate_m3t',
        'firstDMCsink_Medium_Flow_Rate_th',
        'firstDMCsink_Medium_Flow_Rate_m3h',
        'firstDMCsink_Feed_Flow_Rate_th',
        'firstDMCsink_Feed_Flow_Rate_m3h',
        'firstDMCsink_Ash',
        'firstDMCsink_Solid_Mass',
        'firstDMCsink_Solid_Density',
        'firstDMCsink_Solid_Volume',
        'firstDMCsink_Medium_Mass',
        'firstDMCsink_Medium_Density',
        'firstDMCsink_Medium_Volume',
        'firstDMCsink_MCR'      
    ])
  },
  data() {
    return {
      dialog: false,
      mediumProperties: false,
      e1: 1
    };
  }
};
</script>
