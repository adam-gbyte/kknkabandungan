import CheckboxGroup from "../CheckboxGroup";
import Dropdown from "../Dropdown";

export default function MinatDanHobi({
  luang = [],
  setLuang = () => {},
  luangLainnya = "",
  setLuangLainnya = () => {},
  pelajaran,
  setPelajaran = () => {},
  pelajaranLainnya = "",
  setPelajaranLainnya = () => {},
  topik,
  setTopik = () => {},
  topikLainnya = "",
  setTopikLainnya = () => {},
}) {
  return (
    <>
      {/* Minat dan Hobi */}
      <label className="block mb-4">
        <span className="font-bold">Minat dan Hobi</span>
      </label>
      <CheckboxGroup
        label="Pilih aktivitas favoritmu"
        soal="Kegiatan apa yang paling kamu sukai di waktu luang?"
        selectedOptions={luang}
        onChange={setLuang}
        options={[
          "Menggambar / Mendesain",
          "Menulis cerita / puisi",
          "Bermain alat musik",
          "Bermain game",
          "Mencoba eksperimen",
          "Membuat video / konten",
          "Membantu orang lain",
        ]}
        showLainnya={true}
        valueLainnya={luangLainnya}
        onChangeLainnya={setLuangLainnya}
      />

      <Dropdown
        label="Mata Pelajaran Favorit"
        soal="Mata pelajaran apa yang paling kamu sukai?"
        value={pelajaran}
        onChange={setPelajaran}
        options={[
          "Matematika",
          "IPA (Biologi/Fisika/Kimia)",
          "IPS",
          "Bahasa Indonesia",
          "Bahasa Inggris",
          "Seni Budaya",
          "Pendidikan Jasmani",
          "Agama",
        ]}
        showLainnya={true}
        valueLainnya={pelajaranLainnya}
        onChangeLainnya={setPelajaranLainnya}
      />

      <Dropdown
        label="Topik yang Sering Dicari"
        soal="Topik apa yang paling sering kamu cari atau lihat di internet?"
        value={topik}
        onChange={setTopik}
        options={[
          "Teknologi",
          "Kesehatan",
          "Seni & Desain",
          "Bisnis",
          "Pendidikan",
          "Psikologi",
        ]}
        showLainnya={true}
        valueLainnya={topikLainnya}
        onChangeLainnya={setTopikLainnya}
      />
    </>
  );
}
