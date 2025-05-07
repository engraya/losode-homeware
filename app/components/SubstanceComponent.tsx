import React from 'react'
import Image from 'next/image'
import { substance } from './assets'
function SubstanceComponent() {
  return (
    <section className="px-8 lg:px-16 py-20 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
    <div className="relative w-full h-64 md:h-[500px]">
            <Image
              src={substance}
              alt="Hero Image 1"
              fill
              className="object-cover"
              priority
            />
          </div>
      <div className="order-2 md:order-1 max-w-[531px] flex flex-col items-center text-center md:text-left md:items-start gap-9">
        <h1 className="dark:text-white  text-black text-3xl md:text-4xl lg:text-6xl font-medium ">Navigating the digital
          landscape for success</h1>
        <p className="dark:text-gray-400 text-black text-base  md:text-lg lg:text-xl font-normal  sm:leading-7">Our digital
          marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social
          media marketing, and content creation.</p>
      </div>
    </section>

  )
}

export default SubstanceComponent