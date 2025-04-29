<template>
  <div class="wrapper">
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'friends' }">Friends</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'gifts' }">Gifts</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'assigments' }">Assigments</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div v-if="isLoading" class="center">Loading ......</div>
      <div v-else-if="hasError" class="center">Вибачте. Сталась помилка</div>
      <slot v-else> </slot>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1 1 auto;
  @supports (overflow: clip) {
    overflow: clip;
  }
  > main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
  > * {
    min-width: 0;
  }
}
header {
  ul {
    display: flex;
    justify-content: center;
    gap: 16px;
    padding: 0;
    li {
      list-style: none;
    }
  }
}
footer {
  text-align: center;
}
</style>
