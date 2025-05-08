"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import TopNavBar from "./TopNavBar";
import { useSearch } from "../contexts/SearchContext"; 
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { setQuery } = useSearch(); 


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow bg-gray-950">
      {/* Top Strip */}
      <TopNavBar />

      {/* Main Navbar */}
      <div className="flex justify-between items-center py-4 px-6 sm:px-3 lg:px-16">
        {/* LEFT: Hamburger (small screens only) + Nav Links */}
        <div className="flex items-center space-x-6">
          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="text-white text-2xl md:hidden focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Nav Links (hidden on small screens) */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-teal-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CENTER: Brand */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">Losode</Link>
        </div>

        {/* RIGHT: Search + Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}  // Update query on change
              className="pl-9 pr-3 py-1.5 border border-gray-300 rounded-md text-sm text-white bg-gray-900 focus:outline-none focus:ring-2"
            />
          </div>

          {/* Icons */}
          <Link href="/#" aria-label="User Profile">
            <svg
              className="w-5 h-5 text-gray-100 hover:text-teal-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0"
              />
            </svg>
          </Link>

          <Link href="/#" aria-label="Wishlist">
            <svg
              className="w-5 h-5 text-gray-100 hover:text-teal-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.014-4.5-4.5-4.5-1.74 0-3.26 1.002-4 2.475C11.76 4.752 10.24 3.75 8.5 3.75 6.014 3.75 4 5.765 4 8.25c0 5.25 8 10.5 8 10.5s8-5.25 8-10.5z"
              />
            </svg>
          </Link>

          <Link href="/#" aria-label="Shopping Cart">
            <svg
              className="w-5 h-5 text-gray-100 hover:text-teal-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.586A1 1 0 007 17h10a1 1 0 00.894-.553L20 13M7 13l1.5-3h9l1.5 3M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Dropdown Menu (Mobile only) */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-bold text-gray=900 hover:text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
