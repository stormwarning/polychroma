<template>
    <figure
        :style="{ backgroundImage: gradientCSS }"
        class="flex items-center justify-center pa5 ma0"
    >
        <div class="dn db-l w-100 mw6 bg-white br1 overflow-hidden shadow-b">
            <button
                class="button-reset w-100 pa4 f7 f7-ns ttu tracked lh-solid black-90 bg-white ba bw2 b--white tl pointer hide-child relative"
                @click="copyCSS(gradientCSS)"
            >
                <div
                    :style="{ backgroundImage: gradientCSS }"
                    class="button-bg child absolute absolute--fill"
                />
                <div
                    class="button-text absolute absolute--fill flex items-center justify-center ma1 bg-white"
                >
                    <svg
                        class="relative w1 h1 mr2 v-mid"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                        ></path>
                        <rect
                            x="8"
                            y="2"
                            width="8"
                            height="4"
                            rx="1"
                            ry="1"
                        ></rect>
                    </svg>
                    <span class="relative lh-solid v-mid">
                        {{ copyButtonText }}
                    </span>
                </div>
            </button>
            <pre class="source-code ph4 pv5 ma0 ttl ws-normal bg-light-gray">
                <code>{{ gradientCSS }}</code>
            </pre>
        </div>
    </figure>
</template>

<script>
import chroma from 'chroma-js'
import { mapState } from 'vuex'

import { copyTextToClipboard } from '../utils/clipboard'

export default {
    data() {
        return {
            copyButtonText: 'Copy CSS',
        }
    },

    computed: {
        ...mapState({
            dir: (state) => state.direction,
            stops: (state) => state.colorStops,
            mode: (state) => state.colorMode,
        }),

        gradientCSS: function() {
            let dir = `${this.dir}deg`
            let stops = this.stops
            let mode = this.mode

            let steps = mode !== 'rgb' ? stops.length + 5 : stops.length
            let string = 'linear-gradient('
            let keyColors = []
            let scale
            let colors = []
            let positions = []

            stops.map((stop) => keyColors.push(stop.color.hex))
            scale = chroma
                .scale(keyColors)
                .mode(mode)
                .correctLightness()
            ;[...Array(steps).keys()].map((col, index) => {
                let t = index / (steps - 1)
                colors.push(scale(t).hex())
                positions.push(Math.floor(t * 100))
            })

            return `${string}${dir}${colors
                .map((stop, index) => `, ${stop} ${positions[index]}%`)
                .join('')})`
        },
    },

    methods: {
        copyCSS(code) {
            copyTextToClipboard(code)
            this.copyButtonText = 'Copied!'

            setTimeout(() => {
                this.copyButtonText = 'Copy CSS'
            }, 2000)
        },
    },
}
</script>

<style lang="postcss">
.source-code {
    line-height: 2;
}
</style>
