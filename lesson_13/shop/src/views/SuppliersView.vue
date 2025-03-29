<template>
  <main-layout>
    <h1 class="title">Оберіть Постачальника</h1>

    <div class="list">
      <card-item v-for="data in suppliersList" :key="data.id" :data="data">
        <div class="icons">
          <div class="icon" v-for="icon in data.icons">
            <img :src="icon" alt="Image" />
          </div>
        </div>
      </card-item>
    </div>
    <template #footer>
      <list-component :greenValue="true">
        <h3>Популярний:</h3>
        <template #value> <span>Бізнес</span></template>
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
import ListComponent from "../components/ListComponent.vue";
import CardItem from "../components/CardItem.vue";
export default {
  name: "SuppliersList",
  components: {
    CardItem,
    ListComponent,
  },
  computed: {
    ...mapGetters(["suppliersList"]),
  },
};
</script>

<style lang="scss" scoped>
.icons {
  display: flex;
  gap: 18px;
  img {
    max-width: 20px;
  }
}
</style>
