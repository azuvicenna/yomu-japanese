<script setup lang="ts">
import GrammarBlock from '@/components/common/card/GrammarBlock.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import type { GrammarBlockType } from '@/types';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref('basic');

interface BlockData {
    text: string;
    type?: GrammarBlockType;
    isPlain?: boolean;
    class?: string;
}

const bunpouTabs = [
    { label: 'Dasar (Basic)', value: 'basic' },
    { label: '~Tai (Ingin)', value: 'tai' },
    { label: '~Te (Tolong)', value: 'te' },
    { label: 'Waktu (Tenses)', value: 'lampau' },
];

const goldenRuleIndo: BlockData[] = [
    { text: 'Saya', type: 'text' },
    { text: 'Makan', type: 'text' },
    { text: 'Nasi', type: 'text' },
];

const goldenRuleJepang: BlockData[] = [
    { text: 'Watashi', type: 'noun' },
    { text: 'wa', type: 'particle' },
    { text: 'Gohan', type: 'noun' },
    { text: 'o', type: 'particle' },
    { text: 'Tabemasu', type: 'verb' },
];

const polaIdentitas: BlockData[] = [
    { text: 'A (Subjek)', type: 'noun' },
    { text: 'wa', type: 'particle' },
    { text: 'B (Ket)', type: 'noun' },
    { text: 'desu', type: 'desu' }
];

const polaTanya: BlockData[] = [
    { text: '[Kalimat]', type: 'text' },
    { text: 'desu', type: 'desu' },
    { text: 'ka', type: 'highlight' }
];

const polaTe: BlockData[] = [
    { text: 'Bentuk -Te', type: 'verb' },
    { text: '+', type: 'text', isPlain: true, class: 'font-black text-slate-900 mx-2 text-2xl' },
    { text: 'kudasai', type: 'highlight' }
];
</script>

