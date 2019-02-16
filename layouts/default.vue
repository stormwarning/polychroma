<template>
    <article class="min-vh-100 sans-serif">
        <header class="absolute right-2 pt4">
            <h1 class="mb0 f3 f2-ns f1-l ttu tracked-mega">Polychroma</h1>
            <span class="db b tr f6 f5-ns">v{{ version }}</span>
        </header>
        <main>
            <nav class="pt4">
                <div class="measure center">
                    <nuxt-link
                        to="/"
                        exact
                        class="dib pt1 pb2 f6 b ttu tracked black-30 no-underline dim"
                    >
                        Controls
                    </nuxt-link>
                    <nuxt-link
                        to="/about"
                        class="dib pt1 pb2 ml3 f6 b ttu tracked black-30 no-underline dim"
                    >
                        About
                    </nuxt-link>
                </div>
            </nav>
            <section>
                <nuxt />
            </section>
            <figure></figure>
        </main>
        <page-footer />
    </article>
</template>

<script>
import { mapState } from 'vuex'

import PageFooter from '~/components/Footer.vue'

export default {
    components: {
        PageFooter,
    },

    computed: {
        ...mapState({
            version: (state) => state.version,
            direction: (state) => state.direction,
        }),
    },
}
</script>

<style scoped>
article {
    display: grid;
    grid-template-areas: 'main' 'footer';
    grid-template-rows: 1fr 120px;
    grid-template-columns: 1fr;
}

@media screen and (min-width: 60em) {
    article {
        grid-template-areas: 'main sidebar';
        grid-template-rows: auto;
        grid-template-columns: 1fr 240px;
    }
}

main {
    display: grid;
    grid-area: main;
    grid-template-areas: 'result' 'navbar' 'content';
    grid-template-rows: 33vh 4rem 1fr;
    grid-template-columns: 1fr;
}

@media screen and (min-width: 60em) {
    main {
        grid-template-areas: 'navbar result' 'content result';
        grid-template-rows: 8.5rem auto;
        grid-template-columns: 1fr 1fr;
    }
}

main > section {
    grid-area: content;
}

nav {
    grid-area: navbar;
}

.nuxt-link-active {
    color: #000;
    border-bottom: 0.25rem solid currentColor;
}

figure {
    grid-area: result;
}
</style>
