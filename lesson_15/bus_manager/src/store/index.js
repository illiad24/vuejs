
import { createStore } from 'vuex'
import getModuleSettingsObject from './helpers/GetModuleSettingsObject'

export default createStore({
    modules: {
        drivers: getModuleSettingsObject('drivers'),
        buses: getModuleSettingsObject('buses'),
        assigments: getModuleSettingsObject('assigments'),
    },
})
