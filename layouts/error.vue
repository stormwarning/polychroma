<template>
    <section class="container">
        <h1 class="title" />
        <h-8 class="info" />
        <nuxt-link v-if="error.statusCode === 404" class="button" to="/">
            Homepage
        </nuxt-link>
    </section>
</template>

<script>
export default {
    props: ['error'],
}
</script>

<style scoped>
.title {
    margin-top: 15px;
    font-size: 5em;
}

.info {
    margin: 0;
    font-weight: 300;
    color: #9aabb1;
}

.button {
    margin-top: 50px;
}
</style>
