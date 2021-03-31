<template>
    <article class="min-h-screen">
        <div class="sticky">
            <app-masthead class="mix-burn" />
        </div>
        <main>
            <nav class="p-8">
                <div class="flex gap-4 max-w-md mx-auto">
                    <nuxt-link
                        to="/"
                        exact
                        class="py-2 text-sm font-semibold text-gray-500 uppercase tracking-widest no-underline leading-4 capsize"
                    >
                        Controls
                    </nuxt-link>
                    <nuxt-link
                        to="/info"
                        class="py-2 text-sm font-semibold text-gray-500 uppercase tracking-widest no-underline leading-4 capsize"
                    >
                        Info
                    </nuxt-link>
                </div>
            </nav>
            <section class="p-8 sm:pt-0 sm:pb-16">
                <nuxt />
            </section>
            <gradient-result class="sticky sm:top-0 sm:bottom-0 sm:h-screen" />
        </main>
        <app-footer class="sticky sm:top-0 sm:bottom-0 sm:h-screen" />
    </article>
</template>

<script>
import { mapState } from 'vuex'

import AppMasthead from '~/components/AppMasthead'
import GradientResult from '~/components/Gradient.vue'
import AppFooter from '~/components/AppFooter'

export default {
    components: {
        AppFooter,
        AppMasthead,
        GradientResult,
    },

    computed: {
        ...mapState({
            version: (state) => state.version,
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
