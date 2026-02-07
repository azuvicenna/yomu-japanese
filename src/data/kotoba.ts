export const colors = [
  { name: "Aka", kanji: "赤", mean: "Merah", color: "bg-red-500" },
  { name: "Ao", kanji: "青", mean: "Biru", color: "bg-blue-500" },
  { name: "Midori", kanji: "緑", mean: "Hijau", color: "bg-green-500" },
  { name: "Kiiro", kanji: "黄色", mean: "Kuning", color: "bg-yellow-400" },
  { name: "Kuro", kanji: "黒", mean: "Hitam", color: "bg-black" },
  { name: "Shiro", kanji: "白", mean: "Putih", color: "bg-white" },
  { name: "Pinku", kanji: "桃色", mean: "Merah Muda", color: "bg-pink-400" },
  { name: "Orenji", kanji: "橙色", mean: "Oranye", color: "bg-orange-500" },
  { name: "Murasaki", kanji: "紫", mean: "Ungu", color: "bg-purple-500" },
  { name: "Chairo", kanji: "茶色", mean: "Cokelat", color: "bg-amber-800" },
  { name: "Haiiro", kanji: "灰色", mean: "Abu-abu", color: "bg-gray-400" },
  { name: "Mizuiro", kanji: "水色", mean: "Biru Muda", color: "bg-sky-300" },
  { name: "Kin-iro", kanji: "金色", mean: "Emas", color: "bg-yellow-600" },
  { name: "Gin-iro", kanji: "銀色", mean: "Perak", color: "bg-slate-300" },
  { name: "Kimidori", kanji: "黄緑", mean: "Hijau Muda", color: "bg-lime-400" },
  {
    name: "Kon-iro",
    kanji: "紺色",
    mean: "Biru Dongker",
    color: "bg-indigo-900",
  },
  {
    name: "Hadairo",
    kanji: "肌色",
    mean: "Warna Kulit",
    color: "bg-orange-100",
  },
  { name: "Sumire-iro", kanji: "菫色", mean: "Violet", color: "bg-violet-600" },
];

export const days = [
  { kanji: "月曜日", romaji: "Getsu", mean: "Senin" },
  { kanji: "火曜日", romaji: "Ka", mean: "Selasa" },
  { kanji: "水曜日", romaji: "Sui", mean: "Rabu" },
  { kanji: "木曜日", romaji: "Moku", mean: "Kamis" },
  { kanji: "金曜日", romaji: "Kin", mean: "Jumat" },
  { kanji: "土曜日", romaji: "Do", mean: "Sabtu", special: "text-blue-600" },
  { kanji: "日曜日", romaji: "Nichi", mean: "Minggu", special: "text-red-500" },
];

