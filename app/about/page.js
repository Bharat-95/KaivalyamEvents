"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Pacifico, Quicksand, Poppins } from "next/font/google";
import { MdPhotoLibrary } from "react-icons/md";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

const AboutUsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-[#c79f3e] text-white overflow-hidden">
        <Image
          src="/Image3.webp"
          fill
          className="object-cover absolute opacity-70"
          alt="About Hero"
        />
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/About.webp"
              width={500}
              height={600}
              alt="Red Roses"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 text-right"
          >
            <h2 className="text-4xl font-bold">ABOUT US</h2>
            <p className="text-lg">
              Discover the heart of Kaivalyam Events — where creativity meets celebration and every moment is styled with intention.
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <Link href="/gallery">
                <button className="flex items-center gap-2 bg-[#c79f3e] text-white px-4 py-2 rounded-md shadow-md">
                  <MdPhotoLibrary /> Photo Gallery
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 space-y-16 py-20 text-[#c79f3e]">
        {/* WHO WE ARE */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.h3 className="text-2xl font-bold">WHO WE ARE</motion.h3>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              At Kaivalyam Events, we believe in crafting experiences that linger long after the event ends. Our signature lies in blending refined aesthetics with personalized details to deliver events that are as unique as the people we celebrate.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              From intimate weddings to festive cultural gatherings, our passionate team infuses every celebration with elegance, precision, and authenticity. With us, no detail is too small and no dream is too bold.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/About1.jpg"
              alt="Event Meeting"
              width={600}
              height={400}
              className="rounded-2xl object-cover h-80 border-4 border-[#c79f3e]"
            />
          </motion.div>
        </div>

        {/* WHAT OUR CLIENTS SAY */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/About2.webp"
              alt="Client Experience"
              width={600}
              height={400}
              className="rounded-2xl object-cover h-80 border-4 border-[#c79f3e]"
            />
          </motion.div>

          <div className="space-y-6">
            <motion.h3 className="text-2xl font-bold">WHAT OUR CLIENTS SAY</motion.h3>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Clients often describe working with us as effortless and joyful. They cherish our keen eye for styling, reliable execution, and calm professionalism that eases even the most elaborate event plans.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We’re honored to have built lasting relationships through our work — each glowing review reflects our dedication to meaningful, graceful event design.
            </motion.p>
          </div>
        </div>

        {/* OUR MISSION & VISION */}
        <div className="space-y-6">
          <motion.h3 className="text-2xl font-bold">OUR MISSION & VISION</motion.h3>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Our mission is simple — to celebrate life through beautifully curated events. We aim to elevate every gathering into a visually stunning and emotionally resonant memory.
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our vision is to become a trusted name in luxury event design, known for our integrity, creative excellence, and client-first approach. At Kaivalyam Events, we don’t just plan — we create experiences you’ll remember forever.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
