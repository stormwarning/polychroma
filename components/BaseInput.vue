<template>
    <input
        :type="type"
        :class="$style.input"
        :value="value"
        @input="$emit('update', $event.target.value)"
        v-on="$listeners"
    />
</template>

<script>
export default {
    model: {
        event: 'update',
    },

    props: {
        type: {
            type: String,
            default: 'text',
        },

        value: {
            type: [String, Number],
            default: '',
        },
    },
}
</script>

<style module>
.input {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: 'SF Mono',
 'SFMono-Regular',
 Consolas,
 'Liberation Mono',
 Menlo,
        monospace;
    line-height: 1;
    border: 0;
    border-radius: 0;
}
</style>
