<template>
    <form class="m-0 text-sm">
        <fieldset class="p-0 m-0 border-none max-w-md mx-auto">
            <legend
                class="font-semibold uppercase tracking-widest text-grey-700 m-0"
            >
                Colour Mode
            </legend>

            <div
                class="shadow-a flex items-center p-4 sm:p-8 mt-2 bg-white rounded-sm overflow-hidden"
            >
                <label
                    v-for="(m, index) in modes"
                    :key="index"
                    class="flex items-center my-2 mr-4 leading-none cursor-pointer"
                >
                    <input
                        v-model="mode"
                        :value="m.toLowerCase()"
                        class="mr-2"
                        type="radio"
                        name="mode"
                    />
                    <span class="text-xs sm:text-sm tracking-widest">{{
                        m
                    }}</span>
                </label>
            </div>
        </fieldset>

        <fieldset class="p-0 m-0 mt-16 border-none max-w-md mx-auto">
            <legend
                class="font-semibold uppercase tracking-widest text-grey-700 m-0"
            >
                Gradient Options
            </legend>

            <option-group
                class="gradient-options shadow-a mt-2 bg-white rounded-sm"
            >
                <option-controls>
                    <template slot="summary">
                        <span
                            class="inline-block text-xs sm:text-sm font-medium uppercase tracking-widest text-grey-600"
                        >
                            Direction
                        </span>
                        <svg
                            class="w-4 h-4"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                        >
                            <path
                                :transform="rotation"
                                d="M10 20C4.47715 20 0 15.52285 0 10S4.47715 0 10 0s10 4.47715 10 10-4.47715 10-10 10zm1-18H9v7h-8V2z"
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
                    class="border-t border-gray-800 border-opacity-10"
                >
                    <template slot="summary">
                        <span
                            class="inline-block text-xs sm:text-sm font-medium uppercase tracking-widest text-grey-600"
                        >
                            <template v-if="index === 0">Start</template>
                            <template v-else>End</template>
                            Colour
                        </span>
                        <span
                            :style="{ backgroundColor: stop.color.hex }"
                            class="inline-block w-4 h-4 rounded-full"
                        />
                    </template>
                    <color-field
                        :color="stop.color.hex"
                        @update="(color) => changeColorStop(color, index)"
                    />
                </option-controls>
            </option-group>
        </fieldset>
    </form>
</template>

<script>
import { mapState } from 'vuex'
import ColorField from '~/components/ColorField.vue'
import OptionControls from '~/components/OptionControls.vue'
import OptionGroup from '~/components/OptionGroup.vue'
import RangeField from '~/components/RangeField.vue'
export default {
    components: {
        OptionGroup,
        OptionControls,
        ColorField,
        RangeField,
    },
    transition: {
        mode: 'out-in',
    },
    data() {
        return {
            modes: ['RGB', 'Lab', 'HSL', 'Lch'],
        }
    },
    computed: {
        mode: {
            get() {
                return this.$store.state.colorMode
            },
            set(mode) {
                this.$store.dispatch('changeMode', mode)
            },
        },
        rotation: function () {
            return `rotate(${this.direction} 10 10)`
        },
        ...mapState({
            version: (state) => state.version,
            direction: (state) => state.direction,
            stops: (state) => state.colorStops,
        }),
    },
    methods: {
        rotateGradient(dir) {
            this.$store.dispatch('rotate', dir)
        },
        changeColorStop(color, stop) {
            this.$store.dispatch('changeColor', { color, stop })
        },
    },
}
</script>
