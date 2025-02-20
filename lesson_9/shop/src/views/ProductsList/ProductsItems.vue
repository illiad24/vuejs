<template>
  <div class="items">
    <router-link
      class="item"
      :to="{
        name: 'shopItem',
        params: { id: item.id },
      }"
      v-for="item in productsItems"
      :key="item.id"
    >
      <div class="item__title">{{ item.name }}</div>
      <div class="item__price">{{ item.price }}</div>
    </router-link>
  </div>

  <router-link
    :to="{
      name: 'shop',
    }"
  >
    Назад
  </router-link>

  <div>
    <button @click="onAdd(categoryId)">Додати Товар</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductsItems",
  computed: {
    ...mapGetters(["getProductsItems"]),
    categoryId() {
      return this.$route.params.categoryId;
    },
    productsItems() {
      return this.getProductsItems(this.categoryId);
    },
  },
  methods: {
    onAdd(categoryId) {
      this.$router.push({
        name: "shopForm",
        params: { categoryId },
      });
    },
  },
};
</script>

<style lang="css" scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 40px;
}
.item {
  padding: 30px;
  border: 1px solid #000;
}
</style>
