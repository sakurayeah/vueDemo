import Vue from 'vue';
import App from './components/app.vue';
import './common/reset.less';

Vue.config.debug = true;//开启错误提示

new Vue({
  el: '#root',
  render: h => h(App)
});