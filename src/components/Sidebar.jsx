import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Image, User, FileText } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/', icon: <Home size={18} /> },
    { name: 'Galeri', path: '/galeri', icon: <Image size={18} /> },
    { name: 'Profil', path: '/profil', icon: <User size={18} /> },
    { name: 'Laporan', path: '/laporan', icon: <FileText size={18} /> },
  ];

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[80%] backdrop-blur-md bg-white/20 dark:bg-black/30 border border-white/30 shadow-xl rounded-xl px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-100 tracking-wide drop-shadow-sm">
          Kabandungan
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-white/20 text-blue-200 font-semibold'
                    : 'hover:bg-white/10 hover:text-blue-100'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 mt-3' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-2 text-white mt-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-150 ${
                  location.pathname === link.path
                    ? 'bg-white/20 text-blue-200 font-semibold'
                    : 'hover:bg-white/10 hover:text-blue-100'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
