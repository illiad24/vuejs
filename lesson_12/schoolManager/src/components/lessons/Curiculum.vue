<template>
  <h2 class="title">Навчальний план</h2>
  <div class="items">
    <ul class="list">
      <li v-for="lesson in selectedLessons" :key="lesson.id" class="item">
        {{ lesson }}
      </li>
    </ul>
    <ul class="list">
      <li v-for="lesson in selectedLessons" :key="lesson.id" class="item">-</li>
    </ul>
    <ul class="list">
      <li v-for="teacher in selectedTeachers" :key="teacher.id" class="item">
        {{ teacher }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Curiculum',
  computed: {
    ...mapGetters('lessons', ['getLessonsNamesById']),
    ...mapGetters('teachers', ['getTeachersNamesById']),
    selectedLessonsIds() {
      return this.$route.params.id.map((pair) => pair.split('-')[0])
    },
    selectedTeachersIds() {
      return this.$route.params.id.map((pair) => pair.split('-')[1])
    },
    selectedTeachers() {
      console.log(this.selectedLessonsIds)
      return this.getTeachersNamesById(this.selectedTeachersIds)
    },
    selectedLessons() {
      return this.getLessonsNamesById(this.selectedLessonsIds)
    },
  },
}
</script>

<style lang="css" scoped>
.items {
  display: flex;
}
</style>
