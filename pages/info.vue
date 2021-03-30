<template>
    <div class="ma0 text-sm">
        <div class="pa0 ma0 mb5 bn measure center">
            <h-8 class="text-sm fw6 uppercase tracking-widest ma0">About</h-8>
            <div class="content" v-html="aboutContent"></div>

            <h-8 class="text-sm fw6 uppercase tracking-widest mt4 mb0"
                >Background</h-8
            >
            <div class="content" v-html="backgroundContent"></div>

            <h-8 class="text-sm fw6 uppercase tracking-widest mt4 mb0"
                >Colophon</h-8
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
