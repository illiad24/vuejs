<template>
  <!-- <div class="checkbox">
    <input
      :id="'c_' + dataItem.id"
      type="checkbox"
      :value="dataItem.id"
      v-model="checkboxValue"
    />
    <label :for="'c_' + dataItem.id" class="checkbox__label">
      <span class="checkbox__text">{{ dataItem.label }}</span>
    </label>
  </div> -->

  <div class="card flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
      <v-checkbox
        v-model="checkboxValue"
        color="red"
        :label="dataItem.title"
        :value="dataItem.id"
      ></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxItem",
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    dataItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    checkboxValue: {
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
