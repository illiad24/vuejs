<template>
  <header class="header">
    <div class="header__container">
      <div class="header__menu menu">
        <nav class="menu__body">
          <ul class="menu__list">
            <li class="menu__item">
              <RouterLink to="/" class="menu__link"> Головна</RouterLink>
            </li>
            <li class="menu__item">
              <RouterLink :to="{ name: 'select' }" class="menu__link"> Уроки</RouterLink>
            </li>
            <li class="menu__item">
              <RouterLink :to="{ name: 'teachers' }" class="menu__link">Вчителі</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__auth auth">
        <RouterLink :to="{ name: 'login' }" v-if="!isAuthenticated" class="auth__item">
          Вхід</RouterLink
        >
        <button class="auth__item" v-if="isAuthenticated && getUserData" @click="onExit">
          <span>({{ getUserData.name }})</span> Вихід
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapActions('auth', ['exit']),
    onExit() {
      this.exit()
    },
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'getUserData']),
  },
}
</script>

<style lang="scss" scoped></style>
