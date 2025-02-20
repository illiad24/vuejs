<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Головна</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'shop' }">Магазин</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'payment-terms-and-conditions' }"
            >Правила оплати</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'contact' }">Контакти</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="css" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
ul {
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
