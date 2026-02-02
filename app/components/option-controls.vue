<template>
	<details ref="detailsRef" :open="isOpen">
		<summary
			class="cursor-pointer outline-none"
			:class="{ 'is-open': isOpen }"
			@click.prevent="handleClick"
		>
			<div class="w-full flex items-center justify-between p-4 lg:p-8">
				<slot name="summary" />
			</div>
		</summary>
		<div class="relative p-4 lg:p-8 lg:pt-0 lg:pr-4 -mt-4 mr-8 lg:mr-16">
			<slot />
		</div>
	</details>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, type Ref, ref } from 'vue'

interface OptionGroupContext {
	activeChildId: Readonly<Ref<string | null>>
	toggleChild: (id: string) => void
}

const optionGroup = inject<OptionGroupContext>('optionGroup')
const uniqueId = ref<string>('')
const detailsRef = ref<HTMLDetailsElement | undefined>(undefined)

// Generate unique ID on mount
onMounted(() => {
	uniqueId.value = Math.random().toString(36).slice(2, 9)
})

const isOpen = computed(() => optionGroup?.activeChildId.value === uniqueId.value)

function handleClick() {
	if (uniqueId.value && optionGroup) {
		optionGroup.toggleChild(uniqueId.value)
	}
}
</script>

<style lang="postcss" scoped>
details {
	transition: box-shadow 200ms ease-in-out;

	&[open] {
		box-shadow:
			rgba(0, 0, 0, 0.12) 0 2px 10px,
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
