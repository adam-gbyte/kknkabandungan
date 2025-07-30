// Profil.jsx

import { useState } from "react";
import { Sun, Droplet } from "lucide-react";

import { anggotaKkn } from "../data/DataAnggota";
import Footer from "../components/Footer";

const anggota = { ...anggotaKkn };

const tabs = [
  { label: "DPL", key: "dpl" },
  { label: "Ketua", key: "ketua" },
  { label: "Sekretaris", key: "sekretaris" },
  { label: "Bendahara", key: "bendahara" },
  { label: "PDD", key: "pdd" },
  { label: "Logistik", key: "logistik" },
  { label: "Humas", key: "humas" },
  { label: "Acara", key: "acara" },
];

function CardAnggota({ nama, foto, className = "" }) {
  return (
    <div className={`p-4 ${className}`}>
      <img
        src={foto}
        alt={nama}
        className="w-64 rounded-lg mx-auto object-cover mb-3"
      />
    </div>
  );
}

export default function Profil() {
  const [activeTab, setActiveTab] = useState("dpl");

  return (
    <>
      <div className="shadow-lg max-w-7xl mx-auto px-4 py-10 text-gray-800 bg-gradient-to-b from-white rounded-xl to-pink-50">
        <h1 className="text-4xl font-bold text-center mb-10 text-pink-800">
          Profil KKN
        </h1>

        <section className="shadow-xl rounded-xl relative bg-gradient-to-br from-yellow-200 via-white to-sky-200 mb-10 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-yellow-200 rounded-full opacity-20 blur-3xl" />

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10 relative">
            {/* Kiri: Penjelasan */}
            <div className="flex-1 text-gray-800 space-y-6">
              <h2 className="text-3xl font-bold leading-snug">
                Arti dan <span className="text-pink-600">Filosofi Logo</span>
              </h2>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-center flex flex-row font-semibold text-yellow-600">
                    <Sun className="mr-5 w-5" />
                    Kuning
                  </p>
                  <p className="text-gray-700">
                    Warna cerah dan hangat yang melambangkan{" "}
                    <strong>kebahagiaan</strong>, <strong>optimisme</strong>,
                    dan <strong>energi positif</strong>.
                  </p>
                </div>

                <div>
                  <p className="text-sm text-center flex flex-row font-semibold text-sky-500">
                    <Droplet className="mr-5 w-5" />
                    Biru Muda
                  </p>
                  <p className="text-gray-700">
                    Warna yang menyenangkan, melambangkan{" "}
                    <strong>kesegaran</strong>, <strong>kegembiraan</strong>,
                    dan <strong>kemurnian</strong>.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="italic text-gray-600">
                    Keindahan alam Kabandungan — mentari terbit sebagai harapan,
                    air sebagai sumber kehidupan, dan tanaman sebagai simbol
                    pertumbuhan serta koneksi — menjadi satu kesatuan filosofi.
                  </p>
                  <p className="text-pink-600 font-medium mt-1">
                    "To nurture, to preserve."
                  </p>
                </div>
              </div>
            </div>

            {/* Kanan: Logo */}
            <div className="flex-1 flex justify-center">
              <img
                src="https://ik.imagekit.io/goldiron/Logo.png?updatedAt=1751459390218"
                alt="Logo KKN"
                className="w-64 md:w-80  rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  activeTab === tab.key
                    ? "bg-pink-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-pink-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Anggota */}
        <section>
          <h3 className="text-center text-xl font-bold text-pink-700 mb-6">
            {tabs.find((t) => t.key === activeTab)?.label}
          </h3>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {anggota[activeTab].map((orang, i) => (
              <CardAnggota key={i} {...orang} />
            ))}
          </div> */}

          <div className="flex flex-col items-center px-4 sm:px-6 py-6 gap-6">
            {anggota[activeTab].map((orang, i) => (
              <CardAnggota
                key={i}
                {...orang}
                className="w-full max-w-xs sm:max-w-sm"
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
