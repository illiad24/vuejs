import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('users')
console.log(collectionDB)
export default {
    namespaced: true,
    state: () => ({
        permissions: {},

        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
        userPermissions: (state) => state.permissions,
    },
    mutations: {
        setPermissions(state, permissions) {
            state.permissions = permissions
        },
        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        loadUserPermissions({ commit, rootGetters }, userId) {
            userId ??= rootGetters['auth/getUser'].uid
            console.log('userId')
            console.log(userId)
            collectionDB.loadItemById(userId).then((permissions) => {
                commit('setPermissions', permissions)
            })
        },
        clearPermissions({ commit }) {
            commit('setPermissions', {})
        },
    },
}