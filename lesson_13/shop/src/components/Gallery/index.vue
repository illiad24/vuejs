<template>
  <div class="gallery">
    <h2 class="gallery__title">{{ title }}</h2>

    <div class="gallery__list">
      <div class="gallery__item" v-for="img in imgList" :key="img.id">
        <img :src="img.imgSrc" alt="Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    title: {
      type: String,
      default: "",
    },
    imgList: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery__list {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
