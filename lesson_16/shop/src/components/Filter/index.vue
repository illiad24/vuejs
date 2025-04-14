<template>
  <div>Filter</div>
  <div>
    <FilterBlock
      v-model="selectedFilters.selectedSellers"
      :dataItems="sellerItems"
      label="продавці"
    />
  </div>
  <div>
    <FilterBlock
      v-model="selectedFilters.selectedBrands"
      :dataItems="brandItems"
      label="Бренди"
    />
  </div>
</template>

<script>
import FilterBlock from "./FilterBlock.vue";
import { mapGetters, mapActions } from "vuex";
import { where } from "firebase/firestore/lite";
export default {
  name: "Filter",
  components: {
    FilterBlock,
  },
  data() {
    return {
      selectedFilters: {
        selectedSellers: [],
        selectedBrands: [],
      },
    };
  },
  computed: {
    ...mapGetters("sellers", { sellerItems: "getItemsList" }),
    ...mapGetters("brands", { brandItems: "getItemsList" }),
  },
  methods: {
    ...mapActions("products", {
      loadProductList: "loadList",
      loadFilteredData: "loadFilteredData",
    }),
    ...mapActions("brands", { loadBrandsList: "loadList" }),
    ...mapActions("sellers", { loadSellerList: "loadList" }),
    loadData() {
      const { selectedBrands, selectedSellers } = this.selectedFilters;
      const filters = [];

      if (selectedSellers.length) {
        filters.push(where("seller", "in", selectedSellers));
      }
      if (selectedBrands.length) {
        filters.push(where("brand", "in", selectedBrands));
      }
      if (filters.length > 0) {
        this.loadFilteredData({ filters });
      } else {
        this.loadProductList();
      }
    },
  },
  watch: {
    selectedFilters: {
      handler(newValue) {
        this.$router.push({ query: { ...newValue } });
      },
      deep: true,
    },
    "$route.query": {
      handler() {
        console.log(1);
        this.loadData();
      },
      immediate: true,
    },
  },
  created() {
    this.loadProductList();
    this.loadSellerList();
    this.loadBrandsList();
  },
};
</script>

<style lang="scss" scoped></style>
