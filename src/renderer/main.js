import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'normalize.css/normalize.css' // 仅使用import 'normalize.css'会报错
/**
 * 在electron-vue中使用css框架需要注意
 * https://simulatedgreg.gitbooks.io/electron-vue/content/cn/using_css_frameworks.html
 */

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
