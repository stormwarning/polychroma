<template>
    <button
        class="relative flex items-center p-2 lg:p-4 text-xs font-medium text-gray-900 leading-none uppercase tracking-widest bg-gray-100 hover:bg-white focus:bg-white border-none rounded-sm outline-none cursor-pointer shadow-a"
        v-on="$listeners"
    >
        <slot />
    </button>
</template>
