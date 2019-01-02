import Vue from 'vue';
import App from './components/app.vue';
import router from './routes.js';
import store from './store';
import './common/reset.less';

Vue.config.debug = true;//开启错误提示

// router
// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

// store
// Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中
// 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到

// 开发环境使用mockjs
process.env.NODE_ENV === 'development' && require('../mock.js')

new Vue({
  router,
  store,
  el: '#root',
  render: h => h(App)
});