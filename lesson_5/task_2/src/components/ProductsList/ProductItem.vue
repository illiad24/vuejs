<template>
  <div class="item">
    <div class="item__image">
      <img :src="productData.image" alt="Image" />
    </div>
    <div class="item__content">
      <div class="item__title" v-if="productData.title">
        {{ productData.title }}
      </div>
      <div class="item__economy" v-if="productData.discount">
        Ваша економія: <span>{{ productData.discount }}</span>
      </div>
      <div class="item__price item__price--old" v-if="productData.oldPrice">
        {{ productData.oldPrice }}
      </div>
      <div class="item__price item__price--new" v-if="productData.price">
        {{ productData.price }}
      </div>
      <button @click="addItemToCart(productData.id)" class="item__button">
        Купити
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    addItemToCart(productId) {
      this.$emit("addProductToCart", productId);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  gap: 1.875rem;
  padding: 20px;

  &:not(:last-child) {
    border-bottom: 0.0625rem solid gray;
  }

  // .item__image
  &__image {
    display: block;
    max-width: 15;
    max-width: 300px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  // .item__content
  &__content {
  }
  // .item__title
  &__title {
    color: rgb(0, 149, 255);
    font-size: 32px;
    width: 100%;
    box-sizing: border-box;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    max-width: 45.625rem;
    &:not(:last-child) {
      margin-bottom: 0.625rem;
    }
  }
  // .item__economy
  &__economy {
    font-size: 16px;
    font-weight: 600;

    &:not(:last-child) {
      margin-bottom: 0.9375rem;
    }

    span {
      color: red;
      font-size: 1.125rem;
    }
  }
  // .item__price
  &__price {
    font-size: 24px;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    // .item__price--old
    &--old {
      color: rgb(164, 161, 161);
    }
    // .item__price--new
    &--new {
      color: red;
    }
  }
  // .item__button
  &__button {
    background-color: green;
    padding: 10px 20px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
