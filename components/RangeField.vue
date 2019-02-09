<template>
    <div class="range-field" :class="{'is-disabled': disabled}">
        <label v-if="label" class="range-field__label">
            <slot>{{ label }}</slot>
        </label>

        <input
            class="range-field__input"
            type="range"
            :disabled="disabled"
            :max="max"
            :min="min"
            :value="value"
            v-bind="$attrs"
            @input="input"
        >
    </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: ''
    },

    max: {
      type: Number,
      default: 100
    },

    min: {
      type: Number,
      default: 0
    },

    value: {
      type: Number,
      default: 50
    }
  },

  methods: {
    input($event) {
      if (!this.disabled) {
        this.$emit('input', parseFloat($event.target.value));
      }
    }
  }
};
</script>

<style lang="scss">
$fallbackAccentColor: #0078d7;

:root {
    --range-accent-color: #0078d7;
}

.range-field {
    &.is-disabled {
        color: lighten(#000, 60%);
    }
}

.range-field__label {
    display: block;
    line-height: 1rem;
    color: #000100;
}

.range-field__input {
    appearance: none;
    width: 100%;

    &:focus {
        outline: none;
    }

    @mixin track() {
        height: 2px;
        margin-bottom: calc(0.5rem - 2px);
        background: lighten(#000, 60%);
    }

    &::-ms-track {
        height: 1rem;
    }
    &::-ms-fill-lower,
    &::-ms-fill-upper {
        @include track;
    }
    &::-ms-fill-lower {
        background: var(--range-accent-color, $fallbackAccentColor);
    }
    &::-moz-range-track {
        @include track;
    }
    &::-moz-progress-bar {
        margin-inline-start: 0;
        margin-inline-end: 0;
    }
    &::-webkit-slider-runnable-track {
        @include track;
    }

    @mixin thumb() {
        width: 1rem;
        height: 1rem;
        margin: 0;
        cursor: pointer;
        background: var(--range-accent-color, $fallbackAccentColor);
        border: 0;
        border-radius: 50%;

        &:focus {
            background: #000;
        }
    }

    &::-webkit-slider-thumb {
        @include thumb();

        margin-top: calc(-0.5rem + 1px);
        margin-bottom: calc(0.5rem + 1px);
        -webkit-appearance: none; // stylelint-disable property-no-vendor-prefix
    }
    &::-ms-thumb {
        @include thumb();
    }
    &::-moz-range-thumb {
        @include thumb();
    }

    &:disabled {
        @mixin slider-disabled() {
            cursor: default;
            background: lighten(#000, 80%);
        }

        &::-ms-fill-lower,
        &::-ms-fill-upper,
        &::-ms-thumb {
            @include slider-disabled();
        }
        &::-webkit-slider-thumb,
        &::-webkit-slider-runnable-track {
            @include slider-disabled();
        }
        &::-moz-range-track,
        &::-moz-range-thumb {
            @include slider-disabled();
        }
    }
}
</style>
