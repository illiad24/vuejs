<template>
  <div class="item bag-item">
    <div class="item__image">
      <img :src="productData.image" alt="Image" />
    </div>
    <div class="item__content">
      <div class="item__title" v-if="productData.title">
        {{ productData.title }}
      </div>
      <button
        @click="deleteProduct(productData.id)"
        class="item__button item__button--delete"
      >
        Видалити
      </button>
      <div class="item__actions">
        <div class="item__counter">
          <button class="item__act" @click="onChangeCount(-1)">-</button>
          <input
            class="item__input"
            type="number"
            v-model.lazy.number="productCounter"
            @change="manualChange"
          />
          <button class="item__act" @click="onChangeCount(1)">+</button>
        </div>
        <div class="item__prices">
          <div class="item__price item__price--old" v-if="productData.oldPrice">
            {{ totalOldPrice }}
          </div>
          <div class="item__price item__price--new" v-if="productData.price">
            {{ totalPrice }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BagItem",
  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      productCounter: this.productData.count,
    };
  },
  methods: {
    validateCount() {
      if (this.productCounter < 1 || isNaN(this.productCounter)) {
        this.productCounter = 1;
      }
    },
    onChangeCount(num) {
      this.productCounter += num;
      this.validateCount();
      this.emitCountChange(this.productCounter);
    },
    manualChange() {
      this.validateCount();
      this.emitCountChange(this.productCounter);
    },
    emitCountChange() {
      this.$emit("updateCount", {
        id: this.productData.id,
        count: this.productCounter,
      });
    },
    deleteProduct(productId) {
      this.$emit("deleteProduct", productId);
    },
  },
  computed: {
    totalOldPrice() {
      return this.productData.oldPrice * this.productCounter;
    },
    totalPrice() {
      return this.productData.price * this.productCounter;
    },
  },
  watch: {
    "productData.count"(newValue) {
      console.log(newValue);
      this.productCounter = newValue;
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

  // .item__price
  &__price {
    font-size: 14px;
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
    &--delete {
      background-color: red;
    }
    background-color: green;
    padding: 10px 20px;
    color: #fff;
    cursor: pointer;
  }
  // .item__counter
  &__counter {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  // .item__act
  &__act {
    font-size: 25;
  }
  // .item__input
  &__input {
  }
}
</style>
