import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //存值 共享
    count:1 
  },
  mutations: { //改值
    add(state,num){
      state.count += num;
    },
    reduce(state){
      state.count -- ;
    }
  },
  getters:{ //计算属性
    num(state){
      return state.count *= 20;
    }
  },
  actions: { //异步操作 最终需要调用mutations中的方法
    addAction({commit}){
      commit.add(num)
    }
  }
})
