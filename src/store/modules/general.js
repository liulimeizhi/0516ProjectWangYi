/*
* 识物导航列表
* */
import {reqRecommendTabs} from '../../api'
import {
  RECEIVE_RECOMMENDTABS,
  UPDATE_INDEX
} from './mutation-types';

const state ={
  tabIndex: 0, // 当前被选中的分类下标
  recommendTabs:[] //识物列表导航栏
};

const mutations ={

  [UPDATE_INDEX] (state, tabIndex) {
    state.tabIndex = tabIndex;
  },
   [RECEIVE_RECOMMENDTABS](state,recommendTabs){
       state.recommendTabs = recommendTabs;
   }
};
const actions ={
  // 更新当前下标的同步action
  updateTabIndex ({commit}, tabIndex) {
    commit(UPDATE_INDEX, tabIndex)
  },

  //识物获取导航列表的Actions
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
