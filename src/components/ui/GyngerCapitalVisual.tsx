// components/ui/GyngerCapitalVisual.tsx
"use client";

import Image from "next/image";

export default function GyngerCapitalVisual() {
  return (
    <div className="relative w-[350px] h-[220px]">
      {/* Background Card */}
      <Image
        src="/image copy 4.png"
        alt="Capital Card"
        fill
        className="rounded-xl shadow-md object-cover "
      />

      {/* Overlay Card */}
      <div className="absolute bottom-[-40px] top-[90px] left-[20px] h-[200px] transform -translate-x-1/2 w-[260px] bg-[#ffffff6f] rounded-xl shadow-lg px-5 py-4 text-center">
        <p className="text-sm text-gray-500 font-medium mb-1 flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Available capital
        </p>
        <p className="text-2xl font-semibold text-gray-800">$400,000.00</p>
        <div className="h-2 bg-gray-200 rounded-full mt-3">
          <div className="h-full bg-green-400 rounded-full w-[60%]" />
        </div>
      </div>
    </div>
  );
}
