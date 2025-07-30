import Radio from "../Radio";
import CheckboxGroup from "../CheckboxGroup";

export default function TujuanDanHarapanKarir({
  karier,
  setKarier = () => {},
  karierLainnya,
  setKarierLainnya = () => {},
}) {
  const options = ["Ya", "Belum", "Masih bingung"];
  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold text-2xl text-center">
          Tujuan & Harapan Karier
        </h1>
      </div>
      <CheckboxGroup
        label="Paling penting dalam karier"
        soal="Apa yang paling penting dalam karier nanti?"
        selectedOptions={karier}
        onChange={setKarier}
        options={[
          "Gaji yang besar",
          "Waktu kerja yang fleksibel",
          "Bisa membantu orang lain",
          "Bisa bekerja dari mana saja (remote)",
          "kreativitas",
          "Stabilitas dan keamanan",
        ]}
        showLainnya={true}
        valueLainnya={karierLainnya}
        onChangeLainnya={setKarierLainnya}
      />
      <Radio label="Apakah kamu sudah memiliki cita-cita?" options={options} />
    </>
  );
}
