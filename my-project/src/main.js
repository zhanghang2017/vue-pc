// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/Apple.vue'
import Orange from './components/Orange.vue'
import AppleDetails from './components/AppleDetails.vue'

Vue.use(VRouter)

let router = new VRouter({
  routes: [
    {
      path: '/apple',
      component: Apple,
      children: [
        {
          path: 'details',
          component: AppleDetails
        }
      ]
    },
    {
      path: '/orange',
      component: Orange
    },
    {
      path: '/',
      redirect: '/apple'
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
