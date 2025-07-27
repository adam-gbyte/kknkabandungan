export default function buatKalimatUntukGemini({
  nama,
  luang,
  luangLainnya,
  pelajaran,
  pelajaranLainnya,
  topik,
  topikLainnya,
  skill,
  skillLainnya,
  skorSkill,
  belajar,
  kepribadian,
  kepribadianLainnya,
  gayaBelajar,
  gayaBelajarLainnya,
  mySelf,
  mySelfLainnya,
  karier,
  karierLainnya,
  kegiatan,
  kegiatanLainnya,
  karir,
  karirLainnya,
  lulus,
}) {
  return `
Halo, nama saya ${nama}. Saya memiliki waktu luang yang saya gunakan untuk ${[
    ...luang,
    luangLainnya,
  ]
    .filter(Boolean)
    .join(", ")}. Mata pelajaran yang saya sukai adalah ${[
    pelajaran || pelajaranLainnya,
  ]
    .filter(Boolean)
    .join("")}. Topik yang paling menarik bagi saya adalah ${[
    topik || topikLainnya,
  ]
    .filter(Boolean)
    .join("")}.

Saya memiliki keterampilan seperti ${[...skill, skillLainnya]
    .filter(Boolean)
    .join(", ")} dengan tingkat penguasaan ${skorSkill}%/100%. Saya ${
    belajar === "Ya"
      ? "masih ingin terus belajar"
      : "tidak ingin belajar lebih lanjut untuk saat ini"
  }.

Dalam hal kepribadian, saya adalah seseorang yang ${[
    kepribadian || kepribadianLainnya,
  ]
    .filter(Boolean)
    .join("")}. Gaya belajar saya lebih cocok dengan pendekatan ${[
    gayaBelajar || gayaBelajarLainnya,
  ]
    .filter(Boolean)
    .join("")}, dan saya menggambarkan diri saya sebagai ${[
    mySelf || mySelfLainnya,
  ]
    .filter(Boolean)
    .join("")}.

Tujuan karier saya adalah menjadi ${[...karier, karierLainnya]
    .filter(Boolean)
    .join(
      ", ",
    )}. Saya juga aktif dalam kegiatan sekolah dan nonformal seperti ${[
    ...kegiatan,
    kegiatanLainnya,
  ]
    .filter(Boolean)
    .join(", ")}.

Preferensi karier saya adalah ${[...karir, karirLainnya]
    .filter(Boolean)
    .join(", ")}, dan saya berencana untuk ${lulus} setelah lulus dari sekolah.

Berdasarkan semua informasi di atas, mohon berikan rekomendasi jurusan kuliah dan/atau karier yang paling sesuai untuk saya.
`.trim();
}
