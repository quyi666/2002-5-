import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/iconfont/iconfont'

Vue.config.productionTip = false

// 配置vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
