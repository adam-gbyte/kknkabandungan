import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Galeri from "./pages/Galeri";
import Profil from "./pages/Profil";
import Laporan from "./pages/Laporan";
import PenguatanKarir from "./pages/PenguatanKarir";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-1 pt-25 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/laporan" element={<Laporan />} />
            <Route path="/penguatan-karir" element={<PenguatanKarir />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
