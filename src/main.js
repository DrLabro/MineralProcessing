import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/store';
import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard'
import Komur from './views/Komur'
import Other from './views/Other'

Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  { path: '/', component: Dashboard },
  { path: '/komur', component: Komur },
  { path: '/other', component: Other }
]

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')