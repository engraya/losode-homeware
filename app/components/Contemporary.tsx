'use client';

import React from 'react';
import Image from 'next/image';
import { hero1, hero2, hero3 } from './assets';

function Contemporary() {
  return (
    <section className="relative w-full">
      <div className="flex flex-col md:flex-row">
        {/* Image 1 */}
        <div className="relative w-full md:w-1/3 h-64 md:h-[500px]">
          <Image
            src={hero1}
            alt="Hero Image 1"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-full md:w-1/3 h-64 md:h-[500px]">
          <Image
            src={hero2}
            alt="Hero Image 2"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image 3 */}
        <div className="relative w-full md:w-1/3 h-64 md:h-[500px]">
          <Image
            src={hero3}
            alt="Hero Image 3"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Blur Effect Overlay */}
      <div className="absolute inset-0 opacity-60 backdrop-blur-xs z-0" />
      {/* Section with text and button */}
      <div className="absolute bottom-0 w-full z-10 px-4 py-6 md:px-8 md:py-8 flex flex-col items-center rounded-2xl shadow-2xl">
        <h3 className="text-3xl md:text-4xl lg:text-5xl max-w-xl lg:max-w-3xl mx-auto font-bold text-gray-100 text-center">
            Elevate Your Everyday Living
        </h3>
        <p className="text-sm text-gray-100 max-w-lg mx-auto text-center">
            At Losode, we craft thoughtful homeware for modern living—where form meets function. Discover pieces that bring beauty, comfort, and timeless style into your home.
        </p>
        <button className="bg-white w-1/2 md:w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 text-black font-semibold text-sm lg:text-base rounded px-4 py-4">
            Explore the Collection
        </button>
    </div>

    </section>
  );
}

export default Contemporary;
