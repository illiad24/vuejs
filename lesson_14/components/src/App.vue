<template>
  <PaginatedComp :workers-list="workersList" />
  <PaginatedCompExp :workers-list="workersList" />
  <PaginatedCompWithMode
    :modeList="1"
    :modeActions="1"
    :workers-list="workersList"
  />
  <PaginatedCompWithMode
    :modeList="2"
    :modeActions="2"
    :perPage="3"
    :workers-list="workersList"
  />

  <router-view />
</template>
<script>
import PaginatedComp from "./components/lesson_comp/PaginatedComp.vue";
import PaginatedCompExp from "./components/lesson_comp/PaginatedCompExp.vue";
import PaginatedCompWithMode from "./components/options_comp/PaginatedCompWithMode.vue";

export default {
  components: {
    PaginatedComp,
    PaginatedCompExp,
    PaginatedCompWithMode,
  },

  data() {
    return {
      workersList: [
        { id: 1, name: "Andrii Ivanov", experience: 5, salary: 35000 },
        { id: 2, name: "Olha Petrenko", experience: 8, salary: 42000 },
        { id: 3, name: "Serhiy Shevchenko", experience: 2, salary: 28000 },
        { id: 4, name: "Yuliia Kovalenko", experience: 10, salary: 50000 },
        { id: 5, name: "Dmytro Bondarenko", experience: 3, salary: 31000 },
        { id: 6, name: "Mykola Tkachenko", experience: 7, salary: 39000 },
        { id: 7, name: "Iryna Samoilova", experience: 1, salary: 25000 },
        { id: 8, name: "Oleksiy Hryhorenko", experience: 4, salary: 33000 },
        { id: 9, name: "Natalia Voloshyna", experience: 6, salary: 37000 },
        { id: 10, name: "Oksana Fedorova", experience: 9, salary: 45000 },
        { id: 11, name: "Bohdan Kuznetsov", experience: 12, salary: 53000 },
        { id: 12, name: "Kateryna Savchenko", experience: 5, salary: 35000 },
        { id: 13, name: "Vadym Poltavets", experience: 3, salary: 31000 },
        { id: 14, name: "Tetyana Kravchuk", experience: 8, salary: 42000 },
        { id: 15, name: "Oleh Zakharchenko", experience: 7, salary: 39000 },
        { id: 16, name: "Anastasiya Kostenko", experience: 2, salary: 28000 },
        { id: 17, name: "Yevhenii Pylypenko", experience: 10, salary: 50000 },
        { id: 18, name: "Svitlana Shcherbak", experience: 6, salary: 37000 },
        { id: 19, name: "Oleksandra Marchenko", experience: 4, salary: 33000 },
        { id: 20, name: "Roman Kolomiets", experience: 1, salary: 25000 },
      ],
      outerCurrentPageIndex: 1,
    };
  },
};
</script>
<style scoped></style>
