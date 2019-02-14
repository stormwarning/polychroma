<template>
    <article class="min-vh-100 sans-serif">
        <header class="absolute right-2 pt4">
            <h1 class="mb0 f3 f2-ns f1-l ttu tracked-mega">Polychroma</h1>
            <span class="db b tr f6 f5-ns">v{{ version }}</span>
        </header>
        <main>
            <nav>
                <div class="measure center">
                    <nuxt-link
                        to="/"
                        exact
                        class="dib pb3 f6 b ttu tracked black-30 no-underline bb bw2 b--black"
                    >
                        Controls
                    </nuxt-link>
                    <nuxt-link
                        to="/about"
                        class="dib pb3 f6 b ttu tracked black-30 no-underline bb bw2 b--black"
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

figure {
    grid-area: result;
}
</style>
