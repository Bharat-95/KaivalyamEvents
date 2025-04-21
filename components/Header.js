"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Quicksand, Pacifico } from "next/font/google";
import { BiMenuAltLeft, BiChevronDown } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

const quicksand = Quicksand({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false); // For desktop
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false); // For mobile

  const handleMenu = () => setMenu(!menu);

  const expertiseLinks = [
    { name: "Sangeet Decor", href: "/services/sangeet-decor" },
    { name: "Mehndi Decor", href: "/services/mehndi-decor" },
    { name: "Wedding House Decor", href: "/services/wedding-house-decor" },
    { name: "Special Occasions", href: "/services/special-occasions" },
    { name: "Religious Events Decor", href: "/services/religious-decor" },
  ];

  return (
    <div className="flex items-center  bg-white justify-between lg:px-10 md:px-10 px-4  h-24 text-[#c79f3e] mb-10 rounded-b-xl sticky top-0 z-50  shadow-md">
      {/* Logo */}
      <div className=" h-20  w-20 bg-black rounded-full">
        <Image src="/Logo.png" alt="Logo" height={1000} width={1000} className=" w-20  h-20" />
      </div>

      {/* Desktop Navbar */}
      <ul className={`lg:flex hidden space-x-8 ${quicksand.className} font-semibold text-[15px] items-center`}>
        <li className="hover:translate-x-1 hover:-translate-y-1 duration-700"><Link href="/">HOME</Link></li>
        <li className="hover:translate-x-1 hover:-translate-y-1 duration-700"><Link href="/about">ABOUT</Link></li>

        {/* OUR EXPERTISE with Arrow Dropdown */}
        <li className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer hover:translate-x-1 hover:-translate-y-1 duration-700"
            onClick={() => setExpertiseOpen(!expertiseOpen)}
          >
            OUR EXPERTISE
            <BiChevronDown size={18} />
          </div>
          {expertiseOpen && (
            <ul className="absolute top-full mt-2 bg-black rounded-lg shadow-lg w-64 z-50 text-[#c79f3e]">
              {expertiseLinks.map(({ name, href }) => (
                <li key={name} className="px-4 py-2 hover:bg-[#222] text-sm">
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="hover:translate-x-1 hover:-translate-y-1 duration-700"><Link href="/portfolio">PORTFOLIO</Link></li>
        <li className="hover:translate-x-1 hover:-translate-y-1 duration-700"><Link href="/gallery">GALLERY</Link></li>
        <li className="hover:translate-x-1 hover:-translate-y-1 duration-700"><Link href="/contact">CONTACT</Link></li>
      </ul>

      {/* Get Quote Button */}
      <div className={`bg-[#c79f3e] lg:flex hidden text-white p-2 rounded-md shadow-md ${quicksand.className} font-bold hover:translate-x-1 hover:-translate-y-1 duration-700`}>
        <Link href="/quote">Get Quote</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden relative">
        <BiMenuAltLeft size={40} onClick={handleMenu} />
        <div className={`fixed top-0 right-0 h-screen w-64 bg-black shadow-lg transform ${menu ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out z-50`}>
          <div className="flex justify-end p-4">
            <RxCross1 size={24} className="cursor-pointer text-[#c79f3e]" onClick={handleMenu} />
          </div>

          {/* Mobile Menu Links */}
          <ul className={`${quicksand.className} font-semibold text-[15px] px-6 space-y-4 text-[#c79f3e]`}>
            <li onClick={handleMenu}><Link href="/">HOME</Link></li>
            <li onClick={handleMenu}><Link href="/about">ABOUT</Link></li>

            {/* Mobile OUR EXPERTISE Dropdown */}
            <li
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
            >
              OUR EXPERTISE
              <BiChevronDown size={18} />
            </li>
            {mobileExpertiseOpen && (
              <ul className="ml-4 space-y-2 text-[#c79f3e] text-sm">
                {expertiseLinks.map(({ name, href }) => (
                  <li key={name} onClick={handleMenu}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            )}

            <li onClick={handleMenu}><Link href="/portfolio">PORTFOLIO</Link></li>
            <li onClick={handleMenu}><Link href="/gallery">GALLERY</Link></li>
            <li onClick={handleMenu}><Link href="/contact">CONTACT</Link></li>

            <li onClick={handleMenu} className="bg-[#c79f3e] w-fit px-4 py-2 text-white rounded-md shadow-md">
              <Link href="/quote">Get Quote</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
