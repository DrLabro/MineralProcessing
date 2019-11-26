<template>
  <v-layout row justify-center>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn 
          fab    
          x-small
          class="transparent"
          absolute    
          @click.native.stop="dialog=true"  
          ></v-btn>
      </template>
      <span style="color:orange">Bottom Screen</span>
    </v-tooltip>
    <v-dialog v-model="dialog" max-width="900px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">HYDROCYCLONE UNDERFLOW PROPERTIES</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 1" step="2">HYDROCYCLONE UNDERFLOW PROPERTIES</v-stepper-step>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card>
              <v-flex>
                <span style="color:orange">Solid(t/h) : {{$store.getters.hydrocyclone_uf_solid}}  </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">Water(t/h) : {{$store.getters.hydrocyclone_uf_water}} </span>
              </v-flex>
              <v-flex>
                <span style="color:orange">SR :  </span>
                <input v-model="$store.getters.hydrocyclone_uf_SR" @input="changeSR" placeholder="doldur" />
              </v-flex>
              <v-flex>
                <span style="color:orange">f & PSD </span>
                <v-btn x-small @click="e1 = 2"> GO </v-btn>
              </v-flex>
              <v-flex>
                <span style="color:orange">f' : {{$store.getters.hydrocyclone_uf_f_ustu}} </span>
              </v-flex>   
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="2">
              <v-card>
                  <p> Buraya Neler Gelecek Neler </p>
              </v-card>
              <v-btn @click="e1=1" x-small> BACK </v-btn>
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
      let newValue = (this.$store.getters.elekcikis_solid - this.$store.getters.hydrocyclone_of_solid)
      this.$store.commit("setX", {
        x: 'hydrocyclone_uf_solid',
        value: newValue.toFixed(3)
      });
      
    },
  calculateWater() {
    let newValue = (this.$store.getters.hydrocyclone_uf_solid * this.$store.getters.hydrocyclone_uf_f_ustu)
      this.$store.commit("setX", {
        x: 'hydrocyclone_uf_water',
        value: newValue.toFixed(3)
      });
  },
  changeSR(event) {
      this.$store.commit("setX", {
        x: 'hydrocyclone_uf_SR',
        value: event.target.value
      });  
    this.calculateFustu()
    return this.dialog = true    
  },
  calculateFustu() {
    let newValue = ( 100 - this.$store.getters.hydrocyclone_uf_SR) / this.$store.getters.hydrocyclone_uf_SR
    this.$store.commit("setX", {
      x: 'hydrocyclone_uf_f_ustu',
      value: newValue.toFixed(3)
    })
    this.calculateWater()
  }

  },
  computed: {
    ...mapGetters([
    "hydrocyclone_uf_SR"
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

