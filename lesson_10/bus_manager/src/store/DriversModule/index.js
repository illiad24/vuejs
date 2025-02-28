import { driversData } from "@/contacts"
export default {
    namespaced: true,
    state() {
        return {
            driversList: []
        }
    },
    getters: {
        getDriversList: (state) => state.driversList,
        getItem: (state) => (id) => {
            console.log(state.driversList)
            const item = state.driversList.find((el) => el.id == id)
            return item
        }
    },
    mutations: {
        setData(state, driversData) {
            state.driversList = driversData
        },
        addItem(state, itemData) {
            state.driversList.push(itemData)
        },
        deleteItem(state, id) {
            state.driversList = state.driversList.filter((item) => item.id != id)
        },
        updateItem(state, itemData) {
            const itemIndex = state.driversList.findIndex((el) => el.id == itemData.id)
            if (itemIndex != -1) {
                state.driversList[itemIndex] = { ...itemData }
            }
        }
    },
    actions: {
        loadData({ commit }) {
            commit('setData', driversData)
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
