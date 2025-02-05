<template>
  <div class="item" v-if="productData">
    <div class="item__wrap">
      <div class="item__title">{{ productData.title }}</div>
      <div class="item__body">
        <div class="item__price">
          {{ productPrice(productData) }}{{ currency }}
        </div>
        <button
          class="item__button"
          @click="removeProductFromBag(productData.id)"
        >
          Відмовитись
        </button>
      </div>
    </div>
    <div class="item__body">
      <button @click="chengeCounter(-1)">-</button>
      <input type="number" v-model="productData.count" @input="validateCount" />
      <button @click="chengeCounter(1)">+</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BagItem",
  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions(["removeProductFromBag"]),
    chengeCounter(value) {
      if (this.productData.count >= 1) this.productData.count += value;
      this.validateCount();
    },
    validateCount() {
      if (this.productData.count < 1 || isNaN(this.productData.count)) {
        this.productData.count = 1;
      }
    },
  },
  computed: {
    ...mapGetters(["productPrice", "currency"]),
  },
};
</script>

<style lang="css" scoped>
.item {
}
.item__wrap {
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
  justify-content: flex-end;
}
.item__price {
}
.item__button {
}
</style>
