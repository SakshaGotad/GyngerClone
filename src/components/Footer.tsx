import React from "react";
import Image from "next/image";

export default function Footer({ data }) {
  const footerSections =
    data?.footer_links?.[0]?.footer_data?.footers || [];

  const left = footerSections.find((f) => f.title === "Left side");
  const right = footerSections.find((f) => f.title === "Right side");

  return (
    <footer className="bg-[#052d2d] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-12 justify-between">
        {/* Left section */}
        <div className="flex flex-col gap-6 min-w-[200px]">
          <div className="text-2xl font-semibold">Gynger</div>
          <div className="flex flex-col text-sm gap-2 text-white/90">
            {left?.link?.map((item) => (
              <a key={item.title} href={item.href || "#"}>
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Center section */}
        <div className="flex flex-col gap-6 min-w-[200px]">
          <div className="invisible">spacer</div>
          <div className="flex flex-col text-sm gap-2 text-white/90">
            {right?.link?.map((item) => (
              item.href ? (
                <a key={item.title} href={item.href}>{item.title}</a>
              ) : (
                <span key={item.title}>{item.title}</span>
              )
            ))}
          </div>
        </div>

        {/* Right section - Newsletter */}
        <div className="flex flex-col gap-4 flex-1 max-w-sm">
          <p className="text-sm text-white/80">
            Check out the latest updates to our products here. Stay up to date
            on all changes by subscribing to our Newsletter.
          </p>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="Input your email*"
              className="bg-[#004342] text-white placeholder:text-white/50 px-4 py-2 rounded border border-white/10 w-full focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6">
          <Image src="/badges/builtin.png" alt="BuiltIn" width={60} height={60} />
          <Image src="/badges/aicpa.png" alt="AICPA" width={60} height={60} />
        </div>
        <p className="text-sm text-white/70 text-center md:text-right">
          © 2025 Gynger.io — 157 W 18th Street, Floor 5, New York, NY 10011
        </p>
      </div>
    </footer>
  );
}
