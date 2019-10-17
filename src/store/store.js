import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstname: '',
    lastname: '',
    email: '',
    slamtanki: '',
    agirortamSiklonu: '',
    siklon: '',
    agirortamTanki: '',
    tikiner: '',
    manyetik: '',
    vakumFiltre: '',
    agirortamTamburu: '',
    spiral: '',

  },
  mutations: {
    changeName(state, firstname) {
      state.firstname = firstname
    },
    changeLast(state, lastname) {
        state.lastname = lastname
    },
    changeEmail(state, email) {
        state.email = email
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
  }
})
