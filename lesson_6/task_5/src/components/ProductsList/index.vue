<template>
  <div class="items">
    <ProductItem
      v-for="productItem in productList"
      :key="productItem.id"
      :productData="productItem"
    />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductsList",
  components: {
    ProductItem,
  },
  props: {
    productList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
</style>
