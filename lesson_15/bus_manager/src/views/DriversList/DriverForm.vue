<template>
  <div>
    <h1>ФОРМА</h1>
  </div>

  <Form
    @submit="onSubmit"
    :initial-values="driverData"
    :validation-schema="schema"
    :key="driverData"
  >
    <div class="line">
      ПІБ
      <Field name="name" type="text" />
      <ErrorMessage name="name" />
    </div>
    <div class="line">
      Стаж
      <Field name="experience" type="number" class="input" />
      <ErrorMessage name="experience" />
    </div>
    <button type="submit">{{ buttonText }}</button>
  </Form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
const initialData = {
  name: "",
  experience: null,
};
export default {
  name: "DriversForm",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      driverData: { ...initialData },
      schema: yup.object({
        name: yup.string().required().min(3),
        experience: yup.number().required(),
      }),
    };
  },

  methods: {
    ...mapActions("drivers", [
      "addItem",
      "updateItem",
      "deleteItem",
      "loadItemDataById",
    ]),
    async onSubmit(values, { resetForm }) {
      try {
        if (this.driverId) {
          await this.updateItem({ itemId: this.driverId, data: values });
        } else {
          await this.addItem(values);
        }
        resetForm();
        this.$router.push({
          name: "drivers",
        });
      } catch {
        alert();
      }
    },
  },
  computed: {
    ...mapGetters("drivers", ["getCurrentItem"]),
    driverId() {
      return this.$route.params.id;
    },
    buttonText() {
      return this.driverId ? "Редагувати" : "Додати";
    },
  },
  watch: {
    getCurrentItem: {
      handler(newValue) {
        if (newValue) {
          this.driverData = {
            name: newValue.name,
            experience: newValue.experience,
          };
          this.updateKey++;
        }
      },
      deep: true,
      immediate: true,
    },
    queryOptData: {
      handler() {
        this.loadData();
      },
      deep: true,
    },
  },
  created() {
    this.driverData = { ...initialData };
    if (this.driverId) {
      console.log(this.driverId);
      this.loadItemDataById(this.driverId);
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
