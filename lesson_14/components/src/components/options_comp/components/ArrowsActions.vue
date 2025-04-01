<template>
  <div class="buttons">
    <button
      class="button"
      :disabled="currentPage === 1"
      @click="onSelectPage(-1)"
    >
      <font-awesome-icon :icon="['far', 'circle-left']" />
    </button>
    <button
      class="button"
      :disabled="currentPage === pagesNumber"
      @click="onSelectPage(1)"
    >
      <font-awesome-icon :icon="['far', 'circle-right']" />
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationActions",
  props: {
    pagesNumber: {
      type: Array,
      default: () => [],
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onSelectPage(num) {
      const newPage = this.currentPage + num;
      this.$emit("onSelectPage", newPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
  button {
    font-size: 40px;
    &[disabled] {
      color: grey;
    }
  }
}
</style>
