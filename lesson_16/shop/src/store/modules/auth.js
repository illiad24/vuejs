import { auth } from '@/firebase-config.js'

import { GoogleAuthProvider, signInWithPopup, signInWithCredential, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from
    'firebase/auth'
export default {
    namespaced: true,
    state: {
        user: null,
        loading: false,
        error: null,
    },
    getters: {
        getUser: (state) => state.user,
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setLoading(state, loading) {
            state.loading = loading
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        async loginWithEmailAndPassword({ commit, dispatch }, { email, password }) {
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                commit("setLoading", true);
                dispatch("saveLoginUserData", userCredential);
              })
              .catch((error) => {
                alert(error.message);
              })
              .finally(() => {
                commit("setLoading", false);
              });
          },
        async saveLoginUserData({ commit, dispatch }, loginResult) {
            // async saveLoginUserData({ commit }, loginResult) {
            console.log('loginResult')
            console.log(loginResult)
            //--------- user data -------
            const user = loginResult?.user // об'єкт користувача
            commit('setUser', user)
            //user.displayName - ім'я акаунту
            //user.photoURL - аватар акаунту
            //user.email - електронна адреса акаунту

            dispatch('users/loadUserPermissions', user.uid,
                { root: true })

            //--------- user access token -------
            // This gives you a Google Access Token. You can use it to access the

            // Google API.

            let credential = GoogleAuthProvider.credentialFromResult(loginResult)
            localStorage.setItem('authCredential', JSON.stringify(credential))
            dispatch('users/loadUserPermissions', user.uid, { root: true })
        },
        loginWithGoogle({ commit, dispatch }) {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
                .then((loginResult) => {
                    dispatch('saveLoginUserData', loginResult)
                })
                .catch((error) => {
                    commit('setError', error)
                })
        },
        async loginWithCredential({ commit, dispatch }) {
            return new Promise((resolve, reject) => {
                let credential = localStorage.getItem('authCredential')
                if (credential) {
                    credential = JSON.parse(credential)
                    credential = GoogleAuthProvider.credential(credential.idToken)
                    signInWithCredential(auth, credential)
                        .then((loginResult) => {
                            dispatch('saveLoginUserData', loginResult)
                            resolve(loginResult)
                        })
                        .catch((error) => {
                            console.log(error)
                            commit('setError', error)
                            // Handle Errors here.

                            dispatch('users/clearPermissions', null, {
                                root:
                                    true
                            })
                            reject(false)
                        })
                } else resolve(false)
            })
        },
        logout({ commit, dispatch }) {
            signOut(auth)
                .then(() => {
                    localStorage.removeItem('authCredential')
                    commit('setUser', null)
                    dispatch('users/clearPermissions', null, { root: true })
                })
                .catch((error) => {
                    commit('setError', error)
                })
        },
    },
}