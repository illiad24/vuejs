<template>
  <div>Знайдено машин: {{ carsData.length }}</div>
  <div class="items">
    <car-item
      v-for="carData in carsData"
      :carData="carData"
      :key="carData.id"
    />
  </div>
</template>

<script>
import CarItem from "./CarItem.vue";
export default {
  name: "CarsList",
  components: {
    CarItem,
  },
  props: {
    carsData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
