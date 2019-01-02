<template>
  <div class="chat-wrap">
    <div class="ipt-box">
      <input v-model="question" />
      <button @click="send">发送</button>
    </div>
    <div class="content">
      <div class="list" v-for="(item, index) in answerList" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
  import './app.less';
  import {
    mapState,
    mapActions
  } from "vuex";
  export default {
    name: "chat",
    data: function() {
      return {
        question: '',
      }
    },
    computed: mapState({
      answerList: state => state.chatStore.answerList
    }),
    methods: {
      ...mapActions({
        chat: 'chatStore/chat'
      }),
      send: function() {
        this.chat(this.question)
        this.question = ''
      }
    }
  }
</script>
