<template>
  <h2>
    Задача 5. Спробуйте відтворити фрагмент. Компонент ProductsFilters через
    v-model повертає 2 значення фільтра: продавець, бренд. При заданні
    модифікатора “check” відображати секцію зеленою рамкою, якщо фільтр з
    відповідної секції (продавець чи бренд) не обрано.
  </h2>
  <br />
  <hr />
  <FilerLayout />
</template>

<script>
import FilerLayout from "./components/FilterLayout";
export default {
  name: "App",
  components: { FilerLayout },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
