<template>
  <h1>Ноутбуки</h1>
  <div class="wrapper">
    <ProductsFilters @filterCheck="onCheck" />
    <ProductList :productList="filteredProductsList" />
  </div>
</template>

<script>
import { productList } from "@/constants/productsData.js";
import ProductList from "../ProductsList/";
import ProductsFilters from "../ProductsFilters/";

export default {
  name: "FilterLayout",
  components: {
    ProductList,
    ProductsFilters,
  },
  data() {
    return {
      productList: productList,
      selectedFilters: {
        seller: [],
        brand: [],
      },
    };
  },
  methods: {
    onCheck(filter) {
      const filtersArray = this.selectedFilters[filter.type];

      if (filtersArray.includes(filter.$event)) {
        this.selectedFilters[filter.type] = filtersArray.filter(
          (value) => value !== filter.$event
        );
      } else {
        this.selectedFilters[filter.type].push(filter.$event);
      }
    },
  },
  computed: {
    filteredProductsList() {
      const { seller, brand } = this.selectedFilters;

      if (seller.length === 0 && brand.length === 0) {
        return this.productList;
      }

      return this.productList.filter((product) => {
        const sellerMatch =
          seller.length === 0 || seller.includes(product.seller);
        const brandMatch = brand.length === 0 || brand.includes(product.brand);
        return sellerMatch && brandMatch;
      });
    },
  },
};
</script>

<style lang="css" scoped>
.wrapper {
  display: grid;
  gap: 34px;
  grid-template-columns: 200px 1fr;
}
</style>
