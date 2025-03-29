<template>
  <second-layout>
    <div class="content">
      <h1>Наші кантакти</h1>
      <ul>
        <li>
          <list-component label="Адрес" content="Біля будтинку баби галі" />
        </li>
        <li>
          <list-component label="Номер" :greenValue="true" content="32323232" />
        </li>
        <li>
          <list-component label="Заступник" content="Іван" />
        </li>
      </ul>
    </div>
  </second-layout>
</template>

<script>
import ListComponent from "../components/ListComponent.vue";
export default {
  name: "ContactView",
  components: {
    ListComponent,
  },
};
</script>

<style lang="scss" scoped></style>
