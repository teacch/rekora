import type React from "react"
import { Users, BadgeDollarSign, HandHeart } from "lucide-react";

interface StepProps {
  icon: React.ReactNode
  title: string
  description: string
  isLast?: boolean
}

const Step: React.FC<StepProps> = ({ icon, title, description, isLast = false }) => {
  return (
    <div className="flex items-start gap-6">
      <div className="relative flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rekora-light-blue">
          <div className="text-rekora-dark-blue">{icon}</div>
        </div>
        {!isLast && <div className="mt-2 h-16 w-0.5 bg-rekora-light-blue"></div>}
      </div>
      <div className="flex-1 pt-3">
        <h3 className="mb-2 text-xl font-bold text-white font-heading">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-rekora-dark-blue py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

  

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl font-heading">Get Involved</h2>
            <p className="mb-8 text-lg text-white/80">
              Be part of something bigger, join our mission at Rekora to make science accessible to all, whether you volunteer, donate, or partner with us, your support matters, 
together, we can build a future powered by knowledge
Let’s create change one student, one classroom, one community at a time.
            </p>
            <a
              href="#apply"
              className="inline-block rounded-full bg-white px-8 py-3 font-medium text-[#1a0f36] transition-colors hover:bg-gray-100"
            >
              Apply to join
            </a>
          </div>

          <div className="space-y-8">
            <Step
              icon={<Users size={24} />}
              title="Volunteer with Rekora"
              description="You can join us as a mentor, lead community events, or assist during workshops.
Your time and skills can make a lasting impact on young learners.
Together, we can inspire the next generation of scientists."
            />
            <Step
              icon={<BadgeDollarSign size={24} />}
              title="Donate a Toolkit"
              description="Just $25 provides one neuroscience toolkit.
$100 helps us equip an entire classroom.
Every contribution brings hands-on science education to more curious minds to create meaningful learning experiences."
            />
            <Step
              icon={<HandHeart size={24} />}
              title="Partner with Us"
              description="We’re happy to work with schools, science groups, and labs.
By collaborating, we can expand access to STEM education in more communities.
Let’s partner to create meaningful learning experiences."
              isLast
            />
          </div>
        </div>
      </div>
    </section>
  )
}
