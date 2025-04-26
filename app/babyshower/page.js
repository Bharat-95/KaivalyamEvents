"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdPhotoLibrary } from "react-icons/md";
import { motion } from "framer-motion";

const BabyShowerDecorPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-black text-white overflow-hidden">
        <Image
          src="/babyshower.jpg"
          fill
          className="object-cover absolute opacity-40"
          alt="Baby Shower Hero"
        />
        <div className="relative z-10 text-center py-24 px-4 max-w-screen-lg mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            BABY SHOWER DECORATIONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-6"
          >
            Celebrate new beginnings with our charming and heartwarming baby
            shower setups, curated with love.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            <Link href="/gallery">
              <button className="bg-white text-black px-4 py-2 flex items-center gap-2 rounded shadow">
                <MdPhotoLibrary /> Photo Gallery
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* About Sections */}
      <div className="py-16 px-6 md:px-20 max-w-screen-xl mx-auto space-y-12 text-[#c79f3e]">
        {/* Section 1 */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">
              PERSONALIZED BABY SHOWER THEMES
            </h2>
            <p className="text-lg">
              At Kaivalyam Events, we specialize in heartwarming baby shower
              decor that reflects the joy of a growing family. Whether you
              envision a pastel paradise or a playful jungle theme, our decor
              blends softness, elegance, and charm.
            </p>
          </div>
          <Image
            src="/BabyShower1.jpg"
            alt="Baby Shower Setup"
            width={600}
            height={400}
            className="rounded-xl object-cover border-4 h-80 border-[#c79f3e]"
          />
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Content first on mobile */}
          <div className="md:order-2">
            <h2 className="text-3xl font-bold mb-4">
              ELEGANT DETAILS THAT MAKE A DIFFERENCE
            </h2>
            <p className="text-lg">
              From welcome boards, centerpieces, and balloon arches to cozy
              seating and thematic props, our decor is all about capturing the
              emotion of the moment. We ensure your celebration feels personal
              and picture-perfect.
            </p>
          </div>

          {/* Image second on mobile */}
          <div className="md:order-1">
            <Image
              src="/Babyshower2.jpg"
              alt="Themed Baby Shower Decor"
              width={600}
              height={400}
              className="rounded-xl object-cover border-4 border-[#c79f3e]"
            />
          </div>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            OUR BABY SHOWER DECOR INCLUDES:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Theme Backdrops",
              "Balloon Garlands",
              "Table Centerpieces",
              "Photo Booth Corners",
              "Customized Welcome Boards",
              "Mom-to-Be Chair Styling",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#ffe5ae] hover:bg-white text-[#c79f3e] py-6 px-4 rounded-lg shadow text-center font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">
            WANT TO PLAN A DREAMY BABY SHOWER?
          </h2>
          <p className="text-lg mb-4">
            Contact our team to bring your baby shower vision to life. Elegant,
            themed, and stress-free.
          </p>
          <Link href="/contact">
            <button className="bg-[#c79f3e] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BabyShowerDecorPage;
