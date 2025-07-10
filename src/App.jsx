import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Galeri from "./pages/Galeri";
import Profil from "./pages/Profil";
import Laporan from "./pages/Laporan";
import PenguatanKarir from "./pages/PenguatanKarir";
import GeminiTest from "./pages/GeminiTest";
import LlamaTest from "./pages/LlamaTest";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-1 pt-25 p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/laporan" element={<Laporan />} />
            <Route path="/penguatan-karir" element={<PenguatanKarir />} />
            <Route path="/gemini-test" element={<GeminiTest />} />
            <Route path="/llama-test" element={<LlamaTest />} />

            {/* Halaman tidak ditemukan */}
            <Route
              path="*"
              element={
                <div className="text-center text-gray-500">
                  Halaman tidak ditemukan
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
