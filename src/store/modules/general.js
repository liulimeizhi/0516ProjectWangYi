/*
* 识物导航列表
* */
import {reqRecommendTabs} from '../../api'
import {
  RECEIVE_RECOMMENDTABS,
} from './mutation-types';

const state ={
  recommendTabs:[] //识物列表导航栏
};

const mutations ={
   [RECEIVE_RECOMMENDTABS](state,recommendTabs){
       state.recommendTabs = recommendTabs;
   }
};
const actions ={
    async getRecommendTabs({commit}){
     const result = await reqRecommendTabs();
     if(result.code ==='200'){
       commit (RECEIVE_RECOMMENDTABS,result.data);
     }
    }
};
const gettes = {

};

export default {
  state,
  mutations,
  actions,
  gettes
}
