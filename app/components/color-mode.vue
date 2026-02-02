<template>
	<fieldset class="p-0 m-0 mb-16 border-none max-w-md mx-auto">
		<legend class="text-sm uppercase tracking-widest opacity-25 mb-2">Colour Mode</legend>

		<div class="flex items-center p-4 lg:p-8 bg-white rounded-sm shadow-a overflow-hidden">
			<label
				v-for="(m, index) in modes"
				:key="index"
				class="flex items-center my-2 mr-4 leading-none cursor-pointer"
			>
				<input
					v-model="mode"
					:value="m.toLowerCase()"
					class="mr-2"
					type="radio"
					name="mode"
				/>
				<span class="text-xs lg:text-sm tracking-widest">{{ m }}</span>
			</label>
		</div>
	</fieldset>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useGradientStore } from '~/stores/gradient.js'

const store = useGradientStore()

const modes = ['RGB', 'Lab', 'HSL', 'Lch']

const mode = computed({
	get: () => store.colorMode,
	set: (value: string) => store.changeMode(value),
})
</script>
