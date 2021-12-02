import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index'
const history = createWebHashHistory()

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: { requiresAuth: true },
        component: () => import('@/views/Dashboard.vue'),
    },
    {
        path: '/user',
        name: 'user',
        meta: { requiresAuth: true },
        component: () => import('@/views/User.vue'),
    },
    {
        path: '/users',
        name: 'users',
        meta: { requiresAuth: true },
        component: () => import('@/views/Users.vue'),
        beforeEnter: (to, from, next) => {
            if (store.getters['auth/isAdmin']) next()
            else next(false)
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/auth/Register.vue'),
    },
    {
        path: '/email-confirmation',
        name: 'confirm-email',
        component: () => import('@/views/auth/ConfirmEmail.vue'),
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('@/views/auth/ResetPassword.vue'),
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/views/auth/ForgotPassword.vue'),
    },
]

const router = createRouter({ history, routes })

router.beforeEach((to, from, next) => {
    const authUser = store.getters['auth/authUser']
    const reqAuth = to.matched.some((record) => record.meta.requiresAuth)
    const loginQuery = { path: '/login', query: { redirect: to.fullPath } }

    if (reqAuth && !authUser) {
        store.dispatch('auth/getAuthUser').then(() => {
            if (!store.getters['auth/authUser']) next(loginQuery)
            else next()
        })
    } else {
        next() // make sure to always call next()!
    }
})

export default router
