<template>
  <div class="item">
    <div class="item__image">
      <img :src="productData.imgSrc" alt="Image" />
    </div>
    <div class="item__title">{{ productData.title }}</div>
    <div class="item__price">{{ productData.price }}</div>
    <div class="item__brand">{{ productData.brand }}</div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="css" scoped>
.item {
  display: grid;
  gap: 16px;
}
.item__image {
  max-width: 300px;
}
.item__image img {
  width: 100%;
}
.item__title {
  font-size: 24px;
}
.item__price {
}
.item__brand {
  color: red;
}
</style>
