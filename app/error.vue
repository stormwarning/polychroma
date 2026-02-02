<template>
	<section class="container min-h-screen flex flex-col items-center justify-center">
		<h1 class="title text-5xl font-bold mt-4">
			{{ error?.status || 'Error' }}
		</h1>
		<p class="info mt-4 text-grey-500">
			{{ error?.message || 'An error occurred' }}
		</p>
		<NuxtLink
			v-if="error?.status === 404"
			class="button mt-12 px-4 py-2 bg-grey-800 text-white rounded"
			to="/"
		>
			Homepage
		</NuxtLink>
		<button
			v-else
			class="button mt-12 px-4 py-2 bg-grey-800 text-white rounded"
			@click="handleError"
		>
			Go back
		</button>
	</section>
</template>

<script setup lang="ts">
import { clearError, type NuxtError } from '#app'

interface Props {
	error: NuxtError
}

defineProps<Props>()

function handleError() {
	clearError({ redirect: '/' })
}
</script>

<style scoped>
.title {
	margin-top: 15px;
}

.info {
	margin: 0;
	font-weight: 300;
}
</style>
