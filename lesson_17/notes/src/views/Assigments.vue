<template>
  <main-layout>
    <h1>Розподіл подарунків</h1>
    <div>
      <div>
        <div>Список</div>

        <loading-block :is-loading="isLoading" :has-error="hasError">
          <div v-for="assigment in getAssigments" :key="assigment.id">
            <div
              v-if="
                getFriendById(assigment.friend) && getGiftById(assigment.gift)
              "
            >
              {{ getFriendById(assigment.friend)?.title }} -
              {{ getGiftById(assigment.gift)?.title }}
              <button type="button" @click="deleteElementById(assigment.id)">
                Видалити
              </button>
            </div>
          </div>
        </loading-block>
      </div>
      <hr />
      <div>
        <div>
          <div>Друг</div>
          <select v-model="selectedFriend">
            <option :value="item.id" v-for="item in getFriends" :key="item.id">
              {{ item.title }}
            </option>
          </select>
        </div>
        <hr />
        <div>
          <div>Подарунок</div>
          <select v-model="selectedGift">
            <option :value="item.id" v-for="item in getGifts" :key="item.id">
              {{ item.title }}
            </option>
          </select>
        </div>
        <hr />
        <div>
          <button
            @click="addAssigment"
            :disabled="!selectedFriend || !selectedGift"
          >
            Додати
          </button>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useGiftStore } from "@/stores/gifts";
import { useFriendsStore } from "@/stores/friends";
import { useAssigmentStore } from "@/stores/assigment";
import { ref, onMounted } from "vue";
const giftStore = useGiftStore();
const friendStore = useFriendsStore();
const assigmentStore = useAssigmentStore();

const selectedFriend = ref(null);
const selectedGift = ref(null);

const { getFriends } = storeToRefs(friendStore);
const { getGifts } = storeToRefs(giftStore);
const { getAssigments, isLoading, hasError } = storeToRefs(assigmentStore);

function addAssigment() {
  if (selectedFriend.value && selectedGift.value) {
    assigmentStore.addAssigment({
      friend: selectedFriend.value,
      gift: selectedGift.value,
    });
    selectedFriend.value = null;
    selectedGift.value = null;
  }
}
function deleteElementById(id) {
  assigmentStore.deleteAssigment(id);
}
function getFriendById(id) {
  return friendStore.getFriendById(id);
}
function getGiftById(id) {
  return giftStore.getGiftById(id);
}
onMounted(() => {
  assigmentStore.loadList();
  giftStore.loadList();
  friendStore.loadList();
});
</script>

<style lang="scss" scoped></style>
