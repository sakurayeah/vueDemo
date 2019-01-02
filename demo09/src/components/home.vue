<template>
  <div class="home-wrap">
    <div class="welcome">Welcome to home page</div>
    <div 
      class="list"
      v-for="item in list"
      :key="item.id"
    >
      {{ item.title }}
    </div>
    <show-hide></show-hide>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShowHide from './showHide.vue';
import "./app.less";
export default {
  name: "home",
  created: function(){
    this.$store.dispatch('homeStore/homeInit')
  },
  computed: mapState({
    list: state => state.homeStore.list
  }),
  components: {
    ShowHide
  },
}
</script>