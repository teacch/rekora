import React from 'react'
import Donate from '../../assets/donate.jpg'

export default function DonateHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
      <div className="bg-rekora-light-blue px-8 md:px-12 py-16 flex items-center">
        <div className="text-rekora-dark-blue lg:p-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-heading">Donate for Change</h2>
          <p className="text-lg md:text-xl leading-relaxed font-heading">
            While Rekora provides the platform, Donations create the opportunities, opportunities to scale our impact
            and ensure long-term sustainability.
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          src={Donate}
          alt="Person wearing Rekora t-shirt with QR code"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}