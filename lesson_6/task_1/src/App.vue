<template>
  <h2>
    Задача 1. Розробити компонент для введення віку користувача (з підтримкою
    v-model). При заданні модифікатора check не допускати введення некоректного
    віку (вік не може бути більшим за 150). При заданні модифікатора setColor
    задавати фон (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше –
    оранжевий).
  </h2>
  <br />
  <hr />
  <div>
    <CustomInput v-model.check="age" />
  </div>
  <div>
    <CustomInput v-model.setColor="ageSecond" />
  </div>
</template>

<script>
import CustomInput from "./components/CustomInput.vue";
export default {
  name: "App",
  components: { CustomInput },
  data() {
    return {
      age: 0,
      ageSecond: 0,
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
