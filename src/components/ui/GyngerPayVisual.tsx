import React from "react";
import { FaCheck, FaEye, FaDollarSign } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

export default function GyngerPayVisual() {
  return (
    <div className="relative w-full h-[320px] sm:h-[360px] flex justify-end pr-4">
      {/* Background Card */}
      <div className="w-[230px] h-full bg-[#d7e6e6] rounded-xl shadow-md p-4 flex flex-col justify-between z-0">
        <div>
          <p className="text-sm text-gray-600 font-medium mb-1">Acme LLC — Offer</p>
          <p className="text-2xl font-semibold text-[#1c1c1c]">$80,000</p>
        </div>

        <div className="mt-4 border-t pt-2 text-xs text-gray-600 flex justify-between">
          <span className="font-medium text-gray-600">Created</span>
          <span className="font-medium text-gray-600">Viewed</span>
        </div>

        {/* Status Buttons */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <FaEye className="text-green-600" />
            <span>Offer viewed</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaDollarSign className="text-gray-500" />
            <span>Payment received</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiCheckSquare />
            <span>Offer created</span>
          </div>
        </div>
      </div>

      {/* Floating White Card */}
      <div className="absolute left-0 top-8 w-[240px] bg-white rounded-xl shadow-xl p-4 z-10">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-semibold text-gray-700">Acme LLC</p>
          <p className="text-sm font-semibold text-gray-700">$80,000</p>
        </div>

        <div className="space-y-2 mb-4 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked
              readOnly
              className="accent-green-500 w-4 h-4"
            />
            Pay monthly
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" readOnly className="w-4 h-4" />
            Net terms
          </label>
        </div>

        <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-100 transition">
          Send offer
        </button>
      </div>
    </div>
  );
}
