import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/suppliers',
            name: 'suppliers',
            component: () => import('../views/SuppliersView.vue'),
        },
        {
            path: '/products',
            name: 'products',
            component: () => import('../views/ProductsView.vue'),
            children: [
                {
                    path: 'selector',
                    name: 'selector',
                    component: () => import('../components/Products/FilterComp.vue'),
                },
                {
                    path: 'editor',
                    name: 'editor',
                    component: () => import('../components/Products/FormComp.vue'),
                }
            ],
        },
        {
            path: '/shopping-rules',
            name: 'shopping-rules',
            component: () => import('../views/RulesView.vue'),
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: () => import('../views/ContactView.vue'),
        },
    ],
})

export default router
