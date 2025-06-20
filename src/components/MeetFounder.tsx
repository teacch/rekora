import { Button } from "@/components/ui/button";
import Ruth from "../assets/Founder.jpg";
import { useState } from "react";

export default function MeetFounder() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen bg-rekora-light-blue font-body py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-rekora-dark-blue opacity-5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400 opacity-5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="relative order-1 lg:order-1">
          <div className="rounded-3xl overflow-hidden border-4 border-rekora-dark-blue shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <div className="h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[700px] relative">
              <img
                src={Ruth}
                alt="Founder of Rekora, Ruth"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-yellow-400 h-24 w-24 rounded-full opacity-70 filter blur-sm"></div>
        </div>

        <div className="order-2 lg:order-2 lg:pl-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rekora-dark-blue mb-4 font-heading leading-tight">
            Meet the Founder
          </h1>
          <div className="mb-8 h-1.5 w-24 bg-rekora-dark-blue"></div>

          <div
            className={`relative transition-all duration-700 ease-in-out ${
              isExpanded
                ? "lg:max-h-none"
                : "lg:max-h-[160px] lg:overflow-hidden"
            }`}
          >
            <p className="text-black text-lg mb-4 leading-relaxed">
              When I arrived at Bowdoin College in the fall of 2021, I enrolled
              in my first neuroscience class Brains in Motion taught by
              Professor Manuel Diaz-Rios. It was in that class that I first
              encountered affordable neuroscience kits designed by a company
              called **Backyard Brains**. These kits were created to make
              neuroscience education accessible to high school students, and
              Professor Diaz-Rios used them in outreach programs across Northern
              Maine.
            </p>

            <p className="text-black text-lg mb-4 leading-relaxed">
              I was immediately intrigued. The idea that complex neuroscience
              concepts could be taught to young students using hands-on,
              affordable tools sparked something in me. I thought of home—of
              **Nigeria**—and of students like me who grew up with limited
              access to practical STEM learning. What if these kits could travel
              to Lagos? What if students back home had the same chance to see,
              touch, and understand the brain in action?
            </p>

            <p className="text-black text-lg mb-4 leading-relaxed">
              That question stayed with me. I kept thinking: How much are
              students in Nigeria missing out on simply because they’ve never
              had the opportunity to explore neuroscience up close? As an
              international student from Lagos, I’ve seen both sides of the
              access gap. I know how exposure can spark ambition—and how the
              absence of it can shrink dreams. That’s why this work is deeply
              personal.
            </p>

            <p className="text-black text-lg mb-4 leading-relaxed">
              In the fall of my senior year, I applied for the **Davis Projects
              for Peace** national grant through Middlebury College. My proposal
              to launch **Rekora**—a neuroscience access and exposure initiative
              in Nigeria—was selected for the $10,000 award. With this support,
              I’m bringing Rekora to life in the summer of 2025.
            </p>

            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-rekora-light-blue to-transparent lg:block hidden"></div>
            )}
          </div>

          <p className="font-bold text-xl text-rekora-dark-blue mb-8 leading-relaxed mt-4">
            Rekora is the answer to a question that never left me: What if we
            gave young minds the tools to explore the science inside them?
          </p>

          <Button
            onClick={toggleExpanded}
            className="hidden lg:flex items-center gap-2 text-rekora-dark-blue bg-transparent border-2 border-rekora-dark-blue rounded-full px-6 py-4 hover:bg-rekora-dark-blue hover:text-white transition-colors duration-300 mb-8"
          >
            {isExpanded ? "Show Less" : "Read More"}
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
              className={`lucide ${
                isExpanded ? "rotate-90" : "-rotate-90"
              } transition-transform duration-300`}
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </Button>

          <div className="bg-white p-6 rounded-xl shadow-md mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-rekora-dark-blue mb-4 font-heading">
              Our Supporters
            </h2>
            <ul className="list-disc list-inside text-black text-lg space-y-1">
              <li>Davis Projects for Peace</li>
              <li>Diaz Rios Lab, Bowdoin College</li>
            </ul>
          </div>

          <Button className="mt-10 bg-rekora-dark-blue text-white rounded-full px-8 py-7 flex items-center gap-3 text-xl hover:bg-rekora-dark-blue/90 transition-colors duration-300 shadow-lg">
            Connect With Ruth
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </section>
    </div>
  );
}
