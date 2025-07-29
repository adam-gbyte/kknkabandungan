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
      <div className="mb-4">
        <h1 className="font-bold text-2xl text-center">
          Kepribadian & Gaya Belajar
        </h1>
      </div>
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
        onChange={(gayaBelajar) => {
          setGayaBelajar(gayaBelajar);
          if (gayaBelajar !== "Lainnya") setGayaBelajarLainnya("");
        }}
        options={[
          "Membaca dan Mencatat",
          "Menonton video atau Tutorial",
          "Praktik langsung",
          "Berdiskusi dengan orang lain",
          "Lainnya",
        ]}
        showLainnya={true}
        lainnya={gayaBelajarLainnya}
        setLainnya={setGayaBelajarLainnya}
      />
      <Dropdown
        label="Dirimu"
        soal="Bagaimana kamu menilai dirimu?"
        value={mySelf}
        onChange={(self) => {
          setMySelf(self);
          if (self !== "Lainnya") setMySelfLainnya("");
        }}
        options={[
          "Kreatif",
          "Tekun",
          "Pemikir Logis",
          "Suka Berbicara",
          "Pendiam",
          "Cepat Bosan",
          "Disiplin",
          "Lainnya",
        ]}
        showLainnya={true}
        lainnya={mySelfLainnya}
        setLainnya={setMySelfLainnya}
      />
    </>
  );
}
