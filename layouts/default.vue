<template>
    <main class="min-vh-100 sans-serif">
        <nuxt/>
        <page-footer/>
    </main>
</template>

<script>
import PageFooter from '~/components/Footer.vue'

export default {
    components: {
        PageFooter,
    },
}
</script>

<style scoped>
main {
    display: grid;
    grid-template-areas: 'main' 'footer';
    grid-template-rows: 1fr 120px;
    grid-template-columns: 1fr;
}
@media screen and (min-width: 60em) {
    main {
        grid-template-areas: 'main sidebar';
        grid-template-rows: auto;
        grid-template-columns: 1fr 240px;
    }
}
</style>
