import { ParticleData } from "@/types";

export const japaneseParticles: ParticleData[] = [
  {
    kana: "は",
    romaji: "wa",
    functions: [
      {
        title: "Penanda Topik Utama",
        description:
          "Berfungsi memberitahu lawan bicara apa yang sedang dibahas.",
        example: {
          jp: "私はスペシャルウィークが好きです",
          ro: "Watashi wa Special Week ga suki desu",
          id: "Saya suka Special Week. (Topik utamanya adalah 'Saya').",
        },
      },
      {
        title: "Menunjukkan Kontras atau Perbandingan",
        description:
          "Bisa dipakai kalau Bos mau membandingkan dua hal yang berbeda atau berlawanan.",
        example: {
          jp: "コーヒーは飲みますが、お茶は飲みません",
          ro: "Koohii wa nomimasu ga, ocha wa nomimasen",
          id: "Kopi (sih) saya minum, tapi teh (saya) nggak minum.",
        },
      },
      {
        title: "Menekankan Penolakan atau Kalimat Negatif",
        description:
          "Sering dipakai di kalimat negatif biar kedengarannya lebih natural dan memberikan sedikit penekanan kalau hal itu tidak dilakukan.",
        example: {
          jp: "今日は行きません",
          ro: "Kyou wa ikimasen",
          id: "Kalau hari ini (sih), saya nggak pergi.",
        },
      },
      {
        title: "Memberi Penekanan pada Waktu atau Tempat",
        description:
          "Bisa digabung dengan partikel lain (seperti に/ni atau で/de) buat ngasih sorotan khusus ke sebuah tempat atau waktu.",
        example: {
          jp: "日本には行きたいです",
          ro: "Nihon ni wa ikitai desu",
          id: "Kalau ke Jepang (sih), saya mau pergi.",
        },
      },
    ],
  },
  {
    kana: "を",
    romaji: "o",
    functions: [
      {
        title: "Menandai Objek Langsung (Paling Umum)",
        description:
          "Menunjuk benda yang langsung dikenai aksi dari sebuah kata kerja aktif.",
        example: {
          jp: "映画を見ます",
          ro: "Eiga o mimasu",
          id: "Menonton film. (Film adalah objek yang ditonton).",
        },
      },
      {
        title: "Menunjukkan Tempat yang Dilewati atau Dilintasi",
        description:
          "Dipakai bersama kata kerja yang berhubungan dengan pergerakan (berjalan, terbang, menyeberang, berlari) untuk menandai area pergerakan tersebut.",
        example: {
          jp: "公園を散歩します",
          ro: "Kouen o sanposhimasu",
          id: "Jalan-jalan di taman.",
        },
      },
      {
        title: "Menandai Titik Keberangkatan atau Tempat Keluar",
        description:
          "Wajib dipakai pas Bos mau menjelaskan aksi meninggalkan suatu tempat, seperti turun dari kendaraan, keluar dari ruangan, atau lulus sekolah.",
        example: {
          jp: "電車を降ります",
          ro: "Densha o orimasu",
          id: "Turun dari kereta.",
        },
      },
      {
        title: "Menyatakan Profesi atau Peran",
        description:
          "Biasanya digabung dengan kata kerja します (shimasu) untuk memberitahu pekerjaan atau posisi yang sedang dijalani.",
        example: {
          jp: "先生をしています",
          ro: "Sensei o shite imasu",
          id: "Bekerja sebagai guru.",
        },
      },
    ],
  },
  {
    kana: "も",
    romaji: "mo",
    functions: [
      {
        title: "Menyatakan Kesamaan ('Juga')",
        description:
          "Dipakai kalau subjek, objek, atau hal yang dibahas punya kondisi yang sama dengan apa yang baru saja disebutkan.",
        example: {
          jp: "田中さんは学生です。私も学生です",
          ro: "Tanaka-san wa gakusei desu. Watashi mo gakusei desu",
          id: "Tanaka adalah mahasiswa. Saya juga mahasiswa.",
        },
      },
      {
        title: "Menggabungkan Dua Hal ('Baik... maupun...')",
        description:
          "Kalau Bos menyebutkan dua kata benda dan di belakang masing-masing ditambah partikel も, fungsinya jadi merangkum kedua hal tersebut.",
        example: {
          jp: "英語も日本語も勉強します",
          ro: "Eigo mo nihongo mo benkyou shimasu",
          id: "Saya belajar baik bahasa Inggris maupun bahasa Jepang.",
        },
      },
      {
        title: "Penyangkalan Total ('Pun tidak...')",
        description:
          "Kalau partikel も digabung sama kata tanya (seperti apa, siapa, ke mana) lalu ditutup dengan kata kerja bentuk negatif, artinya jadi menolak segalanya.",
        example: {
          jp: "朝から何も食べていません",
          ro: "Asa kara nani mo tabete imasen",
          id: "Dari pagi tidak makan apa pun.",
        },
      },
      {
        title: "Menekankan Jumlah yang Banyak ('Sampai...')",
        description:
          "Diselipkan tepat setelah kata bantu bilangan buat ngasih kesan terkejut atau menekankan kalau jumlah/waktu tersebut terhitung banyak.",
        example: {
          jp: "昨日、コーヒーを５杯も飲みました",
          ro: "Kinou, koohii o gohai mo nomimashita",
          id: "Kemarin, saya minum sampai 5 cangkir kopi.",
        },
      },
    ],
  },
  {
    kana: "に",
    romaji: "ni",
    functions: [
      {
        title: "Menunjukkan Waktu Spesifik",
        description:
          "Dipakai di belakang keterangan waktu pasti yang biasanya ada angkanya (jam, tanggal, bulan) atau nama hari.",
        example: {
          jp: "6時に起きます",
          ro: "Roku-ji ni okimasu",
          id: "Bangun pada jam 6.",
        },
      },
      {
        title: "Menunjukkan Lokasi Keberadaan (Statis)",
        description:
          "Digabungkan dengan kata kerja あります (arimasu) atau います (imasu) untuk memberitahu letak atau posisi sesuatu benda berdiam.",
        example: {
          jp: "机の上にパソコンがあります",
          ro: "Tsukue no ue ni pasokon ga arimasu",
          id: "Di atas meja ada laptop.",
        },
      },
      {
        title: "Menandai Arah atau Tempat Tujuan",
        description:
          "Kalau Bos pakai kata kerja perpindahan (pergi, datang, pulang), partikel ini menandakan letak akhir dari perpindahan tersebut.",
        example: {
          jp: "日本に行きます",
          ro: "Nihon ni ikimasu",
          id: "Pergi ke Jepang.",
        },
      },
      {
        title: "Menunjukkan Target atau Penerima Aksi",
        description:
          "Dipakai saat mengarahkan suatu tindakan ke orang lain, seperti memberikan barang, menelepon, atau mengajarkan sesuatu.",
        example: {
          jp: "友達に電話をかけます",
          ro: "Tomodachi ni denwa o kakemasu",
          id: "Menelepon teman.",
        },
      },
      {
        title: "Menyatakan Tujuan Melakukan Sesuatu",
        description:
          "Dipakai bersama kata kerja perpindahan untuk menjelaskan tujuan pergi ke suatu tempat. Caranya dengan mengambil kata kerja bentuk masu (masu dicoret) lalu ditambah ni.",
        example: {
          jp: "寿司を食べに行きます",
          ro: "Sushi o tabe ni ikimasu",
          id: "Pergi untuk makan sushi.",
        },
      },
    ],
  },
  {
    kana: "で",
    romaji: "de",
    functions: [
      {
        title: "Menunjukkan Cara atau Alat ('Dengan')",
        description:
          "Dipakai untuk ngasih tau alat, sarana transportasi, atau bahkan bahasa yang digunakan untuk melakukan sesuatu.",
        example: {
          jp: "バスで行きます",
          ro: "Basu de ikimasu",
          id: "Pergi dengan bus.",
        },
      },
      {
        title: "Menunjukkan Tempat Terjadinya Aksi ('Di')",
        description:
          "Dipakai kalau ada aktivitas atau kegiatan yang aktif dilakukan di tempat tersebut, berbeda dengan に yang hanya untuk benda diam.",
        example: {
          jp: "学校で勉強します",
          ro: "Gakkou de benkyou shimasu",
          id: "Belajar di sekolah.",
        },
      },
      {
        title: "Menunjukkan Alasan atau Penyebab ('Karena')",
        description:
          "Dipakai buat menjelaskan alasan kenapa suatu kondisi terjadi, sering merujuk pada penyakit, bencana alam, atau kecelakaan.",
        example: {
          jp: "風邪で学校を休みます",
          ro: "Kaze de gakkou o yasumimasu",
          id: "Libur sekolah karena flu.",
        },
      },
      {
        title: "Menunjukkan Bahan Dasar ('Dari')",
        description:
          "Dipakai menjelaskan sebuah benda dibuat dari bahan apa, terutama jika bahan pembuatnya masih jelas terlihat wujud aslinya.",
        example: {
          jp: "木で机を作ります",
          ro: "Ki de tsukue o tsukurimasu",
          id: "Membuat meja dari kayu.",
        },
      },
      {
        title: "Menunjukkan Batas Waktu atau Jumlah Harga",
        description:
          "Digunakan untuk ngasih tau batas waktu yang dibutuhkan sampai sebuah aksi selesai, atau total harga dari suatu barang.",
        example: {
          jp: "1時間で終わります",
          ro: "Ichi-jikan de owarimasu",
          id: "Selesai dalam 1 jam.",
        },
      },
    ],
  },
  {
    kana: "へ",
    romaji: "e",
    functions: [
      {
        title: "Menunjukkan Arah Pergerakan ('Ke / Menuju')",
        description:
          "Menunjukkan arah tujuan Bos pergi, lebih menekankan pada arah perjalanannya dibanding titik akhirnya.",
        example: {
          jp: "日本へ行きたい",
          ro: "Nihon e ikitai",
          id: "Ingin pergi ke Jepang.",
        },
      },
      {
        title: "Menunjukkan Penerima atau Tujuan Tindakan ('Kepada / Untuk')",
        description:
          "Dipakai buat ngasih tau ke siapa sebuah pesan, barang, atau tindakan ditujukan, sering ditemukan di bagian awal surat atau email.",
        example: {
          jp: "友達へプレゼントを贈ります",
          ro: "Tomodachi e purezento o okurimasu",
          id: "Mengirim hadiah untuk/kepada teman.",
        },
      },
      {
        title: "Digabung dengan Partikel 'No' untuk Menjelaskan Kata Benda",
        description:
          "Menggabungkan partikel へ dengan の (no) untuk menerangkan kata benda yang memiliki arah tujuan ke suatu tempat.",
        example: {
          jp: "東京へのバス",
          ro: "Toukyou e no basu",
          id: "Bus (yang menuju) ke Tokyo.",
        },
      },
    ],
  },
  {
    kana: "の",
    romaji: "no",
    functions: [
      {
        title: "Menyatakan Kepemilikan ('Milik')",
        description:
          "Menunjukkan kalau benda tersebut adalah milik seseorang, instansi, atau sesuatu.",
        example: {
          jp: "私の本です",
          ro: "Watashi no hon desu",
          id: "Buku milik saya.",
        },
      },
      {
        title: "Menjelaskan Kata Benda (Kategori atau Asal)",
        description:
          "Kata benda pertama berfungsi memberikan keterangan lebih detail tentang kata benda kedua, seperti jenis, bidang, atau asalnya.",
        example: {
          jp: "日本語の先生",
          ro: "Nihongo no sensei",
          id: "Guru bahasa Jepang.",
        },
      },
      {
        title: "Menunjukkan Letak atau Posisi",
        description:
          "Selalu digunakan untuk menggabungkan benda dengan kata penunjuk lokasi (atas, bawah, depan, belakang, dalam).",
        example: {
          jp: "机の上",
          ro: "Tsukue no ue",
          id: "Atas meja.",
        },
      },
      {
        title: "Mengubah Kata Kerja Menjadi Kata Benda (Nominalisasi)",
        description:
          "Berguna untuk menjadikan suatu kegiatan (kata kerja) sebagai subjek atau objek yang sedang dibahas.",
        example: {
          jp: "アニメを見るのが好きです",
          ro: "Anime o miru no ga suki desu",
          id: "Saya suka (kegiatan) menonton anime.",
        },
      },
      {
        title: "Penanda Pertanyaan Santai (Informal)",
        description:
          "Jika diletakkan di akhir kalimat dan diucapkan dengan nada meninggi, fungsinya menjadi kata tanya pengganti partikel か (ka).",
        example: {
          jp: "どこへ行くの？",
          ro: "Doko e iku no?",
          id: "Mau pergi ke mana?",
        },
      },
    ],
  },
  {
    kana: "と",
    romaji: "to",
    functions: [
      {
        title: "Menggabungkan Kata Benda Secara Lengkap ('Dan')",
        description:
          "Mengikat semua benda atau subjek yang disebutkan dalam satu daftar penuh tanpa ada yang tertinggal.",
        example: {
          jp: "猫と犬",
          ro: "Neko to inu",
          id: "Kucing dan anjing.",
        },
      },
      {
        title: "Menyatakan Keterlibatan Orang Lain ('Bersama / Dengan')",
        description:
          "Dipakai buat ngasih tau dengan siapa suatu aktivitas atau pekerjaan dilakukan.",
        example: {
          jp: "友達と映画を見ます",
          ro: "Tomodachi to eiga o mimasu",
          id: "Menonton film bersama teman.",
        },
      },
      {
        title: "Mengutip Perkataan atau Pemikiran ('Bahwa')",
        description:
          "Membungkus kutipan langsung maupun tidak langsung, biasanya nempel sebelum kata kerja seperti 言います (berkata) atau 思います (berpikir).",
        example: {
          jp: "明日雨が降ると思います",
          ro: "Ashita ame ga furu to omoimasu",
          id: "Saya rasa bahwa besok akan hujan.",
        },
      },
      {
        title: "Menyatakan Syarat yang Hasilnya Pasti ('Kalau / Jika')",
        description:
          "Menjelaskan sebab-akibat yang natural dan pasti terjadi, sering dipakai untuk petunjuk arah atau fenomena alam.",
        example: {
          jp: "このボタンを押すと、水が出ます",
          ro: "Kono botan o osu to, mizu ga demasu",
          id: "Kalau menekan tombol ini, airnya akan keluar.",
        },
      },
    ],
  },
  {
    kana: "か",
    romaji: "ka",
    functions: [
      {
        title: "Penanda Pertanyaan di Akhir Kalimat ('?')",
        description:
          "Diletakkan di paling belakang kalimat, langsung mengubah pernyataan menjadi pertanyaan.",
        example: {
          jp: "元気ですか",
          ro: "Genki desu ka",
          id: "Apa kabar?",
        },
      },
      {
        title: "Menunjukkan Pilihan ('Atau')",
        description:
          "Diselipkan di antara dua kata benda untuk memberikan opsi atau pilihan.",
        example: {
          jp: "お茶かコーヒーを飲みます",
          ro: "Ocha ka koohii o nomimasu",
          id: "Minum teh atau kopi.",
        },
      },
      {
        title: "Menyatakan Sesuatu yang Tidak Spesifik",
        description:
          "Kalau ditempel langsung setelah kata tanya, maknanya berubah jadi hal yang tidak menentu.",
        example: {
          jp: "誰か来ました",
          ro: "Dareka kimashita",
          id: "Seseorang telah datang.",
        },
      },
      {
        title: "Menyisipkan Pertanyaan dalam Kalimat ('Apakah')",
        description:
          "Digabung dengan kata どうか (dou ka) untuk menyatakan keraguan atau ketidaktahuan atas suatu kondisi iya atau tidak.",
        example: {
          jp: "明日雨が降るかどうか分かりません",
          ro: "Ashita ame ga furu ka dou ka wakarimasen",
          id: "Saya tidak tahu apakah besok akan hujan atau tidak.",
        },
      },
    ],
  },
  {
    kana: "が",
    romaji: "ga",
    functions: [
      {
        title: "Menandai Subjek dan Fenomena Alam",
        description:
          "Dipakai untuk mendampingi kata kerja intransitif atau menjelaskan keadaan alam yang terjadi apa adanya.",
        example: {
          jp: "雨が降っています",
          ro: "Ame ga futte imasu",
          id: "Hujan turun.",
        },
      },
      {
        title: "Memberi Penekanan pada Subjek ('Yang...')",
        description:
          "Menegaskan siapa pelaku utamanya, fokus ditaruh di subjek tersebut, bukan di perbuatannya.",
        example: {
          jp: "私が行きます",
          ro: "Watashi ga ikimasu",
          id: "Saya yang akan pergi.",
        },
      },
      {
        title: "Menandai Objek untuk Kondisi Khusus",
        description:
          "Mendampingi kata yang menyatakan kesukaan, kemampuan, atau keinginan (seperti suka, mengerti, pintar, ingin).",
        example: {
          jp: "日本語が分かります",
          ro: "Nihongo ga wakarimasu",
          id: "Mengerti bahasa Jepang.",
        },
      },
      {
        title: "Berfungsi Sebagai Kata Sambung ('Tetapi / Tapi')",
        description:
          "Diletakkan setelah predikat di tengah kalimat untuk menghubungkan dua kalimat yang saling bertentangan.",
        example: {
          jp: "高いですが、買いたいです",
          ro: "Takai desu ga, kaitai desu",
          id: "Mahal, tetapi ingin beli.",
        },
      },
      {
        title: "Dipasangkan dengan Kata Tanya di Awal Subjek",
        description:
          "Dipakai wajib ketika bertanya tentang subjek yang belum diketahui.",
        example: {
          jp: "誰が来ますか",
          ro: "Dare ga kimasu ka",
          id: "Siapa yang akan datang?",
        },
      },
    ],
  },
  {
    kana: "や",
    romaji: "ya",
    functions: [
      {
        title: "Menyebutkan Sebagian Benda ('Dan... dsb')",
        description:
          "Memberikan satu atau dua barang sebagai perwakilan dari sekumpulan barang lainnya.",
        example: {
          jp: "パンや牛乳を買いました",
          ro: "Pan ya gyuunyuu o kaimashita",
          id: "Saya beli roti dan susu (cuma contoh barang).",
        },
      },
      {
        title: "Dikombinasikan dengan Nado ('Dan lain-lain')",
        description:
          "Dipasangkan dengan kata など (nado) di akhir daftar biar jelas barang yang disebut hanya sebagian contoh.",
        example: {
          jp: "机の上に本やペンなどがあります",
          ro: "Tsukue no ue ni hon ya pen nado ga arimasu",
          id: "Di atas meja ada buku, pulpen, dan lain-lain.",
        },
      },
      {
        title: "Merangkai Lebih dari Dua Benda",
        description:
          "Bisa dipakai berulang kali di antara kata benda untuk ngasih contoh yang lumayan banyak dalam satu kalimat.",
        example: {
          jp: "動物園に猫や犬や鳥がいます",
          ro: "Doubutsuen ni neko ya inu ya tori ga imasu",
          id: "Di kebun binatang ada kucing, anjing, burung, dan sebagainya.",
        },
      },
    ],
  },
  {
    kana: "ね",
    romaji: "ne",
    functions: [
      {
        title: "Mencari Persetujuan ('Ya?' / 'Kan?')",
        description:
          "Dipakai saat berasumsi bahwa lawan bicara memiliki pendapat atau perasaan yang sama tentang suatu hal.",
        example: {
          jp: "おいしいですね",
          ro: "Oishii desu ne",
          id: "Enak ya?",
        },
      },
      {
        title: "Memastikan atau Mengonfirmasi Informasi ('Benar kan?')",
        description:
          "Mengecek ulang sebuah fakta atau jadwal supaya tidak terjadi salah paham.",
        example: {
          jp: "会議は3時からですね",
          ro: "Kaigi wa san-ji kara desu ne",
          id: "Rapatnya mulai jam 3, kan?",
        },
      },
      {
        title: "Memperhalus Pernyataan atau Ajakan",
        description:
          "Melembutkan nada bicara biar kedengarannya lebih ramah, akrab, dan tidak kaku.",
        example: {
          jp: "じゃあ、また明日ね",
          ro: "Jaa, mata ashita ne",
          id: "Sampai jumpa besok ya.",
        },
      },
      {
        title: "Menunjukkan Empati atau Simpati",
        description:
          "Dipakai saat merespons curhatan atau situasi orang lain untuk menunjukkan bahwa Bos mengerti perasaan mereka.",
        example: {
          jp: "それは大変ですね",
          ro: "Sore wa taihen desu ne",
          id: "Wah, itu pasti berat/merepotkan ya.",
        },
      },
    ],
  },
  {
    kana: "よ",
    romaji: "yo",
    functions: [
      {
        title: "Menyampaikan Informasi Baru ('Lho!')",
        description:
          "Dipakai saat ngasih tau sesuatu yang Bos rasa lawan bicara belum mengetahuinya.",
        example: {
          jp: "暑いですよ",
          ro: "Atsui desu yo",
          id: "Panas lho!",
        },
      },
      {
        title: "Memberikan Peringatan atau Teguran",
        description:
          "Ngingetin lawan bicara biar mereka lebih waspada atau memperhatikan sesuatu di sekitarnya.",
        example: {
          jp: "危ないですよ",
          ro: "Abunai desu yo",
          id: "Bahaya lho!",
        },
      },
      {
        title: "Meyakinkan Pendapat atau Meluruskan Fakta",
        description:
          "Meyakinkan seseorang atas opini Bos, atau memperbaiki pemahaman mereka yang keliru tanpa terkesan marah.",
        example: {
          jp: "その映画は面白くないですよ",
          ro: "Sono eiga wa omoshirokunai desu yo",
          id: "Film itu nggak seru lho.",
        },
      },
      {
        title: "Dikombinasikan dengan Partikel 'Ne' (よね)",
        description:
          "Dipakai buat mencari persetujuan tentang suatu fakta yang Bos yakin lawan bicara juga sudah tahu.",
        example: {
          jp: "明日は休みですよね",
          ro: "Ashita wa yasumi desu yo ne",
          id: "Besok libur kan ya?",
        },
      },
    ],
  },
];

