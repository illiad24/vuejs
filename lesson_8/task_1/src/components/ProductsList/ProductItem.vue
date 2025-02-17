<template>
  <div>
    <div><img :src="itemData.imgSrc" alt="Image" /></div>
    <div>{{ itemData.title }}</div>
    <div>{{ itemData.price }}</div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped></style>
