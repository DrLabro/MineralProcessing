<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          x-small
          text
          icon
          color="indigo"
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
          <v-stepper-step :complete="e1 > 1" step="1">SCREEN PROPERTIES</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">SCREEN DESIGN</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 3" step="3">SCREEN EFFICIENCY</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card>
              <v-flex>
                <span style="color:orange">Screen Capacity : {{$store.getters.solid}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">Screen Design</span>
                <v-btn x-small @click="e1 = 2">--></v-btn>
              </v-flex>
              <v-flex>
                <span style="color:orange">Screen Efficiency</span>
                <v-btn x-small @click="e1 = 3">--></v-btn>
              </v-flex>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card>
              <v-flex>
                <span style="color:orange">Screen Capacity: {{$store.getters.solid}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">a:</span>
                <input v-model="elekust_a" @input="changeAltElek_a" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">b:</span>
                <input v-model="elekust_b" @input="changeAltElek_b" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Screen Area: {{$store.getters.elekalt_area}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">Open Area:</span>
                <input
                  v-model="elekust_openArea"
                  @input="changeAstElek_openArea"
                  placeholder="doldur"
                />
              </v-flex>
            </v-card>
            <v-btn x-small @click="e1=1">Back</v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card>
              <v-flex>
                <span style="color:orange">u:</span>
                <input v-model="elekalt_u" @input="changeAltElek_u" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">o:</span>
                <input v-model="elekalt_o" @input="changeAltElek_o" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">f: {{$store.getters.elekust_f}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">U: {{$store.getters.elekalt_U}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">O: {{$store.getters.elekalt_O}}</span>
              </v-flex>
            </v-card>
            <v-btn @click="e1 = 2" x-small>BACK</v-btn>
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
    changeAstElek_openArea(event) {
      this.$store.commit("changeAstElek_openArea", event.target.value);
    },
    changeAstElek_area() {
      let calculatedArea;
      calculatedArea = parseFloat(this.elekalt_a) * parseFloat(this.elekalt_b);
      this.$store.commit("changeAltElek_area", calculatedArea);
    },
    changeAltElek_a(event) {
      this.$store.commit("changeAltElek_a", event.target.value);
      this.changeAltElek_area();
    },
    changeAltElek_b(event) {
      this.$store.commit("changeAltElek_b", event.target.value);
      this.changeAltElek_area();
    },
    changeAltElek_f(event) {
      this.$store.commit("changeAltElek_f", event.target.value);
      this.calculate_O();
      this.calculate_U();
    },
    changeAltElek_o(event) {
      this.$store.commit("changeAltElek_o", event.target.value);
      this.calculate_O();
      this.calculate_U();
    },
    changeAltElek_u(event) {
      this.$store.commit("changeAltElek_u", event.target.value);
      this.calculate_O();
      this.calculate_U();
    },
    calculate_O() {
      let newElekalt_O;
      newElekalt_O =
        (this.$store.getters.solid *
          (this.$store.getters.elekust_f - this.elekalt_u)) /
        (this.elekalt_o - this.elekalt_u);
      this.$store.commit("changeAltElek_O", newElekalt_O);
    },
    calculate_U() {
      let newElekalt_U;
      newElekalt_U =
        (this.$store.getters.solid *
          (this.elekalt_o - this.$store.getters.elekust_f)) /
        (this.elekalt_o - this.elekalt_u);
      this.$store.commit("changeAltElek_U", newElekalt_U);
    }
  },
  computed: {
    ...mapGetters([
      "elekalt_u",
      "elekalt_o",
      "elekalt_U",
      "elekalt_O",
      "elekalt_a",
      "elekalt_b",
      "elekalt_area",
      "elekalt_openArea"
    ])
  },
  data() {
    return {
      dialog: false,
      e1: 0
    };
  }
};
</script>

