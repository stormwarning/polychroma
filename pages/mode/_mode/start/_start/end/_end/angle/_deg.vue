<template>
    <div></div>
</template>

<script>
export default {
    middleware({ params, store, redirect }) {
        let { mode } = params

        store.dispatch('changeMode', mode)
    },

    created: function() {
        this.$router.replace('/')
    },
}
</script>
