// Galeri.jsx

import { ArrowUp } from "lucide-react";
import { grupGaleri } from "../data/DataFoto";
import Footer from "../components/Footer";

export default function Galeri() {
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
                    className="w-full h-48 object-cover rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mb-6 px-4 items-center py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        <ArrowUp className="" />
      </button>

      <Footer />
    </>
  );
}
