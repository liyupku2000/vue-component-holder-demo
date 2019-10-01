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

Vue.use(VueHolder, {
  customHooks: {
    preInitMvms: [ 'prefetch', 'beforeInit' ],
    postInitMvms: [ 'init', 'inited' ]
  }
})


export default {
  name: 'App',
  components: {
    LogPanel,
    CityDashboard: () => import('./pages/CityDashboard' /* webpackChunkName: 'pages.CityDashboard' */)
  }
}
</script>