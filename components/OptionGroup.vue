<template>
    <section>
        <slot></slot>
    </section>
</template>

<script>
export default {
    data() {
        return {
            uniqueId: null,
            childrenToggled: {},
        }
    },

    mounted() {
        this.$on('child-clicked', this.handleChildClicked)
        this.$nextTick(() => {
            this.$children.forEach((child, idx) => {
                let id = String(idx)

                child.setUniqueId(id)
                this.childrenToggled[id] = false
            })
        })
    },

    methods: {
        handleChildClicked(childId) {
            for (const id in this.childrenToggled) {
                if (this.childrenToggled[id] && id !== childId) {
                    this.$emit('toggle-child', id)
                    this.childrenToggled[id] = false
                }
            }

            this.childrenToggled[childId] = !this.childrenToggled[childId]
            this.$emit('toggle-child', childId)
        },
    },
}
</script>
