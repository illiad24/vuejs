<template>
  <div>
    <label>
      Назва
      <input v-model="productData.name" type="text" />
    </label>
    <br />
    <label>
      Ціна
      <input v-model="productData.price" type="number" /> </label
    ><br />

    <button @click="onSave">{{ saveButtonTitle }}</button>
    <button @click="onCancel">Відміна</button>
  </div>
  {{ productData }}
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FormPage",
  data() {
    return {
      productData: {
        name: null,
        price: null,
      },
    };
  },
  created() {
    if (this.productId)
      this.productData = {
        ...this.productsItem,
      };
  },
  computed: {
    ...mapGetters(["getProductsItem"]),
    productId() {
      return Number(this.$route.params.productId);
    },
    categoryId() {
      return Number(this.$route.params.categoryId);
    },
    productsItem() {
      const item = this.getProductsItem(this.categoryId, this.productId);
      return item;
    },
    saveButtonTitle() {
      return this.productId ? "Зберегти" : "Створити";
    },
  },
  methods: {
    ...mapActions(["updateProduct", "createProduct"]),
    onSave() {
      if (this.productId) {
        this.updateProduct({
          categoryId: this.categoryId,
          productData: this.productData,
        });
        this.$router.push({
          name: "shopItem",
          params: { categoryId: this.categoryId, id: this.productId },
        });
      } else {
        this.createProduct({
          categoryId: this.categoryId,
          productData: this.productData,
        });
        this.$router.push({
          name: "shopCategory",
          params: { categoryId: this.categoryId },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
