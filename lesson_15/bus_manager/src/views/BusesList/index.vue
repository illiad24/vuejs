<template>
  <main-layout :is-loading="isLoading" :has-error="hasError">
    <div class="center">
      <h1>Buses</h1>
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
            <tr v-for="bus in getItemsList" :key="bus.id">
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
        <router-link :to="{ name: 'bus-form' }">
          <v-btn variant="tonal"> Додати автобус </v-btn>
        </router-link>
      </div>
    </div>
  </main-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BusesList",
  computed: {
    ...mapGetters("buses", ["getItemsList", "isLoading", "hasError"]),
  },
  methods: {
    ...mapActions("buses", ["loadList", "deleteItem"]),
    onDelete(id) {
      this.deleteItem(id);
    },
  },
  created() {
    this.loadList();
  },
};
</script>

<style lang="css">
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
