import { createStore } from 'vuex'
import teacherStore from './modules/teacherStore'
import auth from './modules/auth'
import lessonsStore from './modules/lessonsStore'
export const store = createStore({
    modules: {
        teachers: teacherStore,
        lessons: lessonsStore,
        auth
    },
    state() {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
})

