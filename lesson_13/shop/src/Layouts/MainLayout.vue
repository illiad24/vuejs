<template>
  <header class="header">
    <div class="header__menu menu">
      <nav class="menu__body">
        <ul class="menu__list">
          <li class="menu__item">
            <router-link :to="{ name: 'home' }" class="menu__link">
              Головна
            </router-link>
          </li>
          <li class="menu__item">
            <router-link :to="{ name: 'products' }" class="menu__link">
              Товари
            </router-link>
          </li>
          <li class="menu__item">
            <router-link :to="{ name: 'suppliers' }" class="menu__link">
              Постачальники
            </router-link>
          </li>
          <li class="menu__item">
            <router-link :to="{ name: 'contacts' }" class="menu__link">
              Контакти
            </router-link>
          </li>
          <li class="menu__item">
            <router-link :to="{ name: 'shopping-rules' }" class="menu__link">
              Правила купівлі
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <slot> </slot>
  </main>
  <footer class="footer">
    <slot name="footer"> </slot>
  </footer>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style lang="scss">
.header {
  &:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>
