<script setup lang="ts">
import GrammarBlock from '@/components/common/card/GrammarBlock.vue';
import PatternCard from '@/components/common/card/PatternCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const bunpouTabs = [
    { label: 'Dasar (Basic)', value: 'basic' },
    { label: 'Keinginan (~Tai)', value: 'tai' },
    { label: 'Perintah (~Te)', value: 'te' },
    { label: 'Waktu (Lampau)', value: 'lampau' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref('basic')
</script>

<template>
    <div class="max-w-5xl mx-auto px-4 pb-12">
        <div class="bg-cool-dark text-white rounded-[32px] p-6 md:p-8 mb-10 shadow-card border-4 border-cool-dark">

            <h2 class="text-2xl font-black text-cool-accent mb-6 flex items-center gap-2">
                ⚠️ Aturan Emas: Terbalik!
            </h2>

            <div class="flex flex-col md:flex-row gap-8 items-center justify-center">

                <div class="text-center w-full">
                    <p class="font-bold text-slate-400 mb-2 uppercase text-xs tracking-widest">Bahasa Indonesia
                        (S-P-O)</p>
                    <div class="bg-white/10 p-4 rounded-xl border-2 border-dashed border-slate-500">
                        <div class="flex justify-center flex-wrap gap-2">
                            <GrammarBlock>Saya</GrammarBlock>
                            <GrammarBlock>Makan</GrammarBlock>
                            <GrammarBlock>Nasi</GrammarBlock>
                        </div>
                    </div>
                </div>

                <div class="text-3xl font-black text-cool-accent rotate-90 md:rotate-0">➔</div>

                <div class="text-center w-full">
                    <p class="font-bold text-cool-accent mb-2 uppercase text-xs tracking-widest">Bahasa Jepang
                        (S-O-P)</p>
                    <div class="bg-white p-4 rounded-xl border-4 border-cool-accent text-cool-dark">
                        <div class="flex justify-center flex-wrap gap-1 items-center">
                            <GrammarBlock type="noun">Watashi</GrammarBlock>
                            <GrammarBlock type="particle">wa</GrammarBlock>
                            <GrammarBlock type="noun">Gohan</GrammarBlock>
                            <GrammarBlock type="particle">o</GrammarBlock>
                            <GrammarBlock type="verb">Tabemasu</GrammarBlock>
                        </div>
                        <p class="mt-2 font-bold text-sm">(Saya - Nasi - Makan)</p>
                    </div>
                </div>

            </div>
        </div>

        <TabSwitcher :tabs="bunpouTabs" v-model="activeTab" :theme="themeName" />

        <div v-show="activeTab === 'basic'" class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">

            <PatternCard title="A adalah B (Identitas)" badge="Pola 1">
                <div class="bg-slate-50 p-4 rounded-xl border-2 border-slate-200 mb-4 text-center">
                    <div class="flex flex-wrap justify-center gap-2">
                        <GrammarBlock type="noun">A (Subjek)</GrammarBlock>
                        <GrammarBlock type="particle">wa</GrammarBlock>
                        <GrammarBlock type="noun">B (Ket)</GrammarBlock>
                        <GrammarBlock type="desu">desu</GrammarBlock>
                    </div>
                </div>

                <p class="font-bold text-sm text-slate-600 mb-2">Contoh:</p>
                <div class="text-sm">
                    <span class="text-blue-600 font-bold">Watashi</span>
                    <span class="text-green-600 font-bold mx-1">wa</span>
                    <span class="text-blue-600 font-bold">Gakusei</span>
                    <span class="bg-yellow-100 text-yellow-800 px-1 rounded font-bold mx-1">desu</span>
                    <p class="text-xs text-slate-400 mt-1 italic">"Saya adalah pelajar."</p>
                </div>
            </PatternCard>

            <PatternCard title="Apakah ... ? (Tanya)" badge="Pola 2">
                <div class="bg-slate-50 p-4 rounded-xl border-2 border-slate-200 mb-4 text-center">
                    <div class="flex flex-wrap justify-center gap-2 items-center">
                        <GrammarBlock type="text">[Kalimat]</GrammarBlock>
                        <GrammarBlock type="desu">desu</GrammarBlock>
                        <GrammarBlock type="highlight">ka</GrammarBlock>
                        <span class="text-2xl font-black text-pink-500 ml-1">?</span>
                    </div>
                </div>

                <p class="font-bold text-sm text-slate-600 mb-2">Contoh:</p>
                <div class="text-sm">
                    <span class="text-blue-600 font-bold">Anata</span>
                    <span class="text-green-600 font-bold mx-1">wa</span>
                    <span class="text-blue-600 font-bold">Sensei</span>
                    <span class="bg-yellow-100 text-yellow-800 px-1 rounded font-bold mx-1">desu</span>
                    <span class="text-pink-500 font-bold">ka?</span>
                    <p class="text-xs text-slate-400 mt-1 italic">"Apakah kamu guru?"</p>
                </div>
            </PatternCard>

        </div>

        <div v-show="activeTab === 'tai'">
            <div
                class="col-span-full bg-yellow-50 border-2 border-yellow-400 p-4 rounded-2xl flex gap-4 items-center mb-5">
                <span class="text-3xl">💡</span>
                <div>
                    <h4 class="font-bold text-yellow-800">Rumus Ubah:</h4>
                    <p class="text-sm text-yellow-700">Hapus 'masu', ganti dengan 'tai desu'.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                <PatternCard title="Ingin Melakukan (Tai)" badge="Rumus">
                    <div class="bg-pink-50 p-4 rounded-xl border-2 border-pink-200 mb-4 text-center">
                        <div class="flex flex-wrap justify-center gap-2 items-center">
                            <GrammarBlock type="verb">Kata Kerja</GrammarBlock>
                            <span class="font-black text-slate-300 mx-1">+</span>
                            <GrammarBlock type="highlight">tai desu</GrammarBlock>
                        </div>
                    </div>

                    <div class="space-y-3 text-sm">
                        <div class="flex justify-between border-b pb-2">
                            <span class="text-slate-500">Tabe<s class="text-red-300">masu</s></span>
                            <span class="font-bold text-pink-600">Tabetai desu</span>
                        </div>
                        <div class="flex justify-between border-b pb-2">
                            <span class="text-slate-500">Iki<s class="text-red-300">masu</s></span>
                            <span class="font-bold text-pink-600">Ikitai desu</span>
                        </div>
                        <p class="text-xs text-slate-400 italic mt-2">*Hapus 'masu', ganti 'tai desu'</p>
                    </div>
                </PatternCard>
            </div>
        </div>

        <div v-show="activeTab === 'te'" class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <PatternCard title="Meminta Tolong (Sopan)" badge="Request">
                <div class="bg-green-50 p-4 rounded-xl border-2 border-green-200 mb-4 text-center">
                    <div class="flex flex-wrap justify-center gap-2 items-center">
                        <GrammarBlock type="verb">Bentuk-Te</GrammarBlock>
                        <span class="font-black text-slate-300 mx-1">+</span>
                        <GrammarBlock type="highlight" class="bg-green-500">kudasai</GrammarBlock>
                    </div>
                </div>

                <div class="space-y-3 text-sm">
                    <div class="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p class="font-bold text-slate-700">Tabete <span class="text-green-600">kudasai</span></p>
                        <p class="text-xs text-slate-400">Tolong makan</p>
                    </div>
                    <div class="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p class="font-bold text-slate-700">Mite <span class="text-green-600">kudasai</span></p>
                        <p class="text-xs text-slate-400">Tolong lihat</p>
                    </div>
                </div>
            </PatternCard>
        </div>

        <div v-show="activeTab === 'lampau'" class="grid grid-cols-1 gap-6 animate-fade-in">
            <PatternCard title="Mesin Waktu (Tenses)" badge="Waktu">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div class="text-center p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                        <h4 class="font-black text-blue-600 mb-2">Sekarang / Masa Depan</h4>
                        <div class="space-y-2">
                            <div class="bg-white p-2 rounded-lg shadow-sm">
                                <span class="font-bold text-slate-700">~ MASU</span>
                                <p class="text-xs text-slate-400">(Positif)</p>
                            </div>
                            <div class="bg-white p-2 rounded-lg shadow-sm">
                                <span class="font-bold text-slate-700">~ MASEN</span>
                                <p class="text-xs text-slate-400">(Negatif)</p>
                            </div>
                        </div>
                    </div>

                    <div class="text-center p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
                        <h4 class="font-black text-orange-600 mb-2">Masa Lampau (Sudah)</h4>
                        <div class="space-y-2">
                            <div class="bg-white p-2 rounded-lg shadow-sm">
                                <span class="font-bold text-slate-700">~ MASHITA</span>
                                <p class="text-xs text-slate-400">(Positif Lampau)</p>
                            </div>
                            <div class="bg-white p-2 rounded-lg shadow-sm">
                                <span class="font-bold text-slate-700">~ MASEN DESHITA</span>
                                <p class="text-xs text-slate-400">(Negatif Lampau)</p>
                            </div>
                        </div>
                    </div>

                </div>
            </PatternCard>
        </div>

    </div>
</template>