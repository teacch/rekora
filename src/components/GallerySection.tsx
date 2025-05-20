
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Star, Book, Globe } from "lucide-react";

const gallery = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    alt: "Students hacking at laptops",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    alt: "Brainwave demo equipment",
  },
  {
    type: "testimonial",
    text: "💬 “I loved using the EEG headset!”",
    person: "Mary, 15",
  },
  {
    type: "testimonial",
    text: "💬 “Now I want to be a brain scientist!”",
    person: "Kwame, 13",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
    alt: "Field science in nature",
  },
];

const GallerySection = () => (
  <section className="max-w-4xl mx-auto py-12">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-7 flex gap-2 items-center justify-center">
      <Book className="text-[#9b87f5]" /> <span>Event Gallery</span>
    </h2>
    <Carousel>
      <CarouselContent>
        {gallery.map((g, idx) =>
          g.type === "image" ? (
            <CarouselItem key={idx} className="flex flex-col items-center justify-center">
              <img
                src={g.src}
                alt={g.alt}
                className="rounded-2xl w-full max-w-md border-4 border-white object-cover shadow-lg hover:scale-105 hover:shadow-indigo-300 transition-transform duration-200"
                style={{ minHeight: 220, maxHeight: 320 }}
              />
              <div className="mt-2 text-gray-600">{g.alt}</div>
            </CarouselItem>
          ) : (
            <CarouselItem key={idx} className="flex flex-col items-center justify-center">
              <div className="relative mb-2">
                <div className="bg-sky-100 border-2 border-sky-300 rounded-xl px-7 py-5 text-xl font-bold text-sky-700 shadow-lg max-w-xs speech-bubble animate-bounce">
                  {g.text}
                </div>
                <Star className="absolute -top-4 -right-4 text-yellow-500 animate-spin-slow" size={28} />
              </div>
              <span className="block text-sm text-gray-500">{g.person || ""}</span>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <div className="flex justify-center gap-6 mt-6">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  </section>
);

export default GallerySection;
