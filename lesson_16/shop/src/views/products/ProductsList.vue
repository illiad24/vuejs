<template>
  <main-layout>
    <div class="container pb-[30px]">
      <h1 class="text-55-20 mb-[30px]!">List</h1>
      <div class="grid grid-cols-[150px_1fr] gap-[30px]">
        <div>
          <Filter />
        </div>
        <div>
          <div v-if="isLoading">Loading...</div>
          <div v-else-if="hasError">Error...</div>
          <div v-else>
            <div v-if="getItemsList.length">
              <div>
                <div class="grid grid-cols-3 gap-[30px] mb-[30px]!">
                  <product-item
                    v-for="itemData in getItemsList"
                    :key="itemData.id"
                    :data-item="itemData"
                  />
                </div>
                <v-btn append-icon="mdi-plus" v-if="userPermissions.write">
                  <router-link :to="{ name: 'form' }">Додати товар</router-link>
                </v-btn>
              </div>
            </div>
            <div v-else>Нема таких товарів</div>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
  <router-view />
</template>

<script>
import Filter from "@/components/Filter/index.vue";
import { mapGetters, mapActions } from "vuex";
import ProductItem from "./ProductItem.vue";
export default {
  name: "ProductsList",
  components: {
    Filter,
    ProductItem,
  },
  computed: {
    ...mapGetters("users", ["userPermissions"]),
    ...mapGetters("products", ["getItemsList", , "isLoading", "hasError"]),
  },
  methods: {
    ...mapActions("products", ["loadList"]),
  },
  created() {
    this.loadList();
  },
};
</script>

<style lang="scss" scoped></style>
