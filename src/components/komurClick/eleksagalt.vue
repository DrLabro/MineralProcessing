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
        <span style="color:orange">Second Overscreen Exit</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="700px">
         <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">SCREEN PROPERTIES </v-stepper-step>
            <v-divider></v-divider>
          </v-stepper-header>
              <v-stepper-items>
            <v-stepper-content step="1" >
                <v-card>
                  <v-card-title> Overscreen </v-card-title>
                      <v-flex >
                        <span style="color:orange"> Solid(t/h) : {{$store.getters.eleksagalt_solid}} </span>
                      </v-flex>
                      <v-flex >
                        <span style="color:orange"> Moist % :  </span>
                        <input v-model="eleksagalt_Moist"  @input="changeMoist" placeholder="doldur" />
                      </v-flex>
                      <v-flex >
                        <span style="color:orange"> water(moist) : {{$store.getters.eleksagalt_water_moist}} </span>
                      </v-flex>
                      <v-flex >
                        <span style="color:orange"> o :  </span>
                        <input v-model="eleksagalt_o" @input="changeo" placeholder="doldur" />
                      </v-flex>
                      <v-flex >
                        <span style="color:orange"> o' : {{$store.getters.eleksagalt_o_ustu}} </span>
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
    changeSolid() {
      let newValue = this.$store.getters.solid - this.$store.getters.elekust_solid - this.$store.getters.elekcikis_solid
      this.$store.commit("setX", {
        x: 'eleksagalt_solid',
        value: newValue
      });

      return this.dialog = true
    },
    changeMoist(event) {
      this.$store.commit("setX", {
        x: 'eleksagalt_Moist',
        value: event.target.value
      });
      this.calculateWaterMoist()
      this.calculateoUstu()

    },
    changeo(event) {
      this.$store.commit("setX", {
        x: 'eleksagalt_o',
        value: event.target.value      
      });  
    },
    calculateWaterMoist() {
      let newValue = this.$store.getters.eleksagalt_solid * this.$store.getters.eleksagalt_Moist / 100
      this.$store.commit("setX", {
        x: 'eleksagalt_water_moist',
        value: newValue
      })
    },
    calculateoUstu() {
      let newValue = this.$store.getters.eleksagalt_Moist / ( 100 - this.$store.getters.eleksagalt_Moist )
      this.$store.commit("setX", {
        x: 'eleksagalt_o_ustu',
        value: newValue
      })
    }
    },
  computed: {
    ...mapGetters([
    'eleksagalt_solid',
    'eleksagalt_M+oist',
    'eleksagalt_water_moist',
    'eleksagalt_o',
    'eleksagalt_o_ustu',
    ])
  },

    data () {
      return {
        dialog: false,
        e1:0
      }
    },
  }
</script>