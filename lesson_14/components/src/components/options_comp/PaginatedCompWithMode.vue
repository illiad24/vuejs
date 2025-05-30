<template>
  <div class="container">
    <div class="header">
      <slot name="header" :workersList="workersList">
        {{ title }}
      </slot>
    </div>
    <div class="content">
      <slot :currentPageWorkersList="currentPageWorkersList">
        <component
          :is="currentListView"
          :currentPageWorkersList="currentPageWorkersList"
          :startIndex="startIndex"
        />
      </slot>
    </div>
    <div class="pages-buttons">
      <slot name="footer" :pagesNumber="pagesNumber" :currentPage="currentPage">
        <!-- <button
          v-for="pageNum in pagesNumber"
          :key="pageNum"
          class="button"
          :disabled="pageNum === currentPage"
          @click="onSelectPage(pageNum)"
        >
          {{ pageNum }}
        </button> -->

        <component
          :is="currentActionsView"
          :currentPage="currentPage"
          :pagesNumber="pagesNumber"
          @on-select-page="onSelectPage"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import OrderedList from "./components/OrderedList.vue";
import ListExp from "./components/ListExp.vue";
import PaginatedActions from "./components/PaginatedActions.vue";
import ArrowsActions from "./components/ArrowsActions.vue";

export default {
  name: "PaginatedCompWithMode",
  props: {
    title: {
      type: String,
      default: "",
    },
    workersList: {
      type: Array,
      default: () => [],
    },
    perPage: {
      type: Number,
      default: 7,
    },
    modeList: {
      type: Number,
      default: 1,
    },
    modeActions: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      currentPage: 1,
    };
  },

  watch: {
    initialPageIndex(newValue) {
      this.currentPage = newValue;
    },
  },

  computed: {
    currentListView() {
      switch (this.modeList) {
        case 1:
          return OrderedList;
        default:
          return ListExp;
      }
    },
    currentActionsView() {
      switch (this.modeActions) {
        case 1:
          return PaginatedActions;
        default:
          return ArrowsActions;
      }
    },
    pagesNumber() {
      return Math.ceil(this.workersList.length / this.perPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.perPage + 1;
    },
    currentPageWorkersList() {
      const endIndex = this.startIndex - 1 + this.perPage;
      return this.workersList.slice(this.startIndex - 1, endIndex);
    },
  },

  methods: {
    onSelectPage(pageNum) {
      this.currentPage = pageNum;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 2px solid green;
  border-radius: 12px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  padding: 20px;
  display: inline-block;

  .content {
    margin: 20px 0px;
  }
  .pages-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .button {
    border: 1px solid black;
    border-radius: 4px;
    display: grid;
    place-items: center;
    min-width: 20px;
    cursor: pointer;
  }
}
</style>
