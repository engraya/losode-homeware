import React from 'react'
import Image from 'next/image'
import { substance } from './assets'

function SubComponent() {
  return (
    <section className="w-full px-8 lg:px-16 py-20 mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <div className='w-full flex flex-col items-center text-center md:text-left md:items-start order-1 md:order-2'>
        <div className="relative w-full h-64 md:h-[500px]">
            <Image
                src={substance}
                alt="Hero Image 1"
                fill
                className="object-cover"
                priority
            />
            </div>
            <div className='w-full'>
            <h3 className="flex justify-start text-md md:text-lg mx-auto font-bold text-gray-900 text-center mb-1">
                Harnessing Solar Energy for a Sustainable Future
            </h3>
            <p className="flex justify-start text-sm text-gray-900 max-w-lg mb-1">
                Join us in our mission to harness the boundless power of the sun.
            </p>
            <button className="w-1/3 bg-black hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 text-white font-semibold text-sm lg:text-base rounded px-4 py-4">
                Shop now
            </button>
            </div>
        </div>
        <div className='w-full flex flex-col items-center text-center md:text-left md:items-start order-1 md:order-2'>
        <div className="relative w-full h-64 md:h-[500px]">
            <Image
                src={substance}
                alt="Hero Image 1"
                fill
                className="object-cover"
                priority
            />
            </div>
            <div className='w-full'>
            <h3 className="flex justify-start text-md md:text-lg mx-auto font-bold text-gray-900 text-center mb-1">
                Harnessing Solar Energy for a Sustainable Future
            </h3>
            <p className="flex justify-start text-sm text-gray-900 max-w-lg mb-1">
                Join us in our mission to harness the boundless power of the sun.
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