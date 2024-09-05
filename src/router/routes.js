const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
        meta: {
            layout: 'Default',
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import(/* webpackChunkName: "about" */ '../pages/About.vue'),
        meta: {
            layout: 'Default',
        },
    },

    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import(/* webpackChunkName: "profile" */ '../pages/Profile.vue'),
        meta: {
            layout: 'Dashboard',
        },
    },
];

export default routes;
