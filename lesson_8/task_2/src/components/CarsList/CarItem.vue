<template>
  <div class="item">
    <div class="item__image"><img :src="carData.imgSrc" alt="Image" /></div>
    <div class="item__content">
      <div class="item__title">{{ carData.title }}</div>
      <div class="item__price">{{ carData.price }}</div>
      <ul class="item__list">
        <li class="item__item-list">{{ carData.mileage }}km</li>
        <li class="item__item-list">{{ carData.year }}</li>
        <li class="item__item-list">{{ carData.transmission }}</li>
        <li class="item__item-list">{{ carData.fuel }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarItem",
  props: {
    carData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  gap: 30px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  // .item__image
  &__image {
    position: relative;
    padding-bottom: 20%;
    flex: 0 0 35%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
  // .item__content
  &__content {
    flex: 0 0 60%;
  }
  // .item__title
  &__title {
    font-weight: 700;
    font-size: 26px;
    color: black;
  }

  // .item__price
  &__price {
    font-weight: 700;
    font-size: 24px;
    color: black;
  }
  // .item__list
  &__list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: start;
    align-items: start;
    gap: 32px;
  }
  // .item__item-list
  &__item-list {
  }
}
</style>
