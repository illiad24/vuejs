<template>
  <main-layout :is-loading="isLoading" :has-error="hasError">
    <div class="center">
      <h1>Наші водії</h1>

      <div class="filters">
        <filters v-model="queryOptData" />
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ПІБ</th>
              <th>Стаж</th>
              <th>Події</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="driver in getItemsList" :key="driver.id">
              <td>{{ driver.name }}</td>
              <td>{{ driver.experience }}</td>
              <td>
                <button @click="onDelete(driver.id)">Видалити</button>
                <router-link
                  :to="{ name: 'drivers-form', params: { id: driver.id } }"
                  >Редагувати
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <router-link :to="{ name: 'drivers-form' }">
          <v-btn variant="tonal"> Додати водія </v-btn></router-link
        >
      </div>
    </div>
  </main-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Filters from "@/components/Filters/index.vue";

export default {
  name: "DriversList",
  components: {
    Filters,
  },
  data() {
    return {
      queryOptData: {
        name: null,
        experience: { from: 0, to: 100 },
      },
    };
  },
  computed: {
    ...mapGetters("drivers", ["getItemsList", "isLoading", "hasError"]),
    queryOptions() {
      return {
        orderBy: "price",
        experience: this.queryOptData.experience,
      };
    },
  },
  watch: {
    queryOptData: {
      handler() {
        this.loadData();
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions("drivers", ["loadList", "deleteItem", "loadFilteredData"]),
    onDelete(id) {
      this.deleteItem(id);
    },
    loadData() {
      if (this.queryOptData.name)
        this.loadFilteredData({
          fieldTitle: "name",
          compareOperator: "==",
          valueToCompare: this.queryOptData.name,
          options: this.queryOptions,
        });
      this.loadList();
    },
    loadData() {
      const filtersOptions = [];
      const { from, to } = this.queryOptData.experience;

      if (this.queryOptData.name) {
        filtersOptions.push({
          fieldTitle: "name",
          compareOperator: "==",
          valueToCompare: this.queryOptData.name,
        });
      }

      if (from) {
        filtersOptions.push({
          fieldTitle: "experience",
          compareOperator: ">=",
          valueToCompare: from,
        });
      }
      if (to) {
        filtersOptions.push({
          fieldTitle: "experience",
          compareOperator: "<=",
          valueToCompare: to,
        });
      }

      if (filtersOptions.length > 0) {
        console.log(filtersOptions);
        this.loadFilteredData({ filtersOptions });
      } else {
        this.loadList();
      }
    },
  },

  created() {
    this.loadList();
  },
};
</script>
<style lang="css">
.filters {
  margin-bottom: 30px;
}
input {
  background-color: grey;
  min-height: 40px;
}
</style>
