import React from "react";
import LottieAnimation from "./Lottieanimation";
import { getData } from "@/lib/getData";

interface Animation {
  title: string;
  href: string;
}

interface CardData {
  card_title: string;
  card_description: string;
  svg_animation: Animation;
  _metadata: {
    uid: string;
  };
}

interface BlueprintEntry {
  section_title: string;
  blueprint_cards: {
    card_data: CardData[];
  };
}

export default async function Blueprint() {

  const response: BlueprintEntry[]= await getData({
    contentType: "blueprint_section",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  })

  const blueprint = response?.[0];
  const cards = blueprint?.blueprint_cards?.card_data ?? [];
  const sectionTitle = blueprint?.section_title ?? "Blueprint Section";

  
  return (
    <section className="h-[900px] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex flex-row justify-between items-center mb-12">
          <h2 className="text-5xl text-center -z-10">
            {sectionTitle.split("lasting")[0]}
            <span className="italic">lasting</span> growth
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
          {cards.map((card) => (
            <div
              key={card._metadata.uid}
              className="bg-[#f3efef] rounded-lg p-6 flex flex-col items-start text-left min-h-[550px]"
            >
              <h3 className="text-2xl font-light mt-4">{card.card_title}</h3>
              <p className="text-gray-600 mt-2">{card.card_description}</p>
              <div className="w-100 h-100 mt-6">
                <LottieAnimation url={card.svg_animation.href} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


