<template>
  <div>
    <h1>ФОРМА</h1>
  </div>
  <Form
    @submit="onSubmit"
    :initial-values="busData"
    :validation-schema="schema"
    :key="busData"
  >
    <div class="line">
      Номер
      <Field name="number" type="text" />
      <ErrorMessage name="number" />
    </div>
    <div class="line">
      Кількість місць
      <Field name="seats" type="number" class="input" />
      <ErrorMessage name="seats" />
    </div>
    <button type="submit">{{ buttonText }}</button>
  </Form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
const initialData = {
  number: "",
  seats: null,
};
export default {
  name: "BusForm",
  data() {
    return {
      busData: { ...initialData },
      schema: yup.object({
        number: yup.string().required().min(3),
        seats: yup.number().required(),
      }),
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  methods: {
    ...mapActions("buses", ["addItem", "loadItemDataById", "updateItem"]),
    async onSubmit(values, { resetForm }) {
      try {
        if (this.busId) {
          await this.updateItem({ itemId: this.busId, data: values });
        } else {
          await this.addItem(values);
        }
        resetForm();
        this.$router.push({
          name: "buses",
        });
      } catch {
        alert();
      }
    },
  },
  computed: {
    ...mapGetters("buses", ["getItem", "getCurrentItem"]),
    busId() {
      return this.$route.params.id;
    },
    buttonText() {
      return this.busId ? "Редагувати" : "Додати";
    },
  },
  watch: {
    getCurrentItem: {
      handler(newValue) {
        if (newValue) {
          this.busData = {
            number: newValue.number,
            seats: newValue.seats,
          };
          this.updateKey++;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.busData = { ...initialData };
    if (this.busId) {
      this.loadItemDataById(this.busId);
    }
  },
};
</script>

<style lang="scss" scoped>
input {
  background-color: grey;
  min-height: 60px;
}
.line {
  &:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
