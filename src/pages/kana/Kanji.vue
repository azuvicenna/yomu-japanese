<script setup lang="ts">
import { computed, ref } from 'vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import KanjiCard from '@/components/common/card/KanjiCard.vue';
import { useRoute } from 'vue-router';
import { N5, N4, N3, N2, N1 } from '@/data/kanji';

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const kanjiTabs = [
    { label: `N5 (${N5.length})`, value: 'n5' },
    { label: `N4 (${N4.length})`, value: 'n4' },
    { label: `N3 (${N3.length})`, value: 'n3' },
    { label: `N2 (${N2.length})`, value: 'n2' },
    { label: `N1 (${N1.length})`, value: 'n1' },
];

const activeTab = ref('n5');
</script>

<template>
    <div class="max-w-6xl mx-auto px-4">
        <TabSwitcher :tabs="kanjiTabs" v-model="activeTab" :theme="themeName" />

        <div v-show="activeTab === 'n5'" class="animate-fade-in">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <KanjiCard v-for="(item, index) in N5" :key="index" :data="item" :theme="themeName" />
            </div>
        </div>

        <div v-show="activeTab === 'n4'" class="animate-fade-in">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <KanjiCard v-for="(item, index) in N4" :key="index" :data="item" :theme="themeName" />
            </div>
        </div>

        <div v-show="activeTab === 'n3'" class="animate-fade-in">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <KanjiCard v-for="(item, index) in N3" :key="index" :data="item" :theme="themeName" />
            </div>
        </div>

        <div v-show="activeTab === 'n2'" class="animate-fade-in">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <KanjiCard v-for="(item, index) in N2" :key="index" :data="item" :theme="themeName" />
            </div>
        </div>

        <div v-show="activeTab === 'n1'" class="animate-fade-in">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <KanjiCard v-for="(item, index) in N1" :key="index" :data="item" :theme="themeName" />
            </div>
        </div>
    </div>
</template>