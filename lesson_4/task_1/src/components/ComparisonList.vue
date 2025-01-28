<template>
  <div>
    <h1>Списки порівняння</h1>
    <div class="block">
      <h2>Мобільні телефони</h2>

      <div>Кількість товарів:{{ productData.length }}</div>
      <div class="items">
        <ComparisonItem :items="productData" />
      </div>
    </div>
  </div>
</template>

<script>
import ComparisonItem from "./ComparisonItem.vue";
export default {
  name: "ComparisonList",
  components: {
    ComparisonItem,
  },
  data() {
    return {
      productData: [
        "https://content2.rozetka.com.ua/goods/images/big/364481335.jpg",
        "https://content2.rozetka.com.ua/goods/images/big/451918151.png",
        "https://content1.rozetka.com.ua/goods/images/big/452122238.jpg",
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.items {
  display: grid;
  margin: 0 auto;
  max-width: 500px;
  grid-template-columns: repeat(3, 1fr);
}
.block {
  padding: 16px;
  border: 1px solid #000;
  border-radius: 16px;
}
</style>
