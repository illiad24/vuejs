import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsList from '@/views/products/ProductsList.vue'
import ProductsForm from '@/views/products/ProductsForm.vue'
import store from '@/store'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiredAuth: false
            }
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsList,
            meta: {
                requiredAuth: false
            }
        },
        {
            path: '/products/form/:id?',
            name: 'form',
            component: ProductsForm,
            meta: {
                requiredAuth: true
            },
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
            meta: {
                requiredAuth: false
            }
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                requireAuth: false,
            },
            component: import('../views/Login.vue'),
            children: [
                {
                    path: 'emailForm',
                    name: 'emailForm',
                    component: () => import('../components/FormComponents/LoginForm.vue'),
                    meta: {
                        requiredAuth: false
                    }
                },
            ]
        },

    ],
})
router.beforeEach(async (to) => {
    if (to.meta?.requiredAuth) {
        let isAuthenticated = store.state.auth.user
        if (!isAuthenticated) isAuthenticated =
            await store.dispatch('auth/loginWithCredential')
        if (!isAuthenticated) {
            return {
                name: 'login',
            }
        }
    }
})

export default router
