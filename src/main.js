import Vue from 'vue'
import VueHolder from 'vue-component-holder'
import App from './App.vue'

Vue.use(VueHolder)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
