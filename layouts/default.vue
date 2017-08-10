<template>
<main class="min-vh-100 sans-serif">
    <nuxt/>
    <page-footer/>
</main>
</template>

<script>
import PageFooter from '~components/Footer.vue'


export default {
    components: {
        PageFooter
    }
}
</script>

<style scoped>
main {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-template-areas: "main sidebar";
}
</style>
