<template>
<section class="bg-light-gray">
    <fieldset class="bn pa5 ma0">
        <div class="mb4" v-for="(stop, index) in stops" v-bind:key="index">
            <span class="dib mb2 f6 ttu tracked black-30">Colour {{ index + 1 }}</span>
            <color-picker v-model="stop.color"></color-picker>
        </div>
    </fieldset>

    <gradient :stops="stops" :mode="mode" :dir="direction"></gradient>
</section>
</template>

<script>
// import ColorPicker from 'vue-color/src/components/Chrome.vue'
import Gradient from '~components/Gradient.vue'

let ColorPicker

if (process.BROWSER_BUILD) {
    ColorPicker = require('vue-color/dist/vue-color.min.js').Chrome
}


export default {
    components: {
        ColorPicker,
        Gradient,
    },

    data () {
        return {
            direction: '30deg',

            stops: [
                {
                    color: {
                        hex: '#ed2f18',
                    },
                },
                {
                    color: {
                        hex: '#6cfcfe',
                    },
                },
            ],

            mode: 'lab',
        }
    },
}
</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "controls result";
    grid-area: main;
}

fieldset {
    grid-area: controls;
}

fieldset > div { width: 225px; }
</style>
