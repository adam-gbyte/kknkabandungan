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
    title: "Mimpi Saya",
    content: "Menjadi Full Stack Developer yang membangun solusi bermanfaat.",
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
    <div className="relative min-h-[50vh] px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 flex justify-center items-center gap-2">
        <Sparkle className="w-5 h-5 md:w-6 md:h-6" />
        Pemantapan Karir
      </h2>

      <div className="relative max-w-3xl md:max-w-7xl mx-auto">
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
