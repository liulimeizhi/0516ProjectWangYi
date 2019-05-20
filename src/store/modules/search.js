
import{reqInitSearch} from '../../api'
import {
  RECEIVE_INITSEARCH
}from'../modules/mutation-types'

const state ={
  initSearch:{}//定义一个空的对象存search数据
};

const mutations={
    [RECEIVE_INITSEARCH] (state,initsearch){
      state.initSearch = initsearch;
 }
 };
const actions = {
   async getInitSearch({commit}){
      const result = await reqInitSearch();
        if(result.code=== '200'){
          commit(RECEIVE_INITSEARCH,result.data)
        }
  }
};
export default {
  state,
  mutations,
  actions,
}
