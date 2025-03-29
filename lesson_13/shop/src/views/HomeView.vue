<template>
  <main-layout>
    <div class="content">
      <h1>Вітаємо</h1>
      <h2>Сподіваюсь ви будете чемними і щось купите</h2>
    </div>
    <template #footer>
      <list-component>
        <h3>Рейтинг магазину:</h3>
        <template #value><span>323232</span></template>
      </list-component>
      <list-component>
        <h3>Власник магазину</h3>
        <template #value
          ><span>Баба: Галя</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZl5J_WftX3F1WB9qvrXjFN33dESNI-pbQg&s"
            alt="Image"
        /></template>
      </list-component>
    </template>
  </main-layout>
</template>
<script>
import ListComponent from "../components/ListComponent.vue";

export default {
  name: "Homeview",
  components: {
    ListComponent,
  },
};
</script>
