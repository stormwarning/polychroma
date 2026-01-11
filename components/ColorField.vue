<template>
  <div>
    <BaseInput
      :model-value="hex"
      class="text-xl outline-none"
      type="text"
      @update:model-value="updateHex"
    />
    <span
      class="inline-block mt-4 text-xs uppercase tracking-widest text-grey-600"
    >
      Hue {{ Math.floor(hsl.h || 0) }}deg
    </span>
    <RangeField
      class="mt-1"
      :model-value="hsl.h || 0"
      :min="0"
      :max="360"
      @update:model-value="updateHue"
    />
    <span
      class="inline-block mt-4 text-xs uppercase tracking-widest text-grey-600"
    >
      Saturation {{ Math.floor((hsl.s || 0) * 100) }}%
    </span>
    <RangeField
      class="mt-1"
      :model-value="hsl.s || 0"
      :min="0"
      :max="1"
      :step="0.01"
      @update:model-value="updateSaturation"
    />
    <span
      class="inline-block mt-4 text-xs uppercase tracking-widest text-grey-600"
    >
      Lightness {{ Math.floor((hsl.l || 0) * 100) }}%
    </span>
    <RangeField
      class="mt-1"
      :model-value="hsl.l || 0"
      :min="0"
      :max="1"
      :step="0.01"
      @update:model-value="updateLightness"
    />
  </div>
</template>

<script setup lang="ts">
import chroma from 'chroma-js'

interface Props {
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const hex = ref(props.modelValue.toLowerCase())

/**
  @todo On hue change, store last valid hue and use as fallback
        if hue returns NaN.
 */
const hsl = computed(() => {
  try {
    const color = chroma(props.modelValue)
    return {
      h: color.get('hsl.h'),
      s: color.get('hsl.s'),
      l: color.get('hsl.l'),
    }
  } catch {
    return { h: 0, s: 0, l: 0.5 }
  }
})

function setColor(color: string) {
  emit('update:modelValue', color)
}

/**
  @todo Check for valid hex value before setting.
 */
function updateHex(value: string) {
  if (value !== hex.value) {
    hex.value = value
    setColor(value)
  }
}

function updateHue(hue: number) {
  const newHex = chroma.hsl(hue, hsl.value.s || 0, hsl.value.l || 0.5).hex()
  hex.value = newHex
  setColor(newHex)
}

function updateSaturation(saturation: number) {
  const newHex = chroma
    .hsl(hsl.value.h || 0, saturation, hsl.value.l || 0.5)
    .hex()
  hex.value = newHex
  setColor(newHex)
}

function updateLightness(lightness: number) {
  const newHex = chroma.hsl(hsl.value.h || 0, hsl.value.s || 0, lightness).hex()
  hex.value = newHex
  setColor(newHex)
}

// Watch for external changes to modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    hex.value = newValue.toLowerCase()
  },
)
</script>
