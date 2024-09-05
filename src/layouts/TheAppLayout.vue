<script>
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'TheAppLayout',
    setup() {
        const route = useRoute();
        /**
         *  This is a computed property that will return the name
         *  of the current route
         */
        const layout = computed(() => {
            const layout = route?.meta?.layout;

            //const layoutComponent = route?.meta?.layoutComponent;


            console.log('[TheAppLayout] layout =', route?.meta?.layout, route);

            if (layout) {
                return `The${layout}Layout`;
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
    <h1>TheAppLayout</h1>
    <hr />
    <component :is="layout">
        <router-view />
    </component>
</template>
