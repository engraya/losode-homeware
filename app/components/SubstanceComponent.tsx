import React from 'react'
import Image from 'next/image'
import { image3 } from './assets'
function SubstanceComponent() {
  return (
        <section className="px-8 lg:px-16 py-20 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="relative w-full h-64 md:h-[500px]">
            <Image
            src={image3}
            alt="Losode Homeware"
            fill
            className="object-cover"
            priority
            />
        </div>
        <div className="order-2 md:order-1 max-w-[531px] flex flex-col items-center text-center md:text-left md:items-start gap-9">
            <h1 className="dark:text-white text-black text-3xl md:text-4xl lg:text-6xl font-medium">
            Style That Lives With You
            </h1>
            <p className="dark:text-gray-400 text-black text-base md:text-lg lg:text-xl font-normal sm:leading-7">
            From statement decor to timeless everyday pieces, Losode curates homeware designed to elevate your space. Discover thoughtful craftsmanship, warm textures, and effortless beauty—all in one place.
            </p>
        </div>
        </section>
  )
}

export default SubstanceComponent