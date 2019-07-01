import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import "lib-flexible/flexible.js"
import { Row, Col } from 'vant'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
import qs from 'qs'

import Vuelazyload from 'vue-lazyload'

Vue.use(Row).use(Col);
Vue.use(Vuelazyload)

Vue.config.productionTip = false

new Vue({
		router,
  render: h => h(App),
}).$mount('#app')
