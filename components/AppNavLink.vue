<template>
    <nuxt-link :to="to" :exact="exact" class="py-2 text-grey-700 no-underline">
        <span
            class="block text-sm font-semibold leading-4 uppercase tracking-widest capsize"
        >
            <slot />
        </span>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            default: '/',
        },
        exact: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
