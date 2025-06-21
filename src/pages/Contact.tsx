import ContactDetails from '@/components/contact/ContactDetails'
import ContactInfoSection from '@/components/contact/ContactInfoSection'
import Header from '@/components/Header'
import React from 'react'
import ContactComponent from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'

const Contact = () => {
  return (
   <>
   <Header/>
   <ContactComponent/>
   <ContactDetails/>
   <ContactInfoSection/>
   <Footer/>

   </>
  )
}

export default Contact