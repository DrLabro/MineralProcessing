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
        <span style="color:orange">Bottom Screen</span>
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
                        <input v-model="solid" @input="changeSolid" placeholder="doldur">
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> o: </span>             
                        <input v-model="solid" @input="changeSolid" placeholder="doldur">
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> f: </span>             
                        <input v-model="solid" @input="changeSolid" placeholder="doldur">
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> U: "hesaplanacak" </span>             
                    </v-flex>
                    <v-flex>
                        <span style="color:orange"> O: "hesaplanacak" </span>             
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
  export default {
    methods: {
    },
    data () {
      return {
        dialog: false,
        e1:0
      }
    },
  }
</script>

