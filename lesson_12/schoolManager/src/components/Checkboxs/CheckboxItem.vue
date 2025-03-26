<template>
  <div>
    <div class="checkbox">
      <input
        :id="`checkbox_${dataItem.id}`"
        class="checkbox__input"
        type="checkbox"
        :value="dataItem.id"
        v-model="valueList"
      />
      <label :for="`checkbox_${dataItem.id}`" class="checkbox__label">
        <span class="checkbox__text">{{ dataItem.name }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: {
    dataItem: {
      type: Object,
      default: {},
    },
    modelValue: {
      type: Array,
      required: true,
    },
  },
  computed: {
    valueList: {
      get() {
        return this.modelValue
      },
      set(newVal) {
        this.$emit('update:modelValue', newVal)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
