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
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <slot> </slot>
    <slot name="gallery">
      <gallery title="Галерея" :imgList="galleryList" />
    </slot>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import Gallery from "../components/Gallery/index.vue";

export default {
  name: "SecondLayout",
  computed: {
    ...mapGetters(["galleryList"]),
  },
  components: {
    Gallery,
  },
};
</script>

<style lang="scss" scoped></style>
