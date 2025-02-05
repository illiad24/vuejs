<template>
  <div v-if="bagList.length">
    <h2>Корзина</h2>
    <div class="items">
      <BagItem
        v-for="bagItem in bagList"
        :key="bagItem.id"
        :productData="bagItem"
      />
    </div>
    <div class="total">
      Разом до оплати: <span>{{ totalPriceInCurrency }}{{ currency }}</span>
      <button @click="payProductBag">Оплатити</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BagItem from "./BagItem.vue";
export default {
  name: "Bag",
  components: {
    BagItem,
  },
  computed: {
    ...mapGetters([
      "bagList",
      "productPrice",
      "currency",
      "totalPriceInCurrency",
    ]),
    totalPrice() {
      return this.bagList.reduce((total, item) => {
        return total + item.price * item.count;
      }, 0);
    },
  },
  methods: {
    ...mapActions(["payProductBag"]),
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
