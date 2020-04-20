<template>
    <figure :style="{ backgroundImage: gradientCSS }" class="ma0">
        <div class="dn db-l w-100 mw6">
            <pre :class="$style.source" class="ph4 pv5 ma0 f6 ttl ws-normal">
                <code>{{ gradientCSS }}</code>
            </pre>
        </div>

        <div class="flex items-end justify-end ph4 pv5">
            <base-button @click="copyCSS(gradientCSS)">
                <svg
                    class="relative w1 h1 v-mid"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                    ></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
                <span class="relative ml2 lh-solid v-mid">
                    {{ copyButtonText }}
                </span>
            </base-button>
            <base-button class="ml3" @click="shareURL">
                <svg
                    class="relative w1 h1 v-mid"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path
                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                    ></path>
                    <path
                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                    ></path>
                </svg>
                <span class="relative ml2 lh-solid v-mid">
                    {{ shareButtonText }}
                </span>
            </base-button>
        </div>
    </figure>
</template>

<script>
import chroma from 'chroma-js'
import { mapState } from 'vuex'

import BaseButton from '~/components/BaseButton'
import { copyTextToClipboard } from '~/utils/clipboard'

const COPY_LABEL = 'Copy CSS'
const SHARE_LABEL = 'Share URL'

export default {
    components: {
        BaseButton,
    },

    data() {
        return {
            copyButtonText: COPY_LABEL,
            shareButtonText: SHARE_LABEL,
            origin: '',
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

    created: function() {
        if (process.client) {
            this.origin = window.location.origin
        }
    },

    methods: {
        copyCSS(code) {
            copyTextToClipboard(code)
            this.copyButtonText = 'Copied!'

            setTimeout(() => {
                this.copyButtonText = COPY_LABEL
            }, 2000)
        },

        shareURL() {
            let mode = this.mode
            let deg = this.dir
            let stops = this.stops
            let start = stops[0].color.hex.replace('#', '')
            let end = stops[stops.length - 1].color.hex.replace('#', '')
            let str = `/mode/${mode}/start/${start}/end/${end}/angle/${deg}`

            copyTextToClipboard(this.origin + str)
            this.shareButtonText = 'Copied!'

            setTimeout(() => {
                this.shareButtonText = SHARE_LABEL
            }, 2000)
        },
    },
}
</script>

<style lang="postcss" module>
figure {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    padding-top: 8.5rem;
}

.source {
    mix-blend-mode: color-burn;
    opacity: 0.75;

    & code {
        line-height: 2;
    }
}
</style>
