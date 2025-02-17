<template>
  <div>
    <category-list :data="getCategoryList" />
  </div>
  <div>
    <product-list :productsData="getProductsList" />
  </div>
</template>

<script>
import categoryList from "./components/CategoryList/index.vue";
import ProductList from "./components/ProductsList/index.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { categoryList, ProductList },
  computed: {
    ...mapGetters(["getCategoryList", "getProductsList"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
