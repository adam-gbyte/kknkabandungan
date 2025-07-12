import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Scale from "../components/Scale";

export default function KarierForm() {
  // Minat dan Hobi
  const [luang, setLuang] = useState("");
  const [luangLainnya, setLuangLainnya] = useState("");
  const [topik, setTopik] = useState("");
  const [topikLainnya, setTopikLainnya] = useState("");

  // Keterampilan / Skill
  const [keahlian, setKeahlian] = useState("");
  const [keahlianLainnya, setKeahlianLainnya] = useState("");
  const [skorSkill, setSkorSkill] = useState(3);

  //   Preferensi karir
  const [karir, setKarir] = useState("");
  const [karirLainnya, setKarirLainnya] = useState("");

  const [punyaPengalaman, setPunyaPengalaman] = useState("Belum pernah");
  const [bidangPengalaman, setBidangPengalaman] = useState("");

  return (
    <div className="space-y-4 p-4 max-w-xl mx-auto">
      {/* Minat dan Hobi */}
      <label className="block mb-4">
        <span className="font-bold">Minat dan Hobi</span>
      </label>
      <Dropdown
        soal="Apa yang paling kamu nikmati di waktu luangmu?"
        label="Waktu luang"
        value={luang}
        onChange={setLuang}
        options={[
          "Membaca / Menulis",
          "Bermain game",
          "Mendesain / Menggambar",
          "Memperbaiki barang / otak atik teknologi",
          "Berbicara / mengajar orang lain",
          "Memimpin tim",
        ]}
        showLainnya={true}
        valueLainnya={luangLainnya}
        onChangeLainnya={setLuangLainnya}
      />
      <Dropdown
        soal="Topik apa yangg paling sering kamu cari di internet?"
        label="Topik"
        value={topik}
        onChange={setTopik}
        options={[
          "Teknologi",
          "Kesehatan",
          "Seni & desain",
          "Bisnis",
          "Pendidikan",
          "Psikologi",
        ]}
        showLainnya={true}
        valueLainnya={topikLainnya}
        onChangeLainnya={setTopikLainnya}
      />

      {/* === Keterampilan / skill saat ini === */}
      <label className="block mb-4">
        <span className="font-bold">Keterampilan / Skill saat ini</span>
      </label>
      <Dropdown
        soal="Apa keahlian yang sudah kamu miliki?"
        label="Keahlian"
        value={keahlian}
        onChange={setKeahlian}
        options={[
          "Menulis",
          "Public Speaking",
          "Desain Grafis",
          "Coding / Pemrogramman",
          "Analisis Data",
          "Manajemen Proyek",
          "Fotografi / Videografi",
        ]}
        showLainnya={true}
        valueLainnya={keahlianLainnya}
        onChangeLainnya={setKeahlianLainnya}
      />
      <Scale
        soal="Seberapa percaya dirimu dengan skill kamu? (1–10)"
        label="Skor Skill"
        onChange={setSkorSkill}
        value={skorSkill}
        maxNum="10"
      />

      {/* Pengalaman */}
      <label className="block">
        Apakah kamu punya pengalaman kerja/praktek?
        <select
          value={punyaPengalaman}
          onChange={(e) => setPunyaPengalaman(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        >
          <option value="Belum pernah">Belum pernah</option>
          <option value="Ya">Ya</option>
        </select>
        {punyaPengalaman === "Ya" && (
          <input
            type="text"
            className="border p-2 w-full mt-2 rounded"
            placeholder="Di bidang apa?"
            value={bidangPengalaman}
            onChange={(e) => setBidangPengalaman(e.target.value)}
          />
        )}
      </label>

      {/* === Preferensi Karir === */}
      <label className="block mb-4">
        <span className="font-bold">Preferensi Karir</span>
      </label>
      <Dropdown
        soal="Kamu tertarik bekerja di bidang apa?"
        label="Bidang Karir"
        value={karir}
        onChange={setKarir}
        options={[
          "Teknologi / IT",
          "Desain Kreatif",
          "Pendidikan",
          "Kesehatan",
          "Bisnis / Keuangan",
          "Sosial / Psikologi",
          "Masih bingung",
        ]}
        showLainnya={true}
        valueLainnya={karirLainnya}
        onChangeLainnya={setKarirLainnya}
      />
    </div>
  );
}
