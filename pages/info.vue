<template>
    <div class="m-0 text-sm">
        <div class="p-0 m-0 mb-16 bn max-w-md mx-auto">
            <h2 class="text-sm font-semibold uppercase tracking-widest m-0"
                >About</h2
            >
            <div class="content" v-html="aboutContent"></div>

            <h2
                class="text-sm font-semibold uppercase tracking-widest mt-8 mb-0"
                >Background</h2
            >
            <div class="content" v-html="backgroundContent"></div>

            <h2
                class="text-sm font-semibold uppercase tracking-widest mt-8 mb-0"
                >Colophon</h2
            >
            <div class="content" v-html="colophonContent"></div>
        </div>
    </div>
</template>

<script>
import aboutContent from './_content/about.md'
import backgroundContent from './_content/background.md'
import colophonContent from './_content/colophon.md'

export default {
    computed: {
        aboutContent() {
            return aboutContent
        },

        backgroundContent() {
            return backgroundContent
        },

        colophonContent() {
            return colophonContent
        },
    },
}
</script>

<style lang="postcss">
.content {
    color: #495057;

    & a {
        color: #16191b;
        transition: opacity 150ms ease-in;

        &:hover,
        &:focus {
            opacity: 0.5;
        }
    }

    & code {
        padding: 0.1875rem 0.25rem;
        margin: 0 1px;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 0.125rem;
    }
}
</style>
