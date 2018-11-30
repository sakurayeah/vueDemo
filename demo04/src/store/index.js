import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

// 默认的状态
const defaultState = {
  show: true
}

// 更新状态
const mutations = {
  switchShowHide(state) { // 函数接受 state 作为第一个参数
    state.show = state.show ? false : true;
  }
}

export default new vuex.Store({
  state: defaultState,
  mutations,
})