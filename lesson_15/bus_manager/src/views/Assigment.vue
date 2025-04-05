<template>
  <main-layout :is-loading="isLoading" :has-error="hasError">
    <div class="center">
      <div>
        <h1>Призначення</h1>
      </div>
      <div class="table" v-if="getItemsListWithPopulatedData.length">
        <table>
          <thead>
            <tr>
              <th>Шофер</th>
              <th>Номер автобуса</th>
              <th>Події</th>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="assigment in getItemsListWithPopulatedData"
              :key="assigment.id"
            >
              <tr v-if="assigment.bus && assigment.driver">
                <td>{{ assigment.driver?.name || "..." }}</td>
                <td>{{ assigment.bus?.number || "..." }}</td>

                <td>
                  <button @click="onDelete(assigment.id)">Видалити</button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div v-else>Список пустий</div>
      <div>
        <h2>Додати призначення</h2>
        <div class="selects">
          <div>
            <v-select
              v-model="assigment.driver"
              :items="driversList"
              item-value="id"
              item-title="name"
              label="Шофер"
              density="compact"
            ></v-select>
          </div>
          <div>
            <v-select
              v-model="assigment.bus"
              :items="busesList"
              item-value="id"
              item-title="number"
              label="Автобус"
              density="compact"
            ></v-select>
          </div>
        </div>
        <div>
          <v-btn
            @click="onAdd"
            :disabled="!assigment.driver || !assigment.bus"
            prepend-icon="$vuetify"
            variant="tonal"
          >
            Додати призначення
          </v-btn>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MainLayout from "../Layout/MainLayout.vue";
export default {
  components: { MainLayout },
  name: "Assigment",
  data() {
    return {
      assigment: {
        driver: null,
        bus: null,
      },
      busesMap: {},
      driversMap: {},
    };
  },
  computed: {
    ...mapGetters("assigments", [
      "getItemsListWithPopulatedData",
      "isLoading",
      "hasError",
    ]),
    ...mapGetters("drivers", {
      driversList: "getItemsList",
    }),
    ...mapGetters("buses", {
      busesList: "getItemsList",
    }),
  },
  methods: {
    ...mapActions("drivers", {
      loadDriverById: "loadItemDataById",
      loadDrivers: "loadList",
    }),
    ...mapActions("buses", {
      loadBusById: "loadItemDataById",
      loadBuses: "loadList",
    }),

    ...mapActions("assigments", ["loadList", "addItem", "deleteItem"]),
    onAdd() {
      if (this.assigment.driver && this.assigment.bus) {
        console.log(this.assigment);
        this.addItem(this.assigment);
      } else {
        console.log("Не всі поля заповнені");
      }
    },
    onDelete(id) {
      this.deleteItem(id);
    },
  },
  async created() {
    await this.loadDrivers();
    await this.loadBuses();
    await this.loadList();
  },
};
</script>

<style lang="scss" scoped>
.selects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
}
.table {
  &:not(:last-child) {
    margin-bottom: 40px;
  }
}
</style>
