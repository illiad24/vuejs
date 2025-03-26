<template>
  <div>
    <div class="item" v-for="(lessonName, index) in lessonNames" :key="lessonName">
      <div class="item__name">{{ lessonName }}</div>
      <div class="item__select">
        <select v-model="selectedPairs[index + 1]">
          <option value=""></option>
          <option :value="teacher.id" v-for="teacher in getTeachersList" :key="teacher.id">
            {{ teacher.name }}
          </option>
        </select>
      </div>
    </div>
    {{ selectedPairs }}
    <div>{{ lessonNames }}</div>
    <button :disabled="!selectedPairsValidate" @click="onCLick">Розпочати навчання</button>
    {{ selectedPairsValidate }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SelectTeacher',
  data() {
    return {
      selectedPairs: {},
    }
  },
  methods: {
    buildQuery(obj) {
      return Object.entries(obj).map(([key, value]) => `${key}-${value}`)
    },
    onCLick() {
      this.$router.push({
        name: 'curiculum',
        params: {
          id: this.buildQuery(this.selectedPairs),
        },
      })
    },
  },
  computed: {
    ...mapGetters('lessons', ['getLessonsList', 'getLessonsNamesById']),
    ...mapGetters('teachers', ['getTeachersList']),

    getIdList() {
      return this.$route.params.id
    },

    lessonNames() {
      return this.getLessonsNamesById(this.getIdList)
    },
    selectedPairsValidate() {
      const selectedPairsNumber = Object.keys(this.selectedPairs).length
      return selectedPairsNumber && selectedPairsNumber === this.lessonNames.length
    },
  },
}
</script>

<style lang="css" scoped>
.item {
  display: flex;
  gap: 24px;
}
</style>
