<template>
  <div>
    <label>{{ filterData.title }}</label>
    <input
      type="checkbox"
      value="{{ filterData.title }}"
      @change="onCheck(filterData.title)"
    />
  </div>
</template>

<script>
export default {
  name: "FilterItem",
  props: {
    filterData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onCheck(value) {
      this.$emit("filterCheck", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
