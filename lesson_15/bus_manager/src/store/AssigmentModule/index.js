
export default {
    namespaced: true,
    state() {
        return {
            assigmentlist: []
        }
    },
    getters: {
        // getAssigmentlist: (state, getters, rootState, rootGetters) => {
        //     const driversList = rootGetters['drivers/getDriversList'];
        //     const busesList = rootGetters['buses/getBusesList'];

        //     return state.assigmentlist
        //         .filter(assignment => {
        //             const driver = driversList.find(driver => driver.id === assignment.driver);
        //             const bus = busesList.find(bus => bus.id === assignment.bus);
        //             return driver && bus;
        //         })
        //         .map(assignment => {
        //             const driver = driversList.find(driver => driver.id === assignment.driver);
        //             const bus = busesList.find(bus => bus.id === assignment.bus);
        //             return {
        //                 id: assignment.id,
        //                 fullName: driver.fullName,
        //                 bus: bus.number
        //             };
        //         });
        // },
        // getDrivers: (state, getters, rootState, rootGetters) => {
        //     return rootGetters['drivers/getDriversList'];
        // },
        // getBuses: (state, getters, rootState, rootGetters) => {
        //     return rootGetters['buses/getBusesList'];
        // }
    },

    mutations: {

    },
    actions: {

    }
}
