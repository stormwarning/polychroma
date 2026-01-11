<template>
  <div />
</template>

<script setup lang="ts">
// This catch-all route uses middleware to parse URL parameters
// and redirect to the home page
definePageMeta({
  middleware: 'parse-url',
})
</script>
