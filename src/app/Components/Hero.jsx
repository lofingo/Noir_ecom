"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#111] to-black flex items-center justify-between px-10 lg:px-20 overflow-hidden">
      
      {/* Background Watermark */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="noir absolute bottom-[-20%] left-1/2 -translate-x-1/2 text-[40vh] lg:text-[55vh] font-bold text-white tracking-tight select-none leading-none"
      >
        noir
      </motion.h1>

      {/* Left Content */}
      <div className="max-w-[65rem] z-10">
        {/* Headline */}
    <motion.h2
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="text-5xl lg:text-[7rem]  font-semibold leading-tight text-white relative"
>
  <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
    Beautiful Sofas
  </span>
  <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
    for Beautiful
  </span>
  <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
    Living Spaces
  </span>
</motion.h2>



        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 pr-[28rem] text-gray-400 text-base lg:text-lg leading-relaxed"
        >
          Discover stylish, comfortable sofas designed to transform your living
          space with elegance, warmth, and timeless charm for every home.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255,255,255,0.6)",
          }}
          className="mt-8 px-14 py-3 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
        >
          Explore <span className="text-lg">→</span>
        </motion.button>
      </div>

      {/* Right Content (Image + Badge) */}
      <div className="relative z-10 mr-25rem">
        {/* Sofa Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/images/Yellow_sofa.png" // replace with your sofa image
            alt="Yellow Sofa"
            width={650}
            height={700}
            className="drop-shadow-2xl"
          />
        </motion.div>

        {/* Badge */}
 <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
  whileHover={{ scale: 1.1, rotate: 5 }}
  className="absolute top-4 -right-10 w-32 h-32 bg-gray-200 flex items-center justify-center text-black font-bold text-sm lg:text-base shadow-lg"
  style={{
    clipPath:
      "polygon(50% 0%, 65% 5%, 80% 0%, 95% 5%, 100% 20%, 95% 35%, 100% 50%, 95% 65%, 100% 80%, 95% 95%, 80% 100%, 65% 95%, 50% 100%, 35% 95%, 20% 100%, 5% 95%, 0% 80%, 5% 65%, 0% 50%, 5% 35%, 0% 20%, 5% 5%, 20% 0%, 35% 5%)",
  }}
>
  100% Comfortable
</motion.div>


      </div>
    </section>
  );
}
