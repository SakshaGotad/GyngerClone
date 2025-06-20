import React from "react";
import { Check } from "lucide-react"; // or use your own SVG if not using lucide

const FeatureCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-72 p-6">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-700 text-lg font-medium">Acme LLC</h3>
        <span className="text-gray-500 text-lg font-semibold">$80,000</span>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-green-200 p-1 rounded-md">
            <Check className="w-4 h-4 text-green-700" />
          </div>
          <span className="text-gray-800 font-medium">Pay monthly</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-green-200 p-1 rounded-md">
            <Check className="w-4 h-4 text-green-700" />
          </div>
          <span className="text-gray-800 font-medium">Net terms</span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-white border border-gray-200 text-gray-800 font-medium py-2 rounded-lg hover:shadow-sm transition">
        Send offer
      </button>
    </div>
  );
};

export default FeatureCard;
