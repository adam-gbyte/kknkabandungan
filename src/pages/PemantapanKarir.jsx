// PeguatanKarir.jsx
import { useState } from "react";
import Tabs from "../components/Tabs";
import {
  Sparkles,
  BrainCircuit,
  User,
  Telescope,
  BookOpen,
  Briefcase,
} from "lucide-react";

import Footer from "../components/Footer";
import MinatDanHobi from "../components/form/MinatDanHobi";
import KeterampilanDanSkill from "../components/form/KeterampilanDanSkill";
import KepribadianDanGayaBelajar from "../components/form/KepribadianDanGayaBelajar";
import TujuanDanHarapanKarir from "../components/form/TujuanDanHarapanKarir";
import AktivitasSekolahDanNonformal from "../components/form/AktivitasSekolahDanNonformal";
import PreferensiKarir from "../components/form/PreferensiKarir";
import Modal from "../components/Modal";

import generateKalimat from "../components/Kalimat";

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

  // INPUT DATA
  const inputData = {
    nama, // string

    // Minat dan Hobi
    luang, // array of string
    luangLainnya, // string
    pelajaran, // string
    pelajaranLainnya, // string
    topik, // string
    topikLainnya, // string

    // Keterampilan / Skill
    skill, // array of string
    skillLainnya, // string
    skorSkill, // number (1–100)
    belajar, // string (Ya / Tidak)

    // Kepribadian
    kepribadian, // string
    kepribadianLainnya, // string
    gayaBelajar, // string
    gayaBelajarLainnya, // string
    mySelf, // string
    mySelfLainnya, // string

    // Tujuan Karier
    karier, // array of string
    karierLainnya, // string

    // Aktivitas
    kegiatan, // array of string
    kegiatanLainnya, // string

    // Preferensi Karir
    karir, // array of string
    karirLainnya, // string
    lulus, // string (Sudah / Belum / Sedang)
  };

  // MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLihatHasil = () => {
    setIsModalOpen(true);
    Gemini();
  };

  const kalimat = generateKalimat({
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

  // console.log("kalimaat", kalimat);

  const [text, setText] = useState({});
  const [loading, setLoading] = useState(false);

  async function Gemini() {
    try {
      setLoading(true);
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: kalimat,
        config: {
          responseMimeType: "application/json",
        },
      });

      try {
        const responseText = response.text;
        const textParsed = JSON.parse(responseText);
        setText(textParsed);

        const urlAPI = import.meta.env.VITE_URL_API;

        console.log(urlAPI);

        // Kirim ke backend
        const res = await fetch(`${urlAPI}/kkn-kabandungan/save`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputKalimat: inputData,
            outputAI: textParsed,
          }),
        });

        if (!res.ok) {
          const errText = await res.text();
          console.error("Gagal menyimpan ke backend:", res.status, errText);
        }
      } catch (error) {
        console.error("Terjadi error saat menyimpan ke backend:", error);
      }
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
      icon: <Sparkles />,
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
      icon: <BrainCircuit />,
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
      icon: <User />,
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
      icon: <Telescope />,
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
      icon: <BookOpen />,
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
      icon: <Briefcase />,
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
      <div className="space-y-2 mx-auto">
        <h1 className="text-center text-4xl font-bold mb-4">
          Pemantapan Karir
        </h1>
        <div className="w-full max-w-2xl mx-auto px-4">
          <div className="mt-6">
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama anda :
            </label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama anda"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            />
          </div>
        </div>

        <Tabs tabs={tabData} />

        {loading && (
          <div className="flex items-center justify-center min-h-[200px] w-full text-center animate-pulse">
            <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 max-w-md w-full space-y-4">
              <p className="text-lg font-semibold text-blue-600">
                Sedang memproses...
              </p>
              <p className="text-sm text-gray-500">
                Mohon tunggu sebentar, hasil akan segera ditampilkan.
              </p>
              <div className="h-2 bg-blue-200 rounded-full w-full">
                <div className="h-full bg-blue-500 rounded-full animate-loading-bar"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Karier yang harus ${nama || "User"} tekuni`}
        deskripsi="Berdasarkan jawaban kamu, berikut ini adalah rekomendasi karier yang sangat cocok untuk kepribadian dan minat kamu:"
        rekomendasi={text}
      />

      <Footer />
    </>
  );
}
