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
          <v-stepper-step :complete="e1 > 1" step="1">COAL TAILING</v-stepper-step>
          <v-divider></v-divider>          
        </v-stepper-header>
        <v-stepper-items>
        <v-stepper-content step="1">
            <v-card>
              <v-flex>
                <span style="color:orange">Solid(t/h) : {{$store.getters.coal_tailing_solid}} </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">CC ash:  </span>
                <input v-model="coal_tailing_ccAsh" @input="changeccAsh" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Moist:  </span>
                <input v-model="coal_tailing_moist" @input="changeMoist" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">Water With Tailing: {{$store.getters.coal_tailing_water}} </span>
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
       let newValue = (this.$store.getters.hydrocyclone_uf_solid - this.$store.getters.coal_clean_solid).toFixed(3)
        this.$store.commit("setX", {
        x: 'coal_tailing_solid',
        value: newValue
        })
      this.calculateWaterTailing()
      this.dialog = true
    },
    changeccAsh(event) {
      this.$store.commit("setX", {
      x: 'coal_tailing_ccAsh',
      value: event.target.value
      })
    },
    changeMoist(event) {
      this.$store.commit("setX", {
      x: 'coal_tailing_moist',
      value: event.target.value
      })      
    },
    calculateWaterTailing() {
      let newValue = (this.$store.getters.coal_tailing_moist * this.$store.getters.coal_tailing_solid / 100).toFixed(3)
      this.$store.commit("setX", {
      x: 'coal_tailing_water',
      value: newValue
      })      
    }
  },
  computed: {
    ...mapGetters([
      'coal_tailing_moist',
      'coal_tailing_ccAsh'
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

