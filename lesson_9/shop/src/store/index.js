import { createStore } from 'vuex'
import { productsData } from '../constants/index.js'
export default createStore({
    state: {
        productsList: [
            {
                id: 1,
                category: "Телевізори",
                items: [
                    { id: 101, name: "Samsung QLED", price: 1500 },
                    { id: 102, name: "LG OLED", price: 1800 },
                    { id: 103, name: "Sony Bravia", price: 1600 }
                ]
            },
        ],
    },
    getters: {
        getProductList: (state) => state.productsList,
        getProductsItems: (state) => (categoryId) => {
            const product = state.productsList.find((el) => el.id == categoryId)
            return product ? product.items : null
        },
        getProductsItem: (state) => (categoryId, id) => {
            const items = state.productsList.find((el) => el.id == categoryId)?.items || [];
            return items.find((el) => el.id == id) || null;
        },


    },
    mutations: {
        setData(state, productData) {
            state.productsList = productData
        },
        updateProduct(state, { categoryId, productData }) {
            const category = state.productsList.find((category) => category.id === categoryId);

            if (category) {
                const productIndex = category.items.findIndex((product) => product.id === productData.id);
                console.log(productIndex)
                if (productIndex !== -1) {
                    category.items[productIndex] = { ...productData };
                }
            }
        },
        createProduct(state, { categoryId, productData }) {
            const category = state.productsList.find((el) => el.id == categoryId)

            if (category) {
                category.items.push({ id: new Date().getTime(), ...productData })
            }
        },
        deleteProduct(state, { categoryId, productId }) {
            const category = state.productsList.find((el) => el.id == categoryId)

            if (category) {
                category.items = category.items.filter((el) => el.id != productId) || null;
            }
        }
    },
    actions: {
        loadData({ commit }) {
            commit('setData', productsData)
        },
        updateProduct({ commit }, { categoryId, productData }) {
            commit('updateProduct', { categoryId, productData })
        },
        createProduct({ commit }, { categoryId, productData }) {
            commit('createProduct', { categoryId, productData })
        },
        deleteProduct({ commit }, { categoryId, productId }) {
            commit('deleteProduct', { categoryId, productId })
        }
    },
})
