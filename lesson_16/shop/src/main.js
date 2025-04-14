import 'vuetify/styles'
import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'
import MainLayout from './components/layouts/MainLayout.vue'
import i18n from './plugins/i18n'
const app = createApp(App)




import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import '@/assets/vuetify-overrides.scss'

const vuetify = createVuetify({
    // theme: false,
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
})

app.use(router)
app.use(store)
app.use(i18n)
app.component('MainLayout', MainLayout)
app.use(vuetify)
app.mount('#app')
