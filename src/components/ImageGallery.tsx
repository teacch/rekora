import React from "react";
import { Link } from "react-router-dom";
import Kid1 from "../assets/kid1.png";
import Kid2 from "../assets/kid2.png";
import Kid3 from "../assets/k.png";
import WhyWeAreDifferent from "./WhyWeAreDifferent";

import { ArrowRight, Microscope, FlaskConical, Activity } from "lucide-react";
import { ServiceCards } from "./ServiceCard";
import { Instagram } from "./Instagram";

const ImageGallery = () => {
  return (
    <>
      <section className="w-full px-2 sm:px-4 md:px-6 lg:px-10 pt-0 sm:pt-0 pb-0 sm:pb-0 lg:pb-0 rounded-3xl mx-auto max-w-[90%] -mt-6 relative z-20">
        <Instagram />
      </section>
    </>
  );
};

export default ImageGallery;
