<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "TheDefaultLayout",
    });
</script>

<template>
    <HelloWorld />
    <h3>TheDefaultLayout</h3>
    <slot></slot>
</template>



