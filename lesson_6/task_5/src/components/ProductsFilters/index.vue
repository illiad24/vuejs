<template>
  <div class="filters">
    <FiltersBlock
      title="Продавці"
      :filtersList="sellersList"
      @filterCheck="$emit('filterCheck', { $event, type: 'seller' })"
    />
    <FiltersBlock
      title="Бренди"
      :filtersList="brandsList"
      @filterCheck="$emit('filterCheck', { $event, type: 'brand' })"
    />
  </div>
</template>

<script>
import FiltersBlock from "./FiltersBlock/";
import { sellersList, brandsList } from "@/constants/productsData.js";

export default {
  name: "ProductsFilters",
  components: {
    FiltersBlock,
  },
  props: {
    filtersList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sellersList,
      brandsList,
    };
  },
};
</script>

<style lang="css" scoped>
.filters {
  display: grid;
  gap: 16px;
  align-content: start;
}
</style>
