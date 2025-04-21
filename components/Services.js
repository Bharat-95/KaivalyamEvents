"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRegEnvelopeOpen, FaGift, FaVideo, FaHandsHelping } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Pacifico, Quicksand, Poppins } from "next/font/google";
import { FaCameraRetro } from "react-icons/fa";


const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const services = [
  { icon: <GiPartyPopper size={32} />, title: "Decor & Design" },
  { icon: <FaVideo size={28} />, title: "Entertainment" },
  { icon: <FaHandsHelping size={28} />, title: "Vendor Referrals" },
  { icon: <FaCameraRetro size={28} />, title: "Event Photographers" },
  { icon: <FaGift size={28} />, title: "Makeup & Mehandi Artists" },
  { icon: <MdOutlineManageAccounts size={28} />, title: "Management & Co-ordination" },
];

const ServicesOverview = () => {
  return (
    <div className="w-full py-20 px-6 md:px-16 text-center space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={`${pacifico.className} text-4xl text-[#c79f3e] mb-4`}>Our Services</h2>
        <p className={`${poppins.className} text-[#c79f3e] max-w-3xl mx-auto text-[17px]`}>
          Whether you&apos;re dreaming of an intimate celebration or a grand wedding spectacle, we craft every detail with purpose and personality. Our services blend design, coordination, and flair — ensuring your story shines through every element.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className=" p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <div className="text-[#c79f3e] mb-4">{service.icon}</div>
            <h4 className={`${quicksand.className} font-semibold text-lg text-[#c79f3e]`}>
              {service.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
