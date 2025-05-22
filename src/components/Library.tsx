import React from "react";
import { BookOpen, FileText, PlayCircle } from "lucide-react";
import { PlayschoolDoodles } from "./PlaySchoolDoodles";
import StemProgram from "./StemProgram"; // This component is imported but not used in the provided snippet.
import ImageGallery from "./ImageGallery";
import Brain from "../assets/brain.png";

const contentItems = [
  {
    type: "Course",
    title: "Brain Science Basics",
    description:
      "Explore how the brain works. Fun facts and simple activities. Learn with ease.",
    icon: BookOpen,
    tag: "Science",
    link: "/resources/brain-science-basics",
    image: Brain,
  },
  {
    type: "Course",
    title: "Neuroscience for Kids",
    description:
      "Neurons and brains made simple. Fun lessons for curious kids. Start learning.",
    icon: BookOpen,
    tag: "Biology",
    link: "/resources/neuroscience-for-kids",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    type: "Ebook",
    title: "The Thinking Brain",
    description:
      "What happens when you think? A colorful guide to your mind. Easy and exciting.",
    icon: FileText,
    tag: "Neuroscience",
    link: "/resources/thinking-brain",
    image:
      "https://th.bing.com/th/id/OIP.V1CuGUjid7ugD8wnXVQgmgHaEK?w=313&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7",
  },
  {
    type: "Ebook",
    title: "Neurons & Synapses",
    description:
      "See how brain cells talk. A simple, smart guide. Great for learning together.",
    icon: FileText,
    tag: "Science",
    link: "/resources/neurons-synapses",
    image:
      "https://th.bing.com/th/id/OIP.LM5ICiWv1Czbm5cTV48g8gHaE7?cb=iwc2&pid=ImgDet&w=179&h=119&c=7&dpr=1.3",
  },
  {
    type: "Video",
    title: "Meet Your Brain!",
    description:
      "Animated video on brain parts. Colorful learning. Science has never been cooler.",
    icon: PlayCircle,
    tag: "Biology",
    link: "/resources/meet-your-brain",
    image:
      "https://th.bing.com/th/id/R.c85288dc97af38ad10196d5af8ace90a?rik=cIO2HEt6CFWLiA&riu=http%3a%2f%2fbrighamlarsonpianos.com%2fwp-content%2fuploads%2f2019%2f10%2fmusic-on-brain-971x510.jpg&ehk=3ZtM%2bJpKsRrH3mLpeBEuzKD4KvnCji6jSKnTdIAOoVU%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    type: "Video",
    title: "Journey of a Nerve Signal",
    description:
      "Watch how nerves work. Fun animations. Understand your body's messages.",
    icon: PlayCircle,
    tag: "Biology",
    link: "/resources/nerve-signal",
    image:
      "https://th.bing.com/th/id/OIP.4LvcVgNuQGlFyFNyms5RmgHaE7?w=233&h=188&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7",
  },
];

const tagColorMap = {
  Science: "bg-green-100 text-green-800",
  Biology: "bg-blue-100 text-blue-800",
  Neuroscience: "bg-purple-100 text-purple-800",
};

const Library = () => {
  return (
    <>
      <section className="relative w-full bg-rekora-dark-blue py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        <PlayschoolDoodles />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl font-heading">
            Learn Beyond The Classroom
          </h2>
          <div className="mb-6 h-1 w-16 bg-rekora-light-blue"></div>

          <p className="mb-8 text-lg text-white">
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
        <ImageGallery />
      </div>
    </>
  );
};

export default Library;
