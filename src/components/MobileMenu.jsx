"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="lg:hidden z-[99999]">
      <div className="fixed top-0 left-0 right-0 h-[80px] bg-[#FAFBFFCC] backdrop-blur-sm z-[99999]" />

      <button
       aria-label="Close and open menu button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 flex flex-col justify-center items-center w-12 h-12 bg-[#2140D4] rounded-full hover:bg-[#65BBE5] duration-300 z-[100000]"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: -4 }}
          className="absolute block w-6 h-0.5 bg-white transition-all duration-300"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 4 }}
          className="absolute block w-6 h-0.5 bg-white transition-all duration-300"
        />
      </button>

      <div className="fixed top-6 left-4 z-[100000]">
        <Image
          src="/svg/Logo.svg"
          alt="7flow logo"
          width={80}
          height={20}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99998] overflow-y-auto"
          >
            <div
              className="fixed inset-0 bg-white/80 backdrop-blur-sm"
              style={{
                background: `linear-gradient(180deg, #FAFBFF 0%, rgba(145, 149, 164, 0.95) 100%)`,
              }}
            />

            <div className="relative z-10 flex flex-col min-h-screen px-8 pt-24">
              <div className="flex flex-col gap-[32px] mt-12 font-medium text-[#1A1A1A]">
                <Link
                  href="/#Feature1"
                  onClick={handleLinkClick}
                  className="hover:opacity-70 font-[700] text-[#4C5D77]"
                >
                  Pricing
                </Link>
                <Link
                  href="/#How-it-works"
                  onClick={handleLinkClick}
                  className="hover:opacity-70 font-[700] text-[#4C5D77]"
                >
                  How it Works
                </Link>
                <Link
                  href="/#faq"
                  onClick={handleLinkClick}
                  className="hover:opacity-70 font-[700] text-[#4C5D77]"
                >
                  FAQ
                </Link>
                <Link
                  href="/currencies"
                  onClick={handleLinkClick}
                  className="text-[#08C056] font-semibold hover:opacity-70 font-[700]"
                >
                  Currencies
                </Link>
              </div>

              <div className="flex flex-col mt-auto mb-8 gap-[20px]">
                <Link href="/" onClick={handleLinkClick}>
                  <button className="w-full py-4 rounded-full bg-[#2140D4] text-white font-semibold hover:bg-[#2140D4]/80 transition-colors">
                    <span>Get Started</span>
                  </button>
                </Link>
                <Link href="/" onClick={handleLinkClick}>
                  <button className="w-full py-4 text-[#4B5563] hover:opacity-70 transition-opacity">
                    <span>Sign In</span>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
