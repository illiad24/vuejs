export default {
    namespaced: true,
    state() {
        return {
            userData: JSON.parse(localStorage.getItem('user')) || null,
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.userData,
        getUserData: (state) => state.userData
    },
    mutations: {
        login(state, userData) {
            state.userData = { ...userData }
            localStorage.setItem('user', JSON.stringify(userData));
        },
        exit(state) {
            state.userData = null
            localStorage.removeItem('user')
            location.reload();

            // !Не можу зрозуміти чому не працює цей перехід
            // this.$router.push({
            //     path: '/',
            // })
        }
    },
    actions: {

        login({ commit }, userData) {
            commit('login', userData)
        },
        exit({ commit }) {
            commit('exit')
        }
    }
}
