<script>
    export default defineComponent({
        name: 'LayApp',
        setup() {
            const route = useRoute();
            /**
             *  This is a computed property that will return the name
             *  of the current route
             */
            const layout = computed(() => {
                const layout = route?.meta?.layout;

                //const layoutComponent = route?.meta?.layoutComponent;


                console.log('[LayApp] layout =', route?.meta?.layout, route);

                if (layout) {
                    return `Lay${layout}`;
                }

                return 'div';
            });

            return {
                layout,
            };
        },
    });
</script>

<template>
    <h1>LayApp</h1>
    <PiniaTest />
    <TodoList/>
    <HelloWorld />
    <hr />
    <component :is="layout">
        <router-view />
    </component>
</template>
