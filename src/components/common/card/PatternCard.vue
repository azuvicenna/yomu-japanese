<script setup lang="ts">
defineProps<{
    title: string;
    badge?: string;
}>();
</script>

<template>
    <div class="pattern-card h-full flex flex-col">
        <div v-if="badge" class="mb-3">
            <span class="bg-slate-100 px-3 py-1 rounded-lg font-bold text-xs text-slate-500 uppercase tracking-wide">
                {{ badge }}
            </span>
        </div>

        <h3 class="text-xl font-black text-cool-dark mb-4 border-b-2 border-slate-100 pb-2">
            {{ title }}
        </h3>

        <div class="flex-grow">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.pattern-card {
    background: white;
    border: 3px solid var(--color-cool-dark);
    border-radius: 24px;
    padding: 1.5rem;
    position: relative;
    box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.pattern-card:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.15);
}
</style>