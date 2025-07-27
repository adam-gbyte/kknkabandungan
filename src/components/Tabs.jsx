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
              className={`group flex items-center p-2 pl-4 pr-2 gap-2 text-sm cursor-pointer font-medium rounded-md transition-all duration-200
                ${
                  activeIndex === index
                    ? "bg-white gap-2 shadow-lg text-blue-600"
                    : "bg-gray-100 text-gray-500 hover:text-blue-500 hover:bg-blue-50/50"
                }`}
            >
              <span className="transition-all group-hover:text-blue-900">
                {tab.icon}
              </span>
              <span
                className={`
                  transition-all duration-300 ease-in-out origin-left
                  group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-2 group-hover:text-gray-500
                  ${activeIndex === index ? "max-w-[200px] opacity-100 pr-2" : "max-w-0 opacity-0 overflow-hidden"}
                `}
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
