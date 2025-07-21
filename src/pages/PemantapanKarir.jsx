// PeguatanKarir.jsx
import { useState } from "react";
import Tabs from "../components/Tabs";

import Footer from "../components/Footer";
import MinatDanHobi from "../components/form/MinatDanHobi";
import KeterampilanDanSkill from "../components/form/KeterampilanDanSkill";
import KepribadianDanGayaBelajar from "../components/form/KepribadianDanGayaBelajar";
import TujuanDanHarapanKarir from "../components/form/TujuanDanHarapanKarir";
import AktivitasSekolahDanNonformal from "../components/form/AktivitasSekolahDanNonformal";
import PreferensiKarir from "../components/form/PreferensiKarir";
import Modal from "../components/Modal";

import buatKalimatUntukGemini from "../components/Kalimat";

import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

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
  const [skorSkill, setSkorSkill] = useState(60);
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

  // Preferensi karir
  const [karir, setKarir] = useState([]);
  const [karirLainnya, setKarirLainnya] = useState("");
  const [lulus, setLulus] = useState("");

  // NAMA
  const [nama, setNama] = useState("");

  // MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLihatHasil = () => {
    setIsModalOpen(true);
    Gemini();
  };

  const kalimat = buatKalimatUntukGemini({
    nama,
    luang,
    luangLainnya,
    pelajaran,
    pelajaranLainnya,
    topik,
    topikLainnya,
    skill,
    skillLainnya,
    skorSkill,
    belajar,
    kepribadian,
    kepribadianLainnya,
    gayaBelajar,
    gayaBelajarLainnya,
    mySelf,
    mySelfLainnya,
    karier,
    karierLainnya,
    kegiatan,
    kegiatanLainnya,
    karir,
    karirLainnya,
    lulus,
  });

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function Gemini() {
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        // contents: [{ role: "user", parts: [{ text: kalimat }] }],
        contents: kalimat,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                rekomendasi: {
                  type: Type.STRING,
                },
              },
              propertyOrdering: ["rekomedasi"],
            },
          },
        },
      });

      const responseText = response.text;
      console.log("Response text : ", responseText);
      const textParsed = JSON.parse(responseText);
      console.log("Text parsed : ", textParsed);

      setText(responseText);
    } catch (error) {
      console.error(
        "Terjadi error saat mengakses Gemini:",
        error.message || error,
      );
    } finally {
      setLoading(false);
    }
  }

  // Validasi form
  const isFormComplete = () => {
    return (
      nama.trim() !== "" &&
      // Minat & Hobi
      (luang.length > 0 || luangLainnya.trim() !== "") &&
      (pelajaran !== "" || pelajaranLainnya.trim() !== "") &&
      (topik !== "" || topikLainnya.trim() !== "") &&
      // Keterampilan
      (skill.length > 0 || skillLainnya.trim() !== "") &&
      belajar !== "" &&
      skorSkill !== null &&
      // Kepribadian & Gaya Belajar
      (kepribadian !== "" || kepribadianLainnya.trim() !== "") &&
      (gayaBelajar !== "" || gayaBelajarLainnya.trim() !== "") &&
      (mySelf !== "" || mySelfLainnya.trim() !== "") &&
      // Tujuan Karier
      (karier.length > 0 || karierLainnya.trim() !== "") &&
      // Aktivitas
      (kegiatan.length > 0 || kegiatanLainnya.trim() !== "") &&
      // Preferensi Karier
      (karir.length > 0 || karirLainnya.trim() !== "") &&
      lulus !== ""
    );
  };

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
          handleLihatHasil={handleLihatHasil}
          isFormComplete={isFormComplete}
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

        {loading && <p className="">Loading...</p>}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`Karier yang harus ${nama || "User"} tekuni`}
          deskripsi="Berdasarkan jawaban kamu, berikut ini adalah rekomendasi karier yang sangat cocok untuk kepribadian dan minat kamu:"
          rekomendasi={[text]}
        />
      </div>

      <Footer />
    </>
  );
}
