<template>
  <div>
    <h4>{{ title }}</h4>
    <div>
      <select v-model="selectValue">
        <option value="">Витберіть значення</option>
        <option :value="item.id" v-for="item in items" :key="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectElement",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },

  computed: {
    selectValue: {
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
