"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdPhotoLibrary } from "react-icons/md";
import { Pacifico, Quicksand } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"] });

const BirthdayDecorPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-black text-white overflow-hidden">
        <Image
          src="/Personal.jpeg"
          fill
          className="object-cover absolute opacity-70"
          alt="Birthday Decor Hero"
        />
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-10 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">BIRTHDAY DECORATIONS</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Make every birthday unforgettable with our magical and personalized decoration services for all age groups.
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
            <h2 className="text-3xl font-bold">BIRTHDAY DECORATION SPECIALISTS</h2>
            <p>
              From dreamy balloon arches to custom cake table setups, Kaivalyam Events creates captivating birthday decor
              for kids, teens, and adults alike. Every setup reflects the personality and theme you envision.
            </p>
            <p>
              Whether it&apos;s a cozy at-home surprise or a lavish party at a venue, our team handles styling, setup,
              coordination, and theme customization to perfection.
            </p>
          </div>
          <Image
            src="/Hero2.jpg"
            alt="Birthday Event Setup"
            width={600}
            height={400}
            className="rounded-2xl border-4 border-[#c79f3e] h-80 object-cover"
          />
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/Image2.webp"
            alt="Birthday Cake Table"
            width={600}
            height={400}
            className="rounded-2xl border-4 border-[#c79f3e] h-80 object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">THEMES, COLORS & MEMORIES</h2>
            <p>
              Whether it&apos;s a jungle theme, princess dream, retro vibe or elegant gold party — we bring it to life with
              rich styling, props, lighting and more.
            </p>
            <p>
              We ensure your party ambiance is not just beautiful but also photogenic and fun for your guests. Let’s make
              the next birthday your most memorable one yet!
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {["Balloon Decor", "Custom Cake Table", "Photo Booth Setup", "Welcome Boards", "Return Gifts Display", "LED Light Signage"].map(
            (item, index) => (
              <div key={index} className="border-2 border-[#c79f3e] py-8 px-4 rounded-xl shadow-md bg-white text-[#c79f3e]">
                <h4 className="text-lg font-bold">{item}</h4>
              </div>
            )
          )}
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">PLAN A BIRTHDAY TO REMEMBER</h3>
          <p>
            Reach out to Kaivalyam Events for birthday decor that leaves everyone smiling. We make birthdays stunning,
            stress-free, and full of joy.
          </p>
          <Link href="/contact">
            <button className="bg-[#c79f3e] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#b9892d] transition">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BirthdayDecorPage;
