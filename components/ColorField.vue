<template>
    <div>
        <base-input
            :value="hex"
            class="text-xl outline-none"
            type="text"
            @input="updateHex($event.target.value)"
        />
        <span
            class="inline-block mt-4 text-xs uppercase tracking-widest text-grey-600"
        >
            Hue {{ Math.floor(hsl.h) }}º
        </span>
        <range-field
            class="mt-1"
            :value="hsl.h"
            :min="0"
            :max="360"
            @input="updateHue"
        ></range-field>
        <span
            class="inline-block mt-4 text-xs uppercase tracking-widest text-grey-600"
        >
            Saturation {{ Math.floor(hsl.s * 100) }}%
        </span>
        <range-field
            class="mt-1"
            :value="hsl.s"
            :min="0"
            :max="1"
            :step="0.01"
            @input="updateSaturation"
        ></range-field>
        <span
            class="inline-block mt-4 text-xs uppercase tracking-widest text-grey-600"
        >
            Lightness {{ Math.floor(hsl.l * 100) }}%
        </span>
        <range-field
            class="mt-1"
            :value="hsl.l"
            :min="0"
            :max="1"
            :step="0.01"
            @input="updateLightness"
        ></range-field>
    </div>
</template>

<script>
import chroma from 'chroma-js'
import BaseInput from '~/components/BaseInput'
import RangeField from '~/components/RangeField'

export default {
    components: {
        BaseInput,
        RangeField,
    },

    model: {
        prop: 'color',
        event: 'update',
    },

    props: {
        color: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            hex: this.color.toLowerCase(),
        }
    },

    /**
      @todo On hue change, store last valid hue and use as fallback
            if hue returns NaN.
     */
    computed: {
        hsl() {
            return {
                h: chroma(this.color).get('hsl.h'),
                s: chroma(this.color).get('hsl.s'),
                l: chroma(this.color).get('hsl.l'),
            }
        },

        lastValidHue() {
            return chroma(this.color).get('hsl.h')
        },
    },

    methods: {
        setColor(color) {
            this.$emit('update', color)
        },

        /**
          @todo Check for valid hex value before setting.
         */
        updateHex(hex) {
            if (hex !== this.hex) {
                this.hex = hex
                this.setColor(hex)
            }
        },

        updateHue(hue) {
            this.hsl.h = hue
            this.updateHex(chroma.hsl(this.hsl.h, this.hsl.s, this.hsl.l).hex())
        },

        updateSaturation(saturation) {
            this.hsl.s = saturation
            this.updateHex(chroma.hsl(this.hsl.h, this.hsl.s, this.hsl.l).hex())
        },

        updateLightness(lightness) {
            this.hsl.l = lightness
            this.updateHex(chroma.hsl(this.hsl.h, this.hsl.s, this.hsl.l).hex())
        },
    },
}
</script>
