import Vue from 'vue'
import CompositionAPI from "@vue/composition-api"
Vue.use(CompositionAPI)
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
