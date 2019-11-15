<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn 
          fab    
          x-small
          class="transparent"
          absolute    
          @click.native.stop="calculatefustu"  
          ></v-btn>
      </template>
      <span style="color:orange">Bottom Screen</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="700px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">PROPERTIES</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 1" step="2">PSD</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 1" step="3">EFFICIENCY</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 1" step="4">EFFICIENCY 2</v-stepper-step>
          <v-divider></v-divider>

        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card>
              <v-flex>
                <span style="color:orange">Solid(t/h) : {{$store.getters.elekcikis_solid}} </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">Water(t/h) :  {{$store.getters.elekcikis_waterSR}} </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">SR : {{$store.getters.slimeTank_SR}}  </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">f :  </span>
                <v-btn x-small @click="e1 = 2">calculate</v-btn>
              </v-flex>
              <v-flex>
                <span style="color:orange">f' : {{$store.getters.hydrocyclone_feed_f_ustu}}  </span>
              </v-flex>   
              <v-flex>
                <span style="color:orange">PSD & Sep Efficiency :  </span>
                <v-btn x-small @click="e1 = 2"> calculate </v-btn>
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
          <v-btn x-small @click="e1=1">BACK</v-btn>

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
            <v-btn @click="checkValue2()">Second</v-btn>
            <v-btn @click="e1=1">BACK</v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-data-table :headers="columns2" :items="items2">
            </v-data-table>
            <v-btn @click="pushData()">to chart</v-btn>
            <v-btn @click="e1=1">BACK</v-btn>
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
    calculatefustu() {
      let newValue = (100 - this.$store.getters.slimeTank_SR ) / this.$store.getters.slimeTank_SR
      this.$store.commit("setX", {
        x: 'hydrocyclone_feed_f_ustu',
        value: newValue
      });
      return this.dialog = true
    },
    checkValue() {
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
    checkValue2() {
      if (this.howMuch.length !== 0 && this.items2.length === 0) {
        var i;
        var topElement = parseInt(this.howMuch) + 2;
        for (i = 1; i < topElement; i++) {
          var data = "";
          if (topElement - i === 1) {
            data = {
              id: "Çıkış",
              Top: "",
              Bottom: "",
              PartUF: "",
              PartOF: "",
              MeanSize: ""
            };
          } else {
            data = {
              id: i + ".Elek",
              Top: "",
              Bottom: "",
              PartUF: "",
              PartOF: "",
              MeanSize: ""
            };
          }
          this.items2.push(data);
        }
      }
          for (i = 0; i < this.items2.length; i++) {
            this.items2[i].Top = this.items[i].Top
            this.items2[i].Bottom = this.items[i].Bottom
          }
      return (this.e1 = 4);
    },    
    controlValues() {
      var i = "";
      for (i = 0; i < this.howMuch; i++) {
        if (this.items[i].Bottom.lenght !== 0) {
          this.items[i + 1].Top = this.items[i].Bottom;
        }
      }
    },
    massControl() {
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
      } else {
        this.calculateScreen()
      }
    },    
    calculateScreen() {
        this.items[0].CumUF = 100;
        this.items[0].CumOF = 0;
        for (let i = 0; i < this.items.length - 1; i++) {
          this.items[i + 1].CumUF = this.items[i].CumUF - this.items[i].Mass;
          this.items[i + 1].CumOF =
            parseInt(this.items[i].CumOF) + parseInt(this.items[i].Mass);
        }
    },    
    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
      this.controlValues();
      this.massControl();
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
    ...mapGetters([
      "hydrocyclone_feed_f_ustu"
    ])
  },
  data() {
    return {
      dialog: false,
      e1: 0,
      howMuch:"",
      snack: false,
      snackColor: "",
      snackText: "",
      items: [],
      items2: [],
      columns: [
        { text: "ID", value: "id" },
        { text: "Size Fract ( TOP )", value: "Top" },
        { text: "Size Fract ( BOTTOM )", value: "Bottom" },
        { text: "Mass %", value: "Mass" },
        { text: "Cum. OF", value: "CumOF" },
        { text: "Cum. UF", value: "CumUF" }
      ],
      columns2: [
        { text: "ID", value: "id" },
        { text: "Size Fract ( TOP )", value: "Top" },
        { text: "Size Fract ( BOTTOM )", value: "Bottom" },
        { text: "Part UF", value: "PartUF" },
        { text: "Part OF", value: "PartOF" },
        { text: "Mean Size Geo", value: "MeanSize" }
      ]      
    };
  }
  }
</script>