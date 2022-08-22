import Vue from 'vue'
import App from './App.vue'
import Vidle from 'v-idle'

Vue.config.productionTip = false

Vue.use(Vidle)

new Vue({
  render: h => h(App),
}).$mount('#app')
