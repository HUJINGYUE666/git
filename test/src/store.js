import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
       count:1
    },
    mutations:{
        add(state,num){
            state.count += num
        },
        reduce(state,num){
            state.count -= num
        }
    },
    // getters:{
    //     num(state){
    //       return state.count * 2
    //     }
    // },
    actions:{
        addAction({commit},num){
            commit('add',num);
        }
    },
    // actions: {
    //     // action中做异步操作 最终需要调用mutations中的方法修改状态
    //     addAction({commit},num){
    //      commit('add',num);
    //     }
    // }

})
