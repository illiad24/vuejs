<template>
  <v-sheet class="mx-1200" width="400">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="First name"
      ></v-text-field>
      <v-btn class="mt-3" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script setup>
import { ref } from "vue";

const firstName = ref("");

const rules = [
  (value) => {
    if (value.length > 3) return true;
    return "You must enter a first name.";
  },
];
</script>
