<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { koutsuuData } from '@/data/koutsuu-hyoushiki';
import { useI18n } from 'vue-i18n';
import { useSettings } from '@/composables/useSettings';

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const { locale } = useI18n();
const { showRomaji, showFurigana } = useSettings();

const getMeaning = (item: any) => {
    if (locale.value === 'id') return item.meaningId;
    if (locale.value === 'ja') return item.meaningJa;
    return item.meaningEn;
};
</script>

<template>
    <div class="max-w-4xl mx-auto px-4 pb-20 pt-6 font-sans min-h-screen">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-snap">
            <div v-for="item in koutsuuData" :key="item.id"
                class="bg-white border-[3px] border-slate-900 rounded-3xl overflow-hidden shadow-[6px_6px_0px_#0f172a] flex flex-col group hover:-translate-y-1 transition-transform duration-200">
                
                <div class="bg-amber-100 border-b-[3px] border-slate-900 p-6 flex flex-col items-center justify-center relative overflow-hidden h-40">
                    <span class="text-7xl drop-shadow-md relative z-10">{{ item.icon }}</span>
                </div>

                <div class="p-6 grow flex flex-col items-center text-center gap-2">
                    <span v-if="showFurigana" class="font-bold text-slate-500 text-xs mb-[-8px]">{{ item.furigana }}</span>
                    <h3 class="text-2xl font-black text-slate-900 tracking-wider font-japanese">{{ item.kanji }}</h3>
                    <p class="font-bold text-slate-500 text-sm bg-slate-100 px-2 py-1 rounded border border-slate-200">{{ showRomaji ? item.romaji : '-' }}</p>
                    
                    <div class="mt-4 bg-amber-50 p-3 rounded-xl border-2 border-slate-900 w-full relative">
                        <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-white font-black text-[10px] px-2 py-0.5 border-2 border-slate-900 rounded-md text-slate-600 uppercase whitespace-nowrap">
                            Arti / Meaning
                        </span>
                        <p class="font-black text-slate-800 text-base mt-2">{{ getMeaning(item) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.font-japanese {
    font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif;
}
.animate-snap {
    animation: snapIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
@keyframes snapIn {
    0% { transform: scale(0.95) translateY(10px); opacity: 0; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
}
</style>
