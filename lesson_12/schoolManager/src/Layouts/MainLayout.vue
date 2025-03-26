<template>
  <div class="wrapper">
    <Header />
    <div class="main">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
export default {
  name: 'MainLayout',
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped></style>
