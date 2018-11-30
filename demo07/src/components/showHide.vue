<template>
  <div>
    <button @click="$store.dispatch('switchShowHide')">按钮</button>
    结果：{{ $store.state.homeStore.show ? 'show' : 'hide' }}
    <br>
    相反：{{ doneOpposite }}
  </div>
</template>

<script>
export default {
  computed: {
    doneOpposite() {
      return this.$store.getters.opposite
    }
  }
}
</script>

