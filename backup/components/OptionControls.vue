<template>
    <details>
        <summary class="cursor-pointer outline-none" @click="notifyOfClick">
            <div class="w-full flex items-center justify-between p-4 lg:p-8">
                <slot name="summary"></slot>
            </div>
        </summary>
        <div class="relative p-4 lg:p-8 lg:pt-0 lg:pr-4 -mt-4 mr-8 lg:mr-16">
            <slot></slot>
        </div>
    </details>
</template>

<script>
export default {
    mounted() {
        this.$parent.$on('toggle-child', this.handleToggleRequest)
    },

    destroyed() {
        this.$parent.$off('toggle-child')
    },

    methods: {
        handleToggleRequest(toggleId) {
            if (toggleId === this.uniqueId) {
                this.$el.toggleAttribute('open')
                this.$el.querySelector('summary').classList.toggle('is-open')
            }
        },

        setUniqueId(id) {
            this.uniqueId = id
        },

        notifyOfClick(e) {
            e.preventDefault()

            if (this.uniqueId) {
                this.$parent.$emit('child-clicked', this.uniqueId)
            }
        },
    },
}
</script>

<style lang="postcss" scoped>
details {
    transition: box-shadow 200ms ease-in-out;

    &[open] {
        box-shadow: rgba(0, 0, 0, 0.12) 0 2px 10px,
            0 20px 50px 0 rgba(0, 0, 0, 0.14);
    }
}

summary {
    list-style-type: none;
    user-select: none;

    &::-webkit-details-marker {
        display: none;
    }

    &:not(.is-open) {
        &:hover,
        &:focus {
            background-color: var(--grey-1);
        }
    }
}
</style>
