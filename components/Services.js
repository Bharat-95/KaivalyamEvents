"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaRegEnvelopeOpen,
  FaGift,
  FaVideo,
  FaHandsHelping,
  FaCameraRetro,
} from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Pacifico, Quicksand, Poppins } from "next/font/google";

const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const services = [
  { icon: <GiPartyPopper size={20} />, title: "Decor & Design" },
  { icon: <FaVideo size={20} />, title: "Entertainment" },
  { icon: <FaHandsHelping size={20} />, title: "Vendor Referrals" },
  { icon: <FaCameraRetro size={20} />, title: "Event Photographers" },
  { icon: <FaGift size={20} />, title: "Makeup & Mehandi Artists" },
  { icon: <MdOutlineManageAccounts size={20} />, title: "Management & Co-ordination" },
];

const ServicesOverview = () => {
  return (
    <div className="w-full py-14 px-4 md:px-8 text-center space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={`${pacifico.className} text-3xl md:text-4xl text-[#c79f3e] mb-4`}>
          Our Services
        </h2>
        <p className={`${poppins.className} text-[#c79f3e] max-w-3xl mx-auto text-[15px]`}>
          Whether you&apos;re dreaming of an intimate celebration or a grand wedding spectacle, we craft every detail with purpose and personality. Our services blend design, coordination, and flair — ensuring your story shines through every element.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-6 justify-center w-[50%] mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-40 h-40 mx-auto flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-[#ffe5ae] text-[#c79f3e] p-3 clip-hexagon shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="mb-1">{service.icon}</div>
              <h4 className={`${quicksand.className} font-semibold text-xs`}>
                {service.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            25% 5%, 75% 5%,
            100% 50%,
            75% 95%, 25% 95%,
            0% 50%
          );
        }
      `}</style>
    </div>
  );
};

export default ServicesOverview;
