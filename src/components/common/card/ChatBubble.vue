<script setup lang="ts">
import { computed } from 'vue';
import type { AisatsuItem } from '@/types/Aisatsu';

const props = defineProps<{
    item: AisatsuItem;
}>();

const isRight = computed(() => props.item.align === 'right');
</script>

<template>
    <div :class="['bubble', isRight ? 'bubble-right' : 'bubble-left']">

        <span v-if="item.situation" :class="['situation-badge', isRight ? 'badge-right' : 'badge-left']">
            {{ item.situation }}
        </span>

        <h2 class="text-2xl md:text-3xl font-black mb-1 leading-tight">
            {{ item.kana }}
        </h2>

        <p :class="['text-lg font-bold', isRight ? 'text-white/95' : 'text-sky-accent']">
            {{ item.romaji }}
        </p>

        <p :class="['text-sm font-semibold mt-1', isRight ? 'text-white/80' : 'text-slate-500']">
            {{ item.meaning }}
        </p>

    </div>
</template>

<style scoped>
.bubble {
    padding: 1.5rem;
    border-radius: 24px;
    border: 3px solid var(--color-sky-dark);
    position: relative;
    max-width: 90%;
    transition: transform 0.2s;
    cursor: default;
}

@media (min-width: 768px) {
    .bubble {
        max-width: 80%;
    }
}

.bubble:hover {
    transform: scale(1.02);
}

/* --- LEFT STYLE (Standard) --- */
.bubble-left {
    background: white;
    color: var(--color-dark);
    margin-right: auto;
    border-bottom-left-radius: 4px;
    box-shadow: 6px 6px 0px var(--color-sky-accent);
}

.badge-left {
    background: white;
    color: var(--color-sky-accent);
    border-color: var(--color-sky-dark);
}

/* --- RIGHT STYLE (Accent/Reply) --- */
.bubble-right {
    background: var(--color-sky-accent);
    color: white;
    margin-left: auto;
    border-bottom-right-radius: 4px;
    box-shadow: -6px 6px 0px var(--color-sky-dark);
    text-align: right;
}

.badge-right {
    background: var(--color-sky-pink);
    color: white;
    border-color: white;
}

/* Common Badge Style */
.situation-badge {
    display: inline-block;
    border: 2px solid;
    padding: 4px 12px;
    border-radius: 99px;
    font-size: 0.75rem;
    font-weight: 800;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
</style>