<template>
    <div class="max-w-4xl mx-auto px-4 pb-20 pt-6 font-sans min-h-screen">

        <div
            class="bg-yellow-400 border-[3px] border-slate-900 rounded-4xl p-6 md:p-8 mb-12 shadow-[6px_6px_0px_#0f172a] relative">
            <div
                class="absolute -top-5 -right-3 bg-pink-400 text-slate-900 font-black px-4 py-2 border-[3px] border-slate-900 rounded-full shadow-[4px_4px_0px_#0f172a] rotate-6 text-xl">
                PENTING! 💥
            </div>

            <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-8 uppercase flex items-center gap-2">
                Aturan Emas: Terbalik!
            </h2>

            <div class="flex flex-col md:flex-row gap-6 items-center justify-center">
                <div
                    class="text-center w-full bg-white p-4 rounded-2xl border-[3px] border-slate-900 shadow-[4px_4px_0px_#0f172a]">
                    <div
                        class="inline-block bg-slate-900 text-white font-black px-3 py-1 rounded-full text-[10px] uppercase tracking-widest mb-2">
                        Indo (S-P-O)
                    </div>
                    <div class="flex justify-center flex-wrap items-center">
                        <GrammarBlock v-for="(item, idx) in goldenRuleIndo" :key="'id-' + idx" :type="item.type">
                            {{ item.text }}
                        </GrammarBlock>
                    </div>
                </div>

                <div class="text-4xl font-black text-slate-900 rotate-90 md:rotate-0">➔</div>

                <div
                    class="text-center w-full bg-cyan-300 p-4 rounded-2xl border-[3px] border-slate-900 shadow-[4px_4px_0px_#0f172a]">
                    <div
                        class="inline-block bg-slate-900 text-cyan-300 font-black px-3 py-1 rounded-full text-[10px] uppercase tracking-widest mb-2">
                        Jepang (S-O-P)
                    </div>
                    <div class="flex justify-center flex-wrap items-center mb-1">
                        <GrammarBlock v-for="(item, idx) in goldenRuleJepang" :key="'jp-' + idx" :type="item.type">
                            {{ item.text }}
                        </GrammarBlock>
                    </div>
                    <p
                        class="font-bold text-xs text-slate-800 bg-white inline-block px-2 py-1 rounded border-2 border-slate-900 mt-2">
                        (Saya - Nasi - Makan)
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center mb-10">
            <TabSwitcher :tabs="bunpouTabs" v-model="activeTab" :theme="themeName" />
        </div>

        <div v-show="activeTab === 'basic'" class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div class="bg-white border-[3px] border-slate-900 rounded-3xl p-6 shadow-[6px_6px_0px_#0f172a] relative">
                <span
                    class="absolute -top-4 -left-4 bg-fuchsia-400 border-[3px] border-slate-900 px-4 py-1.5 rounded-full font-black text-slate-900 shadow-[4px_4px_0px_#0f172a] -rotate-3">
                    POLA 1
                </span>

                <h3 class="text-xl font-black text-slate-900 mt-3 mb-4 uppercase">Identitas (A adalah B)</h3>

                <div class="bg-fuchsia-100 p-3 rounded-2xl border-[3px] border-slate-900 mb-5 text-center">
                    <div class="flex flex-wrap justify-center items-center">
                        <GrammarBlock v-for="(item, idx) in polaIdentitas" :key="'idnt-' + idx" :type="item.type">
                            {{ item.text }}
                        </GrammarBlock>
                    </div>
                </div>

                <div class="bg-cool p-4 rounded-xl border-[3px] border-slate-900">
                    <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Contoh:</p>
                    <div class="text-base font-bold leading-relaxed bg-white p-2 rounded-lg border-2 border-slate-200">
                        <span class="text-blue-600">Watashi</span>
                        <span class="text-green-600 mx-1">wa</span>
                        <span class="text-blue-600">Gakusei</span>
                        <span
                            class="bg-yellow-300 text-slate-900 border-2 border-slate-900 px-2 py-0.5 rounded-lg mx-1">desu</span>
                    </div>
                    <p class="text-xs font-bold text-slate-600 mt-2">"Saya adalah pelajar."</p>
                </div>
            </div>

            <div class="bg-white border-[3px] border-slate-900 rounded-3xl p-6 shadow-[6px_6px_0px_#0f172a] relative">
                <span
                    class="absolute -top-4 -left-4 bg-sky-400 border-[3px] border-slate-900 px-4 py-1.5 rounded-full font-black text-slate-900 shadow-[4px_4px_0px_#0f172a] rotate-3">
                    POLA 2
                </span>

                <h3 class="text-xl font-black text-slate-900 mt-3 mb-4 uppercase">Tanya (Apakah...?)</h3>

                <div class="bg-sky-100 p-3 rounded-2xl border-[3px] border-slate-900 mb-5 text-center">
                    <div class="flex flex-wrap justify-center items-center">
                        <GrammarBlock v-for="(item, idx) in polaTanya" :key="'tny-' + idx" :type="item.type">
                            {{ item.text }}
                        </GrammarBlock>
                        <span class="text-3xl font-black text-slate-900 ml-2">?</span>
                    </div>
                </div>

                <div class="bg-cool p-4 rounded-xl border-[3px] border-slate-900">
                    <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Contoh:</p>
                    <div class="text-base font-bold leading-relaxed bg-white p-2 rounded-lg border-2 border-slate-200">
                        <span class="text-blue-600">Anata</span>
                        <span class="text-green-600 mx-1">wa</span>
                        <span class="text-blue-600">Sensei</span>
                        <span
                            class="bg-yellow-300 text-slate-900 border-2 border-slate-900 px-2 py-0.5 rounded-lg mx-1">desu</span>
                        <span class="text-sky-500 font-black text-lg">ka?</span>
                    </div>
                    <p class="text-xs font-bold text-slate-600 mt-2">"Apakah kamu guru?"</p>
                </div>
            </div>

        </div>

        <div v-show="activeTab === 'tai'" class="space-y-8 max-w-3xl mx-auto">

            <div
                class="bg-lime-300 border-[3px] border-slate-900 p-5 rounded-2xl shadow-[4px_4px_0px_#0f172a] flex gap-4 items-center">
                <span
                    class="text-3xl bg-white rounded-full border-[3px] border-slate-900 p-2 shadow-[2px_2px_0px_#0f172a]">💡</span>
                <div>
                    <h4 class="font-black text-slate-900 text-lg uppercase tracking-wide">Rumus Hack!</h4>
                    <p class="font-bold text-slate-800 text-sm mt-1">Coret <span
                            class="bg-white px-2 border-2 border-slate-900 rounded-md">masu</span>, ganti pakai <span
                            class="bg-white px-2 border-2 border-slate-900 rounded-md">tai desu</span>.</p>
                </div>
            </div>

            <div class="bg-white border-[3px] border-slate-900 rounded-3xl p-6 shadow-[6px_6px_0px_#0f172a]">
                <h3
                    class="text-xl font-black text-slate-900 mb-6 uppercase text-center bg-pink-300 border-[3px] border-slate-900 py-3 rounded-2xl shadow-[4px_4px_0px_#0f172a]">
                    Ingin Melakukan (~Tai)
                </h3>

                <div class="flex flex-col gap-6">

                    <div
                        class="flex flex-col border-[3px] border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0f172a] overflow-hidden bg-cool">
                        <div
                            class="flex flex-col md:flex-row items-center justify-between p-4 gap-4 border-b-[3px] border-slate-900">
                            <div
                                class="text-center md:text-left bg-white px-4 py-2 border-2 border-slate-200 rounded-xl w-full md:w-auto">
                                <span class="text-lg font-black text-slate-800">Tabe<s
                                        class="text-red-500 decoration-4 ml-1">masu</s></span>
                                <p class="text-[10px] font-bold text-slate-500 uppercase mt-1">Makan</p>
                            </div>
                            <div class="text-2xl font-black text-slate-900 rotate-90 md:rotate-0">➔</div>
                            <div
                                class="bg-pink-400 border-[3px] border-slate-900 px-6 py-2 rounded-xl shadow-[4px_4px_0px_#0f172a] text-center w-full md:w-auto">
                                <p class="text-xl font-black text-slate-900">Tabetai desu</p>
                                <p class="text-[10px] font-bold text-slate-900 uppercase mt-1">Ingin Makan</p>
                            </div>
                        </div>
                        <div class="bg-white p-4 flex flex-col gap-1">
                            <p class="font-bold text-slate-800 text-sm md:text-base">
                                🍣 Sushi o <span class="text-pink-600 underline decoration-2 underline-offset-2">tabetai
                                    desu</span>.
                            </p>
                            <p class="font-bold text-slate-500 text-[11px] uppercase mt-1">Saya ingin makan sushi.</p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col border-[3px] border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0f172a] overflow-hidden bg-cool">
                        <div
                            class="flex flex-col md:flex-row items-center justify-between p-4 gap-4 border-b-[3px] border-slate-900">
                            <div
                                class="text-center md:text-left bg-white px-4 py-2 border-2 border-slate-200 rounded-xl w-full md:w-auto">
                                <span class="text-lg font-black text-slate-800">Iki<s
                                        class="text-red-500 decoration-4 ml-1">masu</s></span>
                                <p class="text-[10px] font-bold text-slate-500 uppercase mt-1">Pergi</p>
                            </div>
                            <div class="text-2xl font-black text-slate-900 rotate-90 md:rotate-0">➔</div>
                            <div
                                class="bg-pink-400 border-[3px] border-slate-900 px-6 py-2 rounded-xl shadow-[4px_4px_0px_#0f172a] text-center w-full md:w-auto">
                                <p class="text-xl font-black text-slate-900">Ikitai desu</p>
                                <p class="text-[10px] font-bold text-slate-900 uppercase mt-1">Ingin Pergi</p>
                            </div>
                        </div>
                        <div class="bg-white p-4 flex flex-col gap-1">
                            <p class="font-bold text-slate-800 text-sm md:text-base">
                                🇯🇵 Nihon ni <span
                                    class="text-pink-600 underline decoration-2 underline-offset-2">ikitai desu</span>.
                            </p>
                            <p class="font-bold text-slate-500 text-[11px] uppercase mt-1">Saya ingin pergi ke Jepang.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div v-show="activeTab === 'te'" class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <div
                class="col-span-full bg-violet-300 border-[3px] border-slate-900 p-6 rounded-3xl shadow-[6px_6px_0px_#0f172a] text-center">
                <h3 class="text-2xl font-black text-slate-900 mb-6 uppercase">Meminta Tolong</h3>
                <div
                    class="flex flex-wrap justify-center items-center bg-white py-2 px-4 border-[3px] border-slate-900 rounded-2xl w-fit mx-auto shadow-[4px_4px_0px_#0f172a]">
                    <template v-for="(item, idx) in polaTe" :key="'te-'+idx">
                        <span v-if="item.isPlain" :class="item.class">{{ item.text }}</span>
                        <GrammarBlock v-else :type="item.type">{{ item.text }}</GrammarBlock>
                    </template>
                </div>
            </div>

            <div
                class="bg-white border-[3px] border-slate-900 p-6 rounded-3xl shadow-[6px_6px_0px_#0f172a] flex items-center justify-between">
                <div>
                    <p class="text-xl font-black text-slate-800 mb-2">Tabete <span
                            class="bg-lime-400 px-2 py-0.5 rounded-lg border-2 border-slate-900 text-slate-900">kudasai</span>
                    </p>
                    <p class="font-bold text-slate-500 uppercase text-xs">Tolong Makan</p>
                </div>
                <div
                    class="text-4xl bg-cool rounded-full p-3 border-[3px] border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                    🍚</div>
            </div>

            <div
                class="bg-white border-[3px] border-slate-900 p-6 rounded-3xl shadow-[6px_6px_0px_#0f172a] flex items-center justify-between">
                <div>
                    <p class="text-xl font-black text-slate-800 mb-2">Mite <span
                            class="bg-lime-400 px-2 py-0.5 rounded-lg border-2 border-slate-900 text-slate-900">kudasai</span>
                    </p>
                    <p class="font-bold text-slate-500 uppercase text-xs">Tolong Lihat</p>
                </div>
                <div
                    class="text-4xl bg-cool rounded-full p-3 border-[3px] border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                    👀</div>
            </div>

        </div>

        <div v-show="activeTab === 'lampau'" class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <div class="col-span-full text-center">
                <h3
                    class="inline-block text-2xl font-black text-slate-900 uppercase bg-white border-[3px] border-slate-900 px-8 py-3 rounded-full shadow-[6px_6px_0px_#0f172a] mb-2">
                    Mesin Waktu (Tenses) ⏱️
                </h3>
            </div>

            <div class="bg-blue-300 border-[3px] border-slate-900 p-6 rounded-3xl shadow-[6px_6px_0px_#0f172a]">
                <h4
                    class="font-black text-slate-900 mb-6 text-center text-xl uppercase bg-white border-[3px] border-slate-900 py-2 rounded-xl shadow-[4px_4px_0px_#0f172a]">
                    Sekarang / Nanti
                </h4>
                <div class="space-y-4">
                    <div
                        class="bg-white p-4 rounded-2xl border-[3px] border-slate-900 shadow-[4px_4px_0px_#0f172a] flex flex-col gap-3">
                        <div class="flex justify-between items-center">
                            <span class="font-black text-slate-800 text-xl">~ MASU</span>
                            <span
                                class="font-black bg-blue-100 border-2 border-slate-900 px-2 py-1 rounded-lg text-sm">Positif
                                (+)</span>
                        </div>
                        <div class="bg-blue-50 border-2 border-slate-900 p-3 rounded-xl">
                            <p class="font-bold text-slate-800 text-sm">🍎 Ringo o <span
                                    class="text-blue-600 underline decoration-2 underline-offset-2">tabemasu</span>.</p>
                            <p class="font-bold text-slate-500 text-[11px] uppercase mt-1">Makan apel / Akan makan apel
                            </p>
                        </div>
                    </div>

                    <div
                        class="bg-slate-200 p-4 rounded-2xl border-[3px] border-slate-900 shadow-[4px_4px_0px_#0f172a] flex flex-col gap-3">
                        <div class="flex justify-between items-center">
                            <span class="font-black text-slate-600 text-xl">~ MASEN</span>
                            <span
                                class="font-black bg-slate-300 border-2 border-slate-900 px-2 py-1 rounded-lg text-slate-600 text-sm">Negatif
                                (-)</span>
                        </div>
                        <div class="bg-white/50 border-2 border-slate-400 p-3 rounded-xl">
                            <p class="font-bold text-slate-700 text-sm">🍎 Ringo o <span
                                    class="text-slate-600 underline decoration-2 underline-offset-2">tabemasen</span>.
                            </p>
                            <p class="font-bold text-slate-500 text-[11px] uppercase mt-1">Tidak makan apel</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-orange-400 border-[3px] border-slate-900 p-6 rounded-3xl shadow-[6px_6px_0px_#0f172a]">
                <h4
                    class="font-black text-slate-900 mb-6 text-center text-xl uppercase bg-white border-[3px] border-slate-900 py-2 rounded-xl shadow-[4px_4px_0px_#0f172a]">
                    Masa Lampau (Sudah)
                </h4>
                <div class="space-y-4">
                    <div
                        class="bg-white p-4 rounded-2xl border-[3px] border-slate-900 shadow-[4px_4px_0px_#0f172a] flex flex-col gap-3">
                        <div class="flex justify-between items-center">
                            <span class="font-black text-slate-800 text-xl">~ MASHITA</span>
                            <span
                                class="font-black bg-orange-100 border-2 border-slate-900 px-2 py-1 rounded-lg text-sm">Positif
                                (+)</span>
                        </div>
                        <div class="bg-orange-50 border-2 border-slate-900 p-3 rounded-xl">
                            <p class="font-bold text-slate-800 text-sm">🍎 Ringo o <span
                                    class="text-orange-600 underline decoration-2 underline-offset-2">tabemashita</span>.
                            </p>
                            <p class="font-bold text-slate-500 text-[11px] uppercase mt-1">Sudah makan apel</p>
                        </div>
                    </div>

                    <div
                        class="bg-slate-200 p-4 rounded-2xl border-[3px] border-slate-900 shadow-[4px_4px_0px_#0f172a] flex flex-col gap-3">
                        <div class="flex justify-between items-center">
                            <span class="font-black text-slate-600 text-base md:text-lg whitespace-nowrap">~ MASEN
                                DESHITA</span>
                            <span
                                class="font-black bg-slate-300 border-2 border-slate-900 px-2 py-1 rounded-lg text-slate-600 text-sm">Negatif
                                (-)</span>
                        </div>
                        <div class="bg-white/50 border-2 border-slate-400 p-3 rounded-xl">
                            <p class="font-bold text-slate-700 text-sm">🍎 Ringo o <span
                                    class="text-slate-600 underline decoration-2 underline-offset-2">tabemasen
                                    deshita</span>.
                            </p>
                            <p class="font-bold text-slate-500 text-[11px] uppercase mt-1">Kemarin/Tadi tidak makan</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>