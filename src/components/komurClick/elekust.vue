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
      <span style="color:orange">Upper Screen</span>
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
                <input v-model="elekust_a" @input="changeUstElek_a" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">b:</span>
                <input v-model="elekust_b" @input="changeUstElek_b" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Screen Area: {{$store.getters.elekust_area}}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">Open Area:</span>
                <input
                  v-model="elekust_openArea"
                  @input="changeUstElek_openArea"
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
                <input v-model="elekust_u" @input="changeUstElek_u" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">o:</span>
                <input v-model="elekust_o" @input="changeUstElek_o" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">f:</span>
                <input v-model="elekust_f" @input="changeUstElek_f" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">U: {{ $store.getters.elekust_U }}</span>
              </v-flex>
              <v-flex>
                <span style="color:orange">O: {{$store.getters.elekust_O}}</span>
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
    changeUstElek_openArea(event) {
      this.$store.commit("changeUstElek_openArea", event.target.value);
    },
    changeUstElek_area() {
      let calculatedArea;
      calculatedArea = parseFloat(this.elekust_a) * parseFloat(this.elekust_b);
      this.$store.commit("changeUstElek_area", calculatedArea);
    },
    changeUstElek_a(event) {
      this.$store.commit("changeUstElek_a", event.target.value);
      this.changeUstElek_area();
    },
    changeUstElek_b(event) {
      this.$store.commit("changeUstElek_b", event.target.value);
      this.changeUstElek_area();
    },
    changeUstElek_f(event) {
      this.$store.commit("changeUstElek_f", event.target.value);
      this.calculate_O();
      this.calculate_U();
    },
    changeUstElek_o(event) {
      this.$store.commit("changeUstElek_o", event.target.value);
      this.calculate_O();
      this.calculate_U();
    },
    changeUstElek_u(event) {
      this.$store.commit("changeUstElek_u", event.target.value);
      this.calculate_O();
      this.calculate_U();
    },
    calculate_O() {
      let newElekust_O;
      newElekust_O =
        (this.$store.getters.solid * (this.elekust_f - this.elekust_u)) /
        (this.elekust_o - this.elekust_u);
      this.$store.commit("changeUstElek_O", newElekust_O);
    },
    calculate_U() {
      let newElekust_U;
      newElekust_U =
        (this.$store.getters.solid * (this.elekust_o - this.elekust_f)) /
        (this.elekust_o - this.elekust_u);
      this.$store.commit("changeUstElek_U", newElekust_U);
    }
  },
  computed: {
    ...mapGetters([
      "elekust_u",
      "elekust_o",
      "elekust_f",
      "elekust_U",
      "elekust_O",
      "elekust_a",
      "elekust_b",
      "elekust_area",
      "elekust_openArea"
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

