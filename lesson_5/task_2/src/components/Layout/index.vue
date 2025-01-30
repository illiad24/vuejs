<template>
  <ProductsList
    :productsList="notebooksList"
    @addProductToCart="addProductToCart($event)"
  />
  <ShoppingBag
    :bagIdList="bagIdList"
    v-if="bagIdList"
    @deleteProduct="deleteProduct($event)"
    @change-count="onChangeCount"
  />
</template>

<script>
import ProductsList from "../ProductsList";
import ShoppingBag from "../ShoppingBag";
import { notebooksList } from "../../constants/productsData.js";
console.log(notebooksList);
export default {
  name: "MainLayout",
  components: {
    ProductsList,
    ShoppingBag,
  },
  data() {
    return {
      notebooksList,
      bagIdList: [{ id: 1, count: 2 }],
    };
  },
  methods: {
    addProductToCart(productId) {
      const productInBag = this.bagIdList.find((item) => item.id === productId);
      if (productInBag) {
        productInBag.count += 1;
      } else {
        this.bagIdList.push({ id: productId, count: 1 });
      }
    },
    deleteProduct(productId) {
      const productInBag = this.bagIdList.find((item) => item.id === productId);

      if (productInBag) {
        const index = this.bagIdList.indexOf(productInBag);
        if (index !== -1) {
          this.bagIdList.splice(index, 1);
        }
      }
    },
    onChangeCount({ count, id }) {
      const cartProduct = this.notebooksList.find(
        (product) => product.id === id
      );
      cartProduct.count = count;
    },
  },
};
</script>

<style></style>
