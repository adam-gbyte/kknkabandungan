// Galeri.jsx

import { useState } from "react";
import { ArrowUp, X } from "lucide-react";
import { grupGaleri } from "../data/DataFoto";
import Footer from "../components/Footer";

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Galeri Kegiatan KKN</h1>
        <p className="text-gray-600 mb-6">
          Berikut adalah dokumentasi foto kegiatan KKN yang dikelompokkan
          berdasarkan tanggal pelaksanaan.
        </p>

        <div className="space-y-10">
          {grupGaleri.map((grup, i) => (
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
                  <img
                    key={j}
                    src={src}
                    alt={`Foto ${i + 1}-${j + 1}`}
                    onClick={() => setSelectedImage(src)}
                    className="w-full h-48 object-cover rounded-xl shadow-sm hover:shadow-md hover:cursor-pointer transition-shadow"
                  />
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
