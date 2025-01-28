<template>
  <div class="body">
    <div class="items">
      <MessageItem
        v-for="(message, index) in messagesArr"
        :message="message"
        :key="index"
        @delete="onDelete(index)"
      />
    </div>
    <div class="actions">
      <div class="input">
        <input v-model.lazy="message" />
      </div>
      <button type="button" class="button" @click="sendMessage">
        Надіслати
      </button>
    </div>
  </div>
</template>

<script>
import MessageItem from "./MessageItem.vue";
export default {
  name: "ChatContainer",
  components: {
    MessageItem,
  },
  data() {
    return {
      message: null,
      messagesArr: [],
    };
  },
  methods: {
    sendMessage() {
      console.log(this.message);
      if (this.message) this.messagesArr.push(this.message);
      this.message = null;
    },
    onDelete(index) {
      this.messagesArr.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
