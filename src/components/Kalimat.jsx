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
  karir, // array
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

  // Console logs untuk debugging
  console.log("Nama:", nama);
  console.log("Minat & Hobi (luang):", luangText);
  console.log("Pelajaran: CEK", pelajaranText);
  console.log("Topik Favorit:", topikText);
  console.log("Keterampilan:", skillText);
  console.log("Skor Keterampilan:", skorSkill);
  console.log("Belajar:", belajar);
  console.log("Kepribadian:", kepribadianText);
  console.log("Gaya Belajar:", gayaBelajarText);
  console.log("Diri Saya (mySelf):", mySelfText);
  console.log("Tujuan Karier (karier):", karierText);
  console.log("Cita-cita Karir (karir):", karirText);
  console.log("Setelah Lulus:", lulus);
  console.log("Kegiatan:", kegiatanText);

  return `
Halo, nama saya ${nama || "[Nama belum diisi]"}. Saya memiliki minat dan hobi dalam ${luangText || "[belum disebutkan]"}, 
serta menyukai pelajaran ${pelajaranText || "[belum disebutkan]"} dengan topik favorit ${topikText || "[belum disebutkan]"}.

Saya memiliki keterampilan di bidang ${skillText || "[belum disebutkan]"} dengan tingkat kepercayaan diri sekitar ${skorSkill}%. 
Saat ini saya ${belajar === "Ya" ? "masih ingin terus mengembangkan keterampilan ini" : "belum fokus untuk mengembangkan keterampilan ini lebih lanjut"}.

Dari sisi kepribadian, saya adalah pribadi yang ${kepribadianText || "belum diisi"}, 
dengan gaya belajar atau gaya kerja ${gayaBelajarText || "[belum disebutkan]"}. 
Saya mengenal diri saya sebagai ${mySelfText || "belum diisi"}.

Saya memiliki tujuan karier di bidang ${karierText || "[belum disebutkan]"} dan bercita-cita bekerja sebagai ${karirText || "[belum disebutkan]"} 
setelah ${lulus || "lulus sekolah/kuliah"}.

Selama ini saya aktif dalam kegiatan seperti ${kegiatanText || "[belum disebutkan]"}.

Demikian ringkasan singkat tentang diri saya.
`.trim();
}
