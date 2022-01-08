<template>
    <header class="absolute top-0 right-8 z-10 pt-20">
        <h1
            class="text-2xl sm:text-4xl lg:text-5xl font-bold leading-none uppercase tracking-mega capsize"
            >Polychroma</h1
        >
        <div class="mt-4">
            <span
                class="block font-bold text-right text-sm lg:text-base leading-none capsize"
                >v{{ version }}</span
            >
        </div>
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
