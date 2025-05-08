import React from 'react'
import Image from 'next/image'
import { substance } from './assets'
import { image1, image2 } from './assets'


function SubComponent() {
  return (
<section className="w-full px-8 lg:px-16 py-20 mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
  {/* Section 1 */}
  <div className='w-full flex flex-col items-center text-center md:text-left md:items-start order-1 md:order-2'>
    <div className="relative w-full h-64 md:h-[500px]">
      <Image
        src={image1}
        alt="Homeware Collection Image"
        fill
        className="object-cover"
        priority
      />
    </div>
    <div className='w-full'>
      <h3 className="flex justify-start text-md md:text-lg mx-auto font-bold text-gray-900 text-center mb-1">
        Modern Essentials for Everyday Living
      </h3>
      <p className="flex justify-start text-sm text-gray-900 max-w-lg mb-1">
        Discover minimal, functional homeware designed to bring simplicity and warmth to your daily routine—only at Losode.
      </p>
      <button className="w-1/3 bg-black hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 text-white font-semibold text-sm lg:text-base rounded px-4 py-4">
        Shop now
      </button>
    </div>
  </div>

  {/* Section 2 */}
  <div className='w-full flex flex-col items-center text-center md:text-left md:items-start order-1 md:order-2'>
    <div className="relative w-full h-64 md:h-[500px]">
      <Image
        src={image2}
        alt="Artisan Collection Image"
        fill
        className="object-cover"
        priority
      />
    </div>
    <div className='w-full'>
      <h3 className="flex justify-start text-md md:text-lg mx-auto font-bold text-gray-900 text-center mb-1">
        Artisan Touches, Timeless Style
      </h3>
      <p className="flex justify-start text-sm text-gray-900 max-w-lg mb-1">
        Hand-picked, hand-crafted. Explore our curated artisan range that adds unique charm and craftsmanship to every corner of your home.
      </p>
      <button className="w-1/3 bg-black hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 text-white font-semibold text-sm lg:text-base rounded px-4 py-4">
      Shop now
      </button>
    </div>
  </div>
</section>

  )
}

export default SubComponent