<template>
    <section class="body-section">
        <header class="absolute right-2 pt4">
            <h1 class="mb0 f3 f2-ns f1-l ttu tracked-mega">Polychroma</h1>
            <span class="db b tr f6 f5-ns">v{{ version }}</span>
        </header>

        <form class="gradient-controls pa4 pa5-ns ma0">
            <fieldset class="pa0 ma0 mb5 bn measure center">
                <legend class="f6 ttu tracked black-30 mb2">Colour Mode</legend>

                <div class="drop-shadow flex items-center pa3 pa4-ns bg-white br1 overflow-hidden">
                    <label class="flex items-center mv2 mr3 lh-solid pointer" v-for="(m, index) in modes" :key="index">
                        <input class="mr2" type="radio" name="mode" :value="m.toLowerCase()" v-model="mode">
                        <span class="f7 f6-ns">{{ m }}</span>
                    </label>
                </div>
            </fieldset>

            <fieldset class="pa0 ma0 bn measure center">
                <legend class="f6 ttu tracked black-30 mb2">Gradient Options</legend>

                <section class="drop-shadow gradient-options bg-white br1">
                    <div class="w-100 flex items-center justify-between pa3 pa4-ns bb b--black-10">
                        <span class="dib f7 f6-ns ttu tracked black-30">Direction</span>
                        <div class="relative">
                            <div class="pointer" @click="sliderVisible = !sliderVisible">
                                <svg class="w1 h1" width="20" height="20" viewBox="0 0 20 20">
                                    <path d="M10 20C4.47715 20 0 15.52285 0 10S4.47715 0 10 0s10 4.47715 10 10-4.47715 10-10 10zm1-18H9v7h2V2z" fill-rule="nonzero" fill="#000" fill-opacity="0" :transform="rotation"></path>
                                    <path d="M9 2.0619C5.0537 2.554 2 5.92037 2 10c0 4.41828 3.58172 8 8 8s8-3.58172 8-8c0-4.07962-3.0537-7.446-7-7.9381V9H9V2.0619zM10 20C4.47715 20 0 15.52285 0 10S4.47715 0 10 0s10 4.47715 10 10-4.47715 10-10 10z" fill-rule="nonzero" fill="#000" fill-opacity="1" :transform="rotation"></path>
                                </svg>
                            </div>
                            <div class="absolute right-0 z-1" v-if="sliderVisible">
                                <vue-slider ref="slider" v-model="direction" :min="0" :max="360" width="225px" tooltip="false"></vue-slider>
                            </div>
                        </div>
                    </div>
                    <div class="w-100 flex items-center justify-between pa3 pa4-ns" v-for="(stop, index) in stops" :key="index" :class="index !== stops.length -1 ? 'bb b--black-10' : ''">
                        <span class="dib f7 f6-ns ttu tracked black-30">
                            <b v-if="index === 0" class="normal">Start</b>
                            <b v-else class="normal">End</b> Colour
                        </span>
                        <div class="relative">
                            <div class="pointer" @click="stop.pickerVisible = !stop.pickerVisible">
                                <span class="dib w1 h1 br-pill" :style="{ backgroundColor: stop.color.hex }"></span>
                            </div>
                            <div class="absolute right-0 z-1" v-if="stop.pickerVisible">
                                <color-picker v-model="stop.color"></color-picker>
                            </div>
                        </div>
                    </div>
                </section>
            </fieldset>
        </form>

        <gradient :stops="stops" :mode="mode" :dir="direction"></gradient>
    </section>
</template>

<script>
// import ColorPicker from 'vue-color/src/components/Chrome.vue'
import Gradient from '~/components/Gradient.vue'

let VueSlider
let ColorPicker

if (process.browser) {
    VueSlider = require('vue-slider-component')
    ColorPicker = require('vue-color/dist/vue-color.min.js').Chrome
}


export default {
    components: {
        // ColorPicker: () => import('vue-color/src/components/Chrome.vue'),
        ColorPicker,
        VueSlider,
        Gradient,
    },

    data () {
        return {
            sliderVisible: false,

            direction: '30',

            stops: [
                {
                    color: {
                        hex: '#000080',
                    },
                    pickerVisible: false,
                },
                {
                    color: {
                        hex: '#ffff00',
                    },
                    pickerVisible: false,
                },
            ],

            modes: [
                'RGB',
                'Lab',
                'HSL',
                'Lch',
            ],

            mode: 'lab',
        }
    },

    computed: {
        version: () => process.env.VERSION,
        rotation: function () { return `rotate(${this.direction} 10 10)` },
    },
}
</script>

<style scoped>
.body-section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 33vh 1fr;
    grid-template-areas: "result" "controls";
    grid-area: main;
}
@media screen and (min-width: 60em) {
    .body-section {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: "controls result";
    }
}

.gradient-controls {
    grid-area: controls;
}

.drop-shadow {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px, 0 20px 50px 0 rgba(0, 0, 0, 0.14);
}

.c-chrome {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 20px 20px 0 rgba(0, 0, 0, 0.14) !important;
}
</style>
