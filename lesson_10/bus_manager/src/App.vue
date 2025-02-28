<template>
  <Header />

  <RouterView />
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DriversList",
  methods: {
    ...mapActions("drivers", { loadDrivers: "loadData" }),
    ...mapActions("buses", { loadBuses: "loadData" }),
  },
  components: {
    Header,
  },

  created() {
    this.loadDrivers();
    this.loadBuses();
  },
};
</script>

<style scoped></style>
