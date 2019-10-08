<template>
<div>
  <LogPanel />
  <CityDashboard />
</div>
</template>

<script>
import Vue from 'vue'
import VueHolder from 'vue-component-holder'
import { LogPanel } from 'vue-component-holder/log'
import CityDashboard from './pages/CityDashboard'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWindowClose)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.use(VueHolder)

export default {
  name: 'App',
  components: {
    LogPanel,
    CityDashboard
  }
}
</script>