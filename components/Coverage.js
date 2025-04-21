"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quicksand, Poppins } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

const DecorCoverageSection = () => {
  return (
    <div className="w-full  py-10 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-3xl border-[3px] border-[#c79f3e] shadow-lg">
            <Image
              src="/About.jpg" // Replace with your actual image
              alt="Event Decoration"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className={`${quicksand.className} text-3xl text-[#c79f3e] font-bold`}>
            What We Cover in Event & Décor
          </h2>
          <p className={`${poppins.className} text-[#c79f3e] text-base leading-relaxed`}>
            You might not need to add more decorations if your event is being held at a unique or upscale
            location that already exudes style. However, here’s what we can elevate and tailor for you:
          </p>
          <ul className={`${poppins.className} list-disc pl-5 text-[#c79f3e] space-y-1`}>
            <li>Banners</li>
            <li>Fabrics</li>
            <li>Flowers</li>
            <li>Lights</li>
            <li>Tableware</li>
            <li>Centrepieces</li>
            <li>Color Themes</li>
            <li>Decorative Displays</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default DecorCoverageSection;
