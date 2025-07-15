import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({
  isOpen,
  onClose,
  title = "Rekomendasi",
  rekomendasi = [],
  deskripsi = "",
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 p-6 relative animate-fade-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          <X />
        </button>
        <h2 className="text-xl font-semibold mb-2 text-blue-700">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{deskripsi}</p>
        <ul className="space-y-2 list-disc pl-5 text-gray-800 text-justify leading-relaxed max-h-[300px] overflow-y-auto pr-2">
          {rekomendasi.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
