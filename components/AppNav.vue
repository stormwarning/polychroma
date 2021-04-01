<template>
    <nav class="p-8">
        <div class="flex gap-4 max-w-md mx-auto">
            <app-nav-link :exact="true">Controls</app-nav-link>
            <app-nav-link to="/info">Info</app-nav-link>
        </div>
    </nav>
</template>

<script>
import AppNavLink from './AppNavLink.vue'

export default {
    components: { AppNavLink },
}
</script>
