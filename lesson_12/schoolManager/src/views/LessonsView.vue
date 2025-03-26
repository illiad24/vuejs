<template>
  <main-layout>
    Уроки
    <router-view />
  </main-layout>
</template>

<script>
import MainLayout from '@/Layouts/MainLayout.vue'

export default {
  name: 'LessonsView',

  components: {
    MainLayout,
  },
}
</script>

<style lang="scss" scoped></style>
