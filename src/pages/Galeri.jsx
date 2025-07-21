// Galeri.jsx

import { useState } from "react";
import { ArrowUp, X } from "lucide-react";
import { grupGaleri } from "../data/DataFoto";
import Footer from "../components/Footer";

export default function Galeri() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const displayedGaleri = showAll ? grupGaleri : grupGaleri.slice(0, 2);

  return (
    <>
      <div className="px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Galeri Kegiatan KKN</h1>
        <p className="text-gray-600 mb-6">Dokumentasi kegiatan KKN.</p>

        <div className="space-y-10">
          {displayedGaleri.map((grup, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-blue-700 mb-3">
                {new Date(grup.tanggal).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h2>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {grup.foto.map((src, j) => (
                  <button
                    key={j}
                    className="group relative cursor-pointer overflow-hidden rounded-xl shadow-sm"
                    onClick={() => setSelectedImage(src)}
                  >
                    <img
                      src={src}
                      alt={`Foto ${i + 1}-${j + 1}`}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-sm font-medium text-white">
                        Lihat Detail
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Gambar */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/20 backdrop-blur-xs bg-opacity-70 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-1 hover:bg-red-600"
            >
              <X />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full bg-white max-h-[80vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}

      {/* Tombol Toggle */}
      {grupGaleri.length > 5 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            {showAll ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
          </button>
        </div>
      )}

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mb-6 px-4 flex items-center gap-1 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition mx-auto"
      >
        <ArrowUp className="w-4 h-4" /> Kembali ke Atas
      </button>

      <Footer />
    </>
  );
}
