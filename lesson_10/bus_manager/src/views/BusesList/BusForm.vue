<template>
  <div>
    <h1>ФОРМА</h1>
  </div>
  <div>
    <label>
      Номер
      <input type="text" v-model="busData.number" />
    </label>
    <label>
      Кількість місць
      <input type="number" v-model="busData.seats" />
    </label>
  </div>
  <div>
    <button @click="busAction">{{ buttonText }}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BusForm",
  data() {
    return {
      busData: {
        number: null,
        seats: null,
      },
    };
  },
  created() {
    if (this.busId)
      this.busData = {
        ...this.busItem,
      };
  },
  methods: {
    ...mapActions("buses", ["addItem","updateItem"]),
    busAction() {
      if (this.busId) {
        this.updateItem(this.busData);
      } else {
        this.addItem(this.busData);
      }
      this.$router.push({
        name: "buses",
      });
    },
  },
  computed: {
    ...mapGetters("buses", ["getItem"]),
    busId() {
      return Number(this.$route.params.id);
    },
    busItem() {
      return this.getItem(this.busId);
    },
    buttonText() {
      return this.busId ? "Редагувати" : "Додати";
    },
  },
};
</script>

<style lang="scss" scoped></style>
