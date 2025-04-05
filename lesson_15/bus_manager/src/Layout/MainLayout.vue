<template>
  <div class="wrapper">
    <Header />
    <main>
      <div v-if="isLoading" class="center">Loading ......</div>
      <div v-else-if="hasError" class="center">Вибачте. Сталась помилка</div>

      <slot v-else>Content</slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "MainLayout",
  components: {
    Header,
    Footer,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1 1 auto;
  @supports (overflow: clip) {
    overflow: clip;
  }
  > main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
  > * {
    min-width: 0;
  }
}
</style>
