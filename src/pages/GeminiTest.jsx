import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export default function GeminiTest() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  // Input Form States
  const [minat, setMinat] = useState("");
  const [keterampilan, setKeterampilan] = useState("");
  const [kepribadian, setKepribadian] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [aktivitas, setAktivitas] = useState("");
  const [preferensi, setPreferensi] = useState("");

  async function handleAsk() {
    setLoading(true);
    setText("");

    const prompt = `
Berikut adalah data seorang siswa sekolah menengah:

- Minat & Hobi: ${minat}
- Keterampilan Saat Ini: ${keterampilan}
- Kepribadian & Gaya Belajar/Kerja: ${kepribadian}
- Tujuan & Harapan Karier: ${tujuan}
- Aktivitas Sekolah & Non-Formal: ${aktivitas}
- Preferensi Karier: ${preferensi}

Tolong bantu analisa dan hasilkan:
1. Kalimat deskripsi profil singkat siswa tersebut.
2. Jika ingin bekerja: karier yang cocok.
3. Jika ingin kuliah: jurusan yang cocok.
4. Roadmap atau langkah-langkah konkrit untuk mencapai karier/jurusan tersebut.
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      });

      const responseText = await response.response.text();
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

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Asisten Penentu Karier</h2>

      <textarea
        className="border p-2 w-full rounded"
        placeholder="Minat & Hobi (contoh: menggambar, eksperimen, dll)"
        value={minat}
        onChange={(e) => setMinat(e.target.value)}
      />
      <textarea
        className="border p-2 w-full rounded"
        placeholder="Keterampilan saat ini (contoh: public speaking, desain grafis, coding, dll)"
        value={keterampilan}
        onChange={(e) => setKeterampilan(e.target.value)}
      />
      <textarea
        className="border p-2 w-full rounded"
        placeholder="Kepribadian & gaya belajar/kerja (contoh: suka kerja tim, belajar visual, dll)"
        value={kepribadian}
        onChange={(e) => setKepribadian(e.target.value)}
      />
      <textarea
        className="border p-2 w-full rounded"
        placeholder="Tujuan & harapan karier (contoh: ingin membantu orang lain, ingin bekerja remote, dll)"
        value={tujuan}
        onChange={(e) => setTujuan(e.target.value)}
      />
      <textarea
        className="border p-2 w-full rounded"
        placeholder="Aktivitas sekolah & non-formal (contoh: ikut pramuka, lomba sains, kursus online, dll)"
        value={aktivitas}
        onChange={(e) => setAktivitas(e.target.value)}
      />
      <textarea
        className="border p-2 w-full rounded"
        placeholder="Preferensi karier (contoh: bidang teknologi, seni, sosial, dll)"
        value={preferensi}
        onChange={(e) => setPreferensi(e.target.value)}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        {loading ? "Memproses..." : "Cari Rekomendasi"}
      </button>

      <div className="mt-4 bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
        {text}
      </div>
    </div>
  );
}
