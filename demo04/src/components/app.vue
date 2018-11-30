<template>
  <div>
    <header>{{msg}}</header>
    <div>
      <router-link to="/">home</router-link>
      <router-link to="/chat">chat</router-link>
    </div>
    <br>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "vue demo"
    };
  },
};
</script>