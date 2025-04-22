"use client";

import { useState } from "react";
import { Quicksand, Pacifico } from "next/font/google";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const quicksand = Quicksand({ weight: ["400", "600"], subsets: ["latin"], display: "swap" });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"], display: "swap" });

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Full-Width Map */}
      <div className="w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.985717293036!2d78.39786990000002!3d17.460397699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f338143863%3A0x3fdcf86c3d44325e!2sKaivalyam%20events%20Godown!5e0!3m2!1sen!2sin!4v1745302793042!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          title="Kaivalya Events Location"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="text-center py-16 px-6 md:px-20">
        <h2 className={`${quicksand.className} text-4xl font-bold text-[#c79f3e] mb-6`}>OUR CONTACT DETAILS</h2>
        <p className="text-[#c79f3e] mb-12 max-w-2xl mx-auto">
          Find all the ways to reach us here. We’re ready to assist with your event planning needs and answer any inquiries.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-[#c79f3e] text-white rounded-t-[100px] pt-16 pb-8 px-4 shadow-md relative">
            <div className="w-24 h-24 bg-black text-[#c79f3e] rounded-full flex items-center justify-center text-2xl font-bold absolute -top-12 left-1/2 transform -translate-x-1/2">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-semibold mt-8">Our Phone</h3>
            <p className="text-lg">+91 98765 43210</p>
          </div>

          {/* Location */}
          <div className="bg-[#c79f3e] text-white rounded-t-[100px] pt-16 pb-8 px-4 shadow-md relative">
            <div className="w-24 h-24 bg-black text-[#c79f3e] rounded-full flex items-center justify-center text-2xl font-bold absolute -top-12 left-1/2 transform -translate-x-1/2">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-semibold mt-8">Based In</h3>
            <p className="text-lg">Hyderabad, Telangana</p>
          </div>

          {/* Email */}
          <div className="bg-[#c79f3e] text-white rounded-t-[100px] pt-16 pb-8 px-4 shadow-md relative">
            <div className="w-24 h-24 bg-black text-[#c79f3e] rounded-full flex items-center justify-center text-2xl font-bold absolute -top-12 left-1/2 transform -translate-x-1/2">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-semibold mt-8">Our Email</h3>
            <p className="text-lg">info@kaivalyaevents.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white text-[#c79f3e] py-16 px-6 md:px-20"
      >
        <h2 className={`${quicksand.className} text-3xl font-bold text-center mb-10`}>Let&apos;s Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c79f3e]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c79f3e]"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c79f3e]"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#c79f3e] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#a94c50] transition"
            >
              Send Your Message
            </button>
          </form>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <Image src="/About1.jpg" alt="Support" width={400} height={400} className="rounded-xl shadow-md" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
