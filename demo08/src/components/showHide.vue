<template>
  <div>
    <button @click="switchShowHide">按钮</button>
    结果：{{ show? 'show' : 'hide' }}
    <br>
    相反：{{ opposite }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions([
      'switchShowHide'
    ])
  },
  computed: {
    ...mapGetters([
      'opposite',
    ]),
    ...mapState({
      show(state) {
        return state.homeStore.show;
      }
    })
  }
};
</script>