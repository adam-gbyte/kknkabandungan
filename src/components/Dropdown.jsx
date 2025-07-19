import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Dropdown({
  soal = "",
  label = "",
  value,
  onChange,
  options = [],
  showLainnya = false,
  valueLainnya = "",
  onChangeLainnya = () => {},
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="mb-4 bg-white p-4 rounded shadow-xl">
      <label className="block mb-4">
        <h2 className="font-semibold uppercase mb-4">{label}</h2>
        {soal && <p className="mb-2">{soal}</p>}
        <div
          ref={dropdownRef}
          className="flex justify-between items-center relative py-2 px-4 bg-blue-50/50 rounded-md border border-blue-200"
          onClick={() => setOpen(!open)}
        >
          <p>{value || `-- Pilih ${label} --`}</p>
          <div>
            <ChevronDown
              className={`${open ? "rotate-180" : ""} text-blue-400 transition duration-200`}
            />
          </div>
          <div
            className={`absolute overflow-hidden shadow-xl top-12 z-10 rounded-md bg-white w-full left-0 ${open ? "" : "hidden"} `}
          >
            {options.map((option, i) => (
              <div
                key={i}
                className="hover:bg-blue-50/50 px-4 py-2"
                onClick={() => onChange(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

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
