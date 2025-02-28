import { busesData } from '@/contacts/index.js'

export default {
    namespaced: true,
    state() {
        return {
            busesList: [],
        }
    },
    getters: {
        getBusesList: (state) => state.busesList,
        getItem: (state) => (id) => {
            console.log(state.busesList)
            const item = state.busesList.find((el) => el.id == id)
            return item
        }
    },
    mutations: {
        setData(state, busesData) {
            state.busesList = busesData
        },
        addItem(state, itemData) {
            state.busesList.push(itemData)
        },
        deleteItem(state, id) {
            state.busesList = state.busesList.filter((item) => item.id != id)
        },
        updateItem(state, itemData) {
            const itemIndex = state.busesList.findIndex((el) => el.id == itemData.id)
            if (itemIndex != -1) {
                state.busesList[itemIndex] = { ...itemData }
            }
        }
    },
    actions: {
        loadData({ commit }) {
            commit('setData', busesData)
        },
        addItem({ commit }, itemData) {
            commit('addItem', { id: new Date().getTime(), ...itemData })
        },
        deleteItem({ commit }, id) {
            commit('deleteItem', id)
        },
        updateItem({ commit }, itemData) {
            commit('updateItem', itemData)
        },
    }
}
