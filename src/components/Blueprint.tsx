import React from "react";
import LottieAnimation from "./Lottieanimation";

const dummyData = [
  {
    title: "Control burn",
    description: "Smooth out chunky payables, conserve your working capital, and invest where it matters most.",
  },
  {
    title: "Accelerate revenues",
    description: "Streamline receivables and close cash gaps without compromising customer relationships.",
  },
  {
    title: "Grow with confidence",
    description: "Embed Gynger across your financial workflows to optimize key performance indicators and achieve lasting success.",
  },
];

const Blueprint = () => {
  return (
    <section className="h-[900px]  py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex flex-row justify-between items-center mb-12">
          <h2 className="text-5xl text-center">
            Your blueprint for <span className="italic">lasting growth</span>
          </h2>
          <button className="group absolute right-0 bottom-0 inline-flex items-center text-gray-500 font-medium hover:text-gray-900 transition">
            Talk to us
            <svg
              className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dummyData.map((card, index) => (
            <div
              key={index}
              className="bg-[#f3efef] rounded-lg p-6 flex flex-col items-start text-left min-h-[550px]"
            >
              <h3 className="text-2xl font-light text-left mt-4">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
              <div className="w-100 h-100 mt-30 pt-4">
                <LottieAnimation />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blueprint;
