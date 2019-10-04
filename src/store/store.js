import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstname: '',
    lastname: '',
    email: ''
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
    }
  },
  getters: {
    flavor: state => state.flavor,
    firstname: state => state.firstname,
    lastname: state => state.lastname,
    email: state => state.email
  }
})
