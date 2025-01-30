<template>
  <div class="items">
    <ProductItem
      v-for="productItem in productsList"
      :productData="productItem"
      :key="productItem.id"
      @addProductToCart="$emit('addProductToCart', productItem.id)"
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
    productsList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
