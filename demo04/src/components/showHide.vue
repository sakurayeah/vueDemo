<template>
  <div>
    <button @click="$store.commit('switchShowHide')">按钮</button>
    结果：{{ $store.state.show ? 'show' : 'hide' }}
  </div>
</template>