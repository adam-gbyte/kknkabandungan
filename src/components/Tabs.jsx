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
    <div className="w-full max-w-5xl mx-auto">
      {/* Tab Header */}
      <div className="overflow-x-auto whitespace-nowrap bg-gray-100 rounded-t-lg p-3">
        <div className="inline-flex space-x-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeIndex === index
                  ? "bg-white shadow text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-2 bg-white border rounded-b-lg shadow">
        {tabs[activeIndex]?.content}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`px-4 py-2 rounded font-semibold ${
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
          className={`px-4 py-2 rounded font-semibold ${
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
