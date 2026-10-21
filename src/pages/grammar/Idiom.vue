<script setup lang="ts">
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { idiomsData } from '@/data/kanyouku';
import { useSettings } from '@/composables/useSettings';
import { useLocalized } from '@/composables/useLocalized';
import { playAudio } from '@/utils/audio';

const { t } = useI18n();
const { showFurigana, showRomaji } = useSettings();
const { getMeaning, getLiteral, getExampleResult } = useLocalized();

const idiomTabs = computed(() => [
    { label: t('common.dictionary.kanyouku.tab_kanyouku'), value: "kanyouku" },
    { label: t('common.dictionary.kanyouku.tab_yojijukugo'), value: "yojijukugo" },
]);

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref(idiomTabs.value[0]?.value || 'kanyouku');

const currentIdioms = computed(() => idiomsData[activeTab.value] || []);
</script>

<template>
    <div class="max-w-4xl mx-auto px-4 pb-20 pt-6 font-sans min-h-screen">

        <div class="flex justify-center mb-10">
            <TabSwitcher :tabs="idiomTabs" v-model="activeTab" :theme="themeName" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-snap">
            <div v-for="idiom in currentIdioms" :key="idiom.id"
                class="bg-white border-[3px] border-slate-900 rounded-3xl overflow-hidden shadow-[6px_6px_0px_#0f172a] flex flex-col group hover:-translate-y-1 transition-transform duration-200">
                <div
                    :class="[idiom.theme, 'border-b-[3px] border-slate-900 p-6 flex justify-between items-center relative overflow-hidden cursor-pointer select-none group/card']"
                    @click="playAudio(idiom.kanji)">
                    <div
                        class="absolute top-3 left-3 opacity-0 group-hover/card:opacity-100 transition-opacity text-slate-800 text-sm z-20">
                        🔊
                    </div>
                    <div class="absolute -right-4 -bottom-4 text-7xl opacity-20 rotate-12">{{ idiom.icon }}</div>
                    <div class="relative z-10">
                        <p v-if="showFurigana"
                            class="text-xs font-bold text-slate-800/80 mb-0.5 tracking-wider font-japanese">
                            {{ idiom.furigana }}
                        </p>
                        <h3
                            class="text-3xl font-black text-slate-900 tracking-wider font-japanese drop-shadow-[1px_1px_0px_#fff]">
                            {{ idiom.kanji }}
                        </h3>
                        <p v-if="showRomaji"
                            class="font-bold text-slate-800 mt-1 bg-white/60 inline-block px-2 py-0.5 rounded border border-slate-900/20 text-sm">
                            {{ idiom.romaji }}
                        </p>
                    </div>
                    <span
                        class="text-4xl bg-white rounded-full border-[3px] border-slate-900 p-2 shadow-[2px_2px_0px_#0f172a] relative z-10 group-hover/card:scale-110 transition-transform">
                        {{ idiom.icon }}
                    </span>
                </div>

                <div class="p-6 grow flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-start gap-2">
                            <span
                                class="bg-slate-200 text-slate-600 font-black text-[10px] px-2 py-1 rounded border-2 border-slate-900 uppercase tracking-wider mt-0.5 whitespace-nowrap">
                                {{ $t('common.dictionary.kanyouku.literal') }}
                            </span>
                            <span class="font-bold text-slate-500 text-sm">{{ getLiteral(idiom) }}</span>
                        </div>
                        <div class="flex items-start gap-2">
                            <span
                                class="bg-indigo-200 text-indigo-900 font-black text-[10px] px-2 py-1 rounded border-2 border-slate-900 uppercase tracking-wider mt-0.5 whitespace-nowrap">
                                {{ $t('common.dictionary.kanyouku.meaning') }}
                            </span>
                            <span class="font-black text-slate-800 text-lg leading-tight">{{ getMeaning(idiom) }}</span>
                        </div>
                    </div>

                    <hr class="border-t-2 border-dashed border-slate-300 my-2">

                    <div class="bg-indigo-50 p-4 rounded-xl border-2 border-slate-900 relative cursor-pointer select-none group/ex"
                        @click="playAudio(idiom.example.jp)">
                        <div
                            class="absolute top-2 right-2 opacity-0 group-hover/ex:opacity-100 transition-opacity text-slate-400 text-xs">
                            🔊
                        </div>
                        <span
                            class="absolute -top-3 left-4 bg-white font-black text-[10px] px-2 py-0.5 border-2 border-slate-900 rounded-md text-slate-600 uppercase">
                            {{ $t('common.dictionary.kanyouku.example') }}
                        </span>
                        <p v-if="showFurigana && idiom.example.furigana"
                            class="text-xs font-medium text-slate-500 mb-0.5 font-japanese">
                            {{ idiom.example.furigana }}
                        </p>
                        <p class="font-bold text-slate-800 text-sm md:text-base mt-1">
                            {{ idiom.example.jp }}
                        </p>
                        <p v-if="showRomaji && idiom.example.ro"
                            class="text-xs font-bold text-indigo-600 uppercase tracking-wide mt-1">
                            {{ idiom.example.ro }}
                        </p>
                        <p class="font-bold text-slate-500 text-[11px] mt-1">
                            "{{ getExampleResult(idiom.example) }}"
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="currentIdioms.length === 0"
            class="text-center py-12 bg-white border-[3px] border-slate-900 rounded-3xl shadow-[6px_6px_0px_#0f172a]">
            <span class="text-5xl block mb-4">🚧</span>
            <h3 class="font-black text-xl text-slate-900 uppercase">{{ $t('common.dictionary.kanyouku.not_available_title') }}</h3>
            <p class="font-bold text-slate-500">{{ $t('common.dictionary.kanyouku.not_available_desc') }}</p>
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
    0% {
        transform: scale(0.95) translateY(10px);
        opacity: 0;
    }

    100% {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}
</style>
