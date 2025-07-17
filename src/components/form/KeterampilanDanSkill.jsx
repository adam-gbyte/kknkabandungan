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
      <label className="block mb-4">
        <span className="font-bold">Keterampilan / Skill</span>
      </label>

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
