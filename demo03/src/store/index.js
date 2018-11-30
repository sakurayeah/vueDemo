import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

const defaultState = {
  show: true
}

export default new vuex.Store({
  state: defaultState
})