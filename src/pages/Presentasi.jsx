import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Sparkle } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from "../components/ui/SlideItem";

const sliderItems = [
  {
    label: "pertama",
    title: "WEB Pemantapan Karir",
    content: "Oleh : Adam Gumilang",
  },
  {
    label: "kedua",
    title: "Tujuan WEB Pemantapan Karir dibuat?",
    content:
      "Web Pemantapan Karir ini dibuat sebagai sarana interaktif untuk membantu siswa mengenali minat, potensi, dan arah karier yang sesuai dengan kepribadian serta keterampilan mereka.",
    child: [
      "Tujuan dari Web Pemantapan Karir adalah memberikan panduan kepada siswa dalam merencanakan masa depan karier secara lebih terarah dan sesuai dengan potensi diri.",
      "Web ini dirancang untuk memfasilitasi siswa dalam mengeksplorasi pilihan karier melalui pendekatan yang menyenangkan dan mudah diakses.",
    ],
  },
  {
    label: "ketiga",
    title: "Cara kerja WEB Pemantapan Karir",
    content:
      "Siswa atau pengguna akan diminta mengisi berbagai pertanyaan atau form input berdasarkan:",
    child: [
      "Minat dan Hobi",
      "Keterampilan dan Skill",
      "Kepribadian dan Gaya Belajar",
      "Aktivitas Sekolah dan Nonformal",
      "Referensi Karier",
    ],
  },
  {
    label: "keempat",
    title: "Data Diproses",
    content:
      "Siswa atau pengguna akan diminta mengisi berbagai pertanyaan atau form input berdasarkan:",
    child: [
      "Web akan mengumpulkan dan menyimpan semua jawaban.",
      "Sistem dari AI GEMINI kemudian akan menganalisis pola dari jawaban tersebut.",
    ],
  },
  {
    label: "kelima",
    title: "Hasil Rekomendasi Ditampilkan",
    content: "Web akan menampilkan hasil pemantapan karier berupa:",
    child: [
      "Rekomendasi jalur karier (misal: Dokter, Programmer, Guru, dll)",
      "Alasan mengapa rekomendasi tersebut cocok",
      "Kadang disertai dengan sumber inspirasi atau referensi lanjutan",
    ],
  },
  {
    label: "keenam",
    title: "Terima Kasih",
    content: "Oleh : Adam Gumilang",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white p-2 md:p-3 rounded-full shadow-lg z-10 transition duration-200"
  >
    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white p-2 md:p-3 rounded-full shadow-lg z-10 transition duration-200"
  >
    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
  </button>
);

export default function Presentasi() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative min-h-[49vh]">
      {/* <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 flex justify-center items-center gap-2">
        <Sparkle className="w-5 h-5 md:w-6 md:h-6" />
        Pemantapan Karir
      </h2> */}

      <div className="md:hidden flex flex-col items-center justify-center h-screen px-6 animate-fadeIn">
        <div className="bg-white shadow-xl rounded-xl p-6 border border-red-200 max-w-md w-full text-center">
          <div className="text-red-500 text-5xl mb-3">⚠️</div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Akses Terbatas di Perangkat Mobile
          </h2>
          <p className="text-gray-600">
            Presentasi ini hanya bisa dilihat melalui{" "}
            <span className="font-semibold text-blue-600">
              mode Desktop atau Laptop
            </span>
            . Silakan buka dari perangkat dengan layar yang lebih besar.
          </p>
        </div>
      </div>

      <div className="hidden md:block relative max-w-3xl md:max-w-7xl mx-auto">
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <div key={index} className="p-2">
              <SlideItem
                key={index}
                label={item.label}
                title={item.title}
                content={item.content}
                child={item.child}
              />
            </div>

            // <div key={index} className="p-2">
            //   <div className={item.style}>
            //     <h3 className={item.titleStyle}>{item.title}</h3>
            //     <p className={item.contentStyle}>{item.content}</p>
            //   </div>
            // </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
