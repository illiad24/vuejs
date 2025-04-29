<template>
  <div>
    <div v-if="isLoading" class="center">Loading ......</div>
    <div v-else-if="hasError" class="center">Вибачте. Сталась помилка</div>
    <slot v-else> </slot>
  </div>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss"></style>
