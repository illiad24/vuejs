<template>
  <form class="form">
    <div class="form__body">
      <h1 class="form__title">Форма входу</h1>
      <div class="form__items">
        <div class="form__item">
          <div class="form__label">Логін</div>
          <div class="form__inp">
            <input type="text" v-model="userData.name" />
          </div>
        </div>
        <div class="form__item">
          <div class="form__label">Пароль</div>
          <div class="form__inp">
            <input type="password" v-model="userData.password" />
          </div>
        </div>
      </div>
      <button type="button" @click="onLogin" class="form__button">Увійти</button>
    </div>
    {{ userData }}
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginForm',
  data() {
    return {
      userData: {
        name: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    onLogin() {
      this.login(this.userData)
      if (this.$route.query.redirect) {
        this.$router.push({
          path: this.$route.query.redirect,
        })
      } else {
        this.$router.push({
          path: '/',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
