<template>
  <div>
    <h4>
      {{ title }}
    </h4>

    <div class="checkbox" v-for="item in items" :key="item.id">
      <input
        type="checkbox"
        :id="item.id"
        :value="item.id"
        v-model="checkboxValue"
      />
      <label :for="item.id" class="checkbox__label">
        <span class="checkbox__text">{{ item.name }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxElement",
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
      type: Array,
      default: () => [],
    },
  },
  computed: {
    checkboxValue: {
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
