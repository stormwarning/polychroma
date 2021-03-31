<template>
    <header class="absolute top-0 right-8 z-10 pt-8">
        <h1
            class="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-mega"
            >Polychroma</h1
        >
        <span class="block font-bold text-right text-sm sm:text-base"
            >v{{ version }}</span
        >
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            version: (state) => state.version,
        }),
    },
}
</script>
