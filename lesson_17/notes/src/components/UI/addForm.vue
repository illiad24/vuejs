<template>
  <form @submit.prevent="submitForm">
    <h2>{{ title }}</h2>
    <div>
      <input v-model="inputValue" type="text" />
      <button type="submit">Додати</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: {
    type: String,
  },
});
const emit = defineEmits(["add"]);

const inputValue = ref("");

function submitForm() {
  if (inputValue.value.trim() !== "") {
    emit("add", inputValue.value);
    inputValue.value = "";
  }
}
</script>

<style lang="scss" scoped></style>
