import Vue from 'vue'
import index2 from './index2.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(index2)
}).$mount('#app')
