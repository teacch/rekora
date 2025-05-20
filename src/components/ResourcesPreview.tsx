
import React from "react";
import { Brain, GraduationCap, BarChart3, FileText, BookOpen, FlaskConical } from "lucide-react";
import { Button } from "./ui/button";

const studentZone = [
  {
    icon: <Brain className="text-sky-500" size={28} />,
    title: " Neuroscience 101",
    desc: "Discover the basics with easy diagrams.",
  },
  {
    icon: <GraduationCap className="text-yellow-500" size={28} />,
    title: " Top STEM Courses in Africa",
    desc: "Explore where, what, and how to study STEM here.",
  },
  {
    icon: <BarChart3 className="text-pink-500" size={28} />,
    title: " Careers Using Neuroscience",
    desc: "Cool futures in health, tech, or research.",
  },
];

const educatorHub = [
  {
    icon: <FileText className="text-sky-400" size={28} />,
    title: " Lesson Plan: Brain & Emotions",
    desc: "Engaging class plan for teachers.",
  },
  {
    icon: <BookOpen className="text-green-500" size={28} />,
    title: " How to Use an EEG Headset",
    desc: "Step-by-step for students and teachers.",
  },
  {
    icon: <FlaskConical className="text-pink-400" size={28} />,
    title: " 5 Easy Classroom Demos",
    desc: "Try out fun brain science activities.",
  },
];

const ResourcesPreview = () => (
  <section className="max-w-6xl mx-auto py-12 my-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-700 font-playfair mb-7 flex gap-2 items-center justify-center">
      <BookOpen className="text-[#9b87f5]" size={32} />
      Resources Preview
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      <div className="bg-yellow-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between">
        <h3 className="text-2xl font-playfair font-bold mb-5 flex items-center gap-2 text-teal-600">Student Zone</h3>
        <div className="flex flex-col gap-3">
          {studentZone.map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-yellow-100 hover:scale-105 transition-transform duration-200">
              <span className="mt-1.5">{item.icon}</span>
              <div>
                <div className="text-lg font-bold flex items-center gap-2">{item.title}</div>
                <div className="text-sm text-gray-700">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-pink-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between">
        <h3 className="text-2xl font-playfair font-bold mb-5 flex items-center gap-2 text-pink-500">Educator Hub</h3>
        <div className="flex flex-col gap-3">
          {educatorHub.map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-pink-100 hover:scale-105 transition-transform duration-200">
              <span className="mt-1.5">{item.icon}</span>
              <div>
                <div className="text-lg font-bold flex items-center gap-2">{item.title}</div>
                <div className="text-sm text-gray-700">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-8">
      <Button className="bg-sky-400 hover:bg-sky-500 text-white font-bold rounded-full px-8 py-3 text-lg shadow hover:shadow-glow">
        <span role="img" aria-label="compass">🧭</span> Explore All Resources
      </Button>
    </div>
  </section>
);
export default ResourcesPreview;
