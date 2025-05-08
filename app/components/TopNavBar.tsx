import React from 'react'
import Link from 'next/link'
function TopNavBar() {
  return (
    <div className="bg-gray-100 text-sm text-gray-700 px-4 sm:px-6 lg:px-16 py-2 border-b">
    <div className="mx-auto flex justify-between items-center">
      <span className="text-right">
        New to Losode?{" "}
        <Link href="/subscribe" className="text-blue-500 hover:underline">
          Subscribe and Get 10% off your first order
        </Link>
      </span>
      <span className="hidden sm:block underline">
        Sell On Losode
      </span>
    </div>
  </div>
  )
}

export default TopNavBar