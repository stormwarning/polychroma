<template>
    <button
        class="button-reset flex items-center p-2 pa3-ns text-xs text-xs-ns uppercase tracking-widest lh-solid black-90 bg-grey-100 bn br1 tl outline-0 pointer shadow-a relative"
        :class="$style.button"
        v-on="$listeners"
    >
        <slot />
    </button>
</template>

<style lang="postcss" module>
.button {
    &:hover,
    &:focus {
        background-color: #fff;
    }
}
</style>
