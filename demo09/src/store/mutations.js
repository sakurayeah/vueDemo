/**
 * mutations
 * 更新状态
 */

// const mutations = {
//   switchShowHide(state) {
//     state.homeStore.show = state.homeStore.show ? false : true;
//   }
// }
// export default mutations;

export function switchShowHide(state) { // 函数接受 state 作为第一个参数
  state.homeStore.show = state.homeStore.show ? false : true;
}
