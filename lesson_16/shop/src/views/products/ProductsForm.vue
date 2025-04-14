<template>
  <main-layout>
    <div class="container" v-if="userPermissions.write">
      <h1 class="text-55-20">Форма товару</h1>
      <div class="body center">
        <VeeForm
          :validation-schema="shema"
          :initial-values="product"
          :key="product"
          @submit="onSubmit"
          class="grid gap-[30px] max-w-md m-auto"
        >
          <div class="grid gap-[8px]">
            <label for="title">Title:</label>
            <Field
              name="title"
              type="text"
              class="m-height-[50px] bg-sky-900"
            />
            <ErrorMessage name="title" />
          </div>
          <div class="grid gap-[8px]">
            <label for="price">Price:</label>
            <Field name="price" type="number" />
            <ErrorMessage name="price" />
          </div>
          <div class="grid gap-[8px]">
            <label for="img">Image Url:</label>
            <Field name="img" type="text" />
            <ErrorMessage name="img" />
          </div>
          <div class="grid gap-[8px]">
            <label for="brand">Бренд:</label>
            <Field as="select" name="brand">
              <option disabled value="">Оберіть бренд</option>
              <option
                v-for="brand in brandItems"
                :key="brand.id"
                :value="brand.id"
              >
                {{ brand.title }}
              </option>
            </Field>
            <ErrorMessage name="brand" />
          </div>

          <div class="grid gap-[8px]">
            <label for="seller">Продавець:</label>
            <Field as="select" name="seller">
              <option disabled value="">Оберіть продавця</option>
              <option
                v-for="seller in sellerItems"
                :key="seller.id"
                :value="seller.id"
              >
                {{ seller.title }}
              </option>
            </Field>
            <ErrorMessage name="seller" />
          </div>
          <v-btn
            append-icon="mdi-plus"
            type="submit"
            v-if="userPermissions.write"
          >
            {{ buttonText }}
          </v-btn>
        </VeeForm>
      </div>
    </div>
  </main-layout>
</template>

<script>
import { Form as VeeForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { mapActions, mapGetters } from "vuex";

const initialProductData = {
  title: null,
  price: null,
  img: null,
  brand: "",
  seller: "",
};

export default {
  name: "ProductsForm",
  components: {
    VeeForm,
    Field,
    ErrorMessage,
  },
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      product: { ...initialProductData },
      shema: yup.object({
        title: yup.string().required().min(2),
        price: yup.number().required(),
        img: yup.string().required(),
        brand: yup.string().required(),
        seller: yup.string().required(),
      }),
    };
  },
  computed: {
    ...mapGetters("users", ["userPermissions"]),
    ...mapGetters("products", ["getCurrentItem"]),
    ...mapGetters("sellers", { sellerItems: "getItemsList" }),
    ...mapGetters("brands", { brandItems: "getItemsList" }),
    productId() {
      return this.$route.params.id;
    },
    buttonText() {
      return this.productId ? "Редагувати" : "Додати";
    },
  },
  watch: {
    getCurrentItem: {
      handler(newValue) {
        if (newValue) {
          console.log(newValue);
          this.product = {
            title: newValue.title,
            price: newValue.price,
            img: newValue.img,
            brand: newValue.brand,
            seller: newValue.seller,
          };
          this.updateKey++;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions("products", ["loadItemDataById", "addItem", "updateItem"]),
    ...mapActions("brands", { loadBrandsList: "loadList" }),
    ...mapActions("sellers", { loadSellerList: "loadList" }),
    async onSubmit(values, { resetForm }) {
      try {
        if (this.productId) {
          await this.updateItem({ itemId: this.productId, data: values });
        } else {
          await this.addItem(values);
        }
        resetForm();
        this.$router.push({
          name: "products",
        });
      } catch {
        alert();
      }
    },
  },
  created() {
    this.loadSellerList();
    this.loadBrandsList();
    this.product = { ...initialProductData };
    if (this.productId) {
      this.loadItemDataById(this.productId);
    }
  },
};
</script>

<style lang="scss" scoped>
form {
  max-width: 700px;
  margin: 0 auto;
}
input {
  min-height: 60px;
  background-color: grey;
}
</style>
