<template>
    <h1>HelloWorld</h1>
    <div>
        <button @click="num += 1">{{ num }}++</button>
    </div>
    <br />
    <br />
    <br />
</template>

<script setup>
    import { ref } from 'vue'

    const num = ref(30);

</script>