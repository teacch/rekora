
import React from "react";
import { BarChart3, MapPin, Target } from "lucide-react";

const facts = [
  {
    icon: <BarChart3 className="text-pink-500" size={36} />,
    title: "Impact",
    value: "Reached 300+ students",
  },
  {
    icon: <MapPin className="text-sky-500" size={36} />,
    title: " Location",
    value: "Based in Lagos, Nigeria",
  },
  {
    icon: <Target className="text-green-500" size={36} />,
    title: " Focus",
    value: "100% Neuroscience & STEM access",
  },
];

const WhyRekora = () => (
  <section className="py-8 md:py-14 max-w-5xl mx-auto text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-7">
      {facts.map((fact) => (
        <div key={fact.title} className="flex flex-col items-center bg-white rounded-3xl p-7 shadow-lg border hover:scale-105 hover:shadow-pink-200 transition-transform duration-200">
          <div className="mb-3 animate-bounce">{fact.icon}</div>
          <span className="text-xl font-extrabold font-playfair mb-1 text-[#333]">{fact.title}</span>
          <span className="text-md font-bold text-purple-700">{fact.value}</span>
        </div>
      ))}
    </div>
    <blockquote className="text-2xl md:text-3xl font-bold text-[#7E69AB] bg-orange-100 rounded-xl px-7 py-5 mb-0 mx-auto shadow-md max-w-3xl animate-fade-in">
      “We believe African students deserve more than theory—they deserve microscopes, mentors, and opportunities.”
    </blockquote>
  </section>
);
export default WhyRekora;
