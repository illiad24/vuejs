import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/Login/LoginView.vue'
import TeachersView from '@/views/TeachersView.vue'
import LessonsView from '@/views/LessonsView.vue'
import SelectLesson from '@/components/lessons/SelectLesson.vue'
import SelectTeacher from '@/components/lessons/SelectTeacher.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiresAuth: false,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                requiresAuth: false,
            }
        },
        {
            path: '/lessons',
            name: 'lessons',
            component: LessonsView,
            meta: {
                requiresAuth: true,
            },
            children: [
                {
                    path: 'select',
                    name: 'select',
                    component: SelectLesson,
                    meta: {
                        requiresAuth: true,
                    },
                },
                {
                    path: ':id(\\d*)+',
                    name: 'lessonsTeachersChoose',
                    component: SelectTeacher,
                    meta: {
                        requiresAuth: true,
                    },
                },
                {
                    path: ':id(\\d+-\\d+)+',
                    name: 'curiculum',
                    component: () => import('@/components/lessons/Curiculum.vue'),
                    meta: {
                        requiresAuth: false,
                    },
                },
            ]
        },
        {
            path: '/teachers',
            name: 'teachers',
            component: TeachersView,
            meta: {
                requiresAuth: false,
            }
        },
        {
            path: '/:pathMath(.*)*',
            name: 'NotFound',
            component: () => import('../views/PageNotFound.vue'),
            meta: {
                requiresAuth: false,
            },
        },
    ],
})
router.beforeEach((to, from) => {
    const user = localStorage.getItem('user')
    console.log(user)
    if (to.meta.requiresAuth && !user) {
        return {
            path: '/login',
            query: { redirect: to.fullPath },
        }
    }
})
export default router
