import CheckboxGroup from "../CheckboxGroup";

export default function PreferensiKarir({
  karir,
  setKarir = () => {},
  karirLainnya,
  setKarirLainnya = () => {},
  lulus,
  setLulus = () => {},
}) {
  return (
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
  );
}
