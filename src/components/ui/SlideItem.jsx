export default function SlideItem({ label, title, content, child }) {
  switch (label) {
    case "pertama":
      return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-white min-h-[400px] md:min-h-[500px] rounded-2xl px-6 md:px-25 py-25 md:py-20 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6">
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

          {/* Foto + Nama */}
          <div className="flex-1 flex flex-col items-center justify-center mt-8 md:mt-0">
            <img
              src="https://ik.imagekit.io/goldiron/PRESENTASI/WhatsApp_Image_2025-07-29_at_15.39.50-removebg-preview.png?updatedAt=1753778659195"
              alt="Foto Adam dan Gelar"
              className="h-[280px] md:h-[340px] object-contain drop-shadow-2xl transition-transform hover:scale-105"
            />
            {/* Garis tipis dekoratif */}
            <div className="w-36 h-[1px] bg-gray-400 mt-4 mb-2"></div>
            {/* Nama */}
            <p className="text-base md:text-xl font-semibold text-gray-800 tracking-wide">
              Gelar dan Adam
            </p>
          </div>
        </div>
      );

    case "kedua":
      return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-white min-h-[400px] md:min-h-[500px] rounded-2xl px-6 md:px-10 py-16 md:py-20 flex items-center justify-center text-center md:text-left">
          <div className="max-w-4xl w-full">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 underline decoration-yellow-400">
              {title}
            </h2>

            <p className="text-base md:text-lg text-gray-800 mt-4 leading-relaxed">
              {content}
            </p>

            {child && (
              <ol className="mt-6 space-y-3 text-left text-gray-800 text-base md:text-lg">
                {child.map((point, idx) => (
                  <li
                    key={idx}
                    className="bg-yellow-100 px-4 py-2 rounded-md shadow-sm flex gap-3 items-start"
                  >
                    <span className="font-bold text-yellow-700">
                      {idx + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      );

    case "ketiga":
      return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-white min-h-[400px] md:min-h-[500px] rounded-2xl px-2 md:px-10 py-5 flex items-center justify-center text-center md:text-left">
          <div className="max-w-4xl w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 uppercase tracking-wide underline decoration-green-300">
              {title}
            </h2>

            <p className="text-lg md:text-xl mt-4 font-light text-gray-700 leading-relaxed">
              {content}
            </p>

            {child && (
              <ol className="mt-2 space-y-2 text-left text-gray-800 text-base md:text-lg">
                {child.map((point, idx) => (
                  <li
                    key={idx}
                    className="bg-green-100 px-5 py-3 rounded-lg shadow transition-all flex items-start gap-2"
                  >
                    <span className="font-bold text-green-700">{idx + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      );

    case "keempat":
      return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-white min-h-[400px] md:min-h-[500px] rounded-2xl px-2 md:px-10 py-5 flex items-center justify-center text-center md:text-left">
          <div className="max-w-4xl w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 uppercase tracking-wide underline decoration-green-300">
              {title}
            </h2>

            <p className="text-lg md:text-xl mt-4 font-light text-gray-700 leading-relaxed">
              {content}
            </p>

            {child && (
              <ol className="mt-2 space-y-2 text-left text-gray-800 text-base md:text-lg">
                {child.map((point, idx) => (
                  <li
                    key={idx}
                    className="bg-green-100 px-5 py-3 rounded-lg shadow transition-all flex items-start gap-2"
                  >
                    <span className="font-bold text-green-700">{idx + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      );

    case "kelima":
      return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-white min-h-[400px] md:min-h-[500px] rounded-2xl px-2 md:px-10 py-5 flex items-center justify-center text-center md:text-left">
          <div className="max-w-4xl w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 uppercase tracking-wide underline decoration-green-300">
              {title}
            </h2>

            <p className="text-lg md:text-xl mt-4 font-light text-gray-700 leading-relaxed">
              {content}
            </p>

            {child && (
              <ol className="mt-2 space-y-2 text-left text-gray-800 text-base md:text-lg">
                {child.map((point, idx) => (
                  <li
                    key={idx}
                    className="bg-green-100 px-5 py-3 rounded-lg shadow transition-all flex items-start gap-2"
                  >
                    <span className="font-bold text-green-700">{idx + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      );

    case "keenam":
      return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-100 min-h-[400px] md:min-h-[500px] rounded-3xl px-4 md:px-12 py-10 flex items-center justify-center text-center md:text-left">
          <div className="max-w-4xl w-full space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-green-600 tracking-wide uppercase underline underline-offset-4 decoration-green-400">
              {title}
            </h2>

            <p className="text-base md:text-xl font-light text-gray-800 leading-relaxed">
              {content}
            </p>
          </div>
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
