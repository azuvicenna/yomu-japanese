<script setup lang="ts">
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { idiomsData } from '@/data/kanyouku';

const idiomTabs = [
  { label: "Kanyouku (慣用句)", value: "kanyouku" },
  { label: "Yojijukugo (四字熟語)", value: "yojijukugo" },
];

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref(idiomTabs[0]?.value || 'kanyouku');

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
                    :class="[idiom.theme, 'border-b-[3px] border-slate-900 p-6 flex justify-between items-center relative overflow-hidden']">
                    <div class="absolute -right-4 -bottom-4 text-7xl opacity-20 rotate-12">{{ idiom.icon }}</div>
                    <div class="relative z-10">
                        <h3
                            class="text-3xl font-black text-slate-900 tracking-wider font-japanese drop-shadow-[1px_1px_0px_#fff]">
                            {{ idiom.kanji }}
                        </h3>
                        <p
                            class="font-bold text-slate-800 mt-1 bg-white/60 inline-block px-2 py-0.5 rounded border border-slate-900/20 text-sm">
                            {{ idiom.romaji }}
                        </p>
                    </div>
                    <span
                        class="text-4xl bg-white rounded-full border-[3px] border-slate-900 p-2 shadow-[2px_2px_0px_#0f172a] relative z-10">
                        {{ idiom.icon }}
                    </span>
                </div>

                <div class="p-6 grow flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-start gap-2">
                            <span
                                class="bg-slate-200 text-slate-600 font-black text-[10px] px-2 py-1 rounded border-2 border-slate-900 uppercase tracking-wider mt-0.5 whitespace-nowrap">Arti
                                Harfiah</span>
                            <span class="font-bold text-slate-500 text-sm">{{ idiom.literal }}</span>
                        </div>
                        <div class="flex items-start gap-2">
                            <span
                                class="bg-indigo-200 text-indigo-900 font-black text-[10px] px-2 py-1 rounded border-2 border-slate-900 uppercase tracking-wider mt-0.5 whitespace-nowrap">Makna
                                Asli</span>
                            <span class="font-black text-slate-800 text-lg leading-tight">{{ idiom.meaning }}</span>
                        </div>
                    </div>

                    <hr class="border-t-2 border-dashed border-slate-300 my-2">

                    <div class="bg-indigo-50 p-4 rounded-xl border-2 border-slate-900 relative">
                        <span
                            class="absolute -top-3 left-4 bg-white font-black text-[10px] px-2 py-0.5 border-2 border-slate-900 rounded-md text-slate-600 uppercase">Contoh
                            Kalimat</span>
                        <p class="font-bold text-slate-800 text-sm md:text-base mt-1">
                            {{ idiom.example.jp }}
                        </p>
                        <p class="font-bold text-slate-500 text-[11px] mt-1">
                            "{{ idiom.example.id }}"
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="currentIdioms.length === 0"
            class="text-center py-12 bg-white border-[3px] border-slate-900 rounded-3xl shadow-[6px_6px_0px_#0f172a]">
            <span class="text-5xl block mb-4">🚧</span>
            <h3 class="font-black text-xl text-slate-900 uppercase">Materi Belum Tersedia</h3>
            <p class="font-bold text-slate-500">Materi idiom kategori ini sedang disiapkan.</p>
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