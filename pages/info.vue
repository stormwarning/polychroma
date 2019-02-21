<template>
    <div class="ma0">
        <div class="pa0 ma0 mb5 bn measure center">
            <h2 class="f5 fw5 ttu tracked ma0">About</h2>
            <div class="content" v-html="aboutContent"></div>

            <h2 class="f5 fw5 ttu tracked mt4 mb0">Background</h2>
            <div class="content" v-html="backgroundContent"></div>

            <h2 class="f5 fw5 ttu tracked mt4 mb0">Colophon</h2>
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

<style>
.content {
    color: #495057;
}

.content a {
    color: #16191b;
    transition: opacity 150ms ease-in;
}

.content a:hover,
.content a:focus {
    opacity: 0.5;
}
</style>
