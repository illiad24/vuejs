<template>
  <main-layout>
    <ul v-if="getTeachersList.length">
      <li v-for="teacher in getTeachersList" :key="teacher.id">
        {{ teacher.name }}
      </li>
    </ul>
    <div v-else>Вчителів немає</div>
  </main-layout>
</template>

<script>
import MainLayout from '@/Layouts/MainLayout.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'TeachersView',
  computed: {
    ...mapGetters('teachers', ['getTeachersList']),
  },
  components: {
    MainLayout,
  },
}
</script>

<style lang="scss" scoped></style>
