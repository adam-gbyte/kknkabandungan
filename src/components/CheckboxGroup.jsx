import { Check } from "lucide-react";
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
  const [on, setOn] = useState(false);

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
    setOn(checked);
    if (!checked) {
      onChange(selectedOptions.filter((item) => options.includes(item)));
      onChangeLainnya("");
    } else if (valueLainnya) {
      onChange([...selectedOptions, valueLainnya]);
    }
  };

  return (
    <div className="mb-4 bg-white p-6 rounded shadow-lg">
      <label className="block uppercase font-semibold mb-4">{label}</label>
      {soal && <p className="font-normal mb-4">{soal}</p>}
      <div className="space-y-2">
        {options.map((option, index) => (
          <label
            key={index}
            className={`${selectedOptions.includes(option) && "border border-blue-200 bg-blue-100/50"} flex items-center space-x-2 bg-blue-50/50 py-2 px-4 rounded-md hover:bg-blue-50/70 `}
          >
            <input
              type="checkbox"
              hidden
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="form-checkbox text-blue-600"
            />
            <div
              className={`w-4 h-4 border rounded-xs ${selectedOptions.includes(option) && "bg-blue-200 border-none"}`}
            >
              <Check width={16} height={16} className="text-white" />
            </div>
            <span>{option}</span>
          </label>
        ))}

        {showLainnya && (
          <div className="mt-2">
            <label
              className={`${on && "border border-blue-200 bg-blue-100/50"} flex items-center space-x-2 bg-blue-50/50 py-2 px-4 rounded-md hover:bg-blue-50/70 `}
            >
              <input
                type="checkbox"
                checked={lainnyaChecked}
                onChange={(e) => handleCheckboxLainnya(e.target.checked)}
                className="form-checkbox text-blue-600"
              />
              {!on && <span>Lainnya...</span>}
              {on && (
                <input
                  type="text"
                  value={valueLainnya}
                  onChange={(e) => onChangeLainnya(e.target.value)}
                  className="ml-2 border rounded px-2 py-1 w-full"
                  placeholder="Tulis jawaban lain"
                />
              )}
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
