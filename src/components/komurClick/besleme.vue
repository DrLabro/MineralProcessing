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
        <span style="color:orange">GİRDİLER</span>
    </v-tooltip>
    <v-dialog v-model="dialog">
         <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">INPUTS</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2">PSD Properties</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3">Data Table</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="4">Chart</v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
                <v-card>
                      <v-flex>
                        <span style="color:orange"> PSD </span>
                        <v-btn
                        x-small
                        @click="e1 = 2"
                        > --> </v-btn>
                      </v-flex>
                      <v-flex>
                        <span style="color:orange"> Solid(t/h): </span>
                        <input v-model="solid" @input="changeSolid" placeholder="doldur">
                      </v-flex> 
                      <v-flex>
                        <span style="color:orange"> Water(t/h): </span>
                        <input v-model="water" @input="changeWater" placeholder="doldur">
                      </v-flex>                   
                      <v-flex>
                        <span style="color:orange"> Solid Density(t/h): </span>
                        <input v-model="solidDensity" @input="changeSolidDensity" placeholder="doldur">
                      </v-flex>                   
                      <v-flex>
                        <span style="color:orange"> Solid FR(m3/h): {{$store.getters.solidFR}} </span>
                      </v-flex>                   
                      <v-flex>
                        <span style="color:orange"> Total FR(m3/h): {{$store.getters.totalFR}} </span>
                      </v-flex>                   
                </v-card>
            </v-stepper-content>
            <v-stepper-content step="2">
                <v-card>
                      <v-flex>
                        <span style="color:orange"> Number Of Size Fract: </span>
                        <input v-model="howMuch" placeholder="doldur">
                        <v-btn
                        @click="checkValue()"
                        > Chart </v-btn>
                      </v-flex> 
                </v-card>
            </v-stepper-content>
            <v-stepper-content step="3">
            <v-data-table
                :headers="columns"
                :items="items"
            >
              <template v-slot:item.Top="props">
                <v-edit-dialog
                  :return-value.sync="props.item.Top"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                > {{ props.item.Top }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.Top"
                      label="Edit Screen Top Size"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.Bottom="props">
                <v-edit-dialog
                  :return-value.sync="props.item.Bottom"
                  large
                  persistent
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  <div>{{ props.item.Bottom }}</div>
                  <template v-slot:input>
                    <div class="mt-4 title">Update Iron</div>
                  </template>
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.Bottom"
                      label="Edit Screen Bottom Size"
                      single-line
                      counter
                      autofocus
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
              <template v-slot:item.Mass="props">
                <v-edit-dialog
                  :return-value.sync="props.item.Mass"
                  large
                  persistent
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  <div>{{ props.item.Mass }}</div>
                  <template v-slot:input>
                    <div class="mt-4 title">Update Iron</div>
                  </template>
                  <template v-slot:input>
                    <v-text-field
                      v-model="props.item.Mass"
                      label="Edit Mass %"
                      single-line
                      counter
                      autofocus
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>        
            </v-data-table>
            <v-btn
            @click="e1 = 4"
            >
            Graph
            </v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-card>
                <p> Grafik Gelecek </p>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
    </v-dialog>
</v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    methods: {
      changeSolid: function(event) {
        this.$store.commit('changeSolid', event.target.value)
        this.calculateSolidFR()
      },
      changeWater: function(event) {
        this.$store.commit('changeWater', event.target.value)
        this.calculateTotalFR()
      },
      changeSolidDensity: function(event) {
        this.$store.commit('changeSolidDensity', event.target.value)
        this.calculateSolidFR()
      },
      calculateSolidFR: function calculateSolidFR() {
        var solidFRvalue;
          if ( this.solid.length !== 0 && this.solidDensity.length !== 0 )
          {
            solidFRvalue = parseFloat(this.solid) * parseFloat(this.solidDensity)
            this.$store.commit('changeSolidFR', solidFRvalue)
          }
          this.calculateTotalFR()
      },
      calculateTotalFR: function calculateTotalFR() {
          var totalFRvalue;
          if ( this.water.length !== 0 && this.$store.getters.solidFR.length !== 0)
          {
            totalFRvalue = parseFloat(this.$store.getters.solidFR) + parseFloat(this.water)
            this.$store.commit('changeTotalFR', totalFRvalue)
          }
      },                       
      calculateScreen: function calculateScreen() {
       var value = 0;
       var i;
       for (i=0; i < this.items.length; i++)
        {   
            value = value + parseInt(this.items[i].Mass)
        }
        if (value === 100) {
          this.items[0].CumUS = 100
          this.items[0].CumOS = 0
          for (i=0; i < this.items.length; i++) {
              this.items[i+1].CumUS = this.items[i].CumUS - this.items[i].Mass
              this.items[i+1].CumOS = parseInt(this.items[i].CumOS) + parseInt(this.items[i].Mass)
          }
        }
      },
      massControl: function massControl() {
        var value = 0;
        var i = '';
        var certainValue = 0;
        for (i=0; i < this.items.length; i++)
        {   
          if ( this.items[i].Mass.length !== 0 )
          {
             certainValue = certainValue + 1
             value = value + parseInt(this.items[i].Mass)
          }
        }
        if ( value !== 100 && certainValue === this.items.length ) {
          alert("100 olmak zorundadir.")
        }
      },
      controlValues: function controlValues() {
        var i =''
        for(i=0; i < this.howMuch; i++) {
          if (this.items[i].Bottom.lenght !== 0 )
          {
            this.items[i + 1].Top = "-" + this.items[i].Bottom
          }
        }
      },
      checkValue: function checkValue() {
         if (this.howMuch !== 0 && this.howMuch > 0)
         {
            var i;
            var topElement = parseInt(this.howMuch) + 2
            for ( i = 1; i < topElement; i++) {
              var data = ''
               if (topElement - i === 1 ) {
                  data = {'id':'Çıkış','Top': '','Bottom': '','Mass': '', 'CumOS':'', 'CumUS': ''}
               } else {
                  data = {'id':i + '.Elek' ,'Top': '','Bottom': '','Mass': '', 'CumOS':'', 'CumUS': ''}
               }
               this.items.push(data)
            }

        }
        return this.e1 = 3
      },
     save () {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Data saved'
        this.controlValues()
        this.massControl()
        this.calculateScreen()
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Canceled'

      },
      open () {
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Dialog opened'
      },
      close () {
        console.log("kapandi")
      }

    },
    computed: {
        ...mapGetters([
            'solid',
            'water',
            'solidDensity',
            'solidFR',
            'totalFR'
        ])
    },   
    data () {
      return {
        snack: false,
        snackColor: '',
        snackText: '',
        items: [],
        columns: [
          { text: 'ID', value: 'id' },
          { text: 'Size Fract ( TOP )', value: 'Top' },
          { text: 'Size Fract ( BOTTOM )', value: 'Bottom' },
          { text: 'Mass %', value: 'Mass' },
          { text: 'Cum. OS', value: 'CumOS' },
          { text: 'Cum. US', value: 'CumUS' },
        ],        
        dialog: false,
        e1:0,
        howMuch:'',
        solid: '',
        water: '',
        solidDensity: '',
        solidFR: '',
        totalFR: ''
      }
    },
  }
</script>
