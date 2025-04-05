import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainLayout from './Layout/MainLayout.vue'
const app = createApp(App)


import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
})

app.use(router)
app.use(store)
app.use(vuetify)
app.component('MainLayout', MainLayout)

app.mount('#app')
