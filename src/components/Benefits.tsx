
import React from "react";
import { Brain, BookOpen, Users } from "lucide-react";

const benefits = [
  {
    title: "Hands-On Projects",
    icon: Brain,
    text: "Learn by doing with real-world science and engineering experiments.",
  },
  {
    title: "Mentorship & Community",
    icon: Users,
    text: "Connect with passionate mentors and peers who love STEM.",
  },
  {
    title: "Guides & Resources",
    icon: BookOpen,
    text: "Access fun guides, activity ideas, and opportunities for young Africans.",
  },
];

const Benefits = () => (
  <section id="benefits" className="mt-6 mb-10">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6E59A5] mb-8 ">
      How Rekora Helps Young Scientists
    </h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {benefits.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center bg-white rounded-2xl shadow-md px-6 py-8 border border-[#F1F0FB] hover:scale-105 transition-transform duration-300"
        >
          <item.icon className="w-11 h-11 mb-3 text-[#9b87f5]" />
          <h3 className="font-semibold text-lg text-[#403E43] mb-2">{item.title}</h3>
          <p className="text-gray-500 text-center">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Benefits;
