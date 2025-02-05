<template>
  <div>
    <h2>Список товарів</h2>
    <div class="items">
      <product-item
        v-for="productItem in productsListData"
        :productData="productItem"
        :key="productItem.id"
      />
    </div>
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
    productsListData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.items {
  padding: 10px;
  border: 1px solid #000;
  max-width: 600px;
}
</style>
