const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
        meta: {
            layout: 'Default',
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import('@/pages/About.vue'),
        meta: {
            layout: 'Default',
        },
    },

    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import('@/pages/Profile.vue'),
        meta: {
            layout: 'Dashboard',
        },
    },
];

export default routes;
