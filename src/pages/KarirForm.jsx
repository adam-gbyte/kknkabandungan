import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function KarierForm() {
  const [luang, setLuang] = useState("");
  const [luangLainnya, setLuangLainnya] = useState("");

  const [minat, setMinat] = useState("");
  const [minatLainnya, setMinatLainnya] = useState("");

  const [skorSkill, setSkorSkill] = useState(3);
  const [punyaPengalaman, setPunyaPengalaman] = useState("Belum pernah");
  const [bidangPengalaman, setBidangPengalaman] = useState("");

  return (
    <div className="space-y-4 p-4 max-w-xl mx-auto">
      {/* Minat dan Hobi */}
      <label className="block mb-4">
        <span className="font-semibold">Minat dan Hobi</span>
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
        label="Minat"
        value={minat}
        onChange={setMinat}
        options={[
          "Membaca / Menulis",
          "Bermain game",
          "Mendesain / Menggambar",
          "Memperbaiki barang / otak atik teknologi",
          "Berbicara / mengajar orang lain",
          "Memimpin tim",
        ]}
        showLainnya={true}
        valueLainnya={minatLainnya}
        onChangeLainnya={setMinatLainnya}
      />

      {/* Skor skill */}
      <label className="block">
        Seberapa percaya dirimu dengan skill kamu? (1–5)
        <input
          type="range"
          min={1}
          max={5}
          value={skorSkill}
          onChange={(e) => setSkorSkill(Number(e.target.value))}
          className="w-full"
        />
        <div>Skor: {skorSkill}</div>
      </label>

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
    </div>
  );
}
