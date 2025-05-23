import DbOperations from './DbOperations.js'

function getModuleSettingsObject(collectionTitle) {
    const collectionDB = new DbOperations(collectionTitle)
    return {
        namespaced: true,

        state: () => ({
            [collectionTitle]: [],
            currentItem: null,
            loading: false,
            error: null,
        }),

        getters: {
            isLoading: (state) => state.loading,
            hasError: (state) => state.error,

            getItemsList: (state) => state[collectionTitle],
            getItemById: (state) => (itemId) =>
                state[collectionTitle].find((item) => item.id == itemId),
            getCurrentItem: ({ currentItem }) => currentItem,
            getItemsListWithPopulatedData: (state, getters, rootState) => {

                return state[collectionTitle].map((item) => {


                    const bus = rootState.buses && Array.isArray(rootState.buses.buses)
                        ? rootState.buses.buses.find((b) => b.id === item.bus)
                        : null;
                    const driver = rootState.drivers && Array.isArray(rootState.drivers.drivers)
                        ? rootState.drivers.drivers.find((d) => d.id === item.driver)
                        : null;

                    return {
                        ...item,
                        bus,
                        driver,
                    };
                });
            },

        },

        mutations: {
            setItemsList(state, itemsList) {
                state[collectionTitle] = itemsList
            },
            setCurrentItem(state, itemData) {
                state.currentItem = itemData
            },
            addItem(state, item) {
                state[collectionTitle].push(item)
            },
            deleteItem(state, deleteItemId) {
                state[collectionTitle] = state[collectionTitle].filter(
                    (item) => item.id !== deleteItemId
                )
            },
            setLoading(state, value) {
                state.loading = value
            },
            setError(state, error) {
                state.error = error
            },
        },

        actions: {
            loadList({ commit }, options) {
                commit('setError', null)
                commit('setLoading', true)

                collectionDB
                    .loadItemsList(options)
                    .then((list) => {
                        commit('setItemsList', list)
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            },
            addItem({ commit, dispatch }, item) {
                commit('setError', null)
                commit('setLoading', true)
                collectionDB
                    .addItem(item)
                    .then(() => {
                        dispatch('loadList')
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                // .finally(() => {
                //   commit('setLoading', false)
                // })
            },
            deleteItem({ commit, dispatch }, itemId) {
                commit('setError', null)
                commit('setLoading', true)

                collectionDB
                    .deleteItem(itemId)
                    .then(() => {
                        dispatch('loadList')
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                // .finally(() => {
                //   commit('setLoading', false)
                // })
            },
            updateItem({ commit, dispatch }, { itemId, data }) {
                commit('setError', null)
                commit('setLoading', true)

                collectionDB
                    .updateItem(itemId, data)
                    .then(() => {
                        dispatch('loadList')
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            },
            loadItemDataById({ commit }, itemId) {
                commit('setError', null)
                commit('setLoading', true)
                commit('setCurrentItem', null)
                collectionDB
                    .loadItemById(itemId)
                    .then((itemData) => {
                        commit('setCurrentItem', itemData)
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            },

            loadFilteredData({ commit }, { filters, options }) {
                commit('setError', null)
                commit('setLoading', true)
                collectionDB
                    .loadFilteredData({ filters }, options)
                    .then((list) => {
                        commit('setItemsList', list)
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            },
        },
    }
}

export default getModuleSettingsObject
