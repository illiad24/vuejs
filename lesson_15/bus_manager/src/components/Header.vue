<template>
  <header class="header">
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Головна</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'drivers' }">Водії</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'buses' }">Автобуси</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'assigment' }">Призначення</router-link>
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
  name: "Header",
};
</script>

<style lang="css" scoped>
ul {
  list-style: none;
  display: flex;
  gap: 30px;
}
.header {
  min-height: 70px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
