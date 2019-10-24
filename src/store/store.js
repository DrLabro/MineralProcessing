import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // BESLEME
    solid: '',
    water: '',
    solidDensity: '',
    solidFR: '',
    totalFR: '',
    // UST ELEK
    elekust_a:'',
    elekust_b:'',
    elekust_area:'',
    elekust_openArea:'',
    elekust_u:'',
    elekust_o:'',
    elekust_f:'',
    elekust_U:'',
    elekust_O:'',
    // ALT ELEK
    elekalt_a:'',
    elekalt_b:'',
    elekalt_area:'',
    elekalt_openArea:'',
    elekalt_u:'',
    elekalt_o:'',
    elekalt_U:'',
    elekalt_O:'',
    // ELEK UST ÇIKIŞ
    elekUstCikis_solid:'',
    elekUstCikis_water:'',
    elekUstCikis_solidDensity:'',
    elekUstCikis_solidFR:'',
    elekUstCikis_totalFR:'',
    elekUstCikis_eff:''

  },

  mutations: {
    changeUstCikis_solid(state, elekUstCikis_solid) {
      state.elekUstCikis_solid = elekUstCikis_solid
    },
    changeUstCikis_water(state, elekUstCikis_water) {
      state.elekUstCikis_water = elekUstCikis_water
    },
    changeUstCikis_solidDensity(state, elekUstCikis_solidDensity) {
      state.elekUstCikis_solidDensity = elekUstCikis_solidDensity
    },
    changeUstCikis_solidFR(state, elekUstCikis_solidFR) {
      state.elekUstCikis_solidFR = elekUstCikis_solidFR
    },
    changeUstCikis_totalFR(state, elekUstCikis_totalFR) {
      state.elekUstCikis_totalFR = elekUstCikis_totalFR
    },
    changeUstCikis_eff(state, elekUstCikis_eff) {
      state.elekUstCikis_eff = elekUstCikis_eff
    },
    changeAltElek_openArea(state, elekalt_openArea) {
      state.elekalt_openArea = elekalt_openArea
    },    
    changeAltElek_area(state, elekalt_area) {
      state.elekalt_area = elekalt_area
    },    
    changeAltElek_b(state, elekalt_b) {
      state.elekalt_b = elekalt_b
    },    
    changeAltElek_a(state, elekalt_a) {
      state.elekalt_a = elekalt_a
    },     
    changeAltElek_u(state, elekalt_u) {
      state.elekalt_u = elekalt_u
    },
    changeAltElek_o(state, elekalt_o) {
      state.elekalt_o = elekalt_o
    },    
    changeAltElek_O(state, elekalt_O) {
      state.elekalt_O = elekalt_O
    },
    changeAltElek_U(state, elekalt_U) {
      state.elekalt_U = elekalt_U
    },
    changeUstElek_openArea(state, elekust_openArea) {
      state.elekust_openArea = elekust_openArea
    },    
    changeUstElek_area(state, elekust_area) {
      state.elekust_area = elekust_area
    },    
    changeUstElek_b(state, elekust_b) {
      state.elekust_b = elekust_b
    },    
    changeUstElek_a(state, elekust_a) {
      state.elekust_a = elekust_a
    },     
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
    }   
  },
  getters: {
    // Besleme
    solid: state => state.solid,
    water: state => state.water,
    solidDensity: state => state.solidDensity,
    solidFR: state => state.solidFR,
    totalFR: state => state.totalFR,
    // Elek Ust
    elekust_U: state => state.elekust_U,
    elekust_O: state => state.elekust_O,
    elekust_o: state => state.elekust_o,
    elekust_f: state => state.elekust_f,
    elekust_u: state => state.elekust_u,
    elekust_a: state => state.elekust_a,
    elekust_b: state => state.elekust_b,
    elekust_openArea: state => state.elekust_openArea,
    elekust_area: state => state.elekust_area,
    // Elek alt
    elekalt_U: state => state.elekalt_U,
    elekalt_O: state => state.elekalt_O,
    elekalt_o: state => state.elekalt_o,
    elekalt_f: state => state.elekalt_f,
    elekalt_u: state => state.elekalt_u,
    elekalt_a: state => state.elekalt_a,
    elekalt_b: state => state.elekalt_b,
    elekalt_openArea: state => state.elekalt_openArea,
    elekalt_area: state => state.elekalt_area,
    // Elek Üst Cikis
    elekUstCikis_solid: state => state.elekUstCikis_solid,
    elekUstCikis_water: state => state.elekUstCikis_water,
    elekUstCikis_solidDensity: state => state.elekUstCikis_solidDensity,
    elekUstCikis_solidFR: state => state.elekUstCikis_solidFR,
    elekUstCikis_totalFR: state => state.elekUstCikis_totalFR,
    elekUstCikis_eff: state => state.elekUstCikis_eff
  }
})
