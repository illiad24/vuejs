<template>
  <h2>
    Задача 2. Розробити компонент (з підтримкою v-model), який дозволяє вводити
    шлях до файлу js (URL, що закінчується розширенням js). При заданні
    модифікатора checkPath відображати червоним фоном input, якщо шлях
    некоректний.
  </h2>
  <br />
  <hr />
  <div>
    <InputPathCheck fileExtention=".js" v-model.checkPath="pathUrl" />
  </div>
</template>

<script>
import InputPathCheck from "./components/InputPathCheck.vue";
export default {
  name: "App",
  components: {
    InputPathCheck,
  },
  data() {
    return {
      pathUrl: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
