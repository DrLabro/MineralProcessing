<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <span style="color:orange">GİRDİLER</span>
    </v-tooltip>
    <v-btn 
    fab    
    x-small
    class="transparent"
    absolute    
    @click.native.stop="dialog = true"  
    ></v-btn>
    <v-dialog v-model="dialog" max-width="700px">
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
            <v-card
          class="mb-12"
          > 
              <v-flex>
                <span style="color:orange">PSD</span>
                <v-btn x-small @click="e1 = 2">--></v-btn>
              </v-flex>
              <v-flex>
                <span style="color:orange">Solid(t/h):</span>
                <input v-model="solid" @input="changeSolid" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:red">Water(t/h):</span>
                <input v-model="water" @input="changeWater" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Solid Density(t/h):</span>
                <input v-model="solidDensity" @input="changeSolidDensity" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Moist %:</span>
                <input v-model="moist" @input="changeMoist" placeholder="doldur" />
              </v-flex>            
              <v-flex>
                <span style="color:orange">f:</span> 
                <input v-model="besleme_f" @input="calculatef" placeholder="doldur" />
              </v-flex>                                                  
              <v-flex>
                <span style="color:yellow">Solid FR(m3/h): {{$store.getters.solidFR}}</span>
              </v-flex>
              <v-flex>
                <span style="color:yellow">Total FR(m3/h): {{$store.getters.totalFR}}</span>
              </v-flex>
              <v-flex>
                <span style="color:yellow">Water(Moist): {{$store.getters.waterMoist}}</span>
              </v-flex>  
              <v-flex>
                <span style="color:yellow">f': {{$store.getters.besleme_f_ustu}}</span>
              </v-flex>                             
            </v-card>                   
            <v-card>
              <v-flex>
                <span style="color:orange">Ash:</span>
                <input v-model="solid" @input="changeSolid" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Volatile Matter:</span>
                <input v-model="solid" @input="changeSolid" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Fixed Carbon:</span>
                <input v-model="solid" @input="changeSolid" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Net Calorific Value:</span>
                <input v-model="solid" @input="changeSolid" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Gross Calorific Value:</span>
                <input v-model="solid" @input="changeSolid" placeholder="doldur" />
              </v-flex>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card>
              <v-flex>
                <span style="color:orange">Number Of Size Fract:</span>
                <input v-model="howMuch" placeholder="doldur" />
                <v-btn @click="checkValue()">Chart</v-btn>
              </v-flex>
            </v-card>
            <v-btn @click="e1=1">BACK</v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-data-table :headers="columns" :items="items">
              <template v-slot:item.Top="props">
                <v-edit-dialog
                  :return-value.sync="props.item.Top"
                  @save="save"
                  @cancel="cancel"
                  @open="open"
                  @close="close"
                >
                  {{ props.item.Top }}
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
            <v-btn @click="pushData()">Graph</v-btn>
            <v-btn @click="e1=1">BACK</v-btn>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-card>
              <v-flex xs6>
                <Plotly :data="data" :layout="layout" :display-mode-bar="yes"></Plotly>
                <span style="color:orange">D90 : {{this.d90}}</span>
              </v-flex>
            </v-card>
            <v-btn @click="e1=3">BACK</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";
