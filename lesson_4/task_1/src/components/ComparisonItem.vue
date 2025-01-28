<template>
  <div v-for="(item, index) in items" :key="index">
    <img :src="item" alt="Image" />
  </div>
</template>

<script>
export default {
  name: "ComparisonItem",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
img {
  max-width: 100px;
}
</style>
