<template>
  <div class="wrap">
    <select-element
      title="Тип машини"
      :items="getFilterData.transportTypes"
      v-model="selectedTransportType"
    />
    <checkbox-element
      title="Тип кузова"
      :items="getFilterData.bodyTypes"
      v-model="checkboxValues"
    />
    <select-element
      title="Марка"
      :items="getFilterData.brands"
      v-model="selectedMarkType"
    />
    <select-element
      title="Модель"
      :items="setModelValue"
      v-model="selectedModel"
    />
    <range-element
      title="Рік"
      :minMaxRange="getFilterData.years"
      v-model="rangeYear"
    />
    <button @click="resetAllFilters">Скинути фільтри</button>
  </div>
  <!-- ! Якщо не ввиведу getFilterData.brands то селект із марок машин не виводиться, можливо в той момент ще ці дані не завантажились, на даний момент не знаю в чому причина  -->
  <div class="d-none">{{ getFilterData.brands }}</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SelectElement from "./SelectElement.vue";
import CheckboxElement from "./CheckboxElement.vue";
import RangeElement from "./RangeElement.vue";
export default {
  name: "FiltersList",
  components: {
    SelectElement,
    CheckboxElement,
    RangeElement,
  },
  data() {
    return {
      selectedTransportType: "",
      selectedMarkType: "",
      selectedModel: "",
      checkboxValues: [],
      rangeYear: {},
    };
  },
  computed: {
    ...mapGetters(["getFilterData", "getFilterObj"]),
    setModelValue() {
      let foundItem = this.getFilterData.brands.find(
        (el) => el.id == this.selectedMarkType
      );
      return foundItem ? foundItem.models : [];
    },
  },
  watch: {
    selectedTransportType(newValue) {
      this.filterUpdate({ key: "transportType", value: newValue });
    },
    selectedMarkType(newValue) {
      this.filterUpdate({ key: "brand", value: newValue });
    },
    selectedModel(newValue) {
      this.filterUpdate({ key: "model", value: newValue });
    },
    checkboxValues(newValue) {
      this.filterUpdate({ key: "bodyTypes", value: newValue });
    },
    rangeYear: {
      handler(newValue) {
        this.filterUpdate({ key: "year", value: newValue });
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(["updateFilter", "resetFilters"]),
    filterUpdate(data) {
      this.updateFilter(data);
    },
    resetAllFilters() {
      this.resetFilters();
      this.selectedTransportType = "";
      this.selectedMarkType = "";
      this.selectedModel = "";
      this.checkboxValues = [];
      this.rangeYear = { from: "", to: "" };
    },
  },
};
</script>

<style lang="scss" scoped>
.d-none {
  display: none;
}
</style>
