<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSettings } from '@/composables/useSettings';
import { useLocalized } from '@/composables/useLocalized';
import type { JoshiExtraItem } from '@/types';
import { playAudio } from '@/utils/audio';

defineProps<{
    item: JoshiExtraItem;
}>();

const router = useRouter();
const { showRomaji, showFurigana } = useSettings();
const { getFunction, getMeaning } = useLocalized();

const goToDetail = (kana: string) => {
    router.push(`/grammar/dictionary/joshi/${kana}`);
};
</script>

<template>
    <div
        class="flex flex-col md:flex-row gap-4 p-4 rounded-xl transition-colors border-2 border-transparent hover:bg-mint hover:border-mint-accent group relative">

        <div class="w-16 h-16 bg-mint-dark text-white rounded-xl flex items-center justify-center font-black text-2xl shrink-0 shadow-sm group-hover:scale-110 transition-transform cursor-pointer select-none relative overflow-hidden active:scale-95"
            @click.stop="playAudio(item.kana)">
            {{ item.kana }}
            <div
                class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span class="text-sm">🔊</span>
            </div>
        </div>

        <div class="grow flex flex-col justify-center">
            <h4 class="font-bold text-lg text-mint-dark leading-tight mb-1">
                {{ item.romaji }}
            </h4>
            <p class="text-sm text-slate-600 mb-2 leading-snug">
                {{ getFunction(item) }}
            </p>

            <div class="self-start">
                <div class="inline-flex flex-col bg-white border border-green-200 rounded-lg px-3 py-2 cursor-pointer hover:bg-green-50 active:bg-green-100 transition-colors select-none shadow-sm relative group/btn"
                    @click.stop="playAudio(item.example_jp)">

                    <span v-if="showFurigana && item.furigana"
                        class="text-[10px] text-slate-400 font-medium block leading-none mb-0.5">
                        {{ item.furigana }}
                    </span>

                    <div class="flex items-center gap-2 mb-0.5">
                        <span class="text-sm font-black text-slate-700 leading-none">{{ item.example_jp }}</span>
                        <span
                            class="text-[10px] text-mint-dark opacity-50 group-hover/btn:opacity-100 transition-opacity">🔊</span>
                    </div>

                    <div class="text-xs flex items-center gap-2">
                        <span class="font-bold text-mint-accent uppercase tracking-wide">
                            {{ showRomaji ? item.example_ro : '-' }}
                        </span>
                        <span class="text-slate-300">|</span>
                        <span class="text-slate-500 italic">
                            {{ getMeaning(item) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center shrink-0 mt-2 md:mt-0">
            <button @click="goToDetail(item.kana)"
                class="px-4 sm:px-8 py-2 w-full md:w-auto rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none bg-white text-slate-800 cursor-pointer text-sm sm:text-base whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-mint-accent hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1e293b]">
                {{ $t('common.dictionary.joshi.button') }}
            </button>
        </div>
    </div>
</template>