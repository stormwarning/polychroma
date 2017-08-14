<template>
<figure class="flex pa5" :style="{ backgroundImage: gradientCSS }">
    <div class="ma-auto bg-white">
        <div class="pa4 f6 ttu tracked lh-solid black-90">Result</div>
        <pre class="pa4 mt0 nr4 mb4 nl4 ttl ws-normal bg-light-gray"><code>{{ gradientCSS }}</code></pre>
    </div>
</figure>
</template>

<script>
import chroma from 'chroma-js'


export default {
    props: [
        'dir',
        'stops',
        'mode',
    ],

    computed: {
        gradientCSS: (stops) => {
            // const dir = this.dir
            // const stops = this.stops
            // const mode = this.mode

            const steps = stops.$options.propsData.stops.length + 5
            let dir = '30deg'
            let string = 'linear-gradient('
            let keyColors = []
            let scale
            let colors = []
            let positions = []

            stops.$options.propsData.stops.map(stop => keyColors.push(stop.color.hex))
            scale = chroma.scale(keyColors).mode('lab').correctLightness()

            ;[...Array(steps).keys()].map((col, index) => {
                let t = index / (steps - 1)
                colors.push(scale(t).hex())
                positions.push(Math.floor(t * 100))
            })

            return `${string}${dir}${colors.map((stop, index) => `, ${stop} ${positions[index]}%`).join('')})`
        },
    },

    methods: {
    },
}
</script>

<style scoped>
figure {
    grid-area: result;
    margin: 0;
}

figure > div {
    box-shadow: 0 50px 50px 0 rgba(0,0,0,0.10);
}

pre {
    box-shadow: 0 50px 50px 0 rgba(0,0,0,0.10);
}

.ma-auto { margin: auto; }
</style>
