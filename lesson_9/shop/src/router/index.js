import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import PaymentTerms from '@/views/PaymentTerms.vue'
import ProductsList from '@/views/ProductsList/index.vue'
import ProductItem from '@/views/ProductsList/ProductItem.vue'
import ProductsItems from '@/views/ProductsList/ProductsItems.vue'
import FormPage from '@/views/ProductsList/FormPage.vue'
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
            component: ContactView
        },
        {
            path: '/payment-terms-and-conditions',
            name: 'payment-terms-and-conditions',
            component: PaymentTerms
        },
        {
            path: '/products',
            name: 'shop',
            component: ProductsList
        },
        {
            path: '/products/:categoryId?',
            name: 'shopCategory',
            component: ProductsItems
        },
        {
            path: '/products/:categoryId/:id',
            name: 'shopItem',
            component: ProductItem
        },
        {
            path: '/products/form/:categoryId?/:productId?',
            name: 'shopForm',
            component: FormPage
        },
    ],
})

export default router
