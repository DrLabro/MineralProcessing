<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn 
          fab    
          x-small
          class="transparent"
          absolute    
          @click.native.stop="calculateSolid"
          ></v-btn>
      </template>
      <span style="color:orange">Bottom Screen</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="700px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">CLEAN COAL</v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
          <v-stepper-items>
        <v-stepper-content step="1">
            <v-card>
              <v-flex>
                <span style="color:orange">Solid(t/h) : {{$store.getters.coal_clean_solid}}  </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">CC ash:  </span>
                <input v-model="coal_clean_ccAsh" @input="changeccAsh" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Moist:  </span>
                <input v-model="coal_clean_moist" @input="changeMoist" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Water With Product: {{$store.getters.coal_clean_waterProduct}} </span>
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
    calculateSolid() {
      let newValue = this.$store.getters.hydrocyclone_uf_solid * (this.$store.getters.coal_feed_ash - this.$store.getters.coal_tailing_ccAsh ) / (this.$store.getters.coal_clean_ccAsh - this.$store.getters.coal_tailing_ccAsh)
      this.$store.commit("setX", {
        x: 'coal_clean_solid',
        value: newValue
      });      
      this.dialog = true
      this.calculateWaterProduct()
    },
    changeccAsh(event) {
      this.$store.commit("setX", {
        x: 'coal_clean_ccAsh',
        value: event.target.value
      })
    },
    changeMoist(evenet) {
      this.$store.commit("setX", {
        x: 'coal_clean_moist',
        value: event.target.value
      })
    },
    calculateWaterProduct() {
      let newValue = this.$store.getters.coal_clean_moist * this.$store.getters.coal_clean_solid / 100
      this.$store.commit("setX", {
      x: 'coal_clean_waterProduct',
      value: newValue
      })
    }
  },
  computed: {
    ...mapGetters([
      'coal_clean_moist',
      'coal_clean_ccAsh'
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

