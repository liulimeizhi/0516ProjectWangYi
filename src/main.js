/*
* 入口js
* */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import 'lib-flexible/flexible'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,//配置路由器
  store  //配置vuex全局都可以使用$router
})

