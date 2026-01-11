<template>
  <section>
    <slot />
  </section>
</template>

<script setup lang="ts">
// Provide a way for children to register and communicate
const activeChildId = ref<string | null>(null)

function toggleChild(childId: string) {
  if (activeChildId.value === childId) {
    activeChildId.value = null
  } else {
    activeChildId.value = childId
  }
}

// Provide context to children
provide('optionGroup', {
  activeChildId: readonly(activeChildId),
  toggleChild,
})
</script>
