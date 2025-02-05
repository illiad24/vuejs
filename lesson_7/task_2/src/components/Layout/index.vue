<template>
  <div>Розмітка</div>
  <Header />
  <ProductsList :productsListData="products" />
  <Bag />
</template>

<script>
import { products } from "@/constants";
import ProductsList from "../ProductsList/index.vue";
import Bag from "../Bag/index.vue";
import Header from "../Header/index.vue";
export default {
  name: "Layout",
  components: {
    ProductsList,
    Header,
    Bag,
  },
  data() {
    return {
      products,
    };
  },
};
</script>

<style lang="css" scoped></style>
