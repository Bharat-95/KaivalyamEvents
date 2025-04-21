"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Pacifico, Quicksand, Poppins } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

const paragraphs = [
  `At Kaivalyam Events, we believe that the true success of any event lies in how it feels — the joy in the room, the sparkle in the décor, and the memories etched forever in the hearts of your guests.`,
  `Rooted in passion and driven by precision, we are a team of expert event designers dedicated to creating extraordinary experiences. From intimate gatherings to lavish affairs, we offer seamless planning, artistic styling, and management solutions that reflect your vision — effortlessly and elegantly.`,
  `Whether it's a floral fairytale or a modern minimalist soire, Kaivalyam Events approaches each celebration with unmatched creativity and care.`,
  `Let us help you craft a celebration that’s not just seen — but felt.`,
];

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
        {/* Text Section with Animated Paragraphs */}
        <div className={`${poppins.className} text-[#c79f3e] text-lg space-y-5`}>
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.5 }}
              viewport={{ once: true }}
              className={index === paragraphs.length - 1 ? "italic text-base font-medium" : ""}
            >
              {text}
            </motion.p>
          ))}

          {/* Portfolio Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: paragraphs.length * 0.5 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <Link href="/portfolio">
              <button className="bg-[#c79f3e] text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition duration-300">
                Portfolio &gt;
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/About.webp"
            alt="Kaivalyam Events About"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
