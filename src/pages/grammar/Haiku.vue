<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { haikuData } from '@/data/haiku';
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-snap">
            <div v-for="item in haikuData" :key="item.id"
                class="bg-white border-[3px] border-slate-900 rounded-3xl overflow-hidden shadow-[6px_6px_0px_#0f172a] flex flex-col group hover:-translate-y-1 transition-transform duration-200 relative">
                
                <div class="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-8xl z-0">🎋</div>

                <div class="bg-pink-50 border-b-[3px] border-slate-900 p-6 flex flex-col relative overflow-hidden z-10">
                    <p v-if="showFurigana" class="text-sm font-bold text-slate-500 tracking-widest font-japanese leading-relaxed whitespace-pre-line text-center mb-2">
                        {{ item.poem_kana }}
                    </p>
                    <p class="text-3xl font-black text-slate-900 tracking-widest font-japanese leading-relaxed whitespace-pre-line text-center">
                        {{ item.poem_jp }}
                    </p>
                </div>

                <div class="p-6 grow flex flex-col gap-4 relative z-10">
                    <div class="text-center">
                        <p class="font-bold text-slate-600 italic whitespace-pre-line leading-relaxed text-sm">
                            {{ showRomaji ? item.poem_ro : '-' }}
                        </p>
                        <p class="text-xs font-black uppercase text-pink-600 tracking-wider mt-4">
                            — {{ item.author }}
                        </p>
                    </div>

                    <hr class="border-t-2 border-dashed border-slate-300 my-2">

                    <div class="bg-slate-50 p-4 rounded-xl border-2 border-slate-900 relative">
                        <span class="absolute -top-3 left-4 bg-white font-black text-[10px] px-2 py-0.5 border-2 border-slate-900 rounded-md text-slate-600 uppercase whitespace-nowrap">
                            Makna / Meaning
                        </span>
                        <p class="font-bold text-slate-800 text-sm mt-1">
                            {{ getMeaning(item) }}
                        </p>
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
