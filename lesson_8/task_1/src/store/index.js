import { createStore } from 'vuex'
import { categoryList, productsList } from '@/constants/index.js'
const store = createStore({

    state() {
        return {
            categoryList,
            productsList,
            selectedCategory: 1
        }
    },


    getters: {
        getCategoryList: (state) => state.categoryList,
        getProductsList: (state) => {
            return state.productsList.filter(el => el.categoryId === state.selectedCategory)
        },
        selectedCategory: ({ selectedCategory }) => selectedCategory,
    },
    mutations: {
        increment(state) {
            state.count++
        },
        changeCategory(state, id) {
            state.selectedCategory = id
        }
    },
    actions: {
        setSelectedCategory({ commit }, id) {
            console.log(id)
            commit('changeCategory', id)
        },
    }
})
export default store