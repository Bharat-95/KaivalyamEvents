"use client";

import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCalendar2Event } from "react-icons/bs";
import Link from "next/link";

const CtaBanner = () => {
  return (
    <div className="bg-[#c79f3e] w-full px-6 py-5 rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Left Content */}
        <div className="flex items-center gap-3 text-[#3c2e1d] font-medium text-lg text-center md:text-left">
          <AiOutlineHeart size={24} />
          <span>Create Magical Moments With Event Decorators</span>
        </div>

        {/* CTA Button */}
        <Link href="/quote">
          <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition duration-300">
            Let&apos;s Get Started
            <BsCalendar2Event size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CtaBanner;
