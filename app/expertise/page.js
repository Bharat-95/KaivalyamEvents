"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });

const expertiseLinks = [
  { name: "Wedding Decoration", href: "/wedding", image: "/Weddings.webp" },
  { name: "Birthday Decoration", href: "/birthday", image: "/Hero2.jpg" },
  { name: "Party House Decoration", href: "/party", image: "/Outdoor.jpg" },
  { name: "Outdoor Event Decoration", href: "/outdoor", image: "/Personal.jpeg" },
  { name: "Baby Shower Decorations", href: "/babyshower", image: "/babyshower.jpg" },
];

const OurExpertise = () => {
  return (
    <div className="w-full py-20 px-4 md:px-10 lg:px-20 text-center bg-white">
      <h2 className={`${quicksand.className} text-4xl font-bold text-[#c79f3e] mb-4`}>
        OUR EXPERTISE
      </h2>
      <p className="text-[#c79f3e] text-lg max-w-3xl mx-auto mb-12">
        Expertly crafting bespoke decor that elevates any event, our services transform your celebrations into unforgettable experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {expertiseLinks.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border border-[#c79f3e]"
          >
            <Link href={item.href}>
              <div className="relative h-72 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#c79f3e] text-white text-lg font-semibold py-4">
                {item.name}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurExpertise;