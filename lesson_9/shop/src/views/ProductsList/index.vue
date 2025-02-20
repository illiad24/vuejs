<template>
  <div>
    <h2>Список категорій товару</h2>
  </div>
  <div>
    <ul>
      <li v-for="productCategory in getProductList" :key="productCategory.id">
        <router-link
          :to="{
            name: 'shopCategory',
            params: { categoryId: productCategory.id },
          }"
        >
          {{ productCategory.category }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductsList",
  computed: {
    ...mapGetters(["getProductList"]),
  },
  created() {
    this.loadData();
  },
  methods: {
    ...mapActions(["loadData"]),
  },
};
</script>

<style lang="scss" scoped></style>
