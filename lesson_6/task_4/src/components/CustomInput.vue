<template>
  <div>
    {{ inpValue }}
  </div>

  <div>
    ім'я
    <input type="text" v-model.trim="nameValue" :class="checkName" />
  </div>
  <div>
    Вік
    <input type="number" v-model.number="ageValue" :class="checkAge" />
    {{ ageValue }}
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    name: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: 0,
    },
    modelModifiers: {
      default: () => ({}),
    },
  },
  computed: {
    nameValue: {
      get() {
        return this.name;
      },
      set(newValue) {
        this.$emit("update:name", newValue);
      },
    },
    ageValue: {
      get() {
        return this.age;
      },
      set(newValue) {
        this.$emit("update:age", newValue);
      },
    },
    checkName() {
      return this.nameValue.length === 0 ? "red" : "";
    },
    checkAge() {
      return this.ageValue < 18 ? "red" : "green";
    },
  },
};
</script>

<style lang="css" scoped>
.red {
  background: red;
}
.green {
  background: green;
}
</style>
