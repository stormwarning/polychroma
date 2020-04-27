<template>
    <div></div>
</template>

<script>
export default {
    /**
     * Parse the route params from the path and commit to store.
     * @todo Add param validation and error page redirects.
     */
    middleware({ params, store, redirect }) {
        let { pathMatch } = params
        let re = /mode\/([a-z]+)\/start\/([a-z0-9]+)\/end\/([a-z0-9]+)\/angle\/(\d+)/g
        let [found] = [...pathMatch.matchAll(re)]

        store.dispatch('changeMode', found[1])
        store.dispatch('changeColor', { color: `#${found[2]}`, stop: 0 })
        store.dispatch('changeColor', { color: `#${found[3]}`, stop: 1 })
        store.dispatch('rotate', found[4])
    },

    /**
     * Redirect to main page without changing browser history.
     */
    created: function() {
        this.$router.replace('/')
    },
}
</script>
