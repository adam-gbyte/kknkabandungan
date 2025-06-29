import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex gap-4">
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/galeri">Galeri</Link></li>
        <li><Link to="/profil">Profil</Link></li>
        <li><Link to="/laporan">Laporan</Link></li>
      </ul>
    </nav>
  );
}
