<template>
    <article class="min-h-screen">
        <div
            class="header sticky top-0 z-10 sm:h-screen pointer-events-none mix-burn"
        >
            <app-masthead class="mix-burn" />
        </div>
        <main>
            <app-nav />
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

import AppFooter from '~/components/AppFooter'
import AppMasthead from '~/components/AppMasthead'
import AppNav from '~/components/AppNav.vue'
import GradientResult from '~/components/Gradient.vue'

export default {
    components: {
        AppFooter,
        AppMasthead,
        GradientResult,
        AppNav,
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

@screen lg {
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

@screen lg {
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

.header {
    @screen lg {
        grid-area: sidebar;
        grid-row: 1;
    }
}
</style>
