/*
* sotre总状态数据
* */
import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import search from './modules/search';
import classify from './modules/classify';
import general from './modules/general';

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    home,
    search,
    classify,
    general
  }
})
