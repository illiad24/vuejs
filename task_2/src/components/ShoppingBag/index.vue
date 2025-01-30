<template>
  <div class="items" v-if="bagIdList.length">
    <h1>Кошик</h1>
    <BagItem
      v-for="product in productsList"
      :productData="product"
      :key="product.id"
      @deleteProduct="$emit('deleteProduct', product.id)"
      @updateCount="onChangeCount"
    />

    <div>Загальна сума -{{ totalPrice }}</div>
  </div>
</template>

<script>
import BagItem from "./BagItem.vue";
import { notebooksList } from "../../constants/productsData.js";
export default {
  name: "ShoppingBag",
  components: { BagItem },
  props: {
    bagIdList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      notebooksList,
    };
  },
  methods: {
    onChangeCount({ id, count }) {
      const item = this.bagIdList.find((item) => item.id === id);
      if (item) {
        item.count = count;
      }
    },
  },
  computed: {
    productsList() {
      const filteredList = this.notebooksList.filter((product) =>
        this.bagIdList.some((item) => item.id === product.id)
      );

      return filteredList.map((product) => {
        const bagItem = this.bagIdList.find((item) => item.id === product.id);
        product.count = bagItem ? bagItem.count : 0;
        return product;
      });
    },
    totalPrice() {
      return this.productsList.reduce((total, product) => {
        const bagItem = this.bagIdList.find((item) => item.id === product.id);
        return total + (bagItem ? product.price * bagItem.count : 0);
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.items {
  padding: 50px 0;
}
</style>
