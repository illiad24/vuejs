import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import BusesList from '@/views/BusesList/index.vue'
import BusForm from '@/views/BusesList/BusForm.vue'
import DriverList from '@/views/DriversList/index.vue'
import DriverForm from '@/views/DriversList/DriverForm.vue'
import Assigment from '@/views/Assigment.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/drivers',
            name: 'drivers',
            component: DriverList,
        },
        {
            path: '/drivers/form/:id?',
            name: 'drivers-form',
            component: DriverForm,
        },
        {
            path: '/buses',
            name: 'buses',
            component: BusesList,
        },
        {
            path: '/buses/form/:id?',
            name: 'bus-form',
            component: BusForm,
        },
        {
            path: '/assigment',
            name: 'assigment',
            component: Assigment,
        },
    ],
})

export default router
