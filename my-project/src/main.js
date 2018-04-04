// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/Apple.vue'
import Orange from './components/Orange.vue'
import AppleDetails from './components/AppleDetails.vue'
import Vuex from 'vuex'

Vue.use(VRouter)
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  mutations: {
    increment (state, price) {
      state.totalPrice += price
    },
    decrement (state, price) {
      state.totalPrice -= price
    }
  }
})
let router = new VRouter({
  routes: [
    {
      path: '/apple',
      components: {
        Apple,
        Orange
      },
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
  store,
  components: { App },
  template: '<App/>'
})