export const extraParticles: ParticleData[] = [
  // Partikel Dasar & Batasan
  {
    kana: "から",
    romaji: "kara",
    functions: [
      {
        title: "Menunjukkan aksi \"Setelah\"",
        description: "Menunjukkan aksi \"Setelah\" (pola ~te kara).",
        example: {
          jp: "ご飯を食べてから、寝る。",
          ro: "Gohan o tabete kara, neru",
          id: "Tidur setelah makan nasi."
        }
      }
    ]
  },
  {
    kana: "まで",
    romaji: "made",
    functions: [
      {
        title: "Menunjukkan tingkat yang ekstrem",
        description: "Menunjukkan tingkat yang ekstrem (\"Bahkan sampai...\").",
        example: {
          jp: "君まで僕を疑うの？",
          ro: "Kimi made boku o utagau no?",
          id: "Bahkan kamu mencurigaiku?"
        }
      }
    ]
  },
  {
    kana: "だけ",
    romaji: "dake",
    functions: [
      {
        title: "Menekankan \"Semaksimal mungkin\"",
        description: "Menekankan \"Semaksimal mungkin / Sebisa mungkin\".",
        example: {
          jp: "できるだけ早く来て。",
          ro: "Dekiru dake hayaku kite",
          id: "Datanglah secepat mungkin."
        }
      }
    ]
  },
  {
    kana: "しか",
    romaji: "shika",
    functions: [
      {
        title: "Menunjukkan paksaan \"Tidak ada pilihan lain\"",
        description: "Menunjukkan paksaan \"Tidak ada pilihan lain\" (pola ~ru shika nai).",
        example: {
          jp: "やるしかない！",
          ro: "Yaru shika nai!",
          id: "Hanya bisa / Harus melakukannya!"
        }
      }
    ]
  },
  {
    kana: "のみ",
    romaji: "nomi",
    functions: [
      {
        title: "Syarat mutlak dan kaku",
        description: "Syarat mutlak dan kaku di pengumuman resmi.",
        example: {
          jp: "経験者のみ歓迎。",
          ro: "Keikensha nomi kangei",
          id: "Hanya menerima pelamar berpengalaman."
        }
      }
    ]
  },

  // Partikel Perbandingan & Tingkat
  {
    kana: "より",
    romaji: "yori",
    functions: [
      {
        title: "Menunjukkan \"Dari\"",
        description: "Menunjukkan \"Dari\" (titik awal waktu/tempat) versi sangat formal.",
        example: {
          jp: "午後3時より始めます。",
          ro: "Gogo san-ji yori hajimemasu",
          id: "Dimulai dari jam 3 sore."
        }
      }
    ]
  },
  {
    kana: "ぐらい",
    romaji: "gurai",
    functions: [
      {
        title: "Menunjukkan standar minimum",
        description: "Menunjukkan standar minimum atau \"Setidaknya\".",
        example: {
          jp: "挨拶ぐらいしてよ。",
          ro: "Aisatsu gurai shite yo",
          id: "Setidaknya menyapalah kek."
        }
      }
    ]
  },
  {
    kana: "など",
    romaji: "nado",
    functions: [
      {
        title: "Merendahkan diri sendiri",
        description: "Merendahkan diri sendiri saat ngobrol santai.",
        example: {
          jp: "私など、まだまだです。",
          ro: "Watashi nado, mada mada desu",
          id: "Orang sepertiku ini masih belum ada apa-apanya."
        }
      }
    ]
  },
  {
    kana: "ばかり",
    romaji: "bakari",
    functions: [
      {
        title: "Menunjukkan aksi \"Baru saja selesai\"",
        description: "Menunjukkan aksi \"Baru saja selesai\" (pola ~ta bakari).",
        example: {
          jp: "今、着いたばかりです。",
          ro: "Ima, tsuita bakari desu",
          id: "Saya baru saja tiba."
        }
      }
    ]
  },

  // Partikel Penegas & Kondisi
  {
    kana: "でも",
    romaji: "demo",
    functions: [
      {
        title: "Bermakna \"Meskipun / Walaupun\"",
        description: "Bermakna \"Meskipun / Walaupun\" (digabung kata benda/sifat).",
        example: {
          jp: "雨でも行く。",
          ro: "Ame demo iku",
          id: "Meskipun hujan, tetap pergi."
        }
      }
    ]
  },
  {
    kana: "ずつ",
    romaji: "zutsu",
    functions: [
      {
        title: "Melakukan sesuatu \"Sedikit demi sedikit\"",
        description: "Melakukan sesuatu \"Sedikit demi sedikit\".",
        example: {
          jp: "少しずつ進もう。",
          ro: "Sukoshi zutsu susumou",
          id: "Mari maju sedikit demi sedikit."
        }
      }
    ]
  },
  {
    kana: "ほど",
    romaji: "hodo",
    functions: [
      {
        title: "Bermakna \"Semakin... semakin...\"",
        description: "Bermakna \"Semakin... semakin...\" (pola ~ba ~hodo).",
        example: {
          jp: "読めば読むほど面白い。",
          ro: "Yomeba yomu hodo omoshiroi",
          id: "Semakin dibaca, semakin menarik."
        }
      }
    ]
  },
  {
    kana: "とか",
    romaji: "toka",
    functions: [
      {
        title: "Menyampaikan rumor",
        description: "Menyampaikan rumor atau \"Kudengar / Kabarnya\".",
        example: {
          jp: "明日休みだとか。",
          ro: "Ashita yasumi da toka",
          id: "Kudengar besok libur."
        }
      }
    ]
  },
  {
    kana: "すら",
    romaji: "sura",
    functions: [
      {
        title: "Menekankan ketidakmampuan",
        description: "Menekankan ketidakmampuan yang sangat parah.",
        example: {
          jp: "立つことすらできない。",
          ro: "Tatsu koto sura dekinai",
          id: "Berdiri pun tidak bisa."
        }
      }
    ]
  },

  // Partikel Emosi & Perasaan
  {
    kana: "かな",
    romaji: "kana",
    functions: [
      {
        title: "Berharap sesuatu segera terjadi",
        description: "Berharap sesuatu segera terjadi (pola negatif ~nai kana).",
        example: {
          jp: "早く終わらないかな。",
          ro: "Hayaku owaranai kana",
          id: "Kuharap cepat selesai ya."
        }
      }
    ]
  },
  {
    kana: "なんか",
    romaji: "nanka",
    functions: [
      {
        title: "Menunjukkan perasaan \"Entah kenapa\"",
        description: "Menunjukkan perasaan \"Entah kenapa\" tanpa alasan jelas.",
        example: {
          jp: "なんか今日は疲れた。",
          ro: "Nanka kyou wa tsukareta",
          id: "Entah kenapa hari ini rasanya capek."
        }
      }
    ]
  },
  {
    kana: "さえ",
    romaji: "sae",
    functions: [
      {
        title: "Menunjukkan syarat \"Asalkan\"",
        description: "Menunjukkan syarat \"Asalkan\".",
        example: {
          jp: "君さえいればいい。",
          ro: "Kimi sae ireba ii",
          id: "Asalkan ada kamu, itu sudah cukup."
        }
      }
    ]
  },
  {
    kana: "こそ",
    romaji: "koso",
    functions: [
      {
        title: "Membalas ucapan terima kasih",
        description: "Membalas ucapan terima kasih (\"Justru saya / Sama-sama\").",
        example: {
          jp: "こちらこそ、ありがとう。",
          ro: "Kochira koso, arigatou",
          id: "Justru saya yang berterima kasih."
        }
      }
    ]
  },
  {
    kana: "なんて",
    romaji: "nante",
    functions: [
      {
        title: "Menekankan keterkejutan",
        description: "Menekankan keterkejutan yang sangat kuat.",
        example: {
          jp: "綺麗なんてものじゃない。",
          ro: "Kirei nante mono janai",
          id: "Ini sih bukan sekadar cantik lagi."
        }
      }
    ]
  },
  {
    kana: "かしら",
    romaji: "kashira",
    functions: [
      {
        title: "Meminta tolong dengan sangat halus",
        description: "Meminta tolong dengan sangat halus.",
        example: {
          jp: "手伝ってくれないかしら？",
          ro: "Tetsudatte kurenai kashira?",
          id: "Bisa tolong bantu aku nggak ya?"
        }
      }
    ]
  },

  // Partikel Tindakan & Lainnya
  {
    kana: "ながら",
    romaji: "nagara",
    functions: [
      {
        title: "Bermakna kontras",
        description: "Bermakna kontras \"Padahal / Meskipun\".",
        example: {
          jp: "知っていながら黙っていた。",
          ro: "Shitte inagara damatte ita",
          id: "Padahal tahu, tapi dia diam saja."
        }
      }
    ]
  },
  {
    kana: "きり",
    romaji: "kiri",
    functions: [
      {
        title: "Menunjukkan \"Sejak itu tidak terjadi lagi\"",
        description: "Menunjukkan \"Sejak itu tidak terjadi lagi\" (pola ~ta kiri).",
        example: {
          jp: "別れたきりだ。",
          ro: "Wakareta kiri da",
          id: "Sejak berpisah, tidak pernah ketemu lagi."
        }
      }
    ]
  },
  {
    kana: "だって",
    romaji: "datte",
    functions: [
      {
        title: "Mengutip ucapan orang lain",
        description: "Mengutip ucapan orang lain (\"Katanya\").",
        example: {
          jp: "彼も行くんだって。",
          ro: "Kare mo ikun datte",
          id: "Katanya dia juga bakal pergi."
        }
      }
    ]
  },
  {
    kana: "やら",
    romaji: "yara",
    functions: [
      {
        title: "Menunjukkan ketidakpastian",
        description: "Menunjukkan ketidakpastian (\"Entah\").",
        example: {
          jp: "どこへ行ったのやら。",
          ro: "Doko e itta no yara",
          id: "Entah pergi ke mana dia."
        }
      }
    ]
  },
  {
    kana: "つつ",
    romaji: "tsutsu",
    functions: [
      {
        title: "Melakukan sesuatu padahal menyadari itu salah",
        description: "Melakukan sesuatu padahal menyadari itu salah.",
        example: {
          jp: "悪いと思いつつ、食べてしまった。",
          ro: "Warui to omoitsutsu, tabete shimatta",
          id: "Padahal sadar ini buruk, tapi dimakan juga."
        }
      }
    ]
  },
  {
    kana: "とも",
    romaji: "tomo",
    functions: [
      {
        title: "Menyetujui sesuatu dengan sangat semangat",
        description: "Menyetujui sesuatu dengan sangat semangat (\"Tentu saja!\").",
        example: {
          jp: "いいとも！",
          ro: "Ii tomo!",
          id: "Tentu saja boleh!"
        }
      }
    ]
  },
  {
    kana: "っけ",
    romaji: "kke",
    functions: [
      {
        title: "Memastikan sesuatu",
        description: "Memastikan sesuatu seolah mengajak mengingat bareng.",
        example: {
          jp: "明日テストだっけ？",
          ro: "Ashita tesuto da kke?",
          id: "Besok ujian kan ya?"
        }
      }
    ]
  },
  {
    kana: "にて",
    romaji: "nite",
    functions: [
      {
        title: "Menunjukkan metode atau alat",
        description: "Menunjukkan metode atau alat (versi tertulis dari partikel de).",
        example: {
          jp: "書類にて提出してください。",
          ro: "Shorui nite teishutsu shite kudasai",
          id: "Tolong kumpulkan secara tertulis."
        }
      }
    ]
  },
  {
    kana: "なり",
    romaji: "nari",
    functions: [
      {
        title: "\"Begitu [A], langsung [B]\"",
        description: "\"Begitu [A], langsung [B]\" (pola ~ru nari).",
        example: {
          jp: "帰るなり、寝てしまった。",
          ro: "Kaeru nari, nete shimatta",
          id: "Begitu pulang, langsung ketiduran."
        }
      }
    ]
  },
  {
    kana: "どころか",
    romaji: "dokoroka",
    functions: [
      {
        title: "Menunjukkan situasi yang bertambah parah",
        description: "Menunjukkan situasi yang \"Malah bertambah parah\".",
        example: {
          jp: "治るどころか、悪くなった。",
          ro: "Naoru dokoroka, waruku natta",
          id: "Boro-boro sembuh, malah makin parah."
        }
      }
    ]
  },
  {
    kana: "だの",
    romaji: "dano",
    functions: [
      {
        title: "Murni untuk mengomel",
        description: "Murni untuk mengomel panjang lebar.",
        example: {
          jp: "好きだの嫌いだのうるさい。",
          ro: "Suki dano kirai dano urusai",
          id: "Berisik bilang suka lah, benci lah."
        }
      }
    ]
  }
];
