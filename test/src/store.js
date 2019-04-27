import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { //存值 共享
  count:1 
};

const mutations = { //改值
  add(state,num){
    state.count += num;
  },
  reduce(state){
    state.count -- ;
  }
};

const getters = { //计算属性
  count:function(state){
    return state.count += 1;
  }
};

const  actions = { //异步操作 最终需要调用mutations中的方法
  addAction({commit}){
    commit('add',100)
  },
  reduceAction({commit}){
    commit('reduce');
  }
};

const modulesA = {
  state,
  mutations,
  getters,
  actions
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    a : modulesA 
  }
})
