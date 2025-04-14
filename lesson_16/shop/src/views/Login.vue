<template>
  <main-layout>
    <div class="container">
      <h1 class="link">
        <button @click="onLogin">Увійти за допомогою GOOGLE</button>
      </h1>
      <div>
        <router-link :to="{ name: 'emailForm' }" class="link">
          Увійти за допомогою пошти
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </main-layout>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Login",

  methods: {
    ...mapActions("auth", ["loginWithGoogle"]),

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
.container {
  padding: 50px;
  text-align: center;
}
.link {
  display: inline-block;
  border: 1px solid #000;
  padding: 16px 40px;
  max-width: 400px;
  width: 100%;
  transition: all 0.3s;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  @media (any-hover: hover) {
    &:hover {
      color: #fff;
      background-color: red;
    }
  }
}
</style>
