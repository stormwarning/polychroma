<template>
    <div class="ma0 f6">
        <div class="pa0 ma0 mb5 bn measure center">
            <h2 class="f6 fw6 ttu tracked ma0">About</h2>
            <div v-html="aboutContent" class="content"></div>

            <h2 class="f6 fw6 ttu tracked mt4 mb0">Background</h2>
            <div v-html="backgroundContent" class="content"></div>

            <h2 class="f6 fw6 ttu tracked mt4 mb0">Colophon</h2>
            <div v-html="colophonContent" class="content"></div>
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
