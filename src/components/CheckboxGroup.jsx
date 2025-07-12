import React, { useEffect, useState } from "react";

export default function CheckboxGroup({
  label,
  soal = "",
  selectedOptions = [],
  onChange = () => {},
  options = [],
  showLainnya = false,
  valueLainnya = "",
  onChangeLainnya = () => {},
}) {
  const [lainnyaChecked, setLainnyaChecked] = useState(false);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  // Sinkronisasi valueLainnya hanya saat lainnyaChecked = true
  useEffect(() => {
    if (!showLainnya) return;

    if (lainnyaChecked && valueLainnya) {
      // Hapus sebelumnya jika ada value lainnya, lalu tambahkan yang baru
      const newSelected = selectedOptions.filter(
        (item) => !options.includes(item) && item !== valueLainnya,
      );
      onChange([
        ...options.filter((o) => selectedOptions.includes(o)),
        valueLainnya,
      ]);
    } else if (!lainnyaChecked) {
      // Jika checkbox Lainnya tidak dicentang, hapus nilai lainnya
      onChange(selectedOptions.filter((item) => options.includes(item)));
    }
  }, [valueLainnya, lainnyaChecked]);

  const handleCheckboxLainnya = (checked) => {
    setLainnyaChecked(checked);
    if (!checked) {
      onChange(selectedOptions.filter((item) => options.includes(item)));
      onChangeLainnya("");
    } else if (valueLainnya) {
      onChange([...selectedOptions, valueLainnya]);
    }
  };

  return (
    <div className="mb-4 bg-gray-100 p-4 rounded shadow">
      <label className="block font-bold mb-2">{label}</label>
      {soal && <p className="font-semibold mb-2">{soal}</p>}
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="form-checkbox text-blue-600"
            />
            <span>{option}</span>
          </label>
        ))}

        {showLainnya && (
          <div className="mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={lainnyaChecked}
                onChange={(e) => handleCheckboxLainnya(e.target.checked)}
                className="form-checkbox text-blue-600"
              />
              <span>Lainnya:</span>
              <input
                type="text"
                value={valueLainnya}
                onChange={(e) => onChangeLainnya(e.target.value)}
                className="ml-2 border rounded px-2 py-1 w-48"
                placeholder="Tulis jawaban lain"
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
