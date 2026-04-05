'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[70px] fixed top-0 shadow-lg shadow-[#14532d]/50 bg-[#03001427] backdrop-blur-md z-50 px-6">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto max-w-7xl">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center group"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="cursor-pointer group-hover:scale-110 transition-transform duration-300"
          />
          <div className="hidden md:flex font-bold ml-3 text-gray-300 group-hover:text-white transition-colors">
            Yuvraj Singh
          </div>
        </Link>

        {/* Web Navbar - Centered */}
        <div className="hidden lg:flex items-center space-x-1">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.title}
              href={link.link}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-[rgba(34,197,94,0.1)] rounded-lg transition-all duration-300 hover:scale-105"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right Side - Social Icons + Source Code */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="p-2 text-gray-400 hover:text-white hover:bg-[rgba(34,197,94,0.1)] rounded-lg transition-all duration-300 hover:scale-110"
                title={name}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {/* Source Code Button */}
          <Link
            href={LINKS.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Source
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#030014] backdrop-blur-md border-t border-gray-800 p-6 md:hidden">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 mb-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-[rgba(34,197,94,0.1)] rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="p-3 text-gray-400 hover:text-white hover:bg-[rgba(34,197,94,0.1)] rounded-lg transition-all duration-300"
                title={name}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>

          {/* Source Code Button */}
          <div className="flex justify-center">
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View Source Code
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};