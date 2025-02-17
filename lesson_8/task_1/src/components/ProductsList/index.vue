<template>
  <div class="items">
    <product-item
      v-for="productData in productsData"
      :key="productData.id"
      :itemData="productData"
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
    productsData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.items {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
