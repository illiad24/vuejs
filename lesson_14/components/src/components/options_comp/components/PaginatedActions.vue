<template>
  <div>
    <!-- <button
      v-for="pageNum in pagesNumber"
      :key="pageNum"
      class="button"
      :disabled="pageNum === currentPage"
      @click="onSelectPage(pageNum)"
    >
      {{ pageNum }}
    </button> -->
    <!-- <v-pagination :length="pagesNumber"></v-pagination> -->

    <v-btn
      v-for="pageNum in pagesNumber"
      :key="pageNum"
      :active="pageNum === currentPage"
      :icon="`mdi-numeric-${pageNum}`"
      height="40"
      variant="text"
      width="40"
      border
      @click="onSelectPage(pageNum)"
    ></v-btn>
  </div>
</template>

<script>
export default {
  name: "PaginationActions",
  props: {
    pagesNumber: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onSelectPage(pageNum) {
      this.$emit("onSelectPage", pageNum);
    },
  },
};
</script>

<style lang="scss" scoped></style>
