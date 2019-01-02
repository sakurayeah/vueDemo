/**
 * actions
 * 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中 处理
 */

// const actions = {
//   switchShowHide(context){
//     context.commit('switchShowHide');
//   },
// }
// export default actions;

export function switchShowHide(context){ // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
  context.commit('switchShowHide');
  // 可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
}

