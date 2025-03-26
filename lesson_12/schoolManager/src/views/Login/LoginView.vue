<template>
  <MainLayout>
    <login-form />
  </MainLayout>
</template>

<script>
import MainLayout from '@/Layouts/MainLayout.vue'
import LoginForm from '@/components/Login/LoginForm.vue'
export default {
  name: 'LoginView',
  components: {
    LoginForm,
    MainLayout,
  },
}
</script>

<style lang="scss" scoped></style>
