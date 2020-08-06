import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'element-ui'
import './mock/mockServer' // 加载mockServer即可
import './fiters' // 加载过滤器

Vue.component(Button.name, Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
