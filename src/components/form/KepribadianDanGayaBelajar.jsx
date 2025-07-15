import Dropdown from "../Dropdown";

export default function KepribadianDanGayaBelajar({
  kepribadian,
  setKepribadian = () => {},
  kepribadianLainnya,
  setKepribadianLainnya = () => {},
  gayaBelajar,
  setGayaBelajar = () => {},
  gayaBelajarLainnya,
  setGayaBelajarLainnya = () => {},
  mySelf,
  setMySelf = () => {},
  mySelfLainnya,
  setMySelfLainnya = () => {},
}) {
  return (
    <>
      <Dropdown
        label="Bekerja Secara?"
        soal="Kamu lebih suka bekerja secara?"
        value={kepribadian}
        onChange={setKepribadian}
        options={["Mandiri", "Bersama Tim", "Kombinasi Keduanya"]}
        showLainnya={false}
      />
      <Dropdown
        label="Gaya Belajar"
        soal="Kamu lebih suka belajar dengan cara?"
        value={gayaBelajar}
        onChange={setGayaBelajar}
        options={[
          "Membaca dan Mencatat",
          "Menonton video atau Tutorial",
          "Praktik langsung",
          "Berdiskusi dengan orang lain",
        ]}
        showLainnya={true}
        lainnya={gayaBelajarLainnya}
        setLainnya={setGayaBelajarLainnya}
      />
      <Dropdown
        label="Dirimu"
        soal="Bagaimana kamu menilai dirimu?"
        value={mySelf}
        onChange={setMySelf}
        options={[
          "Kreatif",
          "Tekun",
          "Pemikir Logis",
          "Suka Berbicara",
          "Pendiam",
          "Cepat Bosan",
          "Disiplin",
        ]}
        showLainnya={true}
        lainnya={mySelfLainnya}
        setLainnya={setMySelfLainnya}
      />
    </>
  );
}
