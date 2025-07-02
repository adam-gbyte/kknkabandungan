import { Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="shadow-lg max-w-7xl mx-auto justify-center bg-white mt-5 rounded-xl py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-gray-600">
        {/* Kiri: Teks */}
        <p className="text-sm text-center sm:text-left">
          C {new Date().getFullYear()} KKN Kabandungan. All rights reserved.
        </p>

        {/* Kanan: Icon Sosial */}
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <a
            href="https://instagram.com/kknkabandungan"
            target="_blank"
            className="hover:text-pink-600 transition"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>

          <a
            href="https://tiktok.com/@kknkabandungan"
            target="_blank"
            className="hover:text-black transition"
            aria-label="Music Link"
          >
            <Music2 size={24} />
          </a>

          <span className="text-sm hidden sm:inline">@kknkabandungan</span>
        </div>
      </div>
    </footer>
  );
}
