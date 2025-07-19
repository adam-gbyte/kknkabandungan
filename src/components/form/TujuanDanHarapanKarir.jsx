import RawWithConditionalInput from "../RadioWithConditionalInput";
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
      <CheckboxGroup
        label="Paling penting dalam karier"
        soal="Apa yang paling penting dalam karier nanti?"
        selectedOptions={karier}
        onChange={setKarier}
        options={[
          "Gaji yang besar",
          "Waktu kerja yang",
          "Bisa membantu orang lain",
          "Bisa bekerja dari mana saja (remote)",
          "kreativitas",
          "Stabilitas dan keamana",
        ]}
        showLainnya={true}
        valueLainnya={karierLainnya}
        onChangeLainnya={setKarierLainnya}
      />
      <RawWithConditionalInput
        label="Apakah kamu sudah memiliki cita-cita?"
        options={options}
      />
    </>
  );
}
