import Vue from 'vue'
import * as ElementUI from 'element-ui'
import lodash from 'lodash'
import jquery from 'jquery'
import echarts from 'echarts'
import Cookies from 'js-cookie'

import App from './App.vue'
import router from './routers/router'
import store from './stores'
import Components from './components'
import * as beans from './beans'
import './sw/registerServiceWorker'
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/sass/index.scss'


Vue.config.productionTip = false
Vue.use(ElementUI)
Components.init(Vue)

Vue.prototype = Object.assign(Vue.prototype, {
  _: lodash,
  $: jquery,
  echarts,
  cookies: Cookies,
  beans
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
