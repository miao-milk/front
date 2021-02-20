import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'
import Vue2OrgTree from 'vue2-org-tree';

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart', VueECharts)
Vue.use(Vue2OrgTree)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
