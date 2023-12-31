import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('../views/SettingsView.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue'),
    },
    {
        path: '/:country',
        name: 'Country',
        component: () => import('../views/HomeView.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
