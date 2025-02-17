<template>
  <div class="items">
    <category-item v-for="item in data" :key="item.id" :item-data="item" />
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";

export default {
  name: "CategoryList",
  components: {
    CategoryItem,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.items {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
</style>
