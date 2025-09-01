"use client";
import { useState } from "react";
import { MoveLeft, Star, MoveRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "White Pearl Sofa",
    price: "€200.00",
    discount: "-26%",
    rating: "4.8",
    reviews: "700",
    image: "/images/arm-chair-removebg-preview.png",
  },
  {
    id: 2,
    name: "Off White Sofa",
    price: "€200.00",
    discount: "-30%",
    rating: "4.8",
    reviews: "700",
    image: "/images/kam-idris-removebg-preview.png",
  },
  {
    id: 3,
    name: "Blue mash Sofa",
    price: "€285.00",
    discount: "-18%",
    rating: "4.8",
    reviews: "700",
    image: "/images/red-armchair-removebg-preview.png",
  }, {
    id: 4,
    name: "White Pearl Sofa",
    price: "€200.00",
    discount: "-26%",
    rating: "4.8",
    reviews: "700",
    image: "/images/arm-chair-removebg-preview.png",
  },
  {
    id: 5,
    name: "Off White Sofa",
    price: "€200.00",
    discount: "-30%",
    rating: "4.8",
    reviews: "700",
    image: "/images/kam-idris-removebg-preview.png",
  },
  {
    id: 6,
    name: "Blue mash Sofa",
    price: "€285.00",
    discount: "-18%",
    rating: "4.8",
    reviews: "700",
    image: "/images/red-armchair-removebg-preview.png",
  },
];

export default function PremiumCollection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full bg-[#1E1E20] py-10 px-6 relative">
      {/* Header + Arrows */}
      <div className="flex items-center justify-between mb-8">
       
        <h2 className="text-4xl sm:text-5xl lg:text-[6rem]  text-white text-center sm:text-left">
             Premium Collection
        </h2>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 bg-white shadow hover:bg-gray-100 transition"
          >
            <MoveLeft className="w-8 h-8 text-gray-700" />
           
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 bg-[#fbbf24] shadow hover:bg-yellow-400 transition"
          >
            <MoveRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="min-w-full sm:min-w-[50%] md:min-w-[18.33%] px-3"
            >
              <div className="relative bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-[#fbbf24] text-black text-xs font-semibold px-2 py-1 rounded-full">
                  {p.discount}
                </span>

                {/* Product Image */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-[200px] h-[200px] object-contain mb-4"
                />

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-black text-center">
                  {p.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center text-sm text-gray-600 mt-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  {p.rating} ({p.reviews} reviews)
                </div>

                {/* Price */}
                <p className="text-lg font-bold text-black">{p.price}</p>

                {/* Buttons */}
                <div className="flex gap-2 mt-4 w-full">
                  <button className="flex-1 border border-gray-300 text-sm font-medium py-2 rounded-full hover:bg-gray-100 transition">
                    Add to cart
                  </button>
                  <button className="flex-1 bg-black text-white text-sm font-medium py-2 rounded-full hover:bg-gray-800 transition">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 h-[2px] w-full bg-gray-700 relative overflow-hidden rounded">
        <div
          className="h-[2px] bg-white transition-all duration-500 ease-in-out"
          style={{
            width: `${(100 / products.length) * (index + 1)}%`,
          }}
        />
      </div>
    </section>
  );
}
