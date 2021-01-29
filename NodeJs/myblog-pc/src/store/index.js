import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
  },
  actions: {
    setToken: (state, token) => {
      // 将token存储到状态管理器里
      state.token = token
      // console.log(state.token)
      // 将token存储在localStorage中mytoken：是key值  token：是value值
      localStorage.setItem('mytoken', token)
    },
    removeToken: state => {
      state.token = null;
      localStorage.removeItem('mytoken');
    }
  },
  modules: {
  }
})
