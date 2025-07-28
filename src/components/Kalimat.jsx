export default function generateKalimat({
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
  const gabung = (array, lainnya) => {
    const isi = [...array];
    if (lainnya?.trim()) isi.push(lainnya.trim());
    return isi.join(", ");
  };

  const pelajaranText = pelajaranLainnya ? pelajaranLainnya : pelajaran;
  const topikText = topikLainnya ? topikLainnya : topik;
  const kepribadianText = kepribadianLainnya || kepribadian;
  const gayaBelajarText = gayaBelajarLainnya || gayaBelajar;
  const mySelfText = mySelfLainnya || mySelf;
  const karirText = gabung(karir, karirLainnya);
  const karierText = gabung(karier, karierLainnya);
  const skillText = gabung(skill, skillLainnya);
  const kegiatanText = gabung(kegiatan, kegiatanLainnya);
  const luangText = gabung(luang, luangLainnya);

  return `
Halo, nama saya ${nama || "[Nama belum diisi]"}. Saya memiliki minat dan hobi dalam ${luangText || "belum disebutkan"}, 
serta menyukai pelajaran ${pelajaranText || "belum disebutkan"} dengan topik favorit ${topikText || "belum disebutkan"}.

Saya memiliki keterampilan di bidang ${skillText || "belum disebutkan"} dengan tingkat kepercayaan diri sekitar ${skorSkill}%. 
Saat ini saya ${belajar === "Ya" ? "masih ingin terus mengembangkan keterampilan ini" : "belum fokus untuk mengembangkan keterampilan ini lebih lanjut"}.

Dari sisi kepribadian, saya adalah pribadi yang ${kepribadianText || "belum diisi"}, 
dengan gaya belajar atau gaya kerja ${gayaBelajarText || "belum disebutkan"}. 
Saya mengenal diri saya sebagai ${mySelfText || "belum diisi"}.

Saya memiliki tujuan karier di bidang ${karierText || "belum disebutkan"} dan bercita-cita bekerja sebagai ${karirText || "belum disebutkan"} 
setelah ${lulus || "lulus sekolah/kuliah"}.

Selama ini saya aktif dalam kegiatan seperti ${kegiatanText || "belum disebutkan"}.

Demikian ringkasan singkat tentang diri saya.
`.trim();
}
