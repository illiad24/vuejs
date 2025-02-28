<template>
  <div>
    <h1>Наші водії</h1>

    <div class="filters">
      <filters v-model="filters" />
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
          <tr v-for="driver in filteredDrivers" :key="driver.id">
            <td>{{ driver.fullName }}</td>
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
      <router-link :to="{ name: 'drivers-form' }">Додати автобус</router-link>
    </div>
  </div>
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
      filters: {
        name: "",
        experience: { from: 0, to: 100 },
      },
    };
  },
  computed: {
    ...mapGetters("drivers", ["getDriversList"]),
    filteredDrivers() {
      return this.getDriversList.filter((driver) => {
        const matchesName = driver.fullName
          .toLowerCase()
          .includes(this.filters.name.toLowerCase());
        const matchesExperience =
          driver.experience >= this.filters.experience.from &&
          driver.experience <= this.filters.experience.to;
        return matchesName && matchesExperience;
      });
    },
  },
  methods: {
    ...mapActions("drivers", ["loadData", "deleteItem"]),
    onDelete(id) {
      this.deleteItem(id);
    },
  },
  created() {
    this.loadData();
  },
};
</script>
