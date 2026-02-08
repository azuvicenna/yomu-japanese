import type { AisatsuItem } from "@/types";

// ==========================================
// 1. DAILY GREETINGS (SALAM HARIAN)
// ==========================================
export const DailyGreetings: AisatsuItem[] = [
  {
    kana: "おはようございます",
    romaji: "Ohayou Gozaimasu",
    meaning: "Selamat Pagi (Sopan)",
    align: "left",
    situation: "Formal",
  },
  {
    kana: "おはよう！",
    romaji: "Ohayou!",
    meaning: "Pagi! (Santai ke teman)",
    align: "right",
    situation: "Casual",
  },
  {
    kana: "こんにちは",
    romaji: "Konnichiwa",
    meaning: "Selamat Siang / Halo",
    align: "left",
    situation: "Siang",
  },
  {
    kana: "こんばんは",
    romaji: "Konbanwa",
    meaning: "Selamat Malam",
    align: "right",
    situation: "Malam",
  },
  {
    kana: "おやすみなさい",
    romaji: "Oyasuminasai",
    meaning: "Selamat Tidur / Istirahat",
    align: "right",
    situation: "Tidur",
  },
];

// ==========================================
// 2. PARTING (PERPISAHAN)
// ==========================================
export const PartingGreetings: AisatsuItem[] = [
  {
    kana: "さようなら",
    romaji: "Sayounara",
    meaning: "Selamat tinggal (Waktu lama)",
    align: "left",
    situation: "Formal",
  },
  {
    kana: "またね！",
    romaji: "Mata ne!",
    meaning: "Sampai jumpa lagi!",
    align: "right",
    situation: "Casual",
  },
  {
    kana: "じゃ、また",
    romaji: "Ja, mata",
    meaning: "Dah, sampai nanti",
    align: "right",
    situation: "Casual",
  },
];

// ==========================================
// 3. GRATITUDE & APOLOGY (TERIMA KASIH & MAAF)
// ==========================================
export const GratitudeGreetings: AisatsuItem[] = [
  {
    kana: "ありがとうございます",
    romaji: "Arigatou Gozaimasu",
    meaning: "Terima kasih banyak",
    align: "left",
    situation: "Umum",
  },
  {
    kana: "いいえ、どういたしまして",
    romaji: "Iie, douitashimashite",
    meaning: "Sama-sama / Tidak masalah",
    align: "right",
    situation: "Balasan",
  },
  {
    kana: "すみません",
    romaji: "Sumimasen",
    meaning: "Maaf / Permisi",
    align: "left",
    situation: "Formal",
  },
  {
    kana: "ごめんなさい",
    romaji: "Gomennasai",
    meaning: "Maaf ya",
    align: "right",
    situation: "Casual",
  },
];

// ==========================================
// 4. HOME INTERACTIONS (DI RUMAH)
// ==========================================
export const HomeGreetings: AisatsuItem[] = [
  {
    kana: "行ってきます",
    romaji: "Ittekimasu",
    meaning: "Saya berangkat!",
    align: "left",
    situation: "Pergi",
  },
  {
    kana: "行ってらっしゃい",
    romaji: "Itterasshai",
    meaning: "Hati-hati di jalan",
    align: "right",
    situation: "Melepas",
  },
  {
    kana: "ただいま",
    romaji: "Tadaima",
    meaning: "Saya pulang!",
    align: "left",
    situation: "Pulang",
  },
  {
    kana: "お帰りなさい",
    romaji: "Okaerinasai",
    meaning: "Selamat datang kembali",
    align: "right",
    situation: "Menyambut",
  },
];

// ==========================================
// 5. FIRST MEETING (PERKENALAN)
// ==========================================
export const IntroGreetings: AisatsuItem[] = [
  {
    kana: "初めまして",
    romaji: "Hajimemashite",
    meaning: "Salam kenal (Awal bertemu)",
    align: "left",
    situation: "Awal",
  },
  {
    kana: "よろしくお願いします",
    romaji: "Yoroshiku Onegaishimasu",
    meaning: "Mohon bimbingannya / kerjasamanya",
    align: "right",
    situation: "Akhir",
  },
];
