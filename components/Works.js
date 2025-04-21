"use client";

import React from "react";
import { Quicksand, Poppins } from "next/font/google";
import { motion } from "framer-motion";

const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

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
      <h2 className={`${quicksand.className} text-3xl font-bold text-[#c79f3e]`}>How it works</h2>
      <p className="text-[#c79f3e] tracking-wide mt-2 uppercase text-sm font-medium">
        5 Easy Steps for a Hassle-Free Wedding
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="bg-[#c79f3e] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4 shadow-md">
              {`0${index + 1}`}
            </div>
            <h4 className={`${quicksand.className} font-semibold text-lg text-[#c79f3e]`}>{step.title}</h4>
            <p className={`${poppins.className} text-sm text-[#c79f3e] mt-1 max-w-[200px]`}>
              {step.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
