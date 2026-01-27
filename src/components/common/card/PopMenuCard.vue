<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    to: string;          
    icon: string;        
    title: string;       
    desc: string;        
    tag: string;         
    hoverColor: string;  
    theme: string;       
}>();

// Generate class untuk badge berdasarkan tema warna
const badgeClass = computed(() => {
    return `bg-${props.theme}-100 text-${props.theme}-600`;
});
</script>

<template>
    <router-link :to="to" class="menu-card group" :style="{ '--hover-color': hoverColor }">
        <div>
            <div class="text-5xl mb-2">{{ icon }}</div>
            <h3
                class="text-2xl font-black text-slate-700 group-hover:text-[var(--hover-color)] transition-colors duration-200">
                {{ title }}
            </h3>
            <p class="font-bold text-slate-400 text-sm mt-1 leading-snug">
                {{ desc }}
            </p>
        </div>

        <div class="mt-5 pt-3 border-t-2 border-slate-100 flex justify-between items-center">
            <span :class="['text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider', badgeClass]">
                {{ tag }}
            </span>
            <span class="font-black text-slate-300 group-hover:text-[var(--hover-color)] transition-colors">→</span>
        </div>
    </router-link>
</template>

<style scoped>
.menu-card {
    background: white;
    border: 4px solid white;
    border-radius: 24px;
    padding: 1.5rem;
    position: relative;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);
    text-decoration: none;
}

.menu-card:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: var(--hover-color);
    box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.15);
}
</style>