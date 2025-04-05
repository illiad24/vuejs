<template>
  <div class="wrapper">
    <search-filter title="Піб" v-model="filters.name" />
    <range-filter
      title="Стаж"
      :minMaxRange="{ from: 0, to: 100 }"
      v-model="filters.experience"
    />
  </div>
</template>

<script>
import SearchFilter from "./SearchFilter.vue";
import RangeFilter from "./RangeFilter.vue";

export default {
  name: "FilterComponent",
  components: {
    SearchFilter,
    RangeFilter,
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  computed: {
    filters: {
      get() {
        return this.modelValue;
      },
      set(newVal) {
        this.$emit("update:modelValue", newVal);
      },
    },
  },
};
</script>

<style lang="css" scoped>
.wrapper {
  display: flex;
  gap: 30px;
}
</style>
