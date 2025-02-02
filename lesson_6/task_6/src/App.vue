<template>
  <PaymentForm
    v-model:cardNumber="cardNumber"
    v-model:date="date"
    v-model:password="password"
  />
</template>

<script>
import PaymentForm from "./components/PaymentForm.vue";
export default {
  name: "App",
  components: {
    PaymentForm,
  },
  data() {
    return {
      cardNumber: "",
      date: "",
      password: null,
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
