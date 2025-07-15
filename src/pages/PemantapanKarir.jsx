// PeguatanKarir.jsx
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Scale from "../components/Scale";
import CheckboxGroup from "../components/CheckboxGroup";
import Tabs from "../components/Tabs";

import Footer from "../components/Footer";
import MinatDanHobi from "../components/form/MinatDanHobi";
import KeterampilanDanSkill from "../components/form/KeterampilanDanSkill";
import KepribadianDanGayaBelajar from "../components/form/KepribadianDanGayaBelajar";
import TujuanDanHarapanKarir from "../components/form/TujuanDanHarapanKarir";
import AktivitasSekolahDanNonformal from "../components/form/AktivitasSekolahDanNonformal";
import PreferensiKarir from "../components/form/PreferensiKarir";

export default function PenguatanKarir() {
  // Minat dan Hobi
  const [luang, setLuang] = useState([]);
  const [luangLainnya, setLuangLainnya] = useState("");
  const [pelajaran, setPelajaran] = useState("");
  const [pelajaranLainnya, setPelajaranLainnya] = useState("");
  const [topik, setTopik] = useState("");
  const [topikLainnya, setTopikLainnya] = useState("");

  // Keterampilan / Skill Saat Ini
  const [skill, setSkill] = useState([]);
  const [skillLainnya, setSkillLainnya] = useState("");
  const [skorSkill, setSkorSkill] = useState(3);
  const [belajar, setBelajar] = useState("Tidak");

  // Kepribadian & Gaya Belajar / Kerja
  const [kepribadian, setKepribadian] = useState("");
  const [kepribadianLainnya, setKepribadianLainnya] = useState("");
  const [gayaBelajar, setGayaBelajar] = useState("");
  const [gayaBelajarLainnya, setGayaBelajarLainnya] = useState("");
  const [mySelf, setMySelf] = useState("");
  const [mySelfLainnya, setMySelfLainnya] = useState("");

  // Tujuan & Harapan Karier
  const [karier, setKarier] = useState([]);
  const [karierLainnya, setkarierLainnya] = useState("");

  // Aktivitas Sekolah & NonFormal
  const [kegiatan, setKegiatan] = useState([]);
  const [kegiatanLainnya, setKegiatanLainnya] = useState("");

  //   Preferensi karir
  const [karir, setKarir] = useState([]);
  const [karirLainnya, setKarirLainnya] = useState("");
  const [lulus, setLulus] = useState("");
  const [bidangPengalaman, setBidangPengalaman] = useState("");

  // NAMA
  const [nama, setNama] = useState("");

  // PERCOBAAN
  const [selected, setSelected] = useState([]);
  const [lainnya, setLainnya] = useState("");

  // TABS
  const tabData = [
    {
      label: "Minat & Hobi",
      content: (
        <MinatDanHobi
          luang={luang}
          setLuang={setLuang}
          luangLainnya={luangLainnya}
          setLuangLainnya={setLuangLainnya}
          pelajaran={pelajaran}
          setPelajaran={setPelajaran}
          pelajaranLainnya={pelajaranLainnya}
          setPelajaranLainnya={setPelajaranLainnya}
          topik={topik}
          setTopik={setTopik}
          topikLainnya={topikLainnya}
          setTopikLainnya={setTopikLainnya}
        />
      ),
    },
    {
      label: "Keterampilan & Skill",
      content: (
        <KeterampilanDanSkill
          skill={skill}
          setSkill={setSkill}
          skillLainnya={skillLainnya}
          setSkillLainnya={setSkillLainnya}
          skorSkill={skorSkill}
          setSkorSkill={setSkorSkill}
          belajar={belajar}
          setBelajar={setBelajar}
        />
      ),
    },
    {
      label: "Kepribadian & Gaya Belajar",
      content: (
        <KepribadianDanGayaBelajar
          kepribadian={kepribadian}
          setKepribadian={setKepribadian}
          kepribadianLainnya={kepribadianLainnya}
          setKepribadianLainnya={setKepribadianLainnya}
          gayaBelajar={gayaBelajar}
          setGayaBelajar={setGayaBelajar}
          gayaBelajarLainnya={gayaBelajarLainnya}
          setGayaBelajarLainnya={setGayaBelajarLainnya}
          mySelf={mySelf}
          setMySelf={setMySelf}
          mySelfLainnya={mySelfLainnya}
          setMySelfLainnya={setMySelfLainnya}
        />
      ),
    },
    {
      label: "Tujuan & Harapan Karier",
      content: (
        <TujuanDanHarapanKarir
          karier={karier}
          setKarier={setKarier}
          karierLainnya={karierLainnya}
          setKarierLainnya={setkarierLainnya}
        />
      ),
    },
    {
      label: "Aktivitas Sekolah & Nonformal",
      content: (
        <AktivitasSekolahDanNonformal
          kegiatan={kegiatan}
          setKegiatan={setKegiatan}
          kegiatanLainnya={kegiatanLainnya}
          setKegiatanLainnya={setKegiatanLainnya}
        />
      ),
    },
    {
      label: "Referensi Karier",
      content: (
        <PreferensiKarir
          karir={karir}
          setKarir={setKarir}
          karirLainnya={karirLainnya}
          setKarirLainnya={setKarirLainnya}
          lulus={lulus}
          setLulus={setLulus}
        />
      ),
    },
  ];

  return (
    <>
      <div className="space-y-4 p-2 mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4">
          Pemantapan Karir
        </h1>
        <div className="w-full max-w-3xl mx-auto">
          <div className="p-2">
            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <span>Nama:</span>
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="ml-2 border rounded m-4 px-2 py-1 w-full"
                  placeholder="Nama anda..."
                />
              </label>
            </div>
          </div>
        </div>
        <Tabs tabs={tabData} />
      </div>

      <Footer />
    </>
  );
}
