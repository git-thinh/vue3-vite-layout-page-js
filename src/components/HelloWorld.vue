<template>
    <h1>HelloWorld</h1>
    <div>
        <button @click="counterStore.increment()">{{ counterStore.value }}++</button>
    </div>
    <br />
    <br />
    <br />
</template>

<script setup>
    const counterStore = useCounterStore();
    //const num = ref(30);    
</script>