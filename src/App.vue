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

Vue.use(VueHolder)

export default {
  name: 'App',
  components: {
    LogPanel,
    CityDashboard
  }
}
</script>