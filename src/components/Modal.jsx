import { useEffect } from "react";
import { X } from "lucide-react";
import RekomendasiFlexible from "./ui/Output";

export default function Modal({
  isOpen,
  onClose,
  title = "Rekomendasi",
  rekomendasi,
  deskripsi = "",
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-2 p-3 relative animate-fade-in max-h-3xl overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          <X />
        </button>
        <h2 className="text-xl font-semibold  text-blue-700">{title}</h2>
        <p className="text-sm text-gray-700 ">{deskripsi}</p>
        <ul className="inset-shadow-sm rounded-xl p-4 space-y-2 list-disc text-gray-800 text-justify leading-relaxed max-h-[300px] hide-scrollbar overflow-y-auto">
          <RekomendasiFlexible data={rekomendasi} />
        </ul>
      </div>
    </div>
  );
}
