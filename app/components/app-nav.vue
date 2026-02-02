<template>
	<nav class="p-8">
		<div class="flex gap-4 max-w-md mx-auto">
			<AppNavLink :exact="true">Controls</AppNavLink>
			<AppNavLink to="/info">Info</AppNavLink>
		</div>
	</nav>
</template>

<script setup lang="ts">
// Components are auto-imported in Nuxt 3
</script>
