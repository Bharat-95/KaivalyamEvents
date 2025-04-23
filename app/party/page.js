"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Pacifico, Quicksand } from "next/font/google";
import { MdPhotoLibrary } from "react-icons/md";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });

const PartyHouseDecor = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-black text-white overflow-hidden">
        <Image
          src="/Outdoor.jpg"
          fill
          className="object-cover absolute opacity-70"
          alt="Party Hero"
        />
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-10 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">PARTY HOUSE DECOR</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Make every party unforgettable with our vibrant and personalized decorations designed to suit any theme or mood.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <Link href="/gallery">
              <button className="flex items-center gap-2 bg-white text-[#c79f3e] font-semibold px-4 py-2 rounded-md shadow-md">
                <MdPhotoLibrary /> Photo Gallery
              </button>
            </Link>
          </div>
        </div>
        <Image src="/wave-white.svg" width={1920} height={100} alt="wave" className="w-full" />
      </div>

      {/* Content Sections */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20 space-y-20 text-[#c79f3e]">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">PARTY HOUSE DECOR EXPERTS</h2>
            <p>
              From cozy indoor gatherings to bold house party themes, Kaivalyam Events brings creativity, color, and elegance into every celebration. We design captivating setups with backdrops, props, and personalized installations.
            </p>
            <p>
              Our decorators work with you to match your vibe — be it classic, modern, quirky, or royal — and ensure the space reflects joy, connection, and celebration.
            </p>
          </div>
          <Image
            src="/Corporate.jpeg"
            alt="Party Setup"
            width={600}
            height={400}
            className="rounded-2xl border-4 border-[#c79f3e] h-80 object-cover"
          />
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/Corporate.webp"
            alt="Party Lighting"
            width={600}
            height={400}
            className="rounded-2xl border-4 border-[#c79f3e] h-80 object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">DETAILS THAT DAZZLE</h2>
            <p>
              We specialize in chic lighting, balloon art, mood-enhancing LED signs, floral backdrops, and statement furniture setups. Whether it&apos;s a casual lounge or a themed celebration, we make it stylish and stress-free.
            </p>
            <p>
              Let’s turn your house into the ultimate party venue — full of energy, beauty, and warmth.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {["Themed Backdrops", "Mood Lighting", "Floral Decor", "Balloon Arches", "Seating Lounge", "Custom Signage"].map(
            (item, index) => (
              <div key={index} className="border-2 border-[#c79f3e] py-8 px-4 rounded-xl shadow-md bg-white text-[#c79f3e]">
                <h4 className="text-lg font-bold">{item}</h4>
              </div>
            )
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">PLAN THE ULTIMATE HOUSE PARTY</h3>
          <p>
            Contact Kaivalyam Events to turn your space into a party paradise. We’ll help you host a gathering that your guests will talk about for years.
          </p>
          <Link href="/contact">
            <button className="bg-[#c79f3e] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#b9892d] transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartyHouseDecor;