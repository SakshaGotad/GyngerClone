'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OfferCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSendOffer = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500); // simulate sending delay
  };

  return (
    <div className="bg-white rounded-2xl shadow-md w-72 p-6 transition-all duration-500">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-700 text-lg font-medium">Acme LLC</h3>
        <span className="text-gray-500 text-lg font-semibold">$80,000</span>
      </div>

      {/* Conditional Body */}
      {!isSent ? (
        <div className="flex flex-col gap-3">
          {/* Offer Options */}
          <OfferOption label="Pay monthly" />
          <OfferOption label="Net terms" />

          {/* Button or Loader */}
          <div className="mt-6">
            {!isLoading ? (
              <button
                onClick={handleSendOffer}
                className="w-full bg-white border border-gray-200 text-gray-800 font-medium py-2 rounded-lg hover:shadow-sm transition"
              >
                Send offer
              </button>
            ) : (
              <div className="w-full py-2 flex justify-center">
                <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      ) : (
        // ✅ Success State: Green Tick
        <div className="flex justify-center items-center h-32">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center"
          >
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
              className="w-6 h-6 text-green-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const OfferOption = ({ label }: { label: string }) => (
  <div className="flex items-center space-x-3">
    <div className="bg-green-200 p-1 rounded-md">
      <svg
        className="w-4 h-4 text-green-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <span className="text-gray-800 font-medium">{label}</span>
  </div>
);

export default OfferCard;
