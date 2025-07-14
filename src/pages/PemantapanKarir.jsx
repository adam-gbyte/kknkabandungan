// PeguatanKarir.jsx
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Scale from "../components/Scale";
import CheckboxGroup from "../components/CheckboxGroup";
import Tabs from "../components/Tabs";
import MinatDanHobi from "../components/form/MinatDanHobi";

import Footer from "../components/Footer";

export default function PenguatanKarir() {
  // Minat dan Hobi
  const [luang, setLuang] = useState([]);
  const [luangLainnya, setLuangLainnya] = useState("");
  const [pelajaran, setPelajaran] = useState("");
  const [pelajaranLainnya, setPelajaranLainnya] = useState("");
  const [topik, setTopik] = useState("");
  const [topikLainnya, setTopikLainnya] = useState("");

  // Keterampilan / Skill Saat Ini
  const [skill, setSkill] = useState("");
  const [skillLainnya, setSkillLainnya] = useState("");
  const [skorSkill, setSkorSkill] = useState(3);
  const [belajar, setBelajar] = useState("Tidak");

  // Kepribadian & Gaya Belajar / Kerja
  const [kepribadian, setKepribadian] = useState("");
  const [kepribadianLainnya, setKepribadianLainnya] = useState("");
  const [mySelf, setMySelf] = useState("");
  const [MySelfLainnya, setMySelfLainnya] = useState("");

  // Tujuan & Harapan Karier

  // Aktivitas Sekolah & NonFormal

  //   Preferensi karir
  const [karir, setKarir] = useState("");
  const [karirLainnya, setKarirLainnya] = useState("");

  const [punyaPengalaman, setPunyaPengalaman] = useState("Belum pernah");
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
      content: <p>Ini adalah isi dari Tab Keterampilan & Skill</p>,
    },
    {
      label: "Kepribadian & Gaya Belajar",
      content: <p>Ini adalah isi dari Tab Kepribadian & Gaya Belajar</p>,
    },
    {
      label: "Tujuan & Harapan Karier",
      content: <p>Ini adalah isi dari Tab Tujuan & Harapan Karier</p>,
    },
    {
      label: "Aktivitas Sekolah & Nonformal",
      content: <p>Ini adalah isi dari Tab Aktivitas Sekolah & Nonformal</p>,
    },
    {
      label: "Referensi Karier",
      content: <p>Ini adalah isi dari Tab Referensi Karier</p>,
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
