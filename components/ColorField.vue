<template>
    <div>
        <v-input
            :value="hex"
            class="color-hex f4"
            type="text"
            @input="updateHex($event.target.value)"
        />
        <span class="dib mt3 f7 ttu tracked black-30">Hue {{ Math.floor(hue) }}º</span>
        <range-field class="mt1" :value="hue" :min="0" :max="360" @input="updateHue"></range-field>
        <span class="dib mt2 f7 ttu tracked black-30">Saturation {{ Math.floor(saturation * 100) }}%</span>
        <range-field
            class="mt1"
            :value="saturation"
            :min="0"
            :max="1"
            :step="0.01"
            @input="updateSaturation"
        ></range-field>
        <span class="dib mt2 f7 ttu tracked black-30">Lightness {{ Math.floor(lightness * 100) }}%</span>
        <range-field
            class="mt1"
            :value="lightness"
            :min="0"
            :max="1"
            :step="0.01"
            @input="updateLightness"
        ></range-field>
    </div>
</template>

<script>
import chroma from 'chroma-js'

import VInput from './VInput.vue'
import RangeField from './RangeField.vue'

export default {
    components: {
        VInput,
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
        }
    },

    data () {
        return {
            hex: this.color,
        }
    },

    computed: {
        hue: {
            get () {
                let val = chroma(this.hex).get('hsl.h') || 0
                // Ensure this doesn't return NaN.
                return ((val % 360) + 360) % 360
            },
            set (hue) {
                this.updateHex(chroma(hue, this.saturation, this.lightness, 'hsl').hex())
            },
        },

        saturation: {
            get () {
                return (chroma(this.hex).get('hsl.s'))
            },
            set (saturation) {
                this.updateHex(chroma(this.hue, saturation, this.lightness, 'hsl').hex())
            },
        },

        lightness: {
            get () {
                return (chroma(this.hex).get('hsl.l'))
            },
            set (lightness) {
                this.updateHex(chroma(this.hue, this.saturation, lightness, 'hsl').hex())
            },
        }
    },

    methods: {
        setColor (color) {
            this.$emit('update', color)
        },

        updateHex (hex) {
            if (hex !== this.hex) {
                this.hex = hex
                this.setColor(hex)
            }
        },

        updateHue (hue) {
            this.hue = hue
            this.updateHex(chroma(this.hue, this.saturation, this.lightness, 'hsl').hex())
        },

        updateSaturation (saturation) {
            this.saturation = saturation
            this.updateHex(chroma(this.hue, this.saturation, this.lightness, 'hsl').hex())
        },

        updateLightness (lightness) {
            this.lightness = lightness
            this.updateHex(chroma(this.hue, this.saturation, this.lightness, 'hsl').hex())
        },
    },
}
</script>

<style>
.color-hex { outline: 0; }
</style>

