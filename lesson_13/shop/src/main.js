import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MainLayout from './Layouts/MainLayout.vue'
import SecondLayout from './Layouts/SecondLayout.vue'
import store from './store'
const app = createApp(App)

app.use(router)
app.use(store)
app.component("MainLayout", MainLayout);
app.component("SecondLayout", SecondLayout);

app.mount('#app')