import { Plotly } from "vue-plotly";
export default {
  components: {
    Plotly
  },
  methods: {
    calculateD90() {
      let bigIndex;
      let smallIndex;

      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].CumUS > 90) {
          bigIndex = i;
          break;
        }
      }
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].CumUS < 90) {
          smallIndex = i;
          break;
        }
      }
      let y2 = parseFloat(this.items[bigIndex].CumUS);
      let y1 = parseFloat(this.items[smallIndex].CumUS);
      let x1 = parseFloat(this.items[smallIndex].Top * -1);
      let x2 = parseFloat(this.items[bigIndex].Top * -1);

      this.d90 = x1 + ((x2 - x1) * (90 - y1)) / (y2 - y1);
    },
    pushData() {
      if (this.items[0].Top.length !== 0 && this.items[0].Top < 0) {
        for (let i = 0; i < this.items.length; i++) {
          this.data[0].x.push(this.items[i].Top * -1);
          this.data[0].y.push(this.items[i].CumUS);
        }
        this.e1 = 4;
        this.calculateD90();
      } else {
        alert("birinci eleğin top size değeri boş ve pozitif olamaz.");
      }
    },
    changeSolid: function(event) {
      this.$store.commit("changeSolid", event.target.value);
      this.calculateSolidFR();
    },
    changeWater: function(event) {
      this.$store.commit("changeWater", event.target.value);
      this.calculateTotalFR();
    },
    changeSolidDensity: function(event) {
      this.$store.commit("changeSolidDensity", event.target.value);
      this.calculateSolidFR();
    },
    changeMoist: function(event) {
      this.$store.commit("changeMoist", event.target.value);
      this.calculateWaterMoist()
      this.calculatefUstu()
    },
    changeBesleme_f: function(event) {
      this.$store.commit("changeSolidDensity", event.target.value);
      this.calculateSolidFR();
    },
    calculateWaterMoist: function() {
      let waterMoist;
      waterMoist = parseFloat(this.moist) * parseFloat(this.solid) / 100
      this.$store.commit("changewaterMoist", waterMoist)
    },
    calculatefUstu: function() {
      let fUstu;
      fUstu = (parseFloat(this.waterMoist) + parseFloat(this.water)) / parseFloat(this.solid);
      this.$store.commit("changeBesleme_f_ustu", fUstu)
    },
    calculatef: function(event) {
      this.$store.commit("changeBesleme_f", event.target.value);
    },        
    calculateSolidFR: function calculateSolidFR() {
      var solidFRvalue;
      if (this.solid.length !== 0 && this.solidDensity.length !== 0) {
        solidFRvalue = parseFloat(this.solid) / parseFloat(this.solidDensity);
        this.$store.commit("changeSolidFR", solidFRvalue);
      }
      this.calculateTotalFR();
    },
    calculateTotalFR: function calculateTotalFR() {
      var totalFRvalue;
      if (this.water.length !== 0 && this.$store.getters.solidFR.length !== 0) {
        totalFRvalue =
          parseFloat(this.$store.getters.solidFR) + parseFloat(this.water);
        this.$store.commit("changeTotalFR", totalFRvalue);
      }
    },
    calculateScreen: function calculateScreen() {
      let value = 0;
      for (let i = 0; i < this.items.length; i++) {
        value = value + parseInt(this.items[i].Mass);
      }
      if (value === 100) {
        this.items[0].CumUS = 100;
        this.items[0].CumOS = 0;
        for (let i = 0; i < this.items.length - 1; i++) {
          this.items[i + 1].CumUS = this.items[i].CumUS - this.items[i].Mass;
          this.items[i + 1].CumOS =
            parseInt(this.items[i].CumOS) + parseInt(this.items[i].Mass);
        }
      }
    },
    massControl: function massControl() {
      let value = 0;
      let i = "";
      let certainValue = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].Mass.length !== 0) {
          certainValue = certainValue + 1;
          value = value + parseInt(this.items[i].Mass);
        }
      }
      if (value !== 100 && certainValue === this.items.length) {
        alert("100 olmak zorundadir.");
      }
    },
    controlValues: function controlValues() {
      var i = "";
      for (i = 0; i < this.howMuch; i++) {
        if (this.items[i].Bottom.lenght !== 0) {
          this.items[i + 1].Top = "-" + this.items[i].Bottom;
        }
      }
    },
    checkValue: function checkValue() {
      if (this.howMuch.length !== 0 && this.items.length === 0) {
        var i;
        var topElement = parseInt(this.howMuch) + 2;
        for (i = 1; i < topElement; i++) {
          var data = "";
          if (topElement - i === 1) {
            data = {
              id: "Çıkış",
              Top: "",
              Bottom: "",
              Mass: "",
              CumOS: "",
              CumUS: ""
            };
          } else {
            data = {
              id: i + ".Elek",
              Top: "",
              Bottom: "",
              Mass: "",
              CumOS: "",
              CumUS: ""
            };
          }
          this.items.push(data);
        }
      }
      return (this.e1 = 3);
    },
    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
      this.controlValues();
      this.massControl();
      this.calculateScreen();
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      console.log("kapandi");
    }
  },
  computed: {
    ...mapGetters(["solid", "water", "solidDensity", "solidFR", "totalFR", "moist", "waterMoist", "besleme_f", "besleme_f_ustu"])
  },
  data() {
    return {
      data: [
        {
          x: [],
          y: [],
          type: "scatter",
          line: {
              color: "#5e9e7e",
              width: 4,
              shape: "spline"
            }
        }
      ],
      layout: {
        xaxis: {
            title: 'Size, mm',
            type:'log',
            color:'#5e9e7e'
        },
        yaxis: {
          title: "Cum US %",
          type: 'log'
        }
      },
      snack: false,
      snackColor: "",
      snackText: "",
      items: [],
      columns: [
        { text: "ID", value: "id" },
        { text: "Size Fract ( TOP )", value: "Top" },
        { text: "Size Fract ( BOTTOM )", value: "Bottom" },
        { text: "Mass %", value: "Mass" },
        { text: "Cum. OS", value: "CumOS" },
        { text: "Cum. US", value: "CumUS" }
      ],
      dialog: false,
      e1: 0,
      howMuch: "",
      solid: "",
      water: "",
      solidDensity: "",
      solidFR: "",
      totalFR: "",
      d90: 0
    };
  }
};
</script>
