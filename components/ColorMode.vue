<template>
    <fieldset class="pa0 ma0 mb5 bn measure center">
        <legend class="text-sm uppercase tracking-widest black-30 mb-2"
            >Colour Mode</legend
        >

        <div
            class="drop-shadow flex items-center pa3 pa4-ns bg-white br1 overflow-hidden"
        >
            <label
                v-for="(m, index) in modes"
                :key="index"
                class="flex items-center my-2 mr3 lh-solid pointer"
            >
                <input
                    v-model="mode"
                    :value="m.toLowerCase()"
                    class="mr-2"
                    type="radio"
                    name="mode"
                />
                <span class="text-xs text-sm-ns tracking-widest">{{ m }}</span>
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
