<template>
  <div class="item">
    <div class="item__image" v-if="product.image">
      <img :src="product.image" alt="Image" />
    </div>
    <div class="item__title" v-if="product.title">{{ product.title }}</div>
    <div class="item__avaible" v-if="product.availible">
      {{ product.availible }}
    </div>
    <div class="item__price" v-if="product.price">{{ product.price }}</div>
    <div class="item__like" :class="{ liked: liked }" @click="onLike">LIKE</div>
  </div>
</template>

<script>
export default {
  name: "ProductCart",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      liked: false,
    };
  },
  methods: {
    onLike() {
      this.liked = !this.liked;
      this.$emit("like");
    },
  },
};
</script>

<style lang="css" scoped>
.item {
}

.item__image img {
  width: 100%;
  height: auto;
}

.item__title,
.item__avaible,
.item__price {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.item__like {
  cursor: pointer;
}
.item__like.liked {
  background-color: red;
  color: white;
}
</style>
