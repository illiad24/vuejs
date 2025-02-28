<template>
  <div>
    <h1>ФОРМА</h1>
  </div>
  <div>
    <label>
      ПІБ
      <input type="text" v-model="driverData.fullName" />
    </label>
    <label>
      Стаж
      <input type="number" v-model="driverData.experience" />
    </label>
  </div>
  <div>
    <button @click="driverAction">{{ buttonText }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DriversForm",
  data() {
    return {
      driverData: {
        fullName: null,
        experience: null,
      },
    };
  },
  created() {
    if (this.driverId)
      this.driverData = {
        ...this.driverItem,
      };
  },
  methods: {
    ...mapActions("drivers", ["addItem", "updateItem", "deleteItem"]),
    driverAction() {
      if (this.driverId) {
        this.updateItem(this.driverData);
      } else {
        this.addItem(this.driverData);
      }
      this.$router.push({
        name: "buses",
      });
    },
  },
  computed: {
    ...mapGetters("drivers", ["getItem"]),
    driverId() {
      return Number(this.$route.params.id);
    },
    driverItem() {
      return this.getItem(this.driverId);
    },
    buttonText() {
      return this.driverId ? "Редагувати" : "Додати";
    },
  },
};
</script>

<style lang="scss" scoped></style>
