"use client";

import React from "react";
import { Quicksand, Poppins, Pacifico } from "next/font/google";
import { motion } from "framer-motion";

const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

const steps = [
  {
    title: "Talk to Us",
    subtitle: "Tell us your style & must-haves",
  },
  {
    title: "Discover Options",
    subtitle: "Explore stunning designs & transparent pricing",
  },
  {
    title: "Get Custom Package",
    subtitle: "With options tailored to your needs",
  },
  {
    title: "Book Us",
    subtitle: "Pay a small fee, block your dates",
  },
  {
    title: "Relax",
    subtitle: "Let us take care of everything",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 px-6 md:px-10 text-center">
      <h2 className={`${quicksand.className} text-3xl font-bold text-[#c79f3e]`}>
        How it works
      </h2>
      <p className={`text-[#c79f3e] mt-2 text-xl font-medium ${pacifico.className}`}>
      Decor Made Easy: 5 Steps to a Flawless Event Look
      </p>

      {/* Grid layout with reduced gap */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 1, // each step shows every 5 seconds
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="bg-[#c79f3e] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
              {`0${index + 1}`}
            </div>
            <h4 className={`${quicksand.className} font-semibold text-lg text-[#c79f3e]`}>
              {step.title}
            </h4>
            <p className={`${poppins.className} text-sm text-[#c79f3e] max-w-[180px]`}>
              {step.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
