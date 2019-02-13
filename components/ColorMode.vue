<template>
    <fieldset class="pa0 ma0 mb5 bn measure center">
        <legend class="f6 ttu tracked black-30 mb2">Colour Mode</legend>

        <div
            class="drop-shadow flex items-center pa3 pa4-ns bg-white br1 overflow-hidden"
        >
            <label
                v-for="(m, index) in modes"
                :key="index"
                class="flex items-center mv2 mr3 lh-solid pointer"
            >
                <input
                    v-model="mode"
                    :value="m.toLowerCase()"
                    class="mr2"
                    type="radio"
                    name="mode"
                />
                <span class="f7 f6-ns tracked">{{ m }}</span>
            </label>
        </div>
    </fieldset>
</template>

<script>
export default {
    data() {
        return {
            modes: ['RGB', 'Lab', 'HSL', 'Lch'],
        }
    },
}
</script>
