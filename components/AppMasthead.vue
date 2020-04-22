<template>
    <header class="absolute top-0 right-2 z-1 pt4">
        <h1 class="mb0 f3 f2-ns f1-l ttu tracked-mega">Polychroma</h1>
        <span class="db fw7 tr f6 f5-ns">v{{ version }}</span>
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
