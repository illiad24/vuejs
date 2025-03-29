<template>
  <main-layout>
    <h1 class="title">Оберіть продукти</h1>
    <div class="list">
      <card-item v-for="data in productsList" :key="data.id" :data="data" />
    </div>
    <router-view />
    <div class="buttons">
      <router-link :to="{ name: 'selector' }">Фільтри</router-link>
      <router-link :to="{ name: 'editor' }">Додати товар </router-link>
    </div>

    <template #footer>
      <list-component>
        <h3>Рейтинг магазину:</h3>
        <template #value><span>323232</span></template>
      </list-component>
      <list-component :greenValue="true">
        <h3>Статус:</h3>
        <template #value> <span>відкрито</span></template>
      </list-component>
    </template>
  </main-layout>
</template>

<script>
import { mapGetters } from "vuex";
import CardItem from "../components/CardItem.vue";
import ListComponent from "../components/ListComponent.vue";
export default {
  name: "ProductsView",
  components: {
    CardItem,
    ListComponent,
  },
  computed: {
    ...mapGetters(["productsList"]),
  },
};
</script>

<style lang="scss" scoped></style>
