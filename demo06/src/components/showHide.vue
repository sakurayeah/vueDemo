<template>
  <div>
    <button @click="$store.dispatch('switchShowHide')">按钮</button>
    结果：{{ $store.state.homeStore.show ? 'show' : 'hide' }}
  </div>
</template>
