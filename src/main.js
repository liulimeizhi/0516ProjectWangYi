/*
* 入口js
* */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import 'lib-flexible/flexible'

import Footer from './components/FootGuide/FootGuide.vue';
import Header from './components/Header/Header.vue';
import Split from './components/Split/Split.vue';
import HeaderSlot from './components/HeaderSlot/HeaderSlot.vue';


Vue.config.productionTip = false
//注册全局组件

Vue.component('Footer', Footer);
Vue.component('Header', Header);
Vue.component('Split', Split);
Vue.component('HeaderSlot', HeaderSlot);


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,//配置路由器
  store  //配置vuex全局都可以使用$router
})

