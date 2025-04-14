<template>
  <div class="border-2 border-solid rounded-sm p-[24px]!">
    <div>
      <img :src="dataItem.img" alt="Image" />
    </div>
    <div>
      <div class="text-md-34-28 mb-[16px]! font-bold">
        {{ dataItem.title }}
      </div>
      <div class="text-red text-[24px]">
        {{ dataItem.price }}
      </div>
      <div v-if="userPermissions.update">
        <v-btn append-icon="mdi-pen" v-if="userPermissions.update">
          <router-link :to="{ name: 'form', params: { id: dataItem.id } }"
            >Редагувати товар</router-link
          >
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductItem",
  props: {
    dataItem: {
      type: Object,
      default: () => [{}],
    },
  },
  computed: {
    ...mapGetters("users", ["userPermissions"]),
  },
};
</script>

<style lang="scss" scoped></style>
