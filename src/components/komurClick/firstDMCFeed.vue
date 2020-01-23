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
    <v-dialog v-model="dialog" max-width="600px" max-hei>
      <v-stepper v-model="e1">
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card>
                <v-card-title> Arrivals from point 3 </v-card-title>  
                <v-flex pa-5>
                    <v-flex>
                        <span style="color:orange">Solid(t/h) : {{$store.getters.eleksagalt_solid}}  </span>
                    </v-flex>
                    <v-flex>
                        <span style="color:orange">Ash,%:   </span>
                        <input v-model="$store.getters.firstDMCfeed_Ash" @input="getFeed_Ash" placeholder="Enter a value" />
                    </v-flex>
                </v-flex>
            </v-card>
            <v-divider></v-divider>
            <v-card class="mb-12"> 
              <v-card-title> Feed DMC ( 1st ) </v-card-title>
              <v-flex pa-5> 
                <v-flex>
                    <span style="color:orange">Solid Flow rate (t/h) : {{$store.getters.firstDMCMedium_m3floatrate}}  </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">Solid Flow rate (m3/h): {{$store.getters.firstDMCfeed_Solid_Flow_Rate_m3h}} </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Flow rate (t/h): {{$store.getters.firstDMCfeed_Medium_Flow_Rate_th}}  </span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium Flow rate (m3/h): {{$store.getters.firstDMCfeed_Medium_Flow_Rate_m3h}} </span>
                </v-flex>           
                <v-flex>
                    <span style="color:orange">feed Flow rate (t/h): {{$store.getters.firstDMCfeed_Feed_Flow_Rate_th}} </span>
                </v-flex>                         
                <v-flex>
                    <span style="color:orange">feed Flow rate (m3/h): {{$store.getters.firstDMCfeed_Feed_Flow_Rate_m3h}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">Ash,%: {{$store.getters.firstDMCfeed_Ash}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">Inlet pressure bar: </span>
                    <input v-model="$store.getters.firstDMCfeed_Inlet_Pressure_Bar" @input="getFeed_Inlet_Pressure_Bar" placeholder="doldur" />
                </v-flex>              
                <v-flex>
                    <span style="color:white">Coal Mass (Sample), kg: </span>
                    <input v-model="$store.getters.firstDMCfeed_Coal_Mass" @input="getFeed_Coal_Mass" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:white">Coal density: </span>
                    <input v-model="$store.getters.firstDMCfeed_Coal_Density" @input="getFeed_Coal_Density" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:orange">Coal Volume (Sample): {{$store.getters.firstDMCfeed_Coal_Volume}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:white">medium Mass (Sample), kg: </span>
                    <input v-model="$store.getters.firstDMCfeed_Medium_Mass" @input="getFeed_Medium_Mass" placeholder="doldur" />
                </v-flex>
                <v-flex>
                    <span style="color:orange">medium density: {{$store.getters.firstDMCMedium_m3density}}</span>
                </v-flex>              
                <v-flex>
                    <span style="color:orange">medium Volume (Sample): {{$store.getters.firstDMCfeed_Medium_Volume}}</span>
                </v-flex>
                <v-flex>
                    <span style="color:orange">MCR: {{$store.getters.firstDMCfeed_MCR}}</span>
                    
                </v-flex>
                <v-flex>
                    <span style="color:white">H, cm: </span>
                    <input v-model="$store.getters.firstDMCfeed_H_cm" @input="getFeed_H" placeholder="doldur" />
                </v-flex>
                <v-flex>
                        <span style="color:orange">P, inlet pressure calculated: {{$store.getters.firstDMCfeed_Inlet_Pressure_Calculated}}</span>
                </v-flex>
                <v-divider></v-divider>
                    <span style="color:white">DC1: </span>                  
                    <input v-model="$store.getters.firstDMCfeed_DC1" @input="getFeed_DC1" placeholder="doldur" />
              </v-flex>            
            </v-card>
            <v-row>
                <div class="text-center">
                    <v-dialog
                    width="500"
                    >
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on">
                        Medium Properties
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title> Medium Properties </v-card-title>
                        <v-flex pa-6>
                            <v-flex>
                                <span style="color:white">M3-density: </span>
                                <input v-model="$store.getters.firstDMCMedium_m3density" @input="getFeed_Medium_m3density" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">M3-flow rate: </span>
                                <input v-model="$store.getters.firstDMCMedium_m3floatrate" @input="getMediumM3flowrate" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">M3-PSD: {{$store.getters.firstDMCMedium_m3psd}}</span>
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">MCR: </span>
                                <input v-model="$store.getters.firstDMCMedium_mcr" @input="getfirstDMCMedium_mcr" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">M4-density: {{$store.getters.firstDMCMedium_m4density}}</span>
                                <input v-model="$store.getters.firstDMCMedium_m4density" @input="getfeed_Medium_m4density" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">M4-flow rate: {{$store.getters.firstDMCMedium_m4flowrate}}</span>
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">M4-PSD: {{$store.getters.firstDMCMedium_m4psd}}</span>
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">MCR: {{$store.getters.firstDMCMedium_mcr2}}</span>
                            </v-flex>  
                        </v-flex>                                                                                                                                                                                                  
                    </v-card>
                    </v-dialog>
                </div>
                <v-spacer> </v-spacer>
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
                                <span style="color:orange">SGm: {{$store.getters.firstDMCMedium_m3density}} </span>
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">SGum: </span>
                                <input v-model="$store.getters.firstDMCPropertiesSGum" @input="getfeed_PropertiesSgum" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">SGom: </span>
                                <input v-model="$store.getters.firstDMCPropertiesSGom" @input="getfeed_PropertiesSgom" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">SGum-SGom: </span>
                                <input v-model="$store.getters.firstDMCPropertiesSGumSGom" @input="getfeed_PropertiesSgumSgom" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">(SGm-Sgom)/SGm: </span>
                                <input v-model="$store.getters.firstDMCPropertiesSGumSGom_SGm" @input="getfeed_PropertiesSgumSgom_Sgm" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">Top Size (Feed):</span>
                                <input v-model="$store.getters.firstDMCPropertiesTopSize" @input="getfeed_PropertiesTopSize" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">Bottom Size (Feed): </span>
                                <input v-model="$store.getters.firstDMCPropertiesBottomSize" @input="getfeed_PropertiesBottomSize" placeholder="doldur" />
                            </v-flex>
                            <v-flex>
                                <span style="color:orange">Dmean: {{$store.getters.firstDMCPropertiesDmean}}</span>
                            </v-flex>  
                            <v-flex>
                                <span style="color:orange">RD50: {{$store.getters.firstDMCPropertiesRD50}}</span>
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
import { mapGetters } from "vuex";

export default {
  methods: {
    getMediumM3flowrate(event) {
        this.$store.commit("setX", {
            x: 'firstDMCMedium_m3floatrate',
            value: event.target.value
        });
        this.calFeed_Solid_Flow_Rate_m3h()
        this.calFeed_Medium_Flow_Rate_m3h()
    },

    calFeed_Solid_Flow_Rate_m3h() {
        let newvalue = (this.$store.getters.firstDMCMedium_m3floatrate / 1.5)
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Solid_Flow_Rate_m3h',
            value: newvalue
        });
    },
    
    getPropertiesSGm(event) {
        this.$store.commit("setX", {
            x: 'firstDMCPropertiesSGm',
            value: event.target.value
        });
        this.calFeed_Medium_Flow_Rate_th()
    },

    getfirstDMCMedium_mcr(event) {
        this.$store.commit("setX", {
            x: 'firstDMCMedium_mcr',
            value: event.target.value
        });        
        this.calFeed_Medium_Flow_Rate_m3h()
    },
    
    calFeed_Medium_Flow_Rate_m3h() {
        let newvalue = (this.$store.getters.firstDMCfeed_Solid_Flow_Rate_m3h * this.$store.getters.firstDMCMedium_mcr)
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Medium_Flow_Rate_m3h',
            value: newvalue
        });  
        this.calFeed_Medium_Flow_Rate_th()  
        this.calFeed_Feed_Flow_Rate_th()   
        this.calFeed_Feed_Flow_Rate_m3h() 
    },
    
    calFeed_Medium_Flow_Rate_th() {
        let newvalue = (this.$store.getters.firstDMCfeed_Medium_Flow_Rate_m3h * this.$store.getters.firstDMCPropertiesSGm)
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Medium_Flow_Rate_th',
            value: newvalue
        });        
    },
    
    calFeed_Feed_Flow_Rate_th() {
        let newvalue = parseFloat(this.$store.getters.firstDMCfeed_Solid_Flow_Rate_m3h + this.$store.getters.firstDMCfeed_Medium_Flow_Rate_th).toFixed(3)
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Feed_Flow_Rate_th',
            value: newvalue
        });         
    },

    calFeed_Feed_Flow_Rate_m3h() {
        let newvalue = parseFloat(this.$store.getters.firstDMCfeed_Solid_Flow_Rate_m3h + this.$store.getters.firstDMCfeed_Medium_Flow_Rate_m3h).toFixed(3)
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Feed_Flow_Rate_m3h',
            value: newvalue
        });         
    },
    
    getFeed_Ash(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Ash',
            value: event.target.value
        });         
    },
    getFeed_Inlet_Pressure_Bar(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Inlet_Pressure_Bar',
            value: event.target.value
        });        
    },

    getFeed_Coal_Mass(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Coal_Mass',
            value: event.target.value
        });        
        this.calFeed_Coal_Volume()
    },

    getFeed_Coal_Density(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Coal_Density',
            value: event.target.value
        });  
        this.calFeed_Coal_Volume()
    },
    
    calFeed_Coal_Volume() {
        let newvalue = this.$store.getters.firstDMCfeed_Coal_Mass / this.$store.getters.firstDMCfeed_Coal_Density
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Coal_Volume',
            value: newvalue
        });         
    },

    getFeed_Medium_Mass(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Medium_Mass',
            value: event.target.value
        });  
    },    

    getFeed_Medium_m3density(event) {
        this.$store.commit("setX", {
            x: 'firstDMCMedium_m3density',
            value: event.target.value
        });  
        this.calFeed_MediumVolumeSample()
    },

    calFeed_MediumVolumeSample() {
        let newvalue = this.$store.getters.firstDMCfeed_Medium_Mass / this.$store.getters.firstDMCMedium_m3density
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Medium_Volume',
            value: newvalue
        }); 
        this.calFeed_MCR()        
    },
    
    calFeed_MCR() {
        let newvalue = this.$store.getters.firstDMCfeed_Medium_Volume / this.$store.getters.firstDMCfeed_Coal_Volume
        this.$store.commit("setX", {
            x: 'firstDMCfeed_MCR',
            value: newvalue
        });         
    },

    getFeed_H(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfeed_H_cm',
            value: event.target.value
        });  
    },    

    getFeed_DC1(event) {
        this.$store.commit("setX", {
            x: 'firstDMCfeed_DC1',
            value:event.target.value
        })
        this.calFeedP_inlet_pressure()
    },

    calFeedP_inlet_pressure() {
        let newvalue = parseFloat(parseFloat(9*this.$store.getters.firstDMCfeed_DC1+this.$store.getters.firstDMCfeed_H_cm)*(this.$store.getters.firstDMCPropertiesSGm * 9.81) / 10000 ).toFixed(3)
        this.$store.commit("setX", {
            x: 'firstDMCfeed_Inlet_Pressure_Calculated',
            value: newvalue
        });                 
    },

    getfeed_Medium_m4density(event) {
        this.$store.commit("setX", {
            x: 'firstDMCMedium_m4density',
            value:event.target.value
        })
    },

    getfeed_PropertiesSgum(event) {
        this.$store.commit("setX", {
            x: 'firstDMCPropertiesSGum',
            value:event.target.value
        })
        this.calfeed_PropertiesRD50()
    },    

    getfeed_PropertiesSgom(event) {
        this.$store.commit("setX", {
            x: 'firstDMCPropertiesSGom',
            value:event.target.value
        })
        this.calfeed_PropertiesRD50()
    }, 
    
    getfeed_PropertiesSgumSgom(event) {
        this.$store.commit("setX", {
            x: 'firstDMCPropertiesSGumSGom',
            value:event.target.value
        });
    }, 
    
    getfeed_PropertiesSgumSgom_Sgm(event) {
        this.$store.commit("setX", {
            x: 'firstDMCPropertiesSGumSGom_SGm',
            value:event.target.value
        });
    }, 
    
    getfeed_PropertiesTopSize(event) {
        this.$store.commit("setX", {
            x: 'firstDMCPropertiesTopSize',
            value:event.target.value
        });

        this.calfeed_PropertiesDmean()
    }, 
    
    getfeed_PropertiesBottomSize(event) {
        this.$store.commit("setX", {
            x: 'firstDMCPropertiesBottomSize',
            value:event.target.value
        });
        this.calfeed_PropertiesDmean()
    },     
    
    calfeed_PropertiesDmean() {
        let newvalue = Math.pow((this.$store.getters.firstDMCPropertiesTopSize*this.$store.getters.firstDMCPropertiesBottomSize), 0.5).toFixed(3)
        this.$store.commit("setX", {
            x: 'firstDMCPropertiesDmean',
            value: newvalue
        });
    },

    calfeed_PropertiesRD50() {
        let newvalue = parseFloat((this.$store.getters.firstDMCMedium_m3density*0.125)+(0.154*this.$store.getters.firstDMCPropertiesSGum)-(0.215*this.$store.getters.firstDMCPropertiesSGom)).toFixed(3)
        this.$store.commit("setX", {
            x: 'firstDMCPropertiesRD50',
            value: newvalue
        })
    },    

  },
  computed: {
    ...mapGetters([
    ])
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
