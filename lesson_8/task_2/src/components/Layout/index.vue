<template>
  <div class="wrap">
    <div class="filters">
      <filter-list />
    </div>
    <div class="content">
      <car-list :carsData="getCarsData" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CarList from "../CarsList/index.vue";
import FilterList from "../FiltersList/index.vue";
export default {
  name: "Layout",
  components: {
    CarList,
    FilterList,
  },
  computed: {
    ...mapGetters(["getCarsData"]),
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}
.filters {
}
.content {
}
</style>
