<template>
  <div>Товар</div>
  <div v-if="productsItem" class="item">
    <div>{{ productsItem.name }}</div>
    <div>{{ productsItem.price }}</div>
  </div>
  <div v-else>Завантаження...</div>
  <router-link
    :to="{
      name: 'shopCategory',
      params: { categoryId: categoryId },
    }"
  >
    Назад
  </router-link>
  <button @click="onDelete(categoryId, productsItem.id)">Видалити Товар</button>
  <button @click="onProductAdd(categoryId, productsItem.id)">Редагувати</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductItem",
  methods: {
    ...mapActions(["deleteProduct"]),
    onProductAdd(categoryId, productId) {
      this.$router.push({
        name: "shopForm",
        params: {
          categoryId,
          productId,
        },
      });
    },
    onDelete(categoryId, productId) {
      this.deleteProduct({ categoryId, productId });
      this.$router.push({
        name: "shopCategory",
        params: { categoryId: this.categoryId },
      });
    },
  },
  computed: {
    ...mapGetters(["getProductsItem"]),
    productId() {
      return Number(this.$route.params.id);
    },
    categoryId() {
      return Number(this.$route.params.categoryId);
    },
    productsItem() {
      const item = this.getProductsItem(this.categoryId, this.productId);
      return item;
    },
  },
};
</script>

<style lang="css" scoped>
.item {
  padding: 30px;
  border: 1px solid #000;
}
</style>
