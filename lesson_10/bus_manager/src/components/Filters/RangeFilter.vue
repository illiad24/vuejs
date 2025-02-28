<template>
  <div>
    <h4>
      {{ title }}
    </h4>
    <div class="wrapper">
      <div class="range">
        <input
          type="number"
          v-model.number="currentValue.from"
          placeholder="Від"
          :min="minMaxRange.from"
          :max="minMaxRange.to"
        />
      </div>
      <div class="range">
        <input
          type="number"
          v-model.number="currentValue.to"
          placeholder="До"
          :min="minMaxRange.from"
          :max="minMaxRange.to"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeElement",
  props: {
    title: {
      type: String,
      default: "",
    },
    minMaxRange: {
      type: Object,
      default: () => ({
        from: 1,
        to: 80,
      }),
    },
    modelValue: {
      type: Object,
      default: () => ({ from: null, to: null }),
    },
  },
  computed: {
    currentValue: {
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
