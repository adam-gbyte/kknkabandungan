import React, { useState } from "react";

export default function Tabs({ tabs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

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
      <div className="p-2 bg-white border border-t-0 rounded-b-lg shadow">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}
