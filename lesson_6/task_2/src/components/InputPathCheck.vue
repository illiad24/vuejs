<template>
  <div>
    <label>Пошук Файла із розширенням{{ fileExtention }}</label>
    <input type="text" :class="inpClass" v-model="inpVal" />
  </div>
  {{ inpVal }}
</template>

<script>
export default {
  name: "InputPathCheck",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    modelModifiers: {
      default: () => ({}),
    },
    fileExtention: {
      type: String,
      required: true,
    },
  },

  computed: {
    inpVal: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
    inpClass() {
      if (this.modelModifiers.checkPath) {
        return this.modelValue.trim().endsWith(this.fileExtention)
          ? "green"
          : "red";
      }
      return "";
    },
  },
};
</script>

<style lang="css" scoped>
.red {
  background-color: red;
}
.green {
  background-color: green;
}
</style>
