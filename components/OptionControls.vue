<template>
    <details class="bb b--black-10">
        <summary class="w-100 flex items-center justify-between pa3 pa4-ns">
            <slot name="summary"></slot>
        </summary>
        <div>
            <slot></slot>
        </div>
    </details>
</template>

<script>
export default {

}
</script>

<style scoped>
summary {
    list-style-type: none;
    cursor: pointer;
}

summary::-webkit-details-marker {
  display: none;
}
</style>

