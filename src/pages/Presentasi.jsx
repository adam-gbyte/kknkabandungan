import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Sparkle } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderItems = [
  {
    label: "pertama",
    title: "Pemantapan Karir",
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

function SlideItem({ label, title, content, child }) {
  switch (label) {
    case "pertama":
      return (
        <div className="bg-gradient-to-br min-h-[500px] md:min-h-[400px] from-blue-100 to-white backdrop-blur-md rounded-2xl shadow-xl md:p-8 text-center mx-auto border transition max-w-full md:max-w-5xl flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-600">{title}</h2>
          <p className="text-lg mt-4 italic text-gray-700">{content}</p>
        </div>
      );

    case "kedua":
      return (
        <div className="bg-yellow-50 min-h-[500px] md:min-h-[400px] border-l-8 border-yellow-400 p-10 rounded-md shadow">
          <h2 className="text-3xl font-semibold text-yellow-700">{title}</h2>
          <p className="text-base text-gray-800 mt-3 leading-relaxed">
            {content}
          </p>
          {child && (
            <ul className="mt-6 space-y-2 text-left list-disc list-inside text-gray-800 text-base md:text-lg">
              {child.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      );

    case "ketiga":
      return (
        <div className="bg-black min-h-[500px] md:min-h-[400px] text-white p-10 flex flex-col items-center justify-center rounded-xl">
          <h2 className="text-2xl font-medium text-green-400 uppercase tracking-wide">
            {title}
          </h2>
          <p className="text-lg mt-2 font-light text-gray-200">{content}</p>
        </div>
      );

    default:
      return (
        <div className="bg-gray-100 p-6 text-center rounded-md">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">{content}</p>
        </div>
      );
  }
}

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
    <div className="relative min-h-[80vh] px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 flex justify-center items-center gap-2">
        <Sparkle className="w-5 h-5 md:w-6 md:h-6" />
        Pemantapan Karir
      </h2>

      <div className="relative max-w-3xl md:max-w-7xl h-full mx-auto">
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
