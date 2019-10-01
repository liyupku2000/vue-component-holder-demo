<template>
<div>
  <CityDashboard />
</div>
</template>

<script>
import Vue from 'vue'
import VueHolder from 'vue-component-holder'

Vue.use(VueHolder, {
  customHooks: {
    preInitMvms: [ 'prefetch', 'beforeInit' ],
    postInitMvms: [ 'init', 'inited' ]
  }
})


export default {
  name: 'App',
  components: {
    CityDashboard: () => import('./pages/CityDashboard' /* webpackChunkName: 'pages.CityDashboard' */)
  }
}
</script>