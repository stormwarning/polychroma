<template>
    <button
        class="button-reset pa3 f7 f7-ns ttu tracked lh-solid black-90 bg-grey-100 bn br1 tl outline-0 pointer shadow-a relative"
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
