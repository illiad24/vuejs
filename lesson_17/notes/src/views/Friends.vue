<template>
  <main-layout>
    <div>
      <h1>Друзі</h1>
    </div>
    <loading-block :is-loading="isLoading" :has-error="hasError">
      <div v-for="friend in getFriends" :key="friend.id">
        <item-element
          :item-data="friend"
          @delete="deleteElementById(friend.id)"
        />
      </div>
    </loading-block>
    <div>
      <add-form title="Додати друга" @add="addNewFriend" />
    </div>
  </main-layout>
</template>

<script setup>
import { useFriendsStore } from "../stores/friends.js";
import { storeToRefs } from "pinia";
import ItemElement from "../components/UI/ItemElement.vue";
import addForm from "../components/UI/addForm.vue";
import { onMounted } from "vue";

const friendsStore = useFriendsStore();
const { getFriends, isLoading, hasError } = storeToRefs(friendsStore);
function deleteElementById(id) {
  friendsStore.deleteFriend(id);
}

function addNewFriend(title) {
  friendsStore.addFriend({ title });
}
onMounted(() => {
  friendsStore.loadList();
});
onMounted;
</script>

<style lang="scss" scoped></style>
