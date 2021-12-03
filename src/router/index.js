import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index'
import auth from './middleware/auth'
import admin from './middleware/admin'
import guest from './middleware/guest'
import middlewarePipeline from '@/router/middlewarePipeline'

const history = createWebHashHistory()

const routes = [
    {
        path: '/',
        name: 'home',
        meta: { middleware: [guest] },
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: { middleware: [auth] },
        component: () => import('@/views/Dashboard.vue'),
    },
    {
        path: '/user',
        name: 'user',
        meta: { middleware: [auth] },
        component: () => import('@/views/User.vue'),
    },
    {
        path: '/users',
        name: 'users',
        meta: { middleware: [auth, admin] },
        component: () => import('@/views/Users.vue'),
        beforeEnter: (to, from, next) => {
            if (store.getters['auth/isAdmin']) next()
            else next(false)
        },
    },
    {
        path: '/login',
        name: 'login',
        meta: { middleware: [guest] },
        component: () => import('@/views/auth/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        meta: { middleware: [guest] },
        component: () => import('@/views/auth/Register.vue'),
    },
    {
        path: '/email-confirmation',
        name: 'confirm-email',
        meta: { middleware: [guest] },
        component: () => import('@/views/auth/ConfirmEmail.vue'),
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        meta: { middleware: [guest] },
        component: () => import('@/views/auth/ResetPassword.vue'),
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        meta: { middleware: [guest] },
        component: () => import('@/views/auth/ForgotPassword.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: () => import('@/views/NotFound.vue'),
    },
]

const router = createRouter({ history, routes })

router.beforeEach((to, from, next) => {
    const middleware = to.meta.middleware
    const context = { to, from, next, store }
    console.log('MIDDLEWARE', middleware)
    if (!middleware) {
        return next()
    }

    middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1),
    })
})

export default router
