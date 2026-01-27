<template>
    <div class="layout-wrapper min-h-screen flex flex-col font-sans overflow-x-hidden pb-12">
        <slot />
    </div>
</template>

<style scoped>
.layout-wrapper {
    background-color: var(--color-peach);
    color: var(--color-dark);
    background-image: radial-gradient(#fff 2px, transparent 2px);
    background-size: 40px 40px;
}
</style>