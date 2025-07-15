// components/RawWithConditionalInput.jsx
import { useState } from "react";

export default function RawWithConditionalInput({
  label = "Apakah kamu sudah memiliki cita-cita?",
  options = [],
}) {
  const [jawaban, setJawaban] = useState("");
  const [citaCita, setCitaCita] = useState("");

  //   const options = ["Ya", "Belum", "Masih bingung"];

  return (
    <div className="mb-6 bg-gray-100 p-4 rounded shadow">
      <label className="block font-bold mb-2">{label}</label>
      <div className="space-x-4 mb-4">
        {options.map((opt) => (
          <label key={opt} className="inline-flex items-center">
            <input
              type="radio"
              value={opt}
              checked={jawaban === opt}
              onChange={(e) => setJawaban(e.target.value)}
              className="mr-2"
              name="cita-cita"
            />
            {opt}
          </label>
        ))}
      </div>
      {jawaban === "Ya" && (
        <div className="mt-2">
          <label className="block mb-1">Jika ya: tuliskan</label>
          <input
            type="text"
            placeholder="Tuliskan cita-citamu..."
            value={citaCita}
            onChange={(e) => setCitaCita(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      )}
    </div>
  );
}
