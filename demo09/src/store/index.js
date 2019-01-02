import Vue from 'vue';
import vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import homeStore from './modules/home';
import chatStore from './modules/chat';

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    homeStore,
    chatStore,
  },
  mutations,
  actions,
  getters,
})