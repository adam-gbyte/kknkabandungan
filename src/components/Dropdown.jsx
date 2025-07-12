export default function Dropdown({
  soal = "",
  label,
  value,
  onChange,
  options = [],
  showLainnya = false,
  valueLainnya = "",
  onChangeLainnya = () => {},
}) {
  return (
    <div className="mb-4 bg-gray-100 p-4 rounded shadow">
      <label className="block mb-4">
        <span className="font-bold">{label}</span>
        {soal && <p className="text-2lg">{soal}</p>}
        <select
          className="w-full border p-2 mt-1 rounded"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">-- Pilih {label} --</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          <option value="Lainnya">Lainnya</option>
        </select>

        {value === "Lainnya" && showLainnya && (
          <input
            type="text"
            className="border p-2 w-full mt-2 rounded"
            placeholder={`Tulis ${label.toLowerCase()} lainnya`}
            value={valueLainnya}
            onChange={(e) => onChangeLainnya(e.target.value)}
          />
        )}
      </label>
    </div>
  );
}
