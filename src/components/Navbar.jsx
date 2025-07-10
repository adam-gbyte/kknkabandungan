import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Image, User, FileText, Briefcase } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Beranda", path: "/", icon: <Home size={18} /> },
    { name: "Galeri", path: "/galeri", icon: <Image size={18} /> },
    { name: "Profil", path: "/profil", icon: <User size={18} /> },
    { name: "Laporan", path: "/laporan", icon: <FileText size={18} /> },
    {
      name: "Penguatan Karir",
      path: "/penguatan-karir",
      icon: <Briefcase size={18} />,
    },
  ];

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-20 w-[95%] md:w-[80%] backdrop-blur-sm bg-white dark:bg-black/10 border border-white/30 shadow-xl rounded-xl px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo atau Nama */}
        <Link
          to="/"
          className="text-xl font-bold text-black tracking-wide drop-shadow-sm"
        >
          <img
            src="https://ik.imagekit.io/goldiron/Logo.png?updatedAt=1751459390218"
            alt="Logo KKN"
            className="w-10 mx-auto drop-shadow-xl"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-black text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-black/40 text-white font-semibold"
                    : "hover:bg-black/35 hover:text-white"
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
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-80 mt-3" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 text-black mt-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-150 ${
                  location.pathname === link.path
                    ? "bg-black/40 text-white font-semibold"
                    : "hover:bg-black/35 hover:text-white"
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
