import Vue from 'vue';
import App from './components/app.vue';
import router from './routes.js'
import './common/reset.less';

Vue.config.debug = true;//开启错误提示

// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  el: '#root',
  render: h => h(App)
});