<template>
    <h1>Home</h1>
    <HelloWorld />
    <div class="block">
        <h1>Custom Resolvers (1)</h1>
        <MyCustom />
    </div>
    <div class="block">
        <h1>Icons (5)</h1>
        <i-fa-solid-dice-five class="fs-1" />
        <i-heroicons-outline-menu-alt-2 class="fs-1" />
        <i-ri-apps-2-line class="fs-1" />
        <i-mdi:dice-d12 class="fs-1" />
        <i-mdi-light-alarm class="fs-1" />
        <hr />
        <h5>https://icon-sets.iconify.design/solar/add-circle-linear/</h5>
        <i-solar:add-circle-linear/>
    </div>
    <br /><br />
    <RouterLink class="pa-3" to="/about">Go To About</RouterLink>
    <br />
    <RouterLink color="primary" class="ma-3" to="/profile">Go To Profile</RouterLink>
    <hr />
</template>

<script setup></script>