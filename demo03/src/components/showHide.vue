<template>
  <div>
    <button @click="$store.state.show = false">按钮</button>
    结果：{{ $store.state.show ? 'show' : 'hide' }}
  </div>
</template>