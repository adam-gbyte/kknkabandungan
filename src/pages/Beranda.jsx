// Beranda.jsx

import Footer from "../components/Footer";

export default function Beranda() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-b from-white to-blue-50">
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
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://ik.imagekit.io/goldiron/Emilia.jpeg?updatedAt=1751460561852"
            alt="Ilustrasi Kegiatan KKN"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
