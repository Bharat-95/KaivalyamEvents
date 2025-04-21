"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Pacifico, Quicksand, Poppins } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full py-20 px-6 md:px-16 lg:px-24"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className={`${quicksand.className} text-4xl font-bold text-[#c79f3e]`}>
          About Kaivalyam Events
        </h2>
        <p className={`${pacifico.className} text-xl text-[#c79f3e] mt-2`}>
          Where Elegance Meets Celebration
        </p>
      </div>

      {/* Content Row */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className={`${poppins.className} space-y-5 text-[#c79f3e] text-lg`}>
          <p>
            At <strong>Kaivalyam Events</strong>, we believe that the true success of any event lies in how it
            <em> feels</em> — the joy in the room, the sparkle in the décor, and the memories etched
            forever in the hearts of your guests.
          </p>
          <p>
            Rooted in passion and driven by precision, we are a team of expert event designers dedicated to
            creating extraordinary experiences. From intimate gatherings to lavish affairs, we offer seamless
            planning, artistic styling, and management solutions that reflect your vision — effortlessly and elegantly.
          </p>
          <p>
            Whether it&apos;s a <em>floral fairytale</em> or a <em>modern minimalist soirée</em>, Kaivalyam Events approaches each
            celebration with unmatched creativity and care.
          </p>
          <p className="text-base font-medium italic text-[#c79f3e]">
            Let us help you craft a celebration that’s not just seen — but felt.
          </p>

          {/* Portfolio Button */}
          <div className="pt-4">
            <Link href="/portfolio">
              <button className="bg-[#c79f3e] text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition duration-300">
               Portfolio &gt;
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/About.webp" // Replace with your preferred image path
            alt="Kaivalyam Events About"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
