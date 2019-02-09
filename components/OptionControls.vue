<template>
    <details class>
        <summary class>
            <div class="w-100 flex items-center justify-between pa3 pa4-ns">
                <slot name="summary"></slot>
            </div>
        </summary>
        <div class="options-drawer relative pa4-ns pt1-ns pr3-ns mr5-ns">
            <slot></slot>
        </div>
    </details>
</template>

<script>
export default {

}
</script>

<style scoped>
details {
    transition: box-shadow 200ms ease-in-out;
}
details[open] {
    box-shadow: rgba(0, 0, 0, 0.12) 0 2px 10px, 0 20px 50px 0 rgba(0, 0, 0, 0.14);
}

summary {
    list-style-type: none;
    cursor: pointer;
    outline: none;
}

summary::-webkit-details-marker {
  display: none;
}

.options-drawer {
    /* margin-top: -5rem; */
}
</style>

