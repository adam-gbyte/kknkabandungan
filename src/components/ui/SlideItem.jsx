export default function SlideItem({ label, title, content, child }) {
  switch (label) {
    case "pertama":
      return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-white min-h-[400px] md:min-h-[500px] rounded-2xl shadow-2xl px-6 md:px-25 py-25 md:py-20 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6">
          {/* SVG Dekoratif */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 60"
            className="absolute bottom-0 right-0 w-80 h-15 opacity-20"
          >
            <path
              fill="none"
              stroke="#404"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M217.7 37.3a25 25 0 0 1-35.4 0l-14.6-14.6a25 25 0 0 0-35.4 0l-14.6 14.6a25 25 0 0 1-35.4 0L67.7 22.7a25 25 0 0 0-35.4 0L17.7 37.3a25 25 0 0 1-35.4 0M-17.7 22.7a25 25 0 0 1 35.4 0l14.6 14.6a25 25 0 0 0 35.4 0l14.6-14.6a25 25 0 0 1 35.4 0l14.6 14.6a25 25 0 0 0 35.4 0l14.6-14.6a25 25 0 0 1 35.4 0"
            />
          </svg>

          {/* Logo Kanan Atas */}
          <div className="absolute top-6 right-6 flex gap-4">
            <img
              src="https://ik.imagekit.io/goldiron/PRESENTASI/Logo-logo.png"
              alt="Logo"
              className="h-12 md:h-16"
            />
          </div>

          {/* Konten Kiri */}
          <div className="max-w-xl flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 underline decoration-red-500">
              {title}
            </h1>
            <h2 className="text-xl md:text-3xl font-mono font-bold text-black mt-3">
              Nusa Putra
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
              <path
                fill="#404"
                d="M450 65H130l-10-10h320l10 10zM870 65H550l10-10h320l-10 10zM500 15l35 35-35 35-35-35zM440 45H70l10-10h370l-10 10zM930 45H560l-10-10h370l10 10z"
              ></path>
            </svg>
            <div className="mt-4 text-center border-blue-900 w-2/3 mx-auto pt-4">
              <p className="text-gray-600 italic text-sm md:text-lg">
                {content}
              </p>
            </div>
          </div>

          {/* Foto Kanan */}
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <img
              src="https://ik.imagekit.io/goldiron/PRESENTASI/IMG_20250624_151033-removebg-preview.png?updatedAt=1753764365347"
              alt="Foto Adam"
              className="h-[280px] md:h-[340px] object-contain drop-shadow-2xl transition-transform hover:scale-105"
            />
            <img
              src="https://ik.imagekit.io/goldiron/PRESENTASI/IMG_4435-removebg-preview.png?updatedAt=1753764364895"
              alt="Foto Gelar"
              className="h-[280px] md:h-[340px] object-contain drop-shadow-2xl transition-transform hover:scale-105 -ml-30"
            />
          </div>
        </div>
      );

    case "kedua":
      return (
        <div className="bg-yellow-50 min-h-[500px] md:min-h-[400px] border-l-8 md:max-w-5xl border-yellow-400 p-10 md:p-8 rounded-md shadow">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-700">
            {title}
          </h2>
          <p className="text-base text-gray-800 mt-3 leading-relaxed">
            {content}
          </p>
          {child && (
            <ul className="mt-2 space-y-2 text-left list-disc list-inside text-gray-800 text-base md:text-lg">
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
