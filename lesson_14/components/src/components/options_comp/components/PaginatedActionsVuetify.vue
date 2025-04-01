<template>
  <div>
    <v-pagination
      v-model="page"
      :length="pagesNumber"
      @update:modelValue="onSelectPage"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "PaginationActions",
  data() {
    return {
      page: this.currentPage,
    };
  },
  watch: {
    currentPage(newPage) {
      this.page = newPage;
    },
  },
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
};
</script>

<style lang="scss" scoped></style>
