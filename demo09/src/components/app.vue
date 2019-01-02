<template>
  <div>
    <div class="header-wrap">
      <div>{{msg}}</div>
      <div>
        <router-link to="/">home</router-link>
        <router-link to="/chat">chat</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import "./app.less";
export default {
  name: "app",
  data() {
    return {
      msg: "vue demo"
    };
  }
};
</script>