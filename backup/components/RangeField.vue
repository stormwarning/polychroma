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
            :value="value"
            v-bind="$attrs"
            @input="input"
        />
    </div>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },

        label: {
            type: String,
            default: '',
        },

        max: {
            type: Number,
            default: 100,
        },

        min: {
            type: Number,
            default: 0,
        },

        step: {
            type: Number,
            default: 1,
        },

        value: {
            type: Number,
            default: 50,
        },
    },

    methods: {
        input($event) {
            if (!this.disabled) {
                this.$emit('input', parseFloat($event.target.value))
            }
        },
    },
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

@mixin track() {
    height: 2px;
    margin-bottom: calc(0.5rem - 2px);
    background: var(--range-track-color);
}

@mixin thumb() {
    width: 1rem;
    height: 1rem;
    margin: 0;
    cursor: pointer;
    background: var(--range-thumb-color);
    border: 0;
    border-radius: 50%;
}

@mixin slider-disabled() {
    cursor: default;
    background: var(--range-track-disabled);
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
        @include track();
    }
    &::-ms-fill-lower {
        background: var(--range-thumb-color);
    }

    &::-moz-range-track {
        @include track();
    }
    &::-moz-progress-bar {
        margin-inline-start: 0;
        margin-inline-end: 0;
    }

    &::-webkit-slider-runnable-track {
        @include track();
    }
    &::-webkit-slider-thumb {
        @include thumb();

        margin-top: calc(-0.5rem + 1px);
        margin-bottom: calc(0.5rem + 1px);

        /* stylelint-disable-next-line property-no-vendor-prefix */
        -webkit-appearance: none;

        &:focus {
            background: var(--range-thumb-focus);
        }
    }

    &::-ms-thumb {
        @include thumb();

        &:focus {
            background: var(--range-thumb-focus);
        }
    }

    &::-moz-range-thumb {
        @include thumb();

        &:focus {
            background: var(--range-thumb-focus);
        }
    }

    &:disabled {
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
