<template>
  <div>
    <label>{{ title }}</label>
    <FilterItem
      v-for="filterItem in filtersList"
      :key="filterItem.id"
      :filterData="filterItem"
      @filterCheck="$emit('filterCheck', $event)"
    />
  </div>
</template>

<script>
import FilterItem from "./FilterItem.vue";
export default {
  name: "FilterBlock",
  components: {
    FilterItem,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    filtersList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
