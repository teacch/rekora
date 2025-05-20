import React from "react";
import { Link } from "react-router-dom";
import Kid1 from "../assets/kid1.png";
import Kid2 from "../assets/kid2.png";
import Kid3 from "../assets/k.png";
import WhyWeAreDifferent from "./WhyWeAreDifferent";

import { ArrowRight, Microscope, FlaskConical, Activity } from "lucide-react";
import { ServiceCards } from "./ServiceCard";

const ImageGallery = () => {
  return (
    <>
<section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 pt-12 sm:pt-16 pb-4 sm:pb-6 bg-rekora-light-blue rounded-3xl mx-auto max-w-[90%] -mt-6 relative z-20">
           <h2 className="mb-6 text-4xl font-bold text-black sm:text-5xl font-heading">We Make Science Fun</h2>

            <p className="mb-8 text-lg text-black">
               We believe African students deserve more than theory, they deserve{" "}
          <br /> microscopes, mentors, and opportunities.
            </p>


        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2">
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
              className="lucide lucide-check-circle h-5 w-5 text-black"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            <span className="text-black text-lg">World Class</span>
          </div>

          <div className="flex items-center gap-2">
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
              className="lucide lucide-check-circle h-5 w-5 text-black"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            <span className="text-black text-lg">Flexible</span>
          </div>

          <div className="flex items-center gap-2">
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
              className="lucide lucide-check-circle h-5 w-5 text-black"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            <span className="text-black text-lg">Affordable</span>
          </div>
        </div>
      </section>
       <ServiceCards />
    </>
  );
};

export default ImageGallery;
