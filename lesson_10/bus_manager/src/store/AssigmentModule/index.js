
export default {
    namespaced: true,
    state() {
        return {
            assigmentlist: []
        }
    },
    getters: {
        getAssigmentlist: (state, getters, rootState, rootGetters) => {
            const driversList = rootGetters['drivers/getDriversList'];
            const busesList = rootGetters['buses/getBusesList'];

            return state.assigmentlist.map((assignment) => {
                console.log(assignment)
                const driver = driversList.find(driver => driver.id === assignment.driver);
                const bus = busesList.find(bus => bus.id === assignment.bus);
                console.log(bus)
                return {
                    id: assignment.id,
                    fullName: driver ? driver.fullName : '',
                    bus: bus ? bus.number : ''
                };
            });
        },
        getDrivers: (state, getters, rootState, rootGetters) => {
            return rootGetters['drivers/getDriversList'];
        },
        getBuses: (state, getters, rootState, rootGetters) => {
            return rootGetters['buses/getBusesList'];
        }
    },

    mutations: {
        addAssigment(state, data) {
            state.assigmentlist.push(data)
        },
        delete(state, id) {
            state.assigmentlist = state.assigmentlist.filter((item) => item.id != id)

        }
    },
    actions: {
        addAssigment({ commit }, data) {
            commit('addAssigment', { id: new Date().getTime(), ...data })
        },
        delete({ commit }, id) {
            commit('delete', id)
        }
    }
}
