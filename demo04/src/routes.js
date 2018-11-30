import Vue from 'vue';
import Router from 'vue-router';
// import 路由组件。
import homePage from './components/home.vue';
import chatPage from './components/chat.vue';

Vue.use(Router);

// 定义路由
const routes = [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/chat',
      component: chatPage
    }
  ]

// 创建 router 实例，然后传 `routes` 配置
export default new Router({
  routes,
})