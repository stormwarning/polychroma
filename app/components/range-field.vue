<template>
  <div class="range-field" :class="{ 'is-disabled': disabled }">
    <label v-if="label" class="range-field__label">
      <slot>{{ label }}</slot>
    </label>

    <input
      class="range-field__input"
      type="range"
      :disabled="disabled"
      :max="max"
      :min="min"
      :step="step"
      :value="modelValue"
      v-bind="$attrs"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  disabled?: boolean
  label?: string
  max?: number
  min?: number
  modelValue?: number
  step?: number
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  label: '',
  max: 100,
  min: 0,
  step: 1,
  modelValue: 50,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

function handleInput(event: Event) {
  if (!props.disabled) {
    emit(
      'update:modelValue',
      Number.parseFloat((event.target as HTMLInputElement).value),
    )
  }
}
</script>

<style lang="postcss">
/* stylelint-disable no-descending-specificity */

:root {
  --range-thumb-color: var(--blue-7);
  --range-thumb-focus: var(--blue-5);
  --range-track-color: var(--grey-4);
  --range-track-disabled: var(--grey-3);
}

.range-field {
  &.is-disabled {
    color: var(--range-track-disabled);
  }
}

.range-field__label {
  display: block;
  line-height: 1rem;
  color: var(--range-track-color);
}

.range-field__input {
  appearance: none;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-ms-track {
    height: 1rem;
  }

  &::-ms-fill-lower,
  &::-ms-fill-upper {
    height: 2px;
    margin-bottom: calc(0.5rem - 2px);
    background: var(--range-track-color);
  }

  &::-ms-fill-lower {
    background: var(--range-thumb-color);
  }

  &::-moz-range-track {
    height: 2px;
    margin-bottom: calc(0.5rem - 2px);
    background: var(--range-track-color);
  }

  &::-moz-progress-bar {
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  &::-webkit-slider-runnable-track {
    height: 2px;
    margin-bottom: calc(0.5rem - 2px);
    background: var(--range-track-color);
  }

  &::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin: 0;
    margin-top: calc(-0.5rem + 1px);
    margin-bottom: calc(0.5rem + 1px);
    cursor: pointer;
    background: var(--range-thumb-color);
    border: 0;
    border-radius: 50%;
    appearance: none;

    &:focus {
      background: var(--range-thumb-focus);
    }
  }

  &::-ms-thumb {
    width: 1rem;
    height: 1rem;
    margin: 0;
    cursor: pointer;
    background: var(--range-thumb-color);
    border: 0;
    border-radius: 50%;

    &:focus {
      background: var(--range-thumb-focus);
    }
  }

  &::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    margin: 0;
    cursor: pointer;
    background: var(--range-thumb-color);
    border: 0;
    border-radius: 50%;

    &:focus {
      background: var(--range-thumb-focus);
    }
  }

  &:disabled {
    &::-ms-fill-lower,
    &::-ms-fill-upper,
    &::-ms-thumb {
      cursor: default;
      background: var(--range-track-disabled);
    }

    &::-webkit-slider-thumb,
    &::-webkit-slider-runnable-track {
      cursor: default;
      background: var(--range-track-disabled);
    }

    &::-moz-range-track,
    &::-moz-range-thumb {
      cursor: default;
      background: var(--range-track-disabled);
    }
  }
}
</style>
