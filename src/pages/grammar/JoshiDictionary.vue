<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { japaneseParticles, extraParticles } from '@/data/joshi2';
import { playAudio } from '@/utils/audio';

const route = useRoute();
const kanaParam = route.params.kana as string;

const particle = computed(() => {
    const allParticles = [...japaneseParticles, ...extraParticles];
    return allParticles.find(p => p.kana === kanaParam);
});
</script>

<template>
    <div class="max-w-5xl mx-auto px-4 pb-12">
        <div v-if="particle">
            <div class="text-center mb-10">
                <span
                    class="inline-block bg-mint text-mint-dark px-8 py-3 rounded-full font-black border-2 border-mint-dark shadow-[4px_4px_0px_var(--color-mint-dark)] text-2xl md:text-3xl tracking-wide">
                    {{ particle.kana }} <span class="text-mint-accent mx-2">•</span> {{ particle.romaji }}
                </span>
            </div>

            <div class="grid gap-5 md:grid-cols-2">
                <div v-for="(func, i) in particle.functions" :key="i"
                    class="bg-white border-2 border-mint-dark rounded-2xl p-5 shadow-[4px_4px_0px_var(--color-mint-dark)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--color-mint-dark)] flex flex-col group">
                    <h3 class="font-black text-lg text-mint-dark mb-2 group-hover:text-mint-accent transition-colors">
                        {{ func.title }}
                    </h3>
                    <p class="text-sm text-slate-600 mb-5 leading-relaxed grow">
                        {{ func.description }}
                    </p>

                    <div class="bg-slate-50 border-l-4 border-mint-accent p-4 rounded-r-xl mt-auto">
                        <div class="flex justify-between items-start mb-1.5">
                            <p class="font-black text-slate-800 text-base">
                                {{ func.example.jp }}
                            </p>
                            <button @click="playAudio(func.example.jp)"
                                class="cursor-pointer text-slate-400 hover:text-mint-accent transition-colors ml-2 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                </svg>
                            </button>
                        </div>
                        <p class="text-mint-dark font-bold text-xs uppercase tracking-widest mb-1">
                            {{ func.example.ro }}
                        </p>
                        <p class="text-slate-500 italic text-sm">
                            {{ func.example.id }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="text-center py-20">
            <h2 class="text-2xl font-black text-slate-400">Data partikel tidak ditemukan</h2>
        </div>
    </div>
</template>