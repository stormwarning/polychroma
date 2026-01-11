<template>
  <NuxtLink :to="to" :exact="exact" class="py-2 text-grey-700 no-underline">
    <span
      class="block text-sm font-semibold leading-4 uppercase tracking-widest capsize"
    >
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  to?: string
  exact?: boolean
}

withDefaults(defineProps<Props>(), {
  to: '/',
  exact: false,
})
</script>
