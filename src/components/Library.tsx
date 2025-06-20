import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BookOpen, FileText, PlayCircle } from "lucide-react";
import { PlayschoolDoodles } from "./PlaySchoolDoodles";
import StemProgram from "./StemProgram"; // Not used here but imported
import ImageGallery from "./ImageGallery";
import Brain from "../assets/brain.png";
import { Instagram } from "./Instagram";

const contentItems = [
  {
    type: "Course",
    title: "Neuroscience for Kids",
    description:
      "Explore how the brain works. Fun facts and simple activities. Learn with ease.",
    icon: BookOpen,
    tag: "Science",
    link: "/resources",
    image: Brain,
  },
  {
    type: "Ebook",
    title: "The Thinking Brain",
    description:
      "What happens when you think? A colorful guide to your mind. Easy and exciting.",
    icon: FileText,
    tag: "Neuroscience",
    link: "/resources",
    image:
      "https://th.bing.com/th/id/OIP.V1CuGUjid7ugD8wnXVQgmgHaEK?w=313&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7",
  },
  {
    type: "Video",
    title: "Meet Your Brain!",
    description:
      "Animated video on brain parts. Colorful learning. Science has never been cooler.",
    icon: PlayCircle,
    tag: "Biology",
    link: "/resources",
    image:
      "https://th.bing.com/th/id/OIP.BO7hIW0Rr0C9eUMxZPYRYAHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];

const tagColorMap = {
  Science: "bg-green-100 text-green-800",
  Biology: "bg-blue-100 text-blue-800",
  Neuroscience: "bg-purple-100 text-purple-800",
};

const Library = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // initialize AOS with some options
  }, []);

  return (
    <>
      <section className="relative w-full bg-rekora-dark-blue py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        <PlayschoolDoodles />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2
            className="mb-6 text-4xl font-bold text-white sm:text-5xl font-heading"
            data-aos="fade-up"
          >
            Learn Beyond The Classroom
          </h2>
          <div
            className="mb-6 h-1 w-16 bg-rekora-light-blue"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>

          <p
            className="mb-8 text-lg text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We believe African students deserve more than theory, they deserve{" "}
            <br /> microscopes, mentors, and opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentItems.map((item, index) => {
              const tagColorClass =
                tagColorMap[item.tag] || "bg-yellow-100 text-yellow-800";

              return (
                <a
                  key={index}
                  href={item.link}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <div className="h-48 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-teal-100 rounded-full p-1">
                        <item.icon className="h-4 w-4 text-rekora-light-blue" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {item.type}
                      </span>
                    </div>

                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold font-heading">
                        {item.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${tagColorClass}`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-gray-600 text-lg mb-4 font-body">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-600">Free</span>
                      <span className="text-sm text-gray-600">
                        1 {item.type}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {[1, 2, 3].map((dot) => (
                <button
                  key={dot}
                  className={`h-2 rounded-full ${
                    dot === 1 ? "w-6 bg-yellow-400" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${dot}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-rekora-light-blue">
       <Instagram/>
      </div>
    </>
  );
};

export default Library;
