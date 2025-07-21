// Beranda.jsx

import Footer from "../components/Footer";

export default function Beranda() {
  return (
    <>
      <div className="min-h-screen shadow-xl flex flex-col md:flex-row items-center justify-between p-5 bg-gradient-to-b rounded-2xl from-white to-blue-50">
        {/* Kiri: Teks */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-blue-700 leading-tight drop-shadow-sm">
            Selamat Datang di <br /> Website KKN Kabandungan
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Temukan informasi, dokumentasi, dan laporan kegiatan KKN kami di
            Desa Kabandungan. Kami hadir untuk memberikan kontribusi nyata bagi
            masyarakat.
          </p>
          <div className="mt-6">
            <a
              href="/profil"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Kenali Tim Kami
            </a>
          </div>
        </div>

        {/* Kanan: Ilustrasi atau Gambar */}
        <div className="mt-10 flex justify-center">
          <img
            src="https://ik.imagekit.io/goldiron/KEGIATAN/SENIN-07-JULI-2025/1.jpeg?updatedAt=1751934115246"
            alt="KKN kami"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
