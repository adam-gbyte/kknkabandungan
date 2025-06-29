import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import Galeri from './pages/Galeri';
import Profil from './pages/Profil';
import Laporan from './pages/Laporan';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/laporan" element={<Laporan />} />
        </Routes>
      </div>
    </>
  );
}
