<template>
  <div>
    <div>
      <label> {{ title }} </label>
      <input type="text" v-model="searchValue" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFilter",
  props: {
    title: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  computed: {
    searchValue: {
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

<style lang="scss" scoped></style>
