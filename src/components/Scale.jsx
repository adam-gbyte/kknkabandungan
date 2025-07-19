export default function Scale({ minNum = 1, maxNum = 100, soal, label, value, onChange }) {
  return (
    <div className="mb-4 bg-white p-4 rounded shadow-lg">
      <label className="block">
        {label && (
          <h2 className="font-semibold uppercase mb-4 text-sm">{label}</h2>
        )}
        {soal && <p className="text-base mb-2">{soal}</p>}

        <input
          type="range"
          min={minNum}
          max={maxNum}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full slider"
        />
        <div className="mt-1 text-sm text-gray-700">Skor: {value}%</div>
      </label>
    </div>
  );
}
