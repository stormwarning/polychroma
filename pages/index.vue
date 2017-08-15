<template>
<section class="bg-light-gray">
    <header class="absolute right-2 pt4">
        <h1 class="mb0 f1 ttu tracked-mega">Polychroma</h1>
        <span class="db b tr">v1.0.2</span>
    </header>

    <form class="pa5 ma0">
        <fieldset class="pa0 ma0 mb4 bn cf">
            <legend class="f6 ttu tracked black-30 mb2">Colour Mode</legend>

            <div class="flex items-center">
                <label class="flex items-center mb2 mr3 lh-solid" v-for="(m, index) in modes" :key="index">
                    <input class="mr2" type="radio" name="mode" :value="m.slug" v-model="mode">
                    <span class="f6">{{ m.label }}</span>
                </label>
            </div>
        </fieldset>

        <fieldset class="colors bn pa0 ma0">
            <div class="mb4" v-for="(stop, index) in stops" :key="index">
                <span class="dib mb2 f6 ttu tracked black-30">
                    <b v-if="index === 0" class="normal">Start</b>
                    <b v-else class="normal">End</b> Colour
                </span>
                <color-picker v-model="stop.color"></color-picker>
            </div>
        </fieldset>
    </form>

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

console.log(process.env.VERSION)


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

            modes: [
                {
                    slug: 'rgb',
                    label: 'RGB'
                },
                {
                    slug: 'lab',
                    label: 'Lab'
                },
                {
                    slug: 'hsl',
                    label: 'HSL'
                },
                {
                    slug: 'lch',
                    label: 'Lch'
                },
            ],

            mode: 'lab',
        }
    },

    computed: {
        version: () => process.VERSION,
    }
}
</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "controls result";
    grid-area: main;
}

form {
    grid-area: controls;
}

.colors > div { width: 225px; }

.c-chrome {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 20px 20px 0 rgba(0, 0, 0, 0.14) !important;
}
</style>
