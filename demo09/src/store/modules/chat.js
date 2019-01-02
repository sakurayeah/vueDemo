import ajax from '../../common/ajax';

const state = {
  answerList: ['11111 11111 11111', '333 55555 777'],
}

const getters = {};

const actions = {
  async chat(context, question = '') {
    const res = await ajax('chat.json', { data: question });
    context.commit('chat', res);
  }
}

const mutations = {
  chat(state, res = {}) {
    const { answer = '' } = res;
    state.answerList.push(answer);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
