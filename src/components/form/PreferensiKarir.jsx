import CheckboxGroup from "../CheckboxGroup";
import Dropdown from "../Dropdown";

export default function PreferensiKarir({
  karir,
  setKarir = () => {},
  karirLainnya,
  setKarirLainnya = () => {},
  lulus,
  setLulus = () => {},
  handleLihatHasil = () => {},
  isFormComplete = () => {},
}) {
  return (
    <>
      <CheckboxGroup
        label="Bidang Karier"
        soal="Bidang karier apa yang menurutmu paling menarik?"
        selectedOptions={karir}
        onChange={setKarir}
        options={[
          "Teknologi/IT",
          "Desain/Kreatif",
          "Pendidikan",
          "Psikologi/Sosial",
          "Kesehatan",
          "Bisnis/Keuangan",
          "Masih Bingung",
        ]}
        showLainnya={true}
        valueLainnya={karirLainnya}
        onChangeLainnya={setKarirLainnya}
      />
      <Dropdown
        label="Setelah lulus..."
        soal="Setelah lulus nanti, kamu ingin?"
        value={lulus}
        onChange={setLulus}
        options={["Langsung Bekerja", "Malnjutkan Kuliah", "Belum Tahu"]}
        showLainnya={false}
      />
      <button
        onClick={handleLihatHasil}
        disabled={!isFormComplete()}
        className={`${
          isFormComplete()
            ? "bg-blue-600 hover:bg-blue-700 cursor-pointer animate-pulse hover:animate-none"
            : "bg-gray-400 cursor-not-allowed"
        } text-white font-semibold py-2 px-4 rounded-xl shadow transition`}
      >
        Lihat Rekomendasi
      </button>
    </>
  );
}
