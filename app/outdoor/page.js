"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Pacifico, Quicksand } from "next/font/google";
import { MdPhotoLibrary } from "react-icons/md";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });

const OutdoorDecor = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-black text-white overflow-hidden">
        <Image
          src="/Image4.webp"
          fill
          className="object-cover absolute opacity-70"
          alt="Outdoor Hero"
        />
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-10 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">OUTDOOR EVENT DECORATIONS</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Elevate your open-air celebrations with our custom outdoor decorations that blend nature with elegance.
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
            <h2 className="text-3xl font-bold">CELEBRATE IN NATURE’S LAP</h2>
            <p>
              At Kaivalyam Events, we specialize in crafting breathtaking outdoor setups that transform any open space into an enchanting celebration ground. Whether it&apos;s a beach wedding, garden birthday, or lawn anniversary party, our decor adds life to the location.
            </p>
            <p>
              We ensure elegance meets environment with weather-friendly designs, floral arches, eco lighting, and luxury seating that feels like a dream.
            </p>
          </div>
          <Image
            src="/Image3.webp"
            alt="Outdoor Setup"
            width={600}
            height={400}
            className="rounded-2xl border-4 border-[#c79f3e] h-80 object-cover"
          />
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/Personal.jpeg"
            alt="Garden Decoration"
            width={600}
            height={400}
            className="rounded-2xl border-4 border-[#c79f3e] h-80 object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">WHAT WE OFFER</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Floral & Fabric Backdrops</li>
              <li>Rustic Furniture & Thematic Decor</li>
              <li>Lighting Setup for Evenings</li>
              <li>Stage, Entry & Walkway Styling</li>
              <li>Garden Installations & Signages</li>
            </ul>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            "Open Lawn Decor",
            "Themed Entryway Arches",
            "Seating Lounge Setup",
            "Outdoor Buffet Styling",
            "Eco Floral Designs",
            "Outdoor Backdrop Installations"
          ].map((item, index) => (
            <div key={index} className="border-2 border-[#c79f3e] py-8 px-4 rounded-xl shadow-md bg-white text-[#c79f3e]">
              <h4 className="text-lg font-bold">{item}</h4>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">PLAN AN OUTDOOR EVENT TO REMEMBER</h3>
          <p>
            Our team at Kaivalyam ensures every outdoor event we design is full of charm, ease, and memories. Reach out for a personalized quote.
          </p>
          <Link href="/contact">
            <button className="bg-[#c79f3e] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#b9892d] transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OutdoorDecor;