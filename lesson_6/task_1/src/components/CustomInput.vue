<template>
  <div>
    <label> Введіть вік </label>
    <input type="number" :class="inpColorClass" v-model="currentValue" />
    <div style="color: red">{{ message }}</div>
  </div>
  <div v-if="currentValue" :class="{ red: message }">
    Введений вік - {{ currentValue }}
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    modelModifiers: {
      default: () => ({}),
    },
  },
  data() {
    return {
      message: "",
      inpColorClass: "",
    };
  },
  computed: {
    currentValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        if (this.modelModifiers.check) {
          if (newValue < 0 || newValue > 150) {
            this.message = "Не коректний вік";
            return;
          } else {
            this.message = "";
          }
        }
        if (this.modelModifiers.setColor) {
          if (newValue < 0) {
            this.inpColorClass = "redBg";
          } else if (newValue < 10) {
            this.inpColorClass = "green";
          } else if (newValue >= 10 && newValue < 21) {
            this.inpColorClass = "yellow";
          } else {
            this.inpColorClass = "orange";
          }
        }
        this.$emit("update:modelValue", newValue);
      },
    },
  },
};
</script>

<style lang="css" scoped>
.red {
  color: red;
}
.redBg {
  background: red;
}
.green {
  background: green;
}
.yellow {
  background: yellow;
}
.orange {
  background: orange;
}
</style>
