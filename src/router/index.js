import { createRouter, createWebHashHistory } from 'vue-router';

const history = createWebHashHistory();
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/auth/Register.vue'),
  },
  {
    path: '/email-confirmation',
    name: 'confirm-email',
    component: () => import('@/auth/ConfirmEmail.vue'),
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/auth/ResetPassword.vue'),
    },
];

const router = createRouter({ history, routes });

export default router;