export default function Scale({
  minNum = 1,
  maxNum = 5,
  soal,
  label,
  value,
  onChange,
}) {
  return (
    <div className="mb-4 bg-gray-100 p-4 rounded shadow">
      <label className="block">
        {label && <span className="font-semibold text-sm">{label}</span>}
        {soal && <p className="text-base mb-2">{soal}</p>}

        <input
          type="range"
          min={minNum}
          max={maxNum}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="mt-1 text-sm text-gray-700">Skor: {value}</div>
      </label>
    </div>
  );
}
