import CheckboxGroup from "../CheckboxGroup";
import RawWithConditionalInput from "../RadioWithConditionalInput";

export default function AktivitasSekolahDanNonformal({
  kegiatan,
  setKegiatan = () => {},
  kegiatanLainnya,
  setKegiatanLainnya = () => {},
}) {
  return (
    <>
      <CheckboxGroup
        label="Aktivitas"
        soal="Kegiatan apa yang pernah kamu ikuti di sekolah?"
        selectedOptions={kegiatan}
        onChange={setKegiatan}
        options={[
          "OSIS",
          "Pramuka",
          "Klub Sains/Coding",
          "Klub Bahasa",
          "Paskibra",
          "Eskul Musik/Tari/Seni",
          "Tidak ada",
        ]}
        showLainnya={true}
        valueLainnya={kegiatanLainnya}
        onChangeLainnya={setKegiatanLainnya}
      />
      <RawWithConditionalInput
        label="Apakah kamu pernah ikut kursus / pelatihan di luar sekolah"
        options={["Ya", "Tidak"]}
      />
    </>
  );
}
