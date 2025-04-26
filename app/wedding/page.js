"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdPhotoLibrary } from "react-icons/md";
import { Pacifico, Quicksand } from "next/font/google";
import { motion } from "framer-motion";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });

const WeddingDecorPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-black text-white overflow-hidden">
        <Image
          src="/Image4.webp"
          fill
          className="object-cover absolute opacity-70"
          alt="Wedding Decor Hero"
        />
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-10 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            WEDDING RECEPTION DECORATIONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-4 text-lg max-w-2xl mx-auto"
          >
            Transform your wedding reception into a Royal and Dazzling Celebration
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mt-6 flex-wrap"
          >
            <Link href="/gallery">
              <button className="flex items-center gap-2 bg-white text-[#c79f3e] font-semibold px-4 py-2 rounded-md shadow-md">
                <MdPhotoLibrary /> Photo Gallery
              </button>
            </Link>
          </motion.div>
        </div>
        <Image src="/wave-white.svg" width={1920} height={100} alt="wave" className="w-full" />
      </div>

      {/* Content Sections */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 space-y-20 text-[#c79f3e]">
        {/* Section 1 */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">EXPERIENCED WEDDING STYLISTS</h2>
            <p>
              From luxurious floral arches to curated seating arrangements, Kaivalyam Events crafts elegant wedding decor that captures the essence of your story.
            </p>
            <p>
              We manage everything from theme conceptualization to seamless day-of execution, ensuring your reception feels timeless and flawless.
            </p>
          </div>
          <Image
            src="/Weddings.webp"
            alt="Wedding Event Setup"
            width={600}
            height={400}
            className="rounded-2xl border-4 border-[#c79f3e] h-80 object-cover"
          />
        </motion.div>

        {/* NEW Section - What We Offer (Image Right) */}
{/* Section 2 */}
<motion.div
  className="grid md:grid-cols-2 gap-10 items-center"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Content first on mobile */}
  <div className="space-y-4 md:order-2">
    <h2 className="text-3xl font-bold">WHAT WE OFFER IN WEDDING RECEPTION DECORATION</h2>
    <p>
      We provide a full range of wedding and reception decoration services to cater to every couple’s distinctive tastes and preferences.
      From stylish table centrepieces that ideally suit your dining style to elegant walkway designs that guide your guests gracefully — every touch matters.
    </p>
    <p>
      Our florals are green, lush, and full of life, bringing a fresh softness to the entire setup.
      Welcoming entryways greet guests with warmth, while our expertise in custom stage backdrops and theme-based decor ensures no detail is missed.
      We pay close attention to every element, making your wedding decor both beautiful and meaningful.
    </p>
  </div>

  {/* Image second on mobile */}
  <div className="md:order-1">
    <Image
      src="/Image5.webp"
      alt="Wedding Decoration Details"
      width={600}
      height={400}
      className="rounded-2xl border-4 border-[#c79f3e] h-80 object-cover"
    />
  </div>
</motion.div>


        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
        >
          {["Floral Arches", "Stage Backdrops", "Seating Setup", "Table Centerpieces", "Welcome Entry Setup", "Lighting Decor"].map(
            (item, index) => (
              <div key={index} className=" py-8 px-4 rounded-xl shadow-md bg-[#ffe5ae] hover:bg-white text-[#c79f3e]">
                <h4 className="text-lg font-bold">{item}</h4>
              </div>
            )
          )}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">CRAFT YOUR DREAM WEDDING WITH US</h3>
          <p>
            Reach out to Kaivalyam Events for wedding decoration that feels grand, heartfelt, and uniquely yours. We’re here to make it stunning and stress-free.
          </p>
          <Link href="/contact">
            <button className="bg-[#c79f3e] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#b9892d] transition">
              Get In Touch
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WeddingDecorPage;