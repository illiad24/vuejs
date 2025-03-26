<template>
  <div>
    <ul v-if="getLessonsList.length">
      <li v-for="lesson in getLessonsList" :key="lesson.id">
        <checkbox-item v-model="lessonsList" :dataItem="lesson" />
      </li>
      {{
        lessonsList
      }}
    </ul>

    <button :disabled="!getLessonsList.length" :class="setButtonClass" @click="onClick">
      Далі
    </button>
  </div>
</template>

<script>
import CheckboxItem from '@/components/Checkboxs/CheckboxItem.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'SelectLesson',
  data() {
    return {
      lessonsList: [],
    }
  },
  components: {
    CheckboxItem,
  },
  computed: {
    ...mapGetters('lessons', ['getLessonsList']),
    setButtonClass() {
      return this.lessonsList.length ? 'green' : 'red'
    },
  },
  methods: {

    onClick() {
      if (this.lessonsList.length) {
        this.$router.push({
          name: 'lessonsTeachersChoose',
          params: {
            id: this.lessonsList,
          },
        })
      } else return
    },
  },
}
</script>

<style lang="css" scoped>
.red {
  background-color: red;
  pointer-events: none;
}
.green {
  background-color: green;
}
</style>
