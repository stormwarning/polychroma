<template>
	<button
		class="relative flex items-center p-2 lg:p-4 text-xs font-medium text-gray-900 leading-none uppercase tracking-widest bg-gray-100 hover:bg-white focus:bg-white border-none rounded-sm outline-none cursor-pointer shadow-a"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
// In Vue 3, event listeners are automatically inherited
// No need for v-on="$listeners"
</script>
