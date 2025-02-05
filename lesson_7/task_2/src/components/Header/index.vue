<template>
  <div class="body">
    <h1>Вітаємо на нашому сайті</h1>
    <div class="select">
      <select @change="setCurrency($event.target.value)">
        <option
          v-for="currencyItem in currencyList"
          :key="currencyItem.id"
          :value="currencyItem.currency"
        >
          {{ currencyItem.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",

  computed: {
    ...mapGetters(["currencyList"]),
  },
  methods: {
    ...mapActions(["setCurrency"]),
  },
};
</script>

<style lang="css" scoped>
.body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: 15px;
  max-width: 600px;
}
</style>
