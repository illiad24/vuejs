<template>
  <div>
    <div>{{ label }}</div>
    <div>
      <!--  -->
      <CheckboxItem
        v-for="dataItem in dataItems"
        :key="dataItem.id"
        :dataItem="dataItem"
        v-model="checkboxValues"
      />
    </div>
  </div>
</template>

<script>
import CheckboxItem from "../FormComponents/CheckboxItem.vue";
export default {
  name: "FilterBlock",
  components: {
    CheckboxItem,
  },

  props: {
    label: {
      type: String,
      default: "",
    },
    mode: {
      type: Number,
      default: 1,
    },
    dataItems: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    checkboxValues: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
