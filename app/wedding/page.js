"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdPhotoLibrary } from "react-icons/md";
import { BsChatText } from "react-icons/bs";

const WeddingDecorPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full text-white bg-black overflow-hidden h-[600px] flex items-center justify-center">
        <Image
          src="/Image4.webp"
          alt="Wedding Reception Setup"
          fill
          className="object-cover absolute opacity-60"
        />
        <div className="relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">WEDDING RECEPTION DECORATIONS</h1>
          <p className="text-lg md:text-xl">
            Transform your wedding reception into a Royal and Dazzling Celebration
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/gallery">
              <button className="bg-white text-black px-4 py-2 flex items-center gap-2 rounded-md">
                <MdPhotoLibrary /> Photo Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-[#c79f3e]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Best Wedding Decorations for Your Special Day</h2>
            <p className="mb-4">
              At Kaivalyam Events, we transform your vision into an unforgettable celebration. From grand floral arches to detailed table setups, every element is curated to reflect your style.
            </p>
            <p>
              Our expertise lies in creating moments of elegance and joy. Trust us to shape a reception that’s stunning, seamless, and memorable.
            </p>
          </div>
          <Image src="/Weddings.webp" alt="Stage Decor" width={600} height={400} className="rounded-xl" />
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-6 md:px-20 bg-[#fff8ec] text-[#c79f3e]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image src="/Image5.webp" alt="Decor Offerings" width={600} height={400} className="rounded-xl" />
          <div>
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <p className="mb-2">• Elegant Table Centerpieces</p>
            <p className="mb-2">• Decorative Walkway Designs</p>
            <p className="mb-2">• Lush Floral Installations</p>
            <p className="mb-2">• Custom Themed Backdrops & Lighting</p>
            <p>
              Every setup is tailored to your preferences with our artistic touch to ensure a flawless event environment.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Highlights */}
      <section className="py-16 px-6 md:px-20 bg-white text-[#c79f3e]">
        <h2 className="text-center text-3xl font-bold mb-10">Our Signature Styles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Outdoor.jpg', 'About.jpg', 'Weddings.webp'].map((img, idx) => (
            <Image key={idx} src={`/${img}`} alt={`Gallery ${idx}`} width={400} height={300} className="rounded-xl w-full h-64 object-cover" />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 bg-[#c79f3e] text-white">
        <h2 className="text-3xl font-bold mb-6">Why Choose Kaivalyam Events?</h2>
        <p className="mb-4">
          We are driven by design, led by detail, and fueled by passion. Our bespoke planning process ensures no two events are ever the same.
        </p>
        <p>
          With years of experience and unmatched dedication, we provide not just decor, but an experience that your guests will cherish forever.
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 md:px-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Craft Your Dream Wedding Reception</h2>
        <p className="mb-6">Ready to plan something magical? We’re here for you.</p>
        <Link href="/contact">
          <button className="bg-[#c79f3e] text-white px-6 py-3 rounded-full font-semibold">Contact Us</button>
        </Link>
      </section>
    </div>
  );
};

export default WeddingDecorPage;
