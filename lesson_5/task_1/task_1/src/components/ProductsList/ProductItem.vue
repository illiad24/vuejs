<template>
  <a :href="productData.url" class="product-card">
    <div class="product-image">
      <img :src="productData.image" alt="Малина (ремонтантна) Ері" />
      <span class="icon">⬜</span>
    </div>
    <div class="product-info">
      <span class="store"
        >📦 {{ productData.store }}
        <span class="status">{{ productData.status }}</span></span
      >
      <h3 class="product-title">{{ productData.title }}</h3>
    </div>
  </a>
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
body {
  font-family: Arial, sans-serif;
  background-color: #181818;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.product-card {
  background-color: #ed9191;
  border-radius: 10px;
  overflow: hidden;
  width: 250px;
  text-align: left;
}

.product-image {
  position: relative;
}

.product-image img {
  width: 100%;
  display: block;
  border-radius: 10px 10px 0 0;
}

.icon {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px;
  border-radius: 50%;
  font-size: 12px;
}

.product-info {
  padding: 10px;
}

.store {
  font-size: 14px;
  color: #d1a;
}

.status {
  color: #2ecc71;
}

.product-title {
  font-size: 16px;
  margin-top: 5px;
}
</style>
