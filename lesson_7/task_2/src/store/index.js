import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            currency: 'grn',
            dollarRate: 42,
            currencyList: [
                {
                    id: 1,
                    currency: 'grn',
                    rate: 1,
                    text: 'GRN',
                },
                {
                    id: 2,
                    currency: 'usd',
                    rate: 40,
                    text: 'USD',
                },
                {
                    id: 3,
                    currency: 'euro',
                    rate: 44,
                    text: 'EURO',
                }
            ],
            bagList: []
        }
    },
    getters: {
        currency: ({ currency }) => currency,
        bagList: ({ bagList }) => bagList,
        currencyList: ({ currencyList }) => currencyList,
        productPrice: (state) => (item) => {
            const selectedCurrency = state.currencyList.find(
                (currencyItem) => currencyItem.currency === state.currency
            );
            if (!selectedCurrency) return item.price;
            if (!item.count) {

                if (selectedCurrency.currency === "grn") {
                    return item.price;
                }

                return (item.price / selectedCurrency.rate).toFixed(2);
            } else {

                if (selectedCurrency.currency === "grn") {
                    return item.price * item.count;
                }

                return (item.price * item.count / selectedCurrency.rate).toFixed(2);
            }
        },
        totalPriceInCurrency: (state, getters) => {
            const selectedCurrency = state.currencyList.find(
                (currencyItem) => currencyItem.currency === state.currency
            );

            let total = state.bagList.reduce((sum, item) => {
                return sum + parseFloat(getters.productPrice(item));
            }, 0);

            return selectedCurrency.currency === "grn" ? total : total.toFixed(2);
        }
    },
    mutations: {
        addProduct(state, productItem) {
            const findProduct = state.bagList.find(item => item.id === productItem.id);

            if (findProduct) {
                findProduct.count += 1;
            } else {
                state.bagList.push({ ...productItem, count: 1 });
            }
        },
        removeProduct(state, productId) {
            state.bagList = state.bagList.filter(
                (product) => product.id !== productId
            )
        },
        payProducts(state) {
            state.bagList = []
        },
        setCurrency(state, newCurrency) {
            state.currency = newCurrency;
        },

    },
    actions: {
        addProductToBag({ commit }, productItem) {
            commit('addProduct', productItem)
        },
        removeProductFromBag({ commit }, productId) {
            commit('removeProduct', productId)
        },
        payProductBag({ commit }) {
            commit('payProducts')
        },
        setCurrency({ commit }, newCurrency) {
            commit('setCurrency', newCurrency)
        },

    }
})