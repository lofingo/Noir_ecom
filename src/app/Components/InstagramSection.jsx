"use client";
import { useEffect, useRef } from "react";

const images = [
  "https://picsum.photos/id/21/300/200", // Coffee and workspace
  "https://picsum.photos/id/31/300/200", // Living room with sofa
  "https://picsum.photos/id/42/300/200", // Kitchen and dining area
  "https://picsum.photos/id/58/300/200", // Bedroom
  "https://picsum.photos/id/86/300/200", // Modern lounge chairs
  "https://picsum.photos/id/112/300/200", // Dining table
  "https://picsum.photos/id/149/300/200", // Office desk and chair
  "https://picsum.photos/id/180/300/200", // Vintage chair and lamp
  "https://picsum.photos/id/275/300/200", // Modern living room
  "https://picsum.photos/id/284/300/200"  // Workspace with monitor
];

export default function InstagramSection() {
  const scrollRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          // Reset to start when reaching end
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by one card
          scrollRef.current.scrollBy({ left: clientWidth / 2, behavior: "smooth" });
        }
      }
    }, 3000); // every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-12 px-6">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-8">
        @Noirfurniture_
      </h2>

      {/* Image Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scrollbar-hide scroll-smooth"
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative min-w-[180px] sm:min-w-[220px] md:min-w-[260px] h-[220px] rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src={src}
              alt={`post-${idx}`}
              className="w-full h-full object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
