<template>
  <div @click="setSelectedCategory(itemData.id)">
    <div>
      <img :src="itemData.imgUrl" alt="Image" />
    </div>
    <div>{{ itemData.title }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CategoryItem",
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions(["setSelectedCategory"]),
  },
};
</script>

<style lang="css" scoped>
img {
  max-width: 100px;
}
</style>
