import { useState } from "react";

export default function Tabs({ tabs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (activeIndex < tabs.length - 1) setActiveIndex((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-3xl mx-auto ">
      {/* Tab Header */}
      <div className="overflow-x-auto p-4  whitespace-nowrap hide-scrollbar">
        <div className="inline-flex space-x-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center p-2 px-4 text-sm cursor-pointer font-medium bg-gray-100 rounded-md transition-all duration-200 ${
                activeIndex === index
                  ? "bg-white gap-2 shadow-lg text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              <span className="transition-opacity duration-500">
                {tab.icon}
              </span>
              <span
                className={`transition-all duration-500 ease-in-out origin-left ${
                  activeIndex === index
                    ? "opacity-100 max-w-[200px] duration-300"
                    : "opacity-0 max-w-0 overflow-hidden duration-75"
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-4 py-2 rounded-lg ">{tabs[activeIndex]?.content}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`px-4 cursor-pointer py-2 rounded font-semibold ${
            activeIndex === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {"<"} Prev
        </button>
        <button
          onClick={handleNext}
          disabled={activeIndex === tabs.length - 1}
          className={`cursor-pointer px-4 py-2 rounded font-semibold ${
            activeIndex === tabs.length - 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
}
