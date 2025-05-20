import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { EdukidsDoodles } from "./EdukidsDoodles";
import Branding from "../assets/rekora-branding.png";
import Header from "./Header";
import ProgramsSection from "./ProgramsSection";
import StemProgram from "./StemProgram";
import Doc from '../assets/grl.png'
import WhyWeAreDifferent from "./WhyWeAreDifferent";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-rekora-light-blue ">
      <Header />

<section className="relative w-full bg-rekora-dark-blue py-8 md:py-16 px-8 md:px-6 lg:px-6 overflow-hidden">
  <EdukidsDoodles />

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
              Empowering Africa's Young Scientists
            </h1>

            <p className="text-white mb-8 max-w-lg text-lg">
              We inspire young minds through interactive learning, creativity,
              and exploration. Our kid-friendly environment ensures a safe space
              where children can develop essential skills in math, science,
              reading, and problem-solving while having fun.
            </p>

            

    

             <div className="flex flex-col sm:flex-row gap-4 justify-start mt-8">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-teal-800 font-medium rounded-full px-8 py-6 text-base">
            Get Started Now
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
              className="lucide lucide-arrow-right ml-2 h-5 w-5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>

          <Button
             variant="outline"
                className="border-white bg-inherit text-white hover:bg-white/10 font-medium rounded-full px-8 py-6 text-base"
              >
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
                  className="lucide lucide-play mr-2 h-5 w-5"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
               Parter With Us
          </Button>
        </div>

            <div className="flex items-center gap-8 mt-12">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500 rounded-full p-2">
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
                      className="lucide lucide-users h-5 w-5 text-white"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-white">7k+</span>
                </div>
                <span className="text-white/70 text-sm">
                 Bowdoin College Students
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="bg-yellow-500 rounded-full p-2">
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
                      className="lucide lucide-award h-5 w-5 text-white"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-white">20+</span>
                </div>
                <span className="text-white/70 text-sm">
                  Science Programs & Courses
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
           <div className="relative h-[250px] md:h-[400px] lg:h-[500px] w-full">

              <img
                src={Doc}
                alt="Happy children with school supplies"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <StemProgram/>
    

    
    </div>
  );
}
