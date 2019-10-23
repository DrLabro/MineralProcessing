<template>
  <v-layout row justify-center>
    <v-tooltip top>
        <template v-slot:activator="{ on }">
            <v-btn
            tile 
            x-small="true" 
            text icon color="indigo"
            absolute
            v-on="on" 
            @click="dialog = true"
            max-height="5"
            >
            <v-icon>mdi-star</v-icon>
            </v-btn>
        </template>
        <span style="color:orange">Upper Screen</span>
    </v-tooltip>
    <v-dialog v-model="dialog">
         <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">SCREEN PROPERTIES </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2">SCREEN DESIGN</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3">SCREEN EFFICIENCY</v-stepper-step>
          </v-stepper-header>
                    <v-stepper-items>
            <v-stepper-content step="1" >
                <v-card>
                      <v-flex >
                        <span style="color:orange"> Screen Capacity : {{$store.getters.solid}} </span>
                      </v-flex>
                      <v-flex>
                        <span style="color:orange"> Screen Design </span>
                        <v-btn
                        x-small
                        @click="e1 = 2"
                        > --> </v-btn>
                      </v-flex>
                      <v-flex>
                        <span style="color:orange"> Screen Efficiency </span>
                        <v-btn
                        x-small
                        @click="e1 = 3"
                        > --> </v-btn>
                      </v-flex>                      
                </v-card>
            </v-stepper-content>
            <v-stepper-content step="2">
                <v-card>
                    <v-flex>
                        <span style="color:orange"> Screen Capacity: {{$store.getters.solid}} </span>
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> a: </span>             
                        <input v-model="solid" @input="changeSolid" placeholder="doldur">
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> b: </span>             
                        <input v-model="solid" @input="changeSolid" placeholder="doldur">
                    </v-flex>   
                    <v-flex>
                        <span style="color:orange"> Screen Area: "hesaplanacak" </span>             
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> Open Area: </span>             
                        <input v-model="solid" @input="changeSolid" placeholder="doldur">
                    </v-flex>                                                            
                </v-card>
                    <v-btn
                    x-small
                    @click="e1=1"
                    >
                    Back
                    </v-btn>                 
            </v-stepper-content>
            <v-stepper-content step="3">
                <v-card>
                    <v-flex>
                        <span style="color:orange"> u: </span>             
                        <input v-model="elekust_u" @input="changeUstElek_u" placeholder="doldur">
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> o: </span>             
                        <input v-model="elekust_o" @input="changeUstElek_o" placeholder="doldur">
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> f: </span>             
                        <input v-model="elekust_f" @input="changeUstElek_f" placeholder="doldur">
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> U: {{ $store.getters.elekust_U }} </span>             
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> O: {{$store.getters.elekust_O}} </span>             
                    </v-flex>
                </v-card>
                <v-btn
                @click="e1 = 2"
                x-small=""
                >
                BACK
                </v-btn>
            </v-stepper-content>
           </v-stepper-items>
         </v-stepper>
    </v-dialog>
</v-layout>
</template>

<script>
import store from '../../store/store'
import { mapGetters } from 'vuex'
  export default {
    methods: {
    changeUstElek_f: function changeUstElek_f(event) {
      this.$store.commit('changeUstElek_f', event.target.value)
      this.calculate_O()
    },
    changeUstElek_o: function changeUstElek_o(event) {
      this.$store.commit('changeUstElek_o', event.target.value)
      this.calculate_O()
    },
    changeUstElek_u: function changeUstElek_u(event) {
      this.$store.commit('changeUstElek_u', event.target.value)
      this.calculate_O()
    },        
    calculate_O: function calculate_O() {
      var newElekust_O
      newElekust_O = ( this.$store.getters.solidFR * (this.elekust_f - this.elekust_u ) ) / (this.elekust_o - this.elekust_u)
      this.$store.commit('changeUstElek_O', newElekust_O)
    }
    },
    computed: {
      ...mapGetters ([
        'elekust_u',
        'elekust_o',
        'elekust_f',
        'elekust_U',
        'elekust_O'
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

