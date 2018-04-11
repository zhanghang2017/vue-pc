// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Layout from './components/Layout.vue'
import 'element-ui/lib/theme-chalk/index.css'
import VRouetr from 'vue-router'
import VResource from 'vue-resource'
import VRouetrConfig from './router/router'

Vue.use(ElementUI)
Vue.use(VRouetr)
Vue.use(VResource)

let router = new VRouetr(VRouetrConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
