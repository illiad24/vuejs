<template>
  <div>Buses</div>
  <div>
    <table>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Кількість місць</th>
          <th>Події</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bus in getBusesList" :key="bus.id">
          <td>{{ bus.number }}</td>
          <td>{{ bus.seats }}</td>
          <td>
            <button @click="onDelete(bus.id)">Видалити</button>
            <router-link :to="{ name: 'bus-form', params: { id: bus.id } }"
              >Редагувати
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <router-link :to="{ name: 'bus-form' }">Додати автобус</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BusesList",
  computed: {
    ...mapGetters("buses", ["getBusesList"]),
  },
  methods: {
    ...mapActions("buses", ["loadData", "deleteItem"]),
    onDelete(id) {
      this.deleteItem(id);
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="css" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
