import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import MainLayout from './components/Layouts/MainLayout.vue'
import LoadingBlock from './components/UI/LoadingBlock.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('main-layout', MainLayout)
app.component('loading-block', LoadingBlock)

app.mount('#app')
