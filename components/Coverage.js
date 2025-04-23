"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quicksand, Poppins } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

const listItems = [
  "Banners",
  "Fabrics",
  "Flowers",
  "Lights",
  "Tableware",
  "Centrepieces",
  "Color Themes",
  "Decorative Displays",
];

const DecorCoverageSection = () => {
  return (
    <div className="w-full py-10 px-6 md:px-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Image3.webp"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-3xl border-[3px] border-[#c79f3e] shadow-lg">
            <Image
              src="/About.jpg"
              alt="Event Decoration"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Text + Animated List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className={`${quicksand.className} text-3xl text-[#c79f3e] font-bold`}>
            What We Cover in Event & Decor
          </h2>
          <p className={`${poppins.className} text-[#c79f3e] text-base leading-relaxed`}>
            You might not need to add more decorations if your event is being held at a unique or upscale
            location that already exudes style. However, here’s what we can elevate and tailor for you:
          </p>

          <motion.ul
            className={`${poppins.className} list-disc pl-5 text-[#c79f3e] space-y-1`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {listItems.map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default DecorCoverageSection;