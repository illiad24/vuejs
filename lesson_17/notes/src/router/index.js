import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/friends',
            name: 'friends',
            component: () => import('../views/Friends.vue'),
        },
        {
            path: '/gifts',
            name: 'gifts',
            component: () => import('../views/Gifts.vue'),
        },
        {
            path: '/assigments',
            name: 'assigments',
            component: () => import('../views/Assigments.vue'),
        },
    ],
})

export default router
