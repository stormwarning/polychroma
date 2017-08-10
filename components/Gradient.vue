<template>
<figure class="flex pa5" :style="{ backgroundImage: gradientCSS }">
    <div class="ma-auto bg-white">
        <div class="pa4 f6 ttu tracked lh-solid black-90">Result</div>
        <pre class="pa4 mt0 nr4 mb4 nl4 ttl bg-light-gray"><code>{{ gradientCSS }}</code></pre>
    </div>
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

            return `${string}${dir}${colors.map(stop => `, ${stop.color.hex}`).join('')})`
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
