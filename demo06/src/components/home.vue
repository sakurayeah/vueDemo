<template>
  <div>
    Welcome to home page
    <show-hide></show-hide>
    </div>
</template>

<script>
import ShowHide from './showHide.vue';
export default {
  name: "home",
  components: {
    ShowHide
  }
}
</script>