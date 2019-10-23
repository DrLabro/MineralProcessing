import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slamtanki: '',
    agirortamSiklonu: '',
    siklon: '',
    agirortamTanki: '',
    tikiner: '',
    manyetik: '',
    vakumFiltre: '',
    agirortamTamburu: '',
    spiral: '',
    solid: '',
    water: '',
    solidDensity: '',
    solidFR: '',
    totalFR: '',
    elekust_u:'',
    elekust_o:'',
    elekust_f:'',
    elekust_U: '',
    elekust_O: ''
  },

  mutations: {
    changeUstElek_f(state, elekust_f) {
      state.elekust_f = elekust_f
    },  
    changeUstElek_u(state, elekust_u) {
      state.elekust_u = elekust_u
    },
    changeUstElek_o(state, elekust_o) {
      state.elekust_o = elekust_o
    },    
    changeUstElek_O(state, elekust_O) {
      state.elekust_O = elekust_O
    },
    changeUstElek_U(state, elekust_U) {
      state.elekust_U = elekust_U
    },
    changeSolid(state, solid) {
      state.solid = solid
    },
    changeWater(state, water) {
      state.water = water
    },
    changeSolidDensity(state, solidDensity) {
      state.solidDensity = solidDensity
    },
    changeSolidFR(state, solidFR) {
      state.solidFR = solidFR
    },
    changeTotalFR(state, totalFR) {
      state.totalFR = totalFR
    },
    changeslamtanki(state, slamtanki) {
      state.slamtanki = slamtanki
    },
    changeagirortamSiklonu(state, agirortamSiklonu) {
      state.agirortamSiklonu = agirortamSiklonu
    },
    changeagirortamTanki(state, agirortamTanki) {
      state.agirortamTanki = agirortamTanki
    },
    changetikiner(state, tikiner) {
    state.tikiner = tikiner
    },
    changemanyetik(state, manyetik) {
    state.manyetik = manyetik
    }, 
    changevakumFiltre(state, vakumFiltre) {
      state.vakumFiltre = vakumFiltre
    },
    changeagirortamTamburu(state, agirortamTamburu) {
      state.agirortamTamburu = agirortamTamburu
    },
    changespiral(state, spiral) {
      state.spiral = spiral
    },
    changesiklon(state, siklon) {
      state.siklon = siklon
    }    
  },
  getters: {
    firstname: state => state.firstname,
    lastname: state => state.lastname,
    email: state => state.email,
    slamtanki: state => state.slamtanki,
    agirortamSiklonu: state => state.agirortamSiklonu,
    agirortamTanki: state => state.agirortamTanki,
    tikiner: state => state.tikiner,
    manyetik: state => state.manyetik,
    vakumFiltre: state => state.vakumFiltre,
    agirortamTamburu: state => state.agirortamTamburu,
    spiral: state => state.spiral,
    siklon: state => state.siklon,
    solid: state => state.solid,
    water: state => state.water,
    solidDensity: state => state.solidDensity,
    solidFR: state => state.solidFR,
    totalFR: state => state.totalFR,
    elekust_U: state => state.elekust_U,
    elekust_O: state => state.elekust_O,
    elekust_o: state => state.elekust_o,
    elekust_f: state => state.elekust_f,
    elekust_u: state => state.elekust_u

  }
})
