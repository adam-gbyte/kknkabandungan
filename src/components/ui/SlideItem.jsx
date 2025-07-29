export default function SlideItem({ label, title, content, child }) {
  switch (label) {
    case "pertama":
      return (
        <>
          <div className="relative overflow-hidden bg-gradient-to-br min-h-[500px] md:min-h-[400px] from-blue-100 to-white backdrop-blur-md rounded-2xl shadow-xl md:p-8 text-center mx-auto border transition max-w-full md:max-w-5xl flex flex-col justify-center">
            {/* Logo */}
            <div className="absolute top-5 right-10 flex space-x-4">
              <img
                src="/public/Logo-logo.png"
                alt="Logo 1"
                className="h-15 md:h-20"
              />
            </div>
            {/* Text Content */}
            <div className="mt-20 max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-blue-800 underline decoration-red-500">
                {title}
              </h1>
              <h2 className="text-2xl md:text-4xl font-mono font-bold text-black mt-2">
                Nusa Putra
              </h2>
              <div className="mt-10 border-t-2 border-blue-900 w-1/2 mx-auto pt-4">
                <p className="text-gray-600 italic text-sm md:text-lg">
                  {content}
                </p>
              </div>
            </div>
          </div>
        </>
      );

    case "kedua":
      return (
        <div className="bg-yellow-50 min-h-[500px] md:min-h-[400px] border-l-8 border-yellow-400 p-10 rounded-md shadow">
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
