// components/RawWithConditionalInput.jsx
import { useState } from "react";

export default function Radio({
  label = "Apakah kamu sudah memiliki cita-cita?",
  options = [],
}) {
  const [jawaban, setJawaban] = useState("");
  const [citaCita, setCitaCita] = useState("");

  return (
    <div className="mb-6 bg-white p-4 rounded shadow-xl">
      <label className="block font-semibold uppercase mb-4">{label}</label>
      <div className="space-x-2 mb-4">
        {options.map((opt) => (
          <label
            key={opt}
            className="inline-flex bg-blue-50/50 hover:bg-blue-100/50 cursor-pointer py-2 px-4 rounded-md  items-center"
          >
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
