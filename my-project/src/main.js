// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Layout from './components/Layout.vue'
import 'element-ui/lib/theme-chalk/index.css'
import VRouetr from 'vue-router'
import VResource from 'vue-resource'
import VRouetrConfig from './router/router'
import store from './store'

Vue.use(ElementUI)
Vue.use(VRouetr)
Vue.use(VResource)

let router = new VRouetr(VRouetrConfig)
Vue.http.interceptors.push(function (request, next) { // 拦截器
  // 跨域携带cookie
  request.credentials = true
  next()
})
// 每次跳转验证
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
//   _vue.$http.post(_vue.getUrl()+"/login/checkSession.do" , {emulateJSON:true})
//   .then((response)=>{
//       if(response.body.code=="500"){//session过期
//           window.location.href= _vue.getUrl()+"/admin/";
//       }else{
//           next();
//       }
//   }, (response)=> {
//       this.$Message.error("路由校验session失败！", 3);
// });
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Layout },
  template: '<Layout/>'
})
