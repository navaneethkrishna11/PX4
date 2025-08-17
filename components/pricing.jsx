import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const pricing = () => {
  return (
    <section id='pricing'>
    <div className="max-w-7xl mx-auto px-6 ">
    <div className="text-center mb-10">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent">
              Choose Your Power Level
            </h2>
            <p className="text-xl text-[#DCD0A8] max-w-3xl mx-auto">
              From creative exploration to professional mastery, find the perfect plan for your neural journey.
            </p>
          </div>

      <PricingTable/>
    </div>
    </section>
  )
}

export default pricing
