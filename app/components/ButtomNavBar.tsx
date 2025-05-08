import React from 'react'
import Link from 'next/link'
function ButtomNavBar() {
  return (
    <div className="bg-gray-100 text-sm text-gray-700 px-4 sm:px-6 lg:px-16 py-2 border-b">
    <div className="mx-auto flex justify-between items-center">
      <span className="hidden sm:block text-right whitespace-nowrap">
      © 2025, Losode Inc. Always Beyond Borders{" "}
      </span>
      <div className='sm:hidden flex flex-col'>
      <span className="text-right">
      © 2025, Losode Inc.
      </span>
      <span className="text-right">
      Always Beyond Borders{" "}
      </span>
      </div>
      <Link href="#" className="">
      All Rights Reserved.
      </Link>
    </div>
  </div>
  )
}

export default ButtomNavBar