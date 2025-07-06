// Laporan.jsx

import { ArrowUp } from "lucide-react";
import Footer from "../components/Footer";
import { laporanKegiatan } from "../data/DataLaporan";

export default function Laporan() {
  return (
    <>
      <div className="px-4 py-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Laporan Kegiatan KKN</h1>
        <p className="mb-6 text-gray-600">
          Berikut adalah dokumentasi kegiatan KKN di Desa Kabandungan yang telah
          kami lakukan bersama masyarakat setempat.
        </p>

        <div className="space-y-10">
          {laporanKegiatan.map((laporan, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={laporan.foto}
                alt={laporan.judul}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">
                  {new Date(laporan.tanggal).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-xl font-semibold mt-1">{laporan.judul}</h2>
                <p className="mt-2 text-gray-700">{laporan.deskripsi}</p>
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
