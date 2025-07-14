import Dropdown from "../Dropdown";

export default function KepribadianDanGayaBelajar({
  kepribadian,
  setKepribadian = () => {},
  kepribadianLainnya,
  setKepribadianLainnya = () => {},
}) {
  return (
    <Dropdown
      label="Bekerja Secara?"
      soal="Kamu lebih suka bekerja secara?"
      value={kepribadian}
      onChange={setKepribadian}
      options={["Mandiri", "Bersama Tim", "Kombinasi Keduanya"]}
      showLainnya={false}
    />
  );
}
