/*
* 用于分类列表的管理模块
* */
import {reqCategoryList}from'../../api';
import {
  RECEIVE_CATEGORYLIST,
}from'./mutation-types';

const state={
   categoryList:[] //获取分类列表
};

const mutations={
  [RECEIVE_CATEGORYLIST](state,categoryList){
    state.categoryList = categoryList;
  }
};

const actions={
    async getCategoryList({commit}){
         const result = await  reqCategoryList();
       if(result.code === 0){
           commit (RECEIVE_CATEGORYLIST,result.data.categoryL1List);
       }else {
         alert('获取数据失败')
       }
  }
};
const getters={

};

export  default {
  state,
  mutations,
  actions,
  getters
}
