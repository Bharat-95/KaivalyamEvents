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
      <div className="relative w-full h-[80vh] bg-black text-white overflow-hidden flex items-center justify-center">
        <Image
          src="/Outdoor.jpg"
          alt="Party House Decor Hero"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center">
          <h1 className={`${quicksand.className} text-4xl md:text-5xl font-bold mb-4`}>PARTY HOUSE DECOR</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Light up your celebrations with our elegant and joyful party house decorations — designed to impress and customized to your vibe.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/gallery">
              <button className="bg-white text-[#c79f3e] px-6 py-2 rounded shadow-md flex items-center gap-2">
                <MdPhotoLibrary /> Photo Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="max-w-screen-xl mx-auto py-20 px-6 md:px-12 text-[#c79f3e] space-y-6">
        <h2 className="text-3xl font-bold text-center mb-4">Celebrate with Style</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-lg">
            Whether it’s a birthday bash, anniversary, promotion party, or festive gathering, Kaivalyam Events crafts the perfect ambiance to suit your occasion. Our party house décor transforms spaces with vibrant themes, lighting, balloon arches, table arrangements, and floral details.
          </p>
          <Image
            src="/Corporate.jpeg"
            alt="Party Setup"
            width={600}
            height={400}
            className="rounded-xl object-cover border-4 h-80 border-[#c79f3e]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <Image
            src="/Corporate.webp"
            alt="Party Lights"
            width={600}
            height={400}
            className="rounded-xl object-cover border-4 border-[#c79f3e]"
          />
          <p className="text-lg">
            We use elegant gold-accented props, stylish furniture, trendy backdrops, LED decor, and customized signage to create a sophisticated yet fun vibe. Our team ensures that every corner speaks the mood of celebration.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-[#c79f3e] py-12 px-6 md:px-12 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Let’s Make It Unforgettable</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Ready to throw the most memorable party? Let Kaivalyam handle the decor while you enjoy the day with your loved ones.
        </p>
        <Link href="/contact">
          <button className="bg-white text-[#c79f3e] px-6 py-2 rounded shadow-md font-semibold hover:bg-gray-100 transition">
            Book a Free Consultation
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PartyHouseDecor;