import type { KoutsuuItem } from "../types";

export const koutsuuData: KoutsuuItem[] = [
  {
    id: "tomare",
    icon: "🛑",
    kanji: "止まれ",
    furigana: "とまれ",
    romaji: "tomare",
    meaningId: "Berhenti",
    meaningEn: "Stop",
    meaningJa: "停止",
    type: "regulation"
  },
  {
    id: "kiken",
    icon: "⚠️",
    kanji: "危険",
    furigana: "きけん",
    romaji: "kiken",
    meaningId: "Bahaya",
    meaningEn: "Danger",
    meaningJa: "危ない",
    type: "warning"
  },
  {
    id: "shoukakishita",
    icon: "🚸",
    kanji: "学校、幼稚園、保育所等あり",
    furigana: "がっこう、ようちえん、ほいくしょとうあり",
    romaji: "gakkou, youchien, hoikusho tou ari",
    meaningId: "Kawasan Sekolah / Anak-anak",
    meaningEn: "School Zone",
    meaningJa: "学校や幼稚園が近くにある",
    type: "warning"
  },
  {
    id: "shingouki_ari",
    icon: "🚥",
    kanji: "信号機あり",
    furigana: "しんごうきあり",
    romaji: "shingouki ari",
    meaningId: "Ada Lampu Lalu Lintas",
    meaningEn: "Traffic Lights Ahead",
    meaningJa: "この先に信号機がある",
    type: "warning"
  },
  {
    id: "shitei_houkou",
    icon: "⬆️",
    kanji: "指定方向外進行禁止",
    furigana: "していほうこうがいしんこうきんし",
    romaji: "shitei houkou gai shinkou kinshi",
    meaningId: "Wajib Mengikuti Arah",
    meaningEn: "Must follow the direction",
    meaningJa: "指定された方向以外への進行を禁止する",
    type: "regulation"
  },
  {
    id: "ouda_hokoudou",
    icon: "🚶",
    kanji: "横断歩道",
    furigana: "おうだんほどう",
    romaji: "oudan hodou",
    meaningId: "Tempat Penyeberangan Jalan",
    meaningEn: "Crosswalk",
    meaningJa: "横断歩道がある",
    type: "instruction"
  }
];
