<template>
  <section>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { provide, readonly, ref } from 'vue'

// Provide a way for children to register and communicate
const activeChildId = ref<string | undefined>(undefined)

function toggleChild(childId: string) {
  activeChildId.value = activeChildId.value === childId ? undefined : childId
}

// Provide context to children
provide('optionGroup', {
  activeChildId: readonly(activeChildId),
  toggleChild,
})
</script>
