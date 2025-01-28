<template>
  <div class="item">
    <div class="item__message">{{ message }}</div>
    <div class="actions">
      <button @click="onLike(1)">like</button>
      <button @click="onLike(-1)">dislike</button>
      <button @click="onDelete">delete</button>
    </div>
    <div :style="{ color: likeColor }">
      Likes: <span>{{ likeCount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      likeCount: 0,
    };
  },
  methods: {
    onLike(value) {
      this.likeCount += value;
    },
    onDelete() {
      this.$emit("delete");
    },
  },
  computed: {
    likeColor() {
      return this.likeCount >= 0 ? "green" : "red";
    },
  },
};
</script>

<style lang="css" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.item__message {
  color: black;
  font-weight: 500;
}
.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
