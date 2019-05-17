import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'


window.eventBus = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
