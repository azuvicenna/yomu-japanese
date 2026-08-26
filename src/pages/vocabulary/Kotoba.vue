<script setup lang="ts">
import BentoCard from '@/components/common/card/BentoCard.vue';
import { useLocalized } from '@/composables/useLocalized';
import { useSettings } from '@/composables/useSettings';
import {
    colors, days, directions, months, seasons,
    dayTime, weather, positions, shijigoData
} from '@/data/kotoba';

const { showRomaji, showFurigana } = useSettings()
const { getMeaning } = useLocalized()
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)] grid-flow-dense">

            <BentoCard theme="hero" col-span="md:col-span-2" class="text-white justify-center">
                <span class="bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold mb-2 border border-white/30">
                    VOCABULARY LIST
                </span>
                <div class="flex items-end gap-3 mb-1">
                    <div class="flex gap-1">

                        <div class="flex flex-col items-center">
                            <span v-if="showFurigana"
                                class="text-sm opacity-80 font-bold -mb-0.5 tracking-wide">こと</span>
                            <span class="text-4xl font-black text-white leading-none">言</span>
                        </div>

                        <div class="flex flex-col items-center">
                            <span v-if="showFurigana" class="text-sm opacity-80 font-bold -mb-0.5">ば</span>
                            <span class="text-4xl font-black text-white leading-none">葉</span>
                        </div>

                    </div>

                    <span v-if="showRomaji" class="text-xl font-bold text-white/70 mb-1">
                        (Kotoba)
                    </span>
                </div>
                <p class="font-bold opacity-80 text-sm text-white">Kumpulan kosakata penting sehari-hari.</p>
                <div class="absolute -right-4 -bottom-4 text-8xl opacity-10 font-black rotate-12 text-white">辞書</div>
            </BentoCard>

            <BentoCard theme="youbi" :title="`曜日 ${showRomaji ? '(Youbi)' : ''} - Hari`" icon="📅"
                row-span="md:row-span-2" col-span="md:col-span-1">
                <div class="space-y-2 grow overflow-y-auto pr-1 text-sm mt-2 scrollbar-hide">
                    <div v-for="(d, i) in days" :key="i"
                        class="flex justify-between items-center border-b border-yellow-200 pb-1 last:border-0 group">
                        <div :class="d.special">
                            <div v-if="showFurigana" class="text-[9px] opacity-70 mb-0.5 leading-none">{{ d.furigana }}
                            </div>
                            <div class="font-black text-base leading-none">{{ d.kanji }}</div>
                            <div class="font-bold text-xs uppercase opacity-70 mt-0.5">{{ showRomaji ? d.romaji : '-' }}
                            </div>
                        </div>
                        <div class="font-bold text-slate-500 text-xs">{{ getMeaning(d) }}</div>
                    </div>
                </div>
            </BentoCard>

            <BentoCard theme="season" :title="`季節 ${showRomaji ? '(Kisetsu)' : ''} - Musim`" icon="🍂">
                <div class="grid grid-cols-2 gap-2 mt-auto">
                    <div v-for="s in seasons" :key="s.romaji"
                        :class="[s.bg, 'p-1 rounded-lg border border-opacity-20 border-black text-center flex flex-col justify-center items-center']">
                        <div v-if="showFurigana" class="text-[9px] text-slate-500 mb-0.5">{{ s.furigana }}</div>
                        <div class="text-xl leading-none">{{ s.kanji }}</div>
                        <div :class="[s.color, 'font-bold text-[10px] uppercase mt-0.5']">{{ showRomaji ? s.romaji : '-'
                            }}
                        </div>
                        <div class="text-[9px] text-gray-600 italic capitalize">{{
                            getMeaning(s) }}</div>
                    </div>
                </div>
            </BentoCard>

            <BentoCard theme="iro" :title="`色 ${showRomaji ? '(Iro)' : ''} - Warna`" icon="🎨" col-span="md:col-span-2"
                row-span="md:row-span-2">
                <div class="flex flex-wrap gap-4 justify-around items-center h-full">
                    <div v-for="c in colors" :key="c.name" class="text-center group cursor-pointer">
                        <div class="w-10 h-10 rounded-full border-4 border-slate-800 shadow-sm mx-auto transition-transform group-hover:scale-110"
                            :class="c.color"></div>
                        <div class="mt-2">
                            <p v-if="showFurigana" class="text-[9px] text-slate-400 mb-0.5">{{ c.furigana }}</p>
                            <p class="font-black text-sm text-slate-800 leading-none">{{ c.kanji }}</p>
                        </div>
                        <p class="font-bold text-[10px] text-slate-500 uppercase tracking-tighter mt-1">{{ showRomaji ?
                            c.name : '-' }}</p>
                        <p class="text-[8px] text-slate-400 italic leading-none">{{ getMeaning(c) }}</p>
                    </div>
                </div>
            </BentoCard>

            <BentoCard theme="dir" class="items-center justify-center relative p-1"
                :title="`方向 ${showRomaji ? '(Houkou)' : ''} - Arah`" icon="🧭">
                <div class="grid grid-cols-3 grid-rows-3 gap-1 w-full h-full">
                    <div v-for="(dir, index) in directions" :key="index"
                        class="flex flex-col items-center justify-center">
                        <div v-if="dir.center" class="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm">
                        </div>
                        <template v-else>
                            <span v-if="showFurigana" class="text-[8px] text-slate-500 mb-0.5 leading-none">{{
                                dir.furigana }}</span>

                            <span
                                :class="[(dir.kanji?.length ?? 0) > 1 ? 'text-sm' : 'text-lg', 'font-black text-slate-700 leading-none']">
                                {{ dir.kanji }}
                            </span>
                            <span class="text-[9px] font-bold text-blue-600 uppercase leading-tight mt-0.5">
                                {{ showRomaji ? dir.romaji : '-' }}
                            </span>
                            <span class="text-[7px] text-gray-400 italic leading-none">
                                {{ getMeaning(dir) }}
                            </span>
                        </template>
                    </div>
                </div>
            </BentoCard>

            <BentoCard theme="month" :title="`月 ${showRomaji ? '(Tsuki)' : ''} - Nama Bulan`" icon="📅"
                subTitle="Angka + Gatsu" col-span="md:col-span-2">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    <div v-for="m in months" :key="m.num"
                        class="bg-white px-2 py-1.5 rounded-lg border border-purple-100 flex items-center gap-3">
                        <span class="font-black text-slate-300 text-lg leading-none">{{ m.num }}</span>
                        <div class="flex flex-col grow">
                            <span v-if="showFurigana" class="text-[9px] text-slate-400 -mb-0.5">{{ m.furigana
                                }}</span>
                            <span class="text-xs font-bold text-slate-800 leading-none mb-0.5">{{ m.kanji }}</span>
                            <span v-if="showRomaji" class="text-[9px] font-bold uppercase tracking-tight"
                                :class="m.warn ? 'text-red-500' : 'text-purple-600'">
                                {{ m.romaji }} {{ m.warn ? '⚠️' : '' }}
                            </span>
                        </div>
                        <span class="text-[8px] text-slate-400 italic">{{ getMeaning(m) }}</span>
                    </div>
                </div>
            </BentoCard>

            <BentoCard theme="demo" :title="`指示語 ${showRomaji ? '(Shijigo)' : ''} - Kata Tunjuk`" icon="👉"
                subTitle="Ko-So-A-Do" col-span="md:col-span-2" row-span="md:row-span-2">
                <div class="flex flex-col gap-4 mt-2 h-full overflow-y-auto pr-1 scrollbar-hide pb-2">
                    <div v-for="cat in shijigoData" :key="cat.id" class="flex flex-col gap-2">
                        <!-- Category Header -->
                        <div class="flex items-center gap-2 border-b border-teal-100 pb-1">
                            <span class="text-[10px] font-bold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">{{
                                cat.title.split('.')[0] }}</span>
                            <span class="text-xs font-bold text-slate-600">{{ cat.title.split('. ')[1] }}</span>
                        </div>

                        <!-- Grid Items -->
                        <div class="grid grid-cols-2 gap-2">
                            <div v-for="d in cat.items" :key="d.romaji"
                                class="flex flex-col justify-center px-3 py-1 bg-white border border-slate-200 rounded-lg">
                                <span class="text-base font-black text-slate-800">{{ d.kana }}</span>
                                <div class="flex justify-between items-baseline">
                                    <span v-if="showRomaji" class="text-[10px] font-bold text-teal-600 uppercase">
                                        {{ d.romaji }}
                                    </span>
                                    <span class="text-[8px] text-gray-400 italic">{{ getMeaning(d) }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Example -->
                        <div class="bg-teal-50/50 p-2 rounded-lg border border-teal-100 flex items-center gap-3">
                            <span class="text-xl">{{ cat.example.icon }}</span>
                            <div class="flex flex-col">
                                <span class="text-[11px] font-bold text-slate-700 leading-none mb-1">{{ cat.example.jp
                                    }}</span>
                                <span v-if="showRomaji"
                                    class="text-[9px] text-teal-600 font-medium leading-none mb-0.5">{{
                                    cat.example.romaji }}</span>
                                <span class="text-[9px] text-slate-500 italic leading-none">{{ cat.example.id }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </BentoCard>

            <div class="col-span-1 md:col-span-2 flex flex-col gap-4 h-fit">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <BentoCard theme="time" :title="`時間じかん ${showRomaji ? '(Jikan)' : ''} - Waktu`" icon="⏰">
                        <div class="grid grid-cols-2 gap-2 mt-2">
                            <div v-for="t in dayTime" :key="t.romaji"
                                class="bg-indigo-50 p-2 rounded-lg border border-indigo-100 text-center flex flex-col justify-center items-center">
                                <div class="text-2xl mb-1">{{ t.icon }}</div>
                                <div v-if="showFurigana" class="text-[9px] text-indigo-400 mb-0.5">{{ t.furigana }}
                                </div>
                                <div class="text-lg font-black text-slate-700 leading-none">{{ t.kanji }}</div>
                                <div class="text-[9px] font-bold text-indigo-600 uppercase mt-1">{{ showRomaji ?
                                    t.romaji : '-' }}
                                </div>
                                <div class="text-[8px] text-gray-500 italic">{{ getMeaning(t) }}</div>
                            </div>
                        </div>
                    </BentoCard>

                    <BentoCard theme="weather" :title="`天気てんき ${showRomaji ? '(Tenki)' : ''} - Cuaca`" icon="⛅">
                        <div class="grid grid-cols-2 gap-2 mt-2">
                            <div v-for="w in weather" :key="w.romaji"
                                class="bg-sky-50 p-2 rounded-lg border border-sky-100 text-center flex flex-col justify-center items-center">
                                <div class="text-2xl mb-1">{{ w.icon }}</div>
                                <div v-if="showFurigana" class="text-[9px] text-sky-400 mb-0.5">{{ w.furigana }}</div>
                                <div class="text-lg font-black text-slate-700 leading-none">{{ w.kanji }}</div>
                                <div class="text-[9px] font-bold text-sky-600 uppercase mt-1">{{ showRomaji ? w.romaji :
                                    '-' }}
                                </div>
                                <div class="text-[8px] text-gray-500 italic">{{ getMeaning(w) }}</div>
                            </div>
                        </div>
                    </BentoCard>
                </div>

                <BentoCard theme="dir" :title="`位置いち ${showRomaji ? '(Ichi)' : ''} - Lokasi`" icon="📍">
                    <div class="grid grid-cols-3 gap-2 mt-2">
                        <div v-for="p in positions" :key="p.romaji"
                            class="bg-white border border-slate-100 rounded flex flex-col items-center justify-center p-1 shadow-sm">
                            <span v-if="showFurigana" class="text-[9px] text-slate-400 mb-0.5">{{ p.furigana }}</span>
                            <span class="text-lg font-black text-slate-700 leading-none">{{ p.kanji }}</span>
                            <span class="text-[8px] font-bold text-orange-600 uppercase leading-tight mt-0.5">{{
                                showRomaji ?
                                p.romaji : '-' }}</span>
                            <span class="text-[7px] text-gray-400 italic leading-none">{{ getMeaning(p) }}</span>
                        </div>
                    </div>
                </BentoCard>
            </div>
        </div>
    </div>
</template>