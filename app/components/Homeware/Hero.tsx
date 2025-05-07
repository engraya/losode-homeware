'use client';

import React from 'react';
import Image from 'next/image';
import { homeware1, homeware2, homeware3 } from '../assets';
function Hero() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Image 1 */}
        <div className="relative w-full md:w-1/3 h-64 md:h-[500px]">
          <Image
            src={homeware1}
            alt="Hero Image 1"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-full md:w-1/3 h-64 md:h-[500px]">
          <Image
            src={homeware2}
            alt="Hero Image 2"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image 3 */}
        <div className="relative w-full md:w-1/3 h-64 md:h-[500px]">
          <Image
            src={homeware3}
            alt="Hero Image 3"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
