
import React from "react";
import { Camera, GalleryHorizontal, Star } from "lucide-react";
import { Button } from "./ui/button";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    caption: "Chisom testing brain waves at our April Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    caption: "STEM girls exploring reaction times",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
    caption: "Close-up: Neuron model demonstration",
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    caption: "Students using science kits at Bootcamp",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    caption: "Bootcamp event: Meet the Scientists",
  },
  {
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    caption: "Microscope fun – focus & explore!",
  },
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    caption: "Field trip: Hands-on outdoors",
  },
  {
    src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&q=80",
    caption: "Brainwave activity – real science in action",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    caption: "Classroom reactions: Science is exciting!",
  },
];

const EnhancedGallerySection = () => (
  <section className="max-w-6xl mx-auto py-12 px-2 my-14">
    <h2 className="text-3xl md:text-4xl font-extrabold font-playfair text-center mb-8 flex items-center justify-center gap-2 text-purple-700">
      <GalleryHorizontal className="text-yellow-500" size={38} /> Rekora in Action
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-6">
      {images.map((img, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img
            src={img.src}
            alt={img.caption}
            className="rounded-2xl w-full object-cover border-4 border-white shadow-lg hover:scale-105 hover:shadow-indigo-300 transition-all duration-200"
            style={{ minHeight: 230, maxHeight: 290 }}
          />
          <div className="mt-2 text-center text-sm text-gray-600 font-medium bg-white bg-opacity-70 rounded-xl px-3 py-1 shadow">{img.caption}</div>
        </div>
      ))}
    </div>
    <div className="flex justify-center">
      <Button className="bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-full px-8 py-3 text-lg shadow hover:shadow-glow">
      <Camera size={25} /> View Full Gallery
      </Button>
    </div>
  </section>
);
export default EnhancedGallerySection;
