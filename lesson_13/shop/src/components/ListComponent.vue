<template>
  <div class="item">
    <div class="item__label">
      <slot> {{ label }} : </slot>
    </div>
    <div class="item__value" :class="setGreenStyle">
      <slot name="value"> {{ content }} </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    label: {
      type: String,
      default: "",
      required: true,
    },
    content: {
      type: String,
      default: "",
      required: true,
    },
    greenValue: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setGreenStyle() {
      return this.greenValue ? "green" : "";
    },
  },
};
</script>

<style lang="scss">
.item {
  display: flex;
  align-items: center;
  gap: toRem(8);
  // .item__label
  &__label {
  }
  // .item__value
  &__value {
    display: flex;
    align-items: center;
    gap: 16px;
    span {
      font-weight: 700;
    }
    &.green {
      color: green;
    }
    img {
      max-width: 100px;
    }
  }
}
</style>
