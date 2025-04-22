import React from "react";
import Link from "next/link";
import { Quicksand, Poppins } from "next/font/google";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

const quicksand = Quicksand({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"], display: "swap" });

const Footer = () => {
  return (
    <footer className="w-full  text-[#c79f3e] pt-10 pb-6 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left - Brand */}
        <div className="flex flex-col items-start space-y-2">
          <h2 className={`${quicksand.className} text-2xl font-bold text-[#c79f3e]`}>
            Kaivalyam Events
          </h2>
          <p className={`${poppins.className} text-sm`}>
            Creating timeless moments, one event at a time.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className={`${quicksand.className} font-semibold text-lg text-[#c79f3e]`}>
            Quick Links
          </h3>
          <Link href="/" className="hover:underline text-sm">Home</Link>
          <Link href="/about" className="hover:underline text-sm">About Us</Link>
          <Link href="/services" className="hover:underline text-sm">Our Services</Link>
          <Link href="/contact" className="hover:underline text-sm">Contact</Link>
        </div>

        {/* Right - Social & Contact */}
        <div className="flex flex-col space-y-3">
          <h3 className={`${quicksand.className} font-semibold text-lg text-[#c79f3e]`}>
            Connect With Us
          </h3>
          <div className="flex space-x-4 text-[#c79f3e] text-xl">
            <a href="https://www.instagram.com/hyderabadeventplanners" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="mailto:kaivalyamevents@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm mt-2">Email: kaivalyamevents@gmail.com</p>
          <p className="text-sm">Phone: +91 99859 77703</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-[#c79f3e] pt-4 text-center text-sm text-[#c79f3e]">
        © {new Date().getFullYear()} Kaivalyam Events. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
