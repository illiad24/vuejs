<template>
  <div class="form">
    <label>
      Card Number
      <input type="text" maxlength="19" v-model="cardNumberValue" /></label
    >{{ cardNumberValue }}
    <div class="items">
      <label>
        EXPIRY DATE <input type="text" maxlength="5" v-model="dataValue"
      /></label>
      <label>
        SECURE CODE
        <input type="password" maxlength="3" v-model="passwordValue"
      /></label>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentForm",
  props: {
    cardNumber: {
      type: String,
    },
    date: {
      type: String,
    },
    password: {
      type: Number,
    },
  },

  computed: {
    cardNumberValue: {
      get() {
        return (this.cardNumber ?? "")
          .toString()
          .replace(/(\d{4}(?=\S+))/g, "$1 ");
      },
      set(newVal) {
        newVal = newVal.replace(/\D/g, "");

        this.$emit("update:cardNumber", newVal);
      },
    },
    dataValue: {
      get() {
        return this.date;
      },
      set(newVal) {
        newVal = newVal.replace(/\D/g, "");

        if (newVal.length >= 2) {
          newVal = newVal.substring(0, 2) + "/" + newVal.substring(2, 4);
        }

        if (newVal.length === 3 && newVal.includes("/")) {
          newVal = newVal.charAt(0);
        }

        this.$emit("update:date", newVal);
      },
    },
    passwordValue: {
      get() {
        return this.password;
      },
      set(newVal) {
        this.$emit("update:password", newVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
