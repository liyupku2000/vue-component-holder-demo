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