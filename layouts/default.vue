<template>
    <article class="min-vh-100 lh-copy">
        <header class="absolute fixed-ns right-2 pt4">
            <h1 class="mb0 f3 f2-ns f1-l ttu tracked-mega">Polychroma</h1>
            <span class="db fw7 tr f6 f5-ns">v{{ version }}</span>
        </header>
        <main>
            <nav class="pa4 pa0-ns pt4-ns">
                <div class="measure center">
                    <nuxt-link
                        to="/"
                        exact
                        class="dib pt1 pb2 f6 fw6 ttu tracked black-30 no-underline dim"
                    >
                        Controls
                    </nuxt-link>
                    <nuxt-link
                        to="/info"
                        class="dib pt1 pb2 ml3 f6 fw6 ttu tracked black-30 no-underline dim"
                    >
                        Info
                    </nuxt-link>
                </div>
            </nav>
            <section class="pa4 pa0-ns pb5-ns">
                <nuxt />
            </section>
            <gradient-result class="sticky top-0-ns bottom-0-ns vh-100-ns" />
        </main>
        <page-footer class="sticky top-0-ns bottom-0-ns vh-100-ns" />
    </article>
</template>

<script>
import { mapState } from 'vuex'

import GradientResult from '~/components/Gradient.vue'
import PageFooter from '~/components/Footer.vue'

export default {
    components: {
        GradientResult,
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
header {
    z-index: 1;
}

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
    border-bottom: 0.125rem solid currentColor;
}

figure {
    grid-area: result;
}
</style>
