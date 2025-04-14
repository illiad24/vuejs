<template>
  <div class="wrapper">
    <slot name="header">
      <header class="min-h-[100px] flex flex-col justify-center bg-green">
        <div class="container">
          <div class="flex items-center justify-between gap-[32px]">
            <nav>
              <ul class="flex gap-[32px] items-center">
                <li class="color-blue hover:color-red">
                  <router-link :to="{ name: 'home' }">
                    {{ $t("menu.home") }}
                  </router-link>
                </li>
                <li class="color-blue hover:color-red">
                  <router-link :to="{ name: 'products' }">
                    {{ $t("menu.products") }}
                  </router-link>
                </li>
                <li class="color-blue hover:color-red">
                  <router-link :to="{ name: 'about' }">
                    {{ $t("menu.contacts") }}
                  </router-link>
                </li>
              </ul>
            </nav>
            <div class="flex items-center gap-[32px]">
              <div>
                <!-- <select v-model="currentLocale">
                  <option value="ua">Ua</option>
                  <option value="en">En</option>
                </select> -->
                <v-select
                  v-model="currentLocale"
                  @update:modelValue="changeLanguage"
                  :items="[
                    { label: 'Ua', value: 'ua' },
                    { label: 'En', value: 'en' },
                  ]"
                  item-title="label"
                  item-value="value"
                ></v-select>
              </div>
              <div>
                <div>
                  <div v-if="getUser">
                    <span>{{ getUser.displayName }}</span>
                    <img :src="getUser.photoURL" />
                    <button @click="onLogout">
                      {{ $t("actionTitles.logout") }}
                    </button>
                  </div>
                  <router-link :to="{ name: 'login' }" v-else>
                    {{ $t("actionTitles.login") }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </slot>
    <main>
      <div v-if="isLoading" class="center">Loading ......</div>
      <div v-else-if="hasError" class="center">Вибачте. Сталась помилка</div>
      <slot v-else name="default"> </slot>
    </main>
    <footer
      class="footer text-center text-[14px] min-h-[100px] flex flex-col justify-center bg-green"
    >
      <div class="container">
        <slot name="footer">
          <div>Footer</div>
        </slot>
      </div>
    </footer>
  </div>
</template>

<script>
import router from "@/router";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MainLayout",
  data() {
    return {
      currentLocale: null,
    };
  },
  created() {
    this.$i18n.locale = localStorage.getItem("lastLanguage") || "en";
    this.currentLocale = this.$i18n.locale;
    if (localStorage.getItem("lastLanguage") !== this.$i18n.locale) {
      localStorage.setItem("lastLanguage", this.$i18n.locale);
      this.currentLocale = this.$i18n.locale;
    }
    const self = this;
    window.addEventListener("storage", function () {
      if (self.$i18n.locale !== localStorage.getItem("lastLanguage")) {
        self.$i18n.locale = localStorage.getItem("lastLanguage");
        self.currentLocale = localStorage.getItem("lastLanguage");
        self.$router.go();
      }
    });
  },

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions("auth", ["loginWithGoogle", "logout"]),

    onLogout() {
      this.logout();
      this.$router.push({
        name: "login",
      });
    },
    async onLogin() {
      try {
        await this.loginWithGoogle();
        this.$router.push({
          name: "home",
        });
      } catch {
        alert("Щось пішло не так");
      }
    },
    changeLanguage(lang) {
      console.log(lang);
      this.$i18n.locale = lang;
      localStorage.setItem("lastLanguage", this.$i18n.locale);
    },
  },
  computed: {
    ...mapGetters("auth", ["getUser"]),
  },
};
</script>

<style lang="scss" scoped>
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
</style>
