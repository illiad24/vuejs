<template>
  <h2>
    Задача 4. Розробити компонент для вводу віку користувача та імені. Робити
    форматування при заданні відповідних модифікаторів відповідних полів input:
    ім’я користувача - у випадку порожнього поля (червони фон) вік (вік менший
    за 18 – колір фону червоний, інакше – зелений).
  </h2>
  <br />
  <hr />
  <div>
    <CustomInput v-model:name="nameValue" v-model:age="ageValue" />
  </div>
</template>

<script>
import CustomInput from "./components/CustomInput.vue";

export default {
  name: "App",
  components: { CustomInput },
  data() {
    return {
      nameValue: "",
      ageValue: 0,
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
