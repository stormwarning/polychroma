<template>
	<input
		:type="type"
		:class="$style.input"
		:value="modelValue"
		@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
	/>
</template>

<script setup lang="ts">
interface Props {
	modelValue?: string | number
	type?: string
}

withDefaults(defineProps<Props>(), {
	type: 'text',
	modelValue: '',
})

defineEmits<{
	'update:modelValue': [value: string]
}>()
</script>

<style module>
.input {
	display: block;
	inline-size: 100%;
	padding: 0;
	margin: 0;
	font-family: 'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
	line-height: 1;
	border: 0;
	border-radius: 0;
}
</style>
