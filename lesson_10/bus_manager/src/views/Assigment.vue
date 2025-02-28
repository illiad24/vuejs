<template>
  <div>
    <h1>Призначення</h1>
  </div>
  <div v-if="getAssigmentlist.length">
    <table>
      <thead>
        <tr>
          <th>Шофер</th>
          <th>Номер автобуса</th>
          <th>Події</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="assigment in getAssigmentlist" :key="assigment.id">
          <td>{{ assigment.fullName }}</td>
          <td>{{ assigment.bus }}</td>
          <td>
            <button @click="onDelete(assigment.id)">Видалити</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>Список пустий</div>
  <div>
    <label> Шофер</label>
    <select v-model="assigment.driver">
      <option :value="driver.id" v-for="driver in getDrivers" :key="driver.id">
        {{ driver.fullName }}
      </option>
    </select>
  </div>
  <div>
    <label> Автобус</label>
    <select v-model="assigment.bus">
      <option :value="bus.id" v-for="bus in getBuses" :key="bus.id">
        {{ bus.number }}
      </option>
    </select>
  </div>
  <div>
    <button @click="onAdd" v-show="assigment.bus && assigment.driver">
      Додати
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Assigment",
  data() {
    return {
      assigment: {
        fullName: null,
        bus: null,
      },
    };
  },
  computed: {
    ...mapGetters("assigment", ["getDrivers", "getAssigmentlist", "getBuses"]),
  },
  methods: {
    ...mapActions("assigment", ["addAssigment", "delete"]),
    onAdd() {
      this.addAssigment(this.assigment);
    },
    onDelete(id) {
      this.delete(id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
