import CheckboxGroup from "../CheckboxGroup";
import Radio from "../Radio";

export default function AktivitasSekolahDanNonformal({
  kegiatan,
  setKegiatan = () => {},
  kegiatanLainnya,
  setKegiatanLainnya = () => {},
}) {
  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold text-2xl text-center">
          Aktivitas Sekolah & Nonformal
        </h1>
      </div>
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
      <Radio
        label="Apakah kamu pernah ikut kursus / pelatihan di luar sekolah"
        options={["Ya", "Tidak"]}
      />
    </>
  );
}
