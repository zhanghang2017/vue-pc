import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    userAccount: '',
    password: '',
    logStatus: false
  },
  mutations: {
    onLogin (state, user) {
      console.log('********', user)
      state.userAccount = user.userAccount
      state.password = user.password
      state.logStatus = true
    },
    quitLogin (state) {
      state.userAccount = ''
      state.password = ''
      state.logStatus = false
    }
  }
})

export default store
