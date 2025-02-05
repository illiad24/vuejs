<template>
  <div class="item">
    <div class="item__title">{{ productData.title }}</div>
    <div class="item__body">
      <div class="item__price">
        {{ productPrice(productData) }}{{ currency }}
      </div>
      <button class="item__button" @click="addProductToBag(productData)">
        Купити
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductItem",
  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters(["currency", "currencyList", "productPrice"]),
  },
  methods: {
    ...mapActions(["addProductToBag"]),
  },
};
</script>

<style lang="css" scoped>
.item {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 15px;
}
.item__title {
}
.item__body {
  display: flex;
  gap: 16px;
  justify-content: space-between;
}
.item__price {
}
.item__button {
}
</style>
