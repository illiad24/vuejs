<template>
  <main-layout>
    <div>
      <h1>Подарунки</h1>
    </div>
    <loading-block :is-loading="isLoading" :has-error="hasError">
      <div v-for="friend in getGifts" :key="friend.id">
        <item-element :item-data="friend" @delete="deleteElementById" />
      </div>
    </loading-block>
    <div>
      <add-form title="Додати Подарунок" @add="addNewFriend" />
    </div>
  </main-layout>
</template>

<script setup>
import { useGiftStore } from "@/stores/gifts.js";
import ItemElement from "../components/UI/ItemElement.vue";
import addForm from "../components/UI/addForm.vue";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const giftStore = useGiftStore();
const { getGifts, isLoading, hasError } = storeToRefs(giftStore);

function deleteElementById(id) {
  giftStore.deleteGift(id);
}

function addNewFriend(title) {
  giftStore.addGift({ title });
}
onMounted(() => {
  giftStore.loadList();
});
</script>

<style lang="scss" scoped></style>
