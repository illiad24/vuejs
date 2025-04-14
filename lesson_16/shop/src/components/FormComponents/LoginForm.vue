<template>
  <div class="container">
    <h1>Форма Реєстрації</h1>
    <div class="body">
      <VeeForm :validation-schema="shema" @submit="onSubmit">
        <div>
          <label for="email">Email:</label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label for="password">password:</label>
          <Field name="password" type="text" />
          <ErrorMessage name="password" />
        </div>
        <button type="submit">Зареєструватись</button>
      </VeeForm>
    </div>
  </div>
</template>

<script>
import { Form as VeeForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapActions } from "vuex";
export default {
  name: "LoginForm",
  components: {
    VeeForm,
    Field,
    ErrorMessage,
  },

  data() {
    return {
      shema: yup.object({
        email: yup.string().required().email(2),
        password: yup.number().required(),
      }),
    };
  },

  methods: {
    ...mapActions("auth", ["loginWithEmailAndPassword"]),
    async onSubmit(values, { resetForm }) {
      try {
        const { email, password } = values;
        await this.loginWithEmailAndPassword({ email, password });
        resetForm();
        this.$router.push({
          name: "products",
        });
      } catch {
        alert();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  max-width: 700px;
  margin: 0 auto;
}
input {
  min-height: 60px;
  background-color: grey;
}
</style>
