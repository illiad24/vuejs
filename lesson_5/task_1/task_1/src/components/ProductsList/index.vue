<template>
  <div class="items">
    <ProductItem
      v-for="product in products"
      :productData="product"
      :key="product.id"
    />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import { products } from "@/constants/productsData.js";
console.log(products);
export default {
  name: "ProductsList",
  components: {
    ProductItem,
  },
  data() {
    return {
      products,
    };
  },
};
</script>

<style lang="css" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>
