import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储全局需要用到的数据。相当于data
    count: 0,
    num:666
  },
  // vuex中的计算属性
  getters:{
    result(state){
      return state.count * state.num
    }
  },
  // 处理同步的方法
  mutations: {
    // 相当于methods
    add(){
      this.state.count++
    },
    // 传参
    addFun(state,num){
      state.count += num
    },
    reduce(state){
      state.count--
    }
  },
  // 处理异步的方法
  actions: {
    // reduceFun(){
    //   setTimeout(() => {
    //     this.commit('reduce')
    //   },1000)
    // }

    // 将commit解构出来放在{}中当做一个对象，通过属性名可直接调用该方法
    reduceFun({commit}){
      setTimeout(() => {
        commit('reduce')
      },1000)
    }
  },
  modules: {
  }
})
