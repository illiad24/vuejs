
import { createStore } from 'vuex'
import getModuleSettingsObject from './helpers/GetModuleSettingsObject'
import auth from './modules/auth'
import users from './modules/users'
export default createStore({
    modules: {
        products: getModuleSettingsObject('products'),
        sellers: getModuleSettingsObject('sellers'),
        brands: getModuleSettingsObject('brands'),
        auth,
        users
    },
})
