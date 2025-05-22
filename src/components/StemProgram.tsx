import React from 'react'
import { Link } from 'react-router-dom'
import Kid1 from "../assets/kid1.png"
import Kid2 from "../assets/Kid2.png"
import Kid3 from "../assets/view.png"
import { Button } from "@/components/ui/button";


import {
  ArrowRight,
  Microscope,
  FlaskConical,
  Activity
} from 'lucide-react'

const StemProgram = () => {
  const programs = [
    {
      icon: <Microscope className="mb-4 h-7 sm:h-8 w-7 sm:w-8 text-black" />,
      title: "Neuroscience Workshop",
      desc: "In these fun workshops, you’ll learn how scientists study the brain, try out experiments, and discover exciting careers you could have in the future.",
      linkText: "Register Interest",
      img: Kid3,
    },
    {
      icon: <FlaskConical className="mb-4 h-7 sm:h-8 w-7 sm:w-8 text-black" />,
      title: "Rekora Bootcamp",
      desc: "Over several days, you’ll work with other students and mentors on real science projects. You’ll solve problems, and at the end, present what you’ve learned.",
      linkText: "Apply Now",
      img: Kid1,
    },
    {
      icon: <Activity className="mb-4 h-7 sm:h-8 w-7 sm:w-8 text-black" />,
      title: "Equipment Access",
      desc: "Need brain models or EEG kits for your class? Teachers and students can visit our hub to use, sign up online and choose your visit date. Available at TEACCH, Yaba.",
      linkText: "Choose Visit Date",
      img: Kid2,
    }
  ]

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 bg-rekora-light-blue rounded-3xl mx-auto max-w-[90%] -mt-6 relative z-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12">
        
            <h2 className="mb-6 text-4xl font-bold text-black sm:text-5xl font-heading">Our Programs</h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {programs.map(({ icon, title, desc, linkText, img }, idx) => (
          <div key={idx} className="flex flex-col h-full">
            {icon}
            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-heading">
              {title}
            </h3>
            <p className="text-black text-lg mb-6 sm:mb-8 max-w-full sm:max-w-[20rem] md:max-w-none font-body">
              {desc}
            </p>
              <img
              src={img}
              alt={title}
              className="mt-2 w-full h-80 object-cover rounded-xl"
            />
             <Button className="bg-rekora-dark-blue text-white rounded-full px-6 py-6 flex items-center gap-2 text-lg mt-6" >
              {linkText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
           
          

           
          </div>
        ))}
      </div>
    </section>
  )
}

export default StemProgram
