<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn x-small absolute color="cyan" @click.native.stop="dialog=true"></v-btn>
      </template>
      <span style="color:orange">Bottom Screen</span>
    </v-tooltip>
    <v-dialog v-model="dialog">
      <v-layout>
        <v-alert prominent type="warning" width="800px">
          <v-row align="center">
            <v-col class="grow">Kaç elek kullanacağınızı belirtiniz.</v-col>
            <input v-model="fakeHowMuch" @input="fakeHowMuch()" placeholder="doldurunuz" />
            <v-btn color="green" @click="changeScreenSize()">Tanımla</v-btn>
            <v-btn color="red" @click="cleanAll()">Temizle</v-btn>
          </v-row>
        </v-alert>
        <v-divider></v-divider>
        <v-flex>
          <v-dialog v-model="hydrocyclonePicker" fullscreen>
            <template v-slot:activator="{ on }">
              <v-btn large color="info" v-on="on">HYDROCYCLONE SEÇİMİ</v-btn>
            </template>
            <v-card fullscreen>
              <v-row justify="center">
                <v-flex xs4 mb-8 pa-8>
                  <v-flex>
                    <span style="color:orange">Solid Density:</span>
                    <input
                      v-model="cyclone_eff_solid_den"
                      @input="changeSolidDens"
                      placeholder="doldur"
                    />
                  </v-flex>
                  <v-flex>
                    <span
                      style="color:orange"
                    >Vol flow rate: {{$store.getters.cyclone_eff_flow_rate}}</span>
                  </v-flex>
                  <v-flex>
                    <span style="color:orange">Inlet pressure kPa:</span>
                    <input
                      v-model="cyclone_eff_inlet_pres_kpa"
                      @input="changeInletPressureKpa"
                      placeholder="doldur"
                    />
                  </v-flex>
                  <v-flex>
                    <span
                      style="color:orange"
                    >Inlet pressure psig: {{$store.getters.cyclone_eff_inlet_pres_psig}}</span>
                  </v-flex>
                  <v-flex>
                    <span
                      style="color:orange"
                    >Inlet pressure bar: {{$store.getters.cyclone_eff_inlet_pres_bar}}</span>
                  </v-flex>
                  <v-flex>
                    <span style="color:orange">D50C Cut size:</span>
                    <input
                      v-model="cyclone_eff_d50c_cut_size"
                      @input="calculateD50CutSize"
                      placeholder="doldur"
                    />
                  </v-flex>
                  <v-flex>
                    <span style="color:orange">dx:</span>
                    <input v-model="cyclone_eff_dx" @input="changeDx" placeholder="doldur" />
                  </v-flex>
                  <v-flex>
                    <span style="color:orange">multiplier: {{$store.getters.cyclone_eff_multiplier}}</span>
                  </v-flex>
                  <v-flex>
                    <span
                      style="color:orange"
                    >D50C Cut size (app): {{$store.getters.cyclone_eff_d50c_cut_size_app}}</span>
                  </v-flex>
                  <v-flex>
                    <span style="color:orange">D50C base: {{ $store.getters.cyclone_eff_d50c_base }}</span>
                  </v-flex>
                  <v-flex>
                    <span
                      style="color:orange"
                    >Vol. flow corr.: {{ $store.getters.cyclone_eff_vol_flow }}</span>
                  </v-flex>
                  <v-flex>
                    <span
                      style="color:orange"
                    >inlet press. Corr.: {{$store.getters.cyclone_eff_inlet_pres_cor}}</span>
                  </v-flex>
                  <v-flex>
                    <span
                      style="color:orange"
                    >density corr. : {{$store.getters.cyclone_eff_density_cor}}</span>
                  </v-flex>
                  <v-flex>
                    <span
                      style="color:orange"
                    >Dc (cm), required: {{$store.getters.cyclone_eff_dc_cm_required}}</span>
                  </v-flex>
                  <v-flex>
                    <span
                      style="color:orange"
                    >Dc (inch), required: {{$store.getters.cyclone_eff_dc_inc_required}}</span>
                  </v-flex>

                  <v-divider></v-divider>

                  <v-flex>
                    <span
                      style="color:orange"
                    >Total flow rate(m3/h): {{$store.getters.cyclone_eff_total_flow_m3}}</span>
                  </v-flex>
                  <v-flex>
                    <span
                      style="color:orange"
                    >Total flow rate(gal): {{$store.getters.cyclone_eff_total_rate_gal}}</span>
                  </v-flex>
                  <v-flex>
                    <span style="color:orange">Base capa of req DC:</span>
                    <input
                      v-model="cyclone_base_capa"
                      @input="calculateBaseCapReqDc"
                      placeholder="doldur"
                    />
                  </v-flex>
                  <v-flex>
                    <span style="color:red">Number of cyclone: {{$store.getters.cyclone_number_of}}</span>
                  </v-flex>
                </v-flex>
                <v-flex xs2 mb-5 pa-4>
                  <v-img src="../../assets/hydro1.png"></v-img>
                </v-flex>
                <v-flex xs3 mb-5 pa-4>
                  <v-img src="../../assets/hydro2.png"></v-img>
                </v-flex>
                <v-flex xs3 mb-5 pa-4>
                  <v-img src="../../assets/hydro3.png"></v-img>
                </v-flex>
              </v-row>
              <v-row>
                <v-flex mb-5 pa-7>
                  <div class="text-right">
                    <v-btn @click="hydrocyclonePicker=false">CLOSE</v-btn>
                  </div>
                </v-flex>
              </v-row>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs6 mb-5 pa-1>
          <v-card>
            <v-card-title>HYDROCYCLONE FEED</v-card-title>
            <v-data-table dense :headers="columns" :items="items" :key="lastCheck">
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
          </v-card>
        </v-flex>
        <v-flex xs6 mb-5 pa-1>
          <v-card>
            <v-card-title>HYDROCYCLONE FEED 2</v-card-title>
            <v-data-table dense :headers="columns2" :items="items2"></v-data-table>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs4 mb-5 pa-1>
          <v-card>
            <v-card-title>HYDOROCYCLONE OF</v-card-title>
            <v-data-table dense :headers="columns3" :items="items3">
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
                    <div class="mt-4 title">Update Mass</div>
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
          </v-card>
        </v-flex>
        <v-flex xs4 mb-5 pa-1>
          <v-card>
            <v-card-title>HYDOROCYCLONE UF</v-card-title>
            <v-data-table dense :headers="columns4" :items="items4">
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
                    <div class="mt-4 title">Update Mass</div>
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
          </v-card>
        </v-flex>
        <v-flex xs4 mb-5 pa-1>
          <v-card height="355px">
            <v-data-table dense :headers="columns5" :items="items5" dark="false"></v-data-table>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs8 mb-5 pa-1>
          <div :key="lastCheck">
            <Plotly :data="data" :layout="layout"></Plotly>
          </div>
        </v-flex>
        <v-flex xs4 mb-5 pa-1>
          <v-card>
            <v-data-table dense :headers="columns6" :items="items6"></v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-dialog>
  </v-layout>
