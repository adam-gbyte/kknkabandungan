import CheckboxGroup from "../CheckboxGroup";
import Scale from "../Scale";

export default function KeterampilanDanSkill({
  skill = [],
  setSkill = () => {},
  skillLainnya,
  setSkillLainnya = () => {},
  skorSkill,
  setSkorSkill = () => {},
  belajar,
  setBelajar = () => {},
}) {
  return (
    <>
      {/* Keterampilan dan Skill */}
      <div className="mb-4">
        <h1 className="font-bold text-2xl text-center">Keterampilan & Skill</h1>
      </div>

      <CheckboxGroup
        label="Skill apa yang kamu kuasai"
        soal="Skill apa yang kamu rasa sudah cukup kamu kuasai?"
        selectedOptions={skill}
        onChange={setSkill}
        options={[
          "Public Speaking",
          "Menulis",
          "Desain Grafis",
          "Editing Video",
          "Coding / Pemrogramman",
          "Berorganisasi",
        ]}
        showLainnya={true}
        valueLainnya={skillLainnya}
        onChangeLainnya={setSkillLainnya}
      />

      <Scale
        minNum={1}
        maxNum={100}
        soal="Seberapa percaya diri kamu dengan skill tersebut?"
        label="Penilaian Diri"
        value={skorSkill}
        onChange={setSkorSkill}
      />
    </>
  );
}
