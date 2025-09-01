"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Example data
const categoriesData = [
  { id: 1, title: "For Bedroom", image: "/images/toa-heftiba.jpg" },
  { id: 2, title: "For Office room", image: "/images/spacejoy.jpg" },
  { id: 3, title: "For Living room", image: "/images/ryan-riggin.jpg" },
  { id: 4, title: "For Dining room", image: "/images/nathan-fertig.jpg" },
  { id: 5, title: "For Living room", image: "/images/lighting-sofa.jpg" },
  { id: 6, title: "For Living room", image: "/images/kam-idris.jpg" },
  { id: 7, title: "For Bedroom room", image: "/images/bed.jpg" },
  { id: 8, title: "For Bedroom", image: "/images/toa-heftiba.jpg" },
  { id: 9, title: "For Office room", image: "/images/spacejoy.jpg" },
  { id: 10, title: "For Living room", image: "/images/ryan-riggin.jpg" },
  { id: 11, title: "For Dining room", image: "/images/nathan-fertig.jpg" },
  { id: 12, title: "For Living room", image: "/images/lighting-sofa.jpg" },
  { id: 13, title: "Extra Future Item", image: "/images/extra.jpg" },
];

// ✅ Always show only latest 12 items
const categories = categoriesData.slice(-12);

export default function BestCategories() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full min-h-screen pb-6 bg-white py-10 px-6 lg:px-20 relative">
      {/* Header + Arrows */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-6">
        <h2 className="text-4xl sm:text-5xl lg:text-[6rem] font-semibold text-black text-center sm:text-left">
          Best Categories
        </h2>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-8 h-8 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-[#fbbf24] shadow hover:bg-yellow-400 transition"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="min-w-full sm:min-w-1/2 md:min-w-1/3 lg:min-w-1/4 xl:min-w-1/2 px-3"
            >
              {/* ✅ Rectangle Card (fixed height) */}
              <div className="relative h-[300px] md:h-[350px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg bg-white">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-black/70 backdrop-blur text-white text-sm sm:text-[15px] font-medium px-4 py-1 rounded-full shadow">
                    {cat.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 h-[3px] w-full bg-gray-200 relative overflow-hidden rounded">
        <div
          className="h-[3px] bg-black transition-all duration-500 ease-in-out"
          style={{
            width: `${(100 / categories.length) * (index + 1)}%`,
          }}
        />
      </div>
    </section>
  );
}