export const seasons = [
  {
    kanji: "春",
    romaji: "Haru",
    mean: "Semi",
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
  {
    kanji: "夏",
    romaji: "Natsu",
    mean: "Panas",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    kanji: "秋",
    romaji: "Aki",
    mean: "Gugur",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    kanji: "冬",
    romaji: "Fuyu",
    mean: "Dingin",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
];

export const directions = [
  { kanji: "北西", romaji: "Hokusei", mean: "B. Laut" },
  { kanji: "北", romaji: "Kita", mean: "Utara" },
  { kanji: "北東", romaji: "Hokutou", mean: "T. Laut" },
  { kanji: "西", romaji: "Nishi", mean: "Barat" },
  { center: true },
  { kanji: "東", romaji: "Higashi", mean: "Timur" },
  { kanji: "南西", romaji: "Nansei", mean: "B. Daya" },
  { kanji: "南", romaji: "Minami", mean: "Selatan" },
  { kanji: "南東", romaji: "Nantou", mean: "Tenggara" },
];

export const familyMembers = [
  {
    label: "Ayah",
    me: { romaji: "Chichi", kanji: "父" },
    other: { romaji: "Otousan", kanji: "お父さん" },
  },
  {
    label: "Ibu",
    me: { romaji: "Haha", kanji: "母" },
    other: { romaji: "Okaasan", kanji: "お母さん" },
  },
  {
    label: "Kakak (L)",
    me: { romaji: "Ani", kanji: "兄" },
    other: { romaji: "Oniisan", kanji: "お兄さん" },
  },
  {
    label: "Kakak (P)",
    me: { romaji: "Ane", kanji: "姉" },
    other: { romaji: "Oneesan", kanji: "お姉さん" },
  },
  {
    label: "Adik (L)",
    me: { romaji: "Otouto", kanji: "弟" },
    other: { romaji: "Otoutosan", kanji: "弟さん" },
  },
  {
    label: "Adik (P)",
    me: { romaji: "Imouto", kanji: "妹" },
    other: { romaji: "Imoutosan", kanji: "妹さん" },
  },
];

export const months = [
  { num: 1, kanji: "一月", romaji: "Ichigatsu", mean: "Januari" },
  { num: 2, kanji: "二月", romaji: "Nigatsu", mean: "Februari" },
  { num: 3, kanji: "三月", romaji: "Sangatsu", mean: "Maret" },
  { num: 4, kanji: "四月", romaji: "Shigatsu", mean: "April", warn: true },
  { num: 5, kanji: "五月", romaji: "Gogatsu", mean: "Mei" },
  { num: 6, kanji: "六月", romaji: "Rokugatsu", mean: "Juni" },
  { num: 7, kanji: "七月", romaji: "Shichigatsu", mean: "Juli", warn: true },
  { num: 8, kanji: "八月", romaji: "Hachigatsu", mean: "Agustus" },
  { num: 9, kanji: "九月", romaji: "Kugatsu", mean: "September", warn: true },
  { num: 10, kanji: "十月", romaji: "Juugatsu", mean: "Oktober" },
  { num: 11, kanji: "十一月", romaji: "Juuichigatsu", mean: "November" },
  { num: 12, kanji: "十二月", romaji: "Juunigatsu", mean: "Desember" },
];

export const dayTime = [
  { kanji: "朝", romaji: "Asa", mean: "Pagi", icon: "🌅" },
  { kanji: "昼", romaji: "Hiru", mean: "Siang", icon: "☀️" },
  { kanji: "晩", romaji: "Ban", mean: "Malam", icon: "🌙" },
  { kanji: "今", romaji: "Ima", mean: "Sekarang", icon: "⌚" },
];

export const weather = [
  { kanji: "晴れ", romaji: "Hare", mean: "Cerah", icon: "☀️" },
  { kanji: "曇り", romaji: "Kumori", mean: "Berawan", icon: "☁️" },
  { kanji: "雪", romaji: "Yuki", mean: "Salju", icon: "❄️" },
  { kanji: "風", romaji: "Kaze", mean: "Angin", icon: "💨" },
];

export const positions = [
  { kanji: "上", romaji: "Ue", mean: "Atas" },
  { kanji: "下", romaji: "Shita", mean: "Bawah" },
  { kanji: "前", romaji: "Mae", mean: "Depan" },
  { kanji: "後ろ", romaji: "Ushiro", mean: "Belakang" },
  { kanji: "左", romaji: "Hidari", mean: "Kiri" },
  { kanji: "右", romaji: "Migi", mean: "Kanan" },
  { kanji: "中", romaji: "Naka", mean: "Dalam/Tengah" },
  { kanji: "外", romaji: "Soto", mean: "Luar" },
  { kanji: "隣", romaji: "Tonari", mean: "Sebelah/Samping" },
];

export const demonstratives = [
  { kanji: "これ", romaji: "Kore", mean: "Ini (benda)" },
  { kanji: "それ", romaji: "Sore", mean: "Itu (benda)" },
  { kanji: "あれ", romaji: "Are", mean: "Itu jauh (benda)" },
  { kanji: "ここ", romaji: "Koko", mean: "Sini (tempat)" },
  { kanji: "そこ", romaji: "Soko", mean: "Situ (tempat)" },
  { kanji: "あそこ", romaji: "Asoko", mean: "Sana jauh (tempat)" },
  { kanji: "どれ", romaji: "Dore", mean: "Yang mana?" },
  { kanji: "どこ", romaji: "Doko", mean: "Di mana?" },
];

export const elements = [
  {
    kanji: "火",
    romaji: "Hi",
    mean: "Api",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    kanji: "水",
    romaji: "Mizu",
    mean: "Air",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    kanji: "木",
    romaji: "Ki",
    mean: "Kayu/Pohon",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    kanji: "金",
    romaji: "Kane",
    mean: "Logam/Emas",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    kanji: "土",
    romaji: "Tsuchi",
    mean: "Tanah",
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
  {
    kanji: "風",
    romaji: "Kaze",
    mean: "Angin",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    kanji: "雷",
    romaji: "Kaminari",
    mean: "Petir",
    color: "text-yellow-400",
    bg: "bg-yellow-100",
  },
  {
    kanji: "光",
    romaji: "Hikari",
    mean: "Cahaya",
    color: "text-orange-400",
    bg: "bg-orange-50",
  },
];
