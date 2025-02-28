import { createStore } from 'vuex'
import BusesModule from './BusesModule/index.js'
import DriversModule from './DriversModule/index.js'
import AssigmentModule from './AssigmentModule/index.js'
export const store = createStore({
    modules: {
        buses: BusesModule,
        drivers: DriversModule,
        assigment: AssigmentModule
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

