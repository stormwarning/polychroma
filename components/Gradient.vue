<template>
<article>
    <div>
        <span>Colour A</span>
        <input type="color">
    </div>
    <div>
        <span>Colour B</span>
        <input type="color">
    </div>

    <div>
        <span>Result</span>
        <textarea>
        </textarea>
    </div>
</article>
</template>

<script>
export default {
    data () {
        return {
            color1: '',
            color2: '',
        }
    }
}
</script>

<style>
</style>
