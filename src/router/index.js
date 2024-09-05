//import routes from './routes';

import pageLayout from '@/pages/_layout';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const modules = import.meta.glob("@/pages/*.vue", { eager: true });
function getRoutes() {
    const a = [];
    for (const key in modules) {
        const name = key.split("/").at(-1).split(".")[0];
        const fn = modules[key].default;

        let path = name.toLowerCase();
        if (path == 'home' || path == 'index') path = '';
        let layout = pageLayout[path] || 'Default';
        //console.log(name, layout);
        a.push({
            path: '/' + path,
            name: name,
            //component: () => import('../pages/Home.vue'),
            component: fn,
            meta: {
                layout: layout,
            },
        })
    }
    return a;
}

const routes = getRoutes();
console.log('routes =', routes);

async function loadLayoutMiddleware(route) {
    try {
        //let layout = 'Default' // Default, Dashboard;
        //route.meta.layout = layout;
        //console.log('[router.before] layout =', layout);
        //let layout = route.meta.layout
        //let layoutComponent = await import(`@/layouts/${layout}.vue`)
        //route.meta.layoutComponent = layoutComponent.default
    } catch (e) {
        console.error('Error occurred in processing of layouts: ', e)
        console.log('Mounted default layout AppLayoutDefault')
        //let layout = 'AppLayoutDefault'
        //let layoutComponent = await import(`@/layouts/${layout}.vue`)
        //route.meta.layoutComponent = layoutComponent.default
    }
}

const router = createRouter({
    //history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
});
//router.beforeEach(loadLayoutMiddleware)

export default router;
