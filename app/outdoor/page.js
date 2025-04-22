"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quicksand, Pacifico } from "next/font/google";
import Link from "next/link";
import { MdPhotoLibrary } from "react-icons/md";

const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

const OutdoorDecor = () => {
  return (
    <div className="w-full bg-white  text-[#c79f3e]">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] bg-black flex items-center justify-center text-white">
        <Image
          src="/Image4.webp"
          alt="Outdoor Hero"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-70"
        />
        <div className="z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">OUTDOOR EVENT DECORATIONS</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Elevate your open-air celebrations with our custom outdoor decorations that blend nature with elegance.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link href="/gallery">
              <button className="bg-white text-[#c79f3e] px-5 py-2 rounded shadow-md font-semibold flex items-center gap-2">
                <MdPhotoLibrary /> Photo Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-screen-xl mx-auto px-6 py-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">CELEBRATE IN NATURE’S LAP</h2>
            <p className="text-lg">
              At Kaivalyam Events, we specialize in crafting breathtaking outdoor setups that transform any open space into an enchanting celebration ground. Whether it&apos;s a beach wedding, garden birthday, or lawn anniversary party, our decor adds life to the location.
            </p>
            <p className="text-lg mt-4">
              We ensure elegance meets environment with weather-friendly designs, floral arches, eco lighting, and luxury seating that feels like a dream.
            </p>
          </div>
          <Image
            src="/Image3.webp"
            alt="Outdoor Setup"
            width={600}
            height={400}
            className="rounded-xl h-80 shadow-md"
          />
        </div>

        {/* Offerings Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/Personal.jpeg"
            alt="Garden Decoration"
            width={600}
            height={400}
            className="rounded-xl h-80 object-cover shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">WHAT WE OFFER</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Floral & Fabric Backdrops</li>
              <li>Rustic Furniture & Thematic Decor</li>
              <li>Lighting Setup for Evenings</li>
              <li>Stage, Entry & Walkway Styling</li>
              <li>Garden Installations & Signages</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Plan Your Outdoor Celebration with Us</h3>
          <p className="text-lg max-w-2xl mx-auto">
            Our team at Kaivalyam ensures every outdoor event we design is full of charm, ease, and memories. Reach out for a personalized quote.
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-[#c79f3e] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OutdoorDecor;