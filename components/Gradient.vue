<template>
<figure class="pa5" :style="{ backgroundImage: gradientCSS }">
    <span class="f6 ttu tracked black-30">Result</span>
    <pre><code>{{ gradientCSS }}</code></pre>
</figure>
</template>

<script>
export default {
    props: [
        'stops',
    ],

    computed: {
        gradientCSS: (stops) => {
            let dir = '30deg'
            let string = 'linear-gradient('
            let colors = stops.$options.propsData.stops

            return `${string}${dir}${colors.map(stop => `, ${stop.color}`).join('')})`
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
</style>
