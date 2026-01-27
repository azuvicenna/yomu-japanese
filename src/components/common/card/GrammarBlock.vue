<script setup lang="ts">
import type { GrammarBlockType } from '@/types/Bunpou';
import { computed } from 'vue';

const props = defineProps<{
    type?: GrammarBlockType; 
}>();

const colorClass = computed(() => {
    switch (props.type) {
        case 'noun': return 'bg-block-noun text-white border-transparent';
        case 'verb': return 'bg-block-verb text-white border-transparent';
        case 'particle': return 'bg-block-particle text-white rounded-full px-3 border-transparent';
        case 'adj': return 'bg-block-adj text-white border-transparent';
        case 'desu': return 'bg-cool-accent text-cool-dark border-transparent'; 
        case 'highlight': return 'bg-pink-500 text-white border-transparent';
        default: return 'bg-slate-200 text-slate-600 border-slate-300';
    }
});
</script>

<template>
    <span
        :class="['inline-block px-4 py-2 rounded-xl font-bold border-2 text-sm shadow-[2px_2px_0px_rgba(0,0,0,0.1)] mx-1 my-1', colorClass]">
        <slot></slot>
    </span>
</template>