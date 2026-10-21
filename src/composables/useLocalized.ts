import { useI18n } from "vue-i18n";

export function useLocalized() {
  const { locale } = useI18n();

  /**
   * Helper internal untuk memilih teks berdasarkan locale.
   * Prioritas: ID -> JA (jika ada) -> EN (fallback)
   */
  const pickText = (
    item: any,
    idKey: string,
    enKey: string,
    jaKey?: string,
  ) => {
    if (!item) return "";

    // Jika Bahasa Indonesia
    if (locale.value === "id") {
      return item[idKey] || item[enKey] || "";
    }

    // Jika Bahasa Jepang (Opsional, jika nanti fitur ini aktif)
    if (locale.value === "ja" && jaKey) {
      return item[jaKey] || item[enKey] || "";
    }

    // Default: Bahasa Inggris
    return item[enKey] || "";
  };

  // --- 1. Ambil Arti Kata (Meaning) ---
  // Cocok untuk: Verb, Adjective, Vocab, Idiom
  const getMeaning = (data: any) => {
    if (!data) return "";
    // Cek kasus khusus untuk ExtraParticles yang propertinya 'example_meaningId'
    if ("example_meaningId" in data) {
      return pickText(
        data,
        "example_meaningId",
        "example_meaningEn",
        "example_meaningJa",
      );
    }
    const text = pickText(data, "meaningId", "meaningEn", "meaningJa");
    return text || data.meaning || "";
  };

  // --- 2. Ambil Arti Harfiah (Literal) ---
  // Cocok untuk: Idiom / Kanyouku
  const getLiteral = (data: any) => {
    if (!data) return "";
    const text = pickText(data, "literalId", "literalEn", "literalJa");
    return text || data.literal || "";
  };

  // --- 3. Ambil Label/Judul (Label) ---
  // Cocok untuk: Tab Joshi, Kategori
  const getLabel = (data: any) => {
    return pickText(data, "labelId", "labelEn", "labelJa");
  };

  // --- 4. Ambil Fungsi/Penjelasan (Function/Description) ---
  // Cocok untuk: Joshi Function, Extra Particle Desc
  const getFunction = (data: any) => {
    // Cek apakah pakai 'function' atau 'desc'
    if (data && "descId" in data) {
      return pickText(data, "descId", "descEn", "descJa");
    }
    return pickText(data, "functionId", "functionEn", "functionJa");
  };

  // --- 5. Ambil Situasi (Situation) ---
  // Cocok untuk: Aisatsu (Salam)
  const getSituation = (data: any) => {
    return pickText(data, "situationId", "situationEn");
  };

  // --- 6. Ambil Terjemahan Contoh Kalimat (Example) ---
  // Cocok untuk: Joshi Example Object { id: "...", en: "...", ja: "..." }
  const getExampleResult = (exampleData: any) => {
    if (!exampleData) return "";
    // Struktur example: { id: "...", en: "...", ja: "..." }
    if (locale.value === "id") return exampleData.id || exampleData.en || "";
    if (locale.value === "ja") return exampleData.ja || exampleData.en || exampleData.id || "";
    return exampleData.en || exampleData.id || "";
  };

  return {
    locale,
    getMeaning,
    getLiteral,
    getLabel,
    getFunction,
    getSituation,
    getExampleResult,
  };
}
