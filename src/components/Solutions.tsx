import React from 'react';
import Image from 'next/image'; // Optional if using Image

const solutionCards = [
  {
   
    bullets: ['Automate payments', 'Real-time insights', 'Custom reports'],
    icon: '/image copy.png',
    link: '#',
  },
  {
    
    bullets: ['Flexible terms', 'Fast approval', 'Low interest'],
    icon: '/image copy.png',
    link: '#',
  },
  {
   
    bullets: ['Predict growth', 'Align spend', 'Dynamic budgeting'],
    icon: '/image copy.png',
    link: '#',
  },
  {
   
    bullets: ['Recurring invoices', 'Revenue analytics', 'Fraud detection'],
    icon: '/image copy.png',
    link: '#',
  },
];

const Solutions = () => {
  return (
    <section className="py-24 text-white">
      <div className="max-w-6xl  bg-[#042c2d] min-h-[750px] border-0 rounded-3xl  mx-auto p-20">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 mt-8 flex-wrap gap-6">
          <h2 className="text-4xl font-light">Find Your Solution</h2>
          <a
            href="#"
            className="bg-[#3c764f] text-[#0e0d0d] px-6 py-3 rounded-md font-medium shadow hover:bg-gray-100 transition"
          >
            Talk to us
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionCards.map((item, index) => (
            <div
              key={index}
              className="bg-[#075152] text-[#ffffff] min-h-[400px]  p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              {/* Circle Icon */}
              <div className="w-16 h-16 rounded-full bg-[#453] flex items-center justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.link}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

             

              {/* Bullet Points */}
              <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={item.link}
                className="inline-block text-sm font-medium text-[#fff] hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
