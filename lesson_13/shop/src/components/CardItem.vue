<template>
  <div class="card">
    <div class="card__image">
      <img :src="data.imgSrc" alt="Image" />
    </div>
    <div class="card__title">{{ data.title }}</div>
    <div class="card__content">
      <slot>{{ data.price }}</slot>
    </div>
    <button class="card__button">Купити</button>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid green;
}
</style>
