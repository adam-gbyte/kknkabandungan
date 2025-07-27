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

// import { ChevronDown } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// export default function Dropdown({
//   soal = "",
//   label = "",
//   value,
//   onChange,
//   options = [],
//   showLainnya = false,
//   valueLainnya = "",
//   onChangeLainnya = () => {},
// }) {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Menutup saat klik di luar
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSelect = (option) => {
//     onChange(option);
//     setOpen(false);
//   };

//   return (
//     <div className="w-full" ref={dropdownRef}>
//       <label className="block text-sm font-medium text-gray-700 mb-1">
//         {label}
//       </label>
//       <p className="text-sm text-gray-500 mb-1">{soal}</p>

//       <div
//         onClick={() => setOpen(!open)}
//         className="relative w-full cursor-pointer bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-between hover:border-blue-400 transition-all"
//       >
//         <span className="text-gray-800">{value || "Pilih salah satu..."}</span>
//         <ChevronDown
//           className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
//         />
//       </div>

//       {open && (
//         <div className="mt-2 bg-white shadow-lg border border-gray-200 rounded-lg absolute z-50 w-full max-h-60 overflow-auto">
//           {options.map((option, idx) => (
//             <div
//               key={idx}
//               onClick={() => handleSelect(option)}
//               className={`px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 ${
//                 value === option
//                   ? "bg-blue-100 text-blue-600 font-semibold"
//                   : "text-gray-700"
//               }`}
//             >
//               {option}
//             </div>
//           ))}
//           {showLainnya && (
//             <div className="px-4 py-2">
//               <input
//                 type="text"
//                 value={valueLainnya}
//                 onChange={(e) => onChangeLainnya(e.target.value)}
//                 className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
//                 placeholder="Lainnya..."
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
