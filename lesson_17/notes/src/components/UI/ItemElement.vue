<template>
  <div class="item">
    <div>{{ itemData.title }}</div>
    <div>-</div>
    <button type="button" @click="$emit('delete', itemData.id)">
      Видалити
    </button>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});
defineEmits(["delete"]);
</script>

<style lang="scss" scoped>
.item {
  display: flex;
}
</style>
