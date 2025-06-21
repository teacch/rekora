import DonateHero from '@/components/donate/DonateHero'
import DonationMethods from '@/components/donate/DonationMethods'
import ThankYou from '@/components/donate/ThankYou'
import Footer from '@/components/footer/Footer'
import Header from '@/components/Header'
import React from 'react'

const Donate = () => {
  return (
    <>
    <Header/>
    <DonateHero/>
  <DonationMethods/>
  <ThankYou/>
    <Footer/>
    </>
    
  )
}

export default Donate