<template>
  <!-- ! Зараз обмежений в часі.  Дані машин і фільтрів взяв у Павла за його згодою -->
  <layout />
</template>

<script>
import Layout from "./components/Layout/index.vue";
export default {
  name: "App",
  components: { Layout },
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
