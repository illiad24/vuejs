<template>
  <div>
    <h2>Останні переглянуті товари</h2>

    <div class="items">
      <ProductCart
        v-for="(product, index) in productData"
        :key="index"
        :product="product"
        @like="onLike"
      />
    </div>
  </div>
</template>

<script>
import ProductCart from "./ProductCart.vue";
export default {
  name: "LastVievProductsList",
  components: {
    ProductCart,
  },
  data() {
    return {
      productData: [
        {
          id: 1,
          image:
            "https://content.rozetka.com.ua/goods/images/big/473822717.jpg",
          title: "Смартфон Samsung Galaxy S23",
          availible: "У наявності",
          price: 27999,
        },
        {
          id: 2,
          image:
            "https://content.rozetka.com.ua/goods/images/big/486195992.jpg",
          title: "Ноутбук Apple MacBook Air M2",
          availible: "У наявності",
          price: 39999,
        },
        {
          id: 3,
          image:
            "https://content2.rozetka.com.ua/goods/images/big/386370043.jpg",
          title: "Навушники Sony WH-1000XM5",
          availible: "Немає в наявності",
          price: 12999,
        },
        {
          id: 4,
          image:
            "https://content1.rozetka.com.ua/goods/images/big/495784570.jpg",
          title: "Телевізор LG OLED55C3",
          availible: "У наявності",
          price: 54999,
        },
        {
          id: 5,
          image:
            "https://content1.rozetka.com.ua/goods/images/big/469528067.jpg",
          title: "Ігрова консоль PlayStation 5",
          availible: "У наявності",
          price: 18999,
        },
      ],
    };
  },
  methods: {
    onLike() {},
  },
};
</script>

<style lang="css" scoped>
.items {
  display: grid;
  margin: 0 auto;
  max-width: 500px;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