</template>

<script>
import store from "../../store/store";
import { mapGetters } from "vuex";
import { Plotly } from "vue-plotly";
import { networkInterfaces } from "os";
export default {
  components: {
    Plotly
  },
  methods: {
    // EFFICIENCY PARTS
    changeDx(event) {
      this.$store.commit("setX", {
        x: "cyclone_eff_dx",
        value: event.target.value
      });
      this.calculateMultiplier();
    },

    changeSolidDens(event) {
      this.$store.commit("setX", {
        x: "cyclone_eff_solid_den",
        value: event.target.value
      });
      this.calculateFlowrate();
      this.calculateDensityCorr();
      this.calculateTotalFlowRatebym3();
    },

    calculateFlowrate() {
      let newValue =
        (100 *
          (this.$store.getters.elekcikis_solid /
            this.$store.getters.cyclone_eff_solid_den)) /
        (this.$store.getters.elekcikis_solid /
          this.$store.getters.cyclone_eff_solid_den +
          this.$store.getters.elekcikis_waterSR / 1);
      this.$store.commit("setX", {
        x: "cyclone_eff_flow_rate",
        value: newValue
      });
      this.calculateVolFlowCorr();
    },

    changeInletPressureKpa(event) {
      this.$store.commit("setX", {
        x: "cyclone_eff_inlet_pres_kpa",
        value: event.target.value
      });
      this.calculateInletPressurePsig();
      this.calculateInletPressureBar();
    },

    calculateInletPressurePsig() {
      let newValue = parseFloat(
        this.$store.getters.cyclone_eff_inlet_pres_kpa * 0.145038
      );
      this.$store.commit("setX", {
        x: "cyclone_eff_inlet_pres_psig",
        value: newValue
      });
      this.calculateInletPressCorr();
    },

    calculateInletPressureBar() {
      let newValue = parseFloat(
        this.$store.getters.cyclone_eff_inlet_pres_kpa * 0.01
      );
      this.$store.commit("setX", {
        x: "cyclone_eff_inlet_pres_bar",
        value: newValue
      });
    },

    calculateD50CutSize(event) {
      this.$store.commit("setX", {
        x: "cyclone_eff_d50c_cut_size",
        value: event.target.value
      });
    },

    calculateMultiplier() {
      let newValue = parseFloat(
        this.$store.getters.cyclone_eff_dx * -0.0389 + 4.3985
      ).toFixed(3);
      this.$store.commit("setX", {
        x: "cyclone_eff_multiplier",
        value: newValue
      });
      this.calculateD50CutSizeApp();
    },

    calculateD50CutSizeApp() {
      let newValue = parseFloat(
        this.$store.getters.cyclone_eff_d50c_cut_size *
          this.$store.getters.cyclone_eff_multiplier
      ).toFixed(3);
      this.$store.commit("setX", {
        x: "cyclone_eff_d50c_cut_size_app",
        value: newValue
      });
      this.calculateD50Base();
    },

    calculateD50Base() {
      let newValue = parseFloat(
        this.$store.getters.cyclone_eff_d50c_cut_size_app /
          (this.$store.getters.cyclone_eff_vol_flow *
            this.$store.getters.cyclone_eff_inlet_pres_cor *
            this.$store.getters.cyclone_eff_density_cor)
      ).toFixed(3);
      this.$store.commit("setX", {
        x: "cyclone_eff_d50c_base",
        value: newValue
      });
      this.calculateDCbycm();
    },

    calculateVolFlowCorr() {
      let newValue = Math.pow(
        (53 - this.$store.getters.cyclone_eff_flow_rate) / 53,
        -1.43
      ).toFixed(3);
      this.$store.commit("setX", {
        x: "cyclone_eff_vol_flow",
        value: newValue
      });
    },

    calculateInletPressCorr() {
      let newValue = (
        3.27 * Math.pow(this.$store.getters.cyclone_eff_inlet_pres_kpa, -0.28)
      ).toFixed(3);
      this.$store.commit("setX", {
        x: "cyclone_eff_inlet_pres_cor",
        value: newValue
      });
    },

    calculateDensityCorr() {
      let newValue = Math.pow(
        1.65 / (this.$store.getters.cyclone_eff_solid_den - 1),
        0.5
      ).toFixed(3);
      this.$store.commit("setX", {
        x: "cyclone_eff_density_cor",
        value: newValue
      });
    },

    calculateDCbycm() {
      let newValue = Math.pow(
        this.$store.getters.cyclone_eff_d50c_base / 2.84,
        1 / 0.66
      ).toFixed(3);
      this.$store.commit("setX", {
        x: "cyclone_eff_dc_cm_required",
        value: newValue
      });
      this.calculateDCbyinc();
    },

    calculateDCbyinc() {
      let newValue = (
        this.$store.getters.cyclone_eff_dc_cm_required / 2.54
      ).toFixed(3);
      this.$store.commit("setX", {
        x: "cyclone_eff_dc_inc_required",
        value: newValue
      });
    },

    calculateTotalFlowRatebym3() {
      let newValue = parseFloat(
        parseFloat(
          this.$store.getters.elekcikis_solid /
            this.$store.getters.cyclone_eff_solid_den
        ) + parseFloat(this.$store.getters.elekcikis_waterSR)
      ).toFixed(3);
      this.$store.commit("setX", {
        x: "cyclone_eff_total_flow_m3",
        value: newValue
      });
      this.calculateTotalFlowRatebygal();
    },

    calculateTotalFlowRatebygal() {
      let newValue =
        (this.$store.getters.cyclone_eff_total_flow_m3 * 264.17) / 60;
      this.$store.commit("setX", {
        x: "cyclone_eff_total_rate_gal",
        value: newValue
      });
    },

    calculateBaseCapReqDc(event) {
      this.$store.commit("setX", {
        x: "cyclone_base_capa",
        value: event.target.value
      });
      this.calculateNumberOfCyclone();
    },

    calculateNumberOfCyclone() {
      let newValue = Math.round(
        this.$store.getters.cyclone_eff_total_rate_gal /
          this.$store.getters.cyclone_base_capa
      );
      this.$store.commit("setX", {
        x: "cyclone_number_of",
        value: newValue
      });
    },

    fakeHowMuch(event) {
      this.fakeHowMuch = event.target.value;
    },

    changeScreenSize(event) {
      this.howMuch = this.fakeHowMuch;
      this.reRender();
      this.checkValue();
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
      this.checkValue2();
      this.checkValue3();
      this.checkValue4();
      this.checkValue5();
      this.checkValue6();
      return (this.dialog = true);
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
    },

    checkValue3() {
      if (this.howMuch.length !== 0 && this.items3.length === 0) {
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
              CumOF: "",
              CumUF: "",
              Mass2: ""
            };
          } else {
            data = {
              id: i + ".Elek",
              Top: "",
              Bottom: "",
              Mass: "",
              CumOF: "",
              CumUF: "",
              Mass2: ""
            };
          }
          this.items3.push(data);
        }
      }
    },

    checkValue4() {
      if (this.howMuch.length !== 0 && this.items4.length === 0) {
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
              CumOF: "",
              CumUF: "",
              Mass2: ""
            };
          } else {
            data = {
              id: i + ".Elek",
              Top: "",
              Bottom: "",
              Mass: "",
              CumOF: "",
              CumUF: "",
              Mass2: ""
            };
          }
          this.items4.push(data);
        }
      }
    },

    checkValue5() {
      if (this.howMuch.length !== 0 && this.items5.length === 0) {
        var i;
        var topElement = parseInt(this.howMuch) + 2;
        for (i = 1; i < topElement; i++) {
          var data = "";
          data = {
            first: "",
            second: "",
            third: ""
          };
          this.items5.push(data);
        }
      }
    },

    checkValue6() {
      var data = "";
      data = {
        d25: "",
        d50: "",
        d75: "",
        valuei: ""
      };
      this.items6.push(data);
    },

    controlValues() {
      var i = "";
      for (i = 0; i < this.howMuch; i++) {
        if (this.items[i].Bottom.lenght !== 0) {
          this.items[i + 1].Top = this.items[i].Bottom;
        }
      }
    },

    massControlFeed() {
      let value = 0;
      let i = "";
      let certainValue = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].Mass.length !== 0) {
          certainValue = certainValue + 1;
          value = value + parseFloat(this.items[i].Mass);
        }
      }
      if (value !== 100 && certainValue === this.items.length) {
        alert("100 olmak zorundadir.");
      } else {
        this.calculateScreenFeed();
        for (i = 0; i < this.items2.length; i++) {
          this.items2[i].Top = this.items[i].Top;
          this.items2[i].Bottom = this.items[i].Bottom;
          this.items3[i].Top = this.items[i].Top;
          this.items3[i].Bottom = this.items[i].Bottom;
          this.items4[i].Top = this.items[i].Top;
          this.items4[i].Bottom = this.items[i].Bottom;
        }
      }
    },

    massControlOF() {
      let value = 0;
      let certainValue = 0;
      for (let i = 0; i < this.items3.length; i++) {
        if (this.items3[i].Mass.length !== 0) {
          certainValue = certainValue + 1;
          value = value + parseFloat(this.items3[i].Mass);
        }
      }
      if (value !== 100 && certainValue === this.items3.length) {
        alert("100 olmak zorundadir.");
      } else {
        this.totalOF = value;
        this.calculateScreenOF();
      }
    },

    massControlUF() {
      let value = 0;
      let certainValue = 0;
      for (let i = 0; i < this.items4.length; i++) {
        if (this.items4[i].Mass.length !== 0) {
          certainValue = certainValue + 1;
          value = value + parseFloat(this.items4[i].Mass);
        }
      }
      this.calculateScreenUF();
    },

    calculateScreenFeed() {
      this.items[0].CumUF = 100;
      this.items[0].CumOF = this.items[0].Mass;
      for (let i = 0; i < this.items.length - 1; i++) {
        this.items[i + 1].CumOF =
          parseFloat(this.items[i].CumOF) + parseFloat(this.items[i + 1].Mass);
        this.items[i + 1].CumUF = this.items[i].CumUF - this.items[i + 1].Mass;
      }
    },

    calculateScreenOF() {
      this.items3[0].CumUF = 100;
      this.items3[0].CumOF = this.items3[0].Mass;
      for (let i = 0; i < this.items3.length - 1; i++) {
        this.items3[i + 1].CumOF = (
          parseFloat(this.items3[i].CumOF) + parseFloat(this.items3[i + 1].Mass)
        ).toFixed(2);
        this.items3[i + 1].CumUF = (
          this.items3[i].CumUF - this.items3[i + 1].Mass
        ).toFixed(2);
      }
      this.calculateOFmass2();
    },

    calculateScreenUF() {
      this.items4[0].CumUF = 100;
      this.items4[0].CumOF = this.items4[0].Mass;
      for (let i = 0; i < this.items4.length - 1; i++) {
        this.items4[i + 1].CumOF = (
          parseFloat(this.items4[i].CumOF) + parseFloat(this.items4[i + 1].Mass)
        ).toFixed(2);
        this.items4[i + 1].CumUF = (
          this.items4[i].CumUF - this.items4[i + 1].Mass
        ).toFixed(2);
      }
      this.calculateUFmass2();
    },

    calculateOFmass2() {
      for (let i = 0; i < this.items3.length; i++) {
        this.items3[i].Mass2 = (
          (this.items3[i].Mass * this.$store.getters.hydrocyclone_of_solid) /
          (parseFloat(this.$store.getters.hydrocyclone_of_solid) +
            parseFloat(this.$store.getters.hydrocyclone_uf_solid))
        ).toFixed(3);
      }
      this.totalMassOF = 0;
      for (let i = 0; i < this.items3.length; i++) {
        this.totalMassOF = (
          parseFloat(this.totalMassOF) + parseFloat(this.items3[i].Mass2)
        ).toFixed(2);
      }
    },

    calculateUFmass2() {
      if (this.totalMassOF !== 0) {
        for (let i = 0; i < this.items4.length; i++) {
          this.items4[i].Mass2 = (
            (this.items4[i].Mass * (100 - this.totalMassOF)) /
            100
          ).toFixed(2);
        }
      }
    },

    calculateRatio(valueOfRatio) {
      let bigIndex;
      let smallIndex;

      console.log(valueOfRatio);
      for (let i = 0; i < this.items2.length; i++) {
        let Test = parseInt(this.items2[i].PartUF);
        if (Test < valueOfRatio) {
          smallIndex = i;
          break;
        }
      }
      console.log(smallIndex);
      for (let i = smallIndex; i > -1; i--) {
        let Test = parseInt(this.items2[i].PartUF);
        if (Test > valueOfRatio) {
          bigIndex = i;
          break;
        }
      }
      console.log(bigIndex);
      let y2 = this.items2[bigIndex].PartUF;
      let y1 = this.items2[smallIndex].PartUF;
      let x1 = this.items2[smallIndex].MeanSize;
      let x2 = this.items2[bigIndex].MeanSize;

      let returnValue = (
        x1 +
        ((x2 - x1) * (valueOfRatio - y1)) / (y2 - y1)
      ).toFixed(3);

      return returnValue;
    },

    calculateFeed2() {
      this.data[0].x = [];
      this.data[0].y = [];

      for (let i = 0; i < this.items2.length; i++) {
        this.items2[i].PartUF =
          (100 * this.items4[i].Mass2) /
          (parseFloat(this.items4[i].Mass2) + parseFloat(this.items3[i].Mass2));
        this.items2[i].PartOF = 100 - this.items2[i].PartUF;
        let value = 0;

        value = this.items2[i].Top * this.items2[i].Bottom;
        this.items2[i].MeanSize = Math.pow(value, 0.5);
        this.data[0].x.push(this.items2[i].MeanSize);
        this.data[0].y.push(this.items2[i].PartUF);
        this.reRender();
      }

      this.items6[0].d25 = this.calculateRatio(25);
      this.items6[0].d50 = this.calculateRatio(50);
      this.items6[0].d75 = this.calculateRatio(75);
      this.items6[0].valuei =
        (this.items6[0].d50 - this.items6[0].d25) / (2 * this.items6[0].d75);

      this.reRender();
    },

    reRender() {
      this.lastCheck += 1;
    },

    calculatePropertyTable() {
      for (let i = 0; i < this.items5.length; i++) {
        this.items5[i].first = (
          this.items4[i].CumOF - this.items[i].CumOF
        ).toFixed(2);
        this.items5[i].second = (
          this.items4[i].CumOF - this.items3[i].CumOF
        ).toFixed(2);
        this.items5[i].third = (
          this.items5[i].first / this.items5[i].second
        ).toFixed(2);
      }
    },

    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
      this.controlValues();
      this.massControlFeed();
      this.massControlOF();
      this.massControlUF();
      this.calculateFeed2();
      this.calculatePropertyTable();
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
    },
    cleanAll() {
      this.items = [];
      this.items2 = [];
      this.items3 = [];
      this.items4 = [];
      this.items5 = [];
      this.items6 = [];
      this.reRender();
    }
  },
  data() {
    return {
      data: [
        {
          y: [],
          x: [],
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
          title: "Geometric Mean Size, mm",
          color: "#5e9e7e"
        },
        yaxis: {
          title: "Partition %"
        }
      },
      dialog: false,
      hydrocyclonePicker: false,
      e1: 0,
      fakeHowMuch: "",
      howMuch: "",
      lastCheck: 0,
      snack: false,
      snackColor: "",
      snackText: "",
      totalMassOF: 0,
      totalOF: 0,
      items: [],
      items2: [],
      items3: [],
      items4: [],
      items5: [],
      items6: [],
      columns: [
        { text: "ID", value: "id" },
        { text: "TOP", value: "Top" },
        { text: "BOTTOM", value: "Bottom" },
        { text: "Mass %", value: "Mass" },
        { text: "Cum. OF", value: "CumOF" },
        { text: "Cum. UF", value: "CumUF" }
      ],
      columns2: [
        { text: "ID", value: "id" },
        { text: "TOP", value: "Top" },
        { text: "BOTTOM", value: "Bottom" },
        { text: "Part UF", value: "PartUF" },
        { text: "Part OF", value: "PartOF" },
        { text: "Mean Size Geo", value: "MeanSize" }
      ],
      columns3: [
        { text: "ID", value: "id" },
        { text: "TOP", value: "Top" },
        { text: "BOTTOM", value: "Bottom" },
        { text: "Mass", value: "Mass" },
        { text: "Cum OF", value: "CumOF" },
        { text: "Cum UF", value: "CumUF" },
        { text: "Mass", value: "Mass2" }
      ],
      columns4: [
        { text: "ID", value: "id" },
        { text: "TOP", value: "Top" },
        { text: "BOTTOM", value: "Bottom" },
        { text: "Mass %", value: "Mass" },
        { text: "Cum OF %", value: "CumOF" },
        { text: "Cum UF %", value: "CumUF" },
        { text: "Mass", value: "Mass2" }
      ],
      columns5: [
        { text: "u-f", value: "first" },
        { text: "u-o", value: "second" },
        { text: "(u-f)/(u-o)", value: "third" }
      ],
      columns6: [
        { text: "D25", value: "d25" },
        { text: "D50", value: "d50" },
        { text: "D75", value: "d75" },
        { text: "I", value: "valuei" }
      ]
    };
  }
};
</script>