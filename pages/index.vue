<template>
    <form class="ma0">
        <fieldset class="pa0 ma0 bn measure center">
            <legend class="f6 ttu tracked black-30 ma0">
                Colour Mode
            </legend>

            <div
                class="drop-shadow flex items-center pa3 pa4-ns mt2 bg-white br1 overflow-hidden"
            >
                <label
                    v-for="(m, index) in modes"
                    :key="index"
                    class="flex items-center mv2 mr3 lh-solid pointer"
                >
                    <input
                        v-model="mode"
                        :value="m.toLowerCase()"
                        class="mr2"
                        type="radio"
                        name="mode"
                    />
                    <span class="f7 f6-ns tracked">{{ m }}</span>
                </label>
            </div>
        </fieldset>

        <fieldset class="pa0 ma0 mt5 bn measure center">
            <legend class="f6 ttu tracked black-30 ma0">
                Gradient Options
            </legend>

            <section class="drop-shadow gradient-options mt2 bg-white br1">
                <option-controls>
                    <template slot="summary">
                        <span class="dib f7 f6-ns ttu tracked black-30">
                            Direction
                        </span>
                        <svg
                            class="w1 h1"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                        >
                            <path
                                :transform="rotation"
                                d="M10 20C4.47715 20 0 15.52285 0 10S4.47715 0 10 0s10 4.47715 10 10-4.47715 10-10 10zm1-18H9v7h2V2z"
                                fill-rule="nonzero"
                                fill="#000"
                                fill-opacity="0"
                            ></path>
                            <path
                                :transform="rotation"
                                d="M9 2.0619C5.0537 2.554 2 5.92037 2 10c0 4.41828 3.58172 8 8 8s8-3.58172 8-8c0-4.07962-3.0537-7.446-7-7.9381V9H9V2.0619zM10 20C4.47715 20 0 15.52285 0 10S4.47715 0 10 0s10 4.47715 10 10-4.47715 10-10 10z"
                                fill-rule="nonzero"
                                fill="#000"
                                fill-opacity="1"
                            ></path>
                        </svg>
                    </template>
                    <range-field
                        :value="direction"
                        :min="0"
                        :max="360"
                        @input="rotateGradient"
                    />
                </option-controls>
                <option-controls
                    v-for="(stop, index) in stops"
                    :key="index"
                    class="bt b--black-10"
                >
                    <template slot="summary">
                        <span class="dib f7 f6-ns ttu tracked black-30">
                            <b v-if="index === 0" class="normal">Start</b>
                            <b v-else class="normal">End</b>
                            Colour
                        </span>
                        <span
                            :style="{ backgroundColor: stop.color.hex }"
                            class="dib w1 h1 br-pill"
                        />
                    </template>
                    <color-field v-model="stop.color.hex" />
                </option-controls>
            </section>
        </fieldset>
    </form>
</template>

<script>
import { mapState } from 'vuex'

import ColorField from '~/components/ColorField.vue'
import RangeField from '~/components/RangeField.vue'
import OptionControls from '~/components/OptionControls.vue'

export default {
    components: {
        OptionControls,
        ColorField,
        RangeField,
    },

    transition: {
        mode: 'out-in',
        css: false,
        enter(el, done) {
            console.log('enter from index')
        },
    },

    data() {
        return {
            stops: [
                {
                    color: {
                        hex: '#000080',
                    },
                },
                {
                    color: {
                        hex: '#ffff00',
                    },
                },
            ],

            modes: ['RGB', 'Lab', 'HSL', 'Lch'],

            mode: 'lab',
        }
    },

    computed: {
        rotation: function() {
            return `rotate(${this.direction} 10 10)`
        },

        ...mapState({
            version: (state) => state.version,
            direction: (state) => state.direction,
        }),
    },

    methods: {
        rotateGradient(dir) {
            this.$store.commit('rotate', dir)
        },
    },
}
</script>

<style scoped>
.drop-shadow {
    box-shadow: rgba(0, 0, 0, 0.12) 0 2px 10px,
        0 20px 50px 0 rgba(0, 0, 0, 0.14);
}
</style>
