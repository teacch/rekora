import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Img1 from "../../../assets/5C1A6776.jpg";
import Img2 from "../../../assets/MW2A5964.jpg";
import Img3 from "../../../assets/MW2A6196.jpg";
import Img4 from "../../../assets/5C1A6728.jpg";
import Img5 from "../../../assets/5C1A6620.jpg";
import Img6 from "../../../assets/MW2A6041.jpg";
import Img7 from "../../../assets/5C1A6703.jpg";
import Img8 from "../../../assets/MW2A6337 (1).jpg";
import Img9 from "../../../assets/MW2A5939.jpg";
import Img10 from "../../../assets/MW2A6014.jpg";
import Img11 from "../../../assets/MW2A6063.jpg";
import Img12 from "../../../assets/MW2A5925.jpg";

export default function PastEventsGrid() {
  const eventCategories = [
    {
      category: "Inaugural School Outreaches",
      images: [
        {
          id: 1,
          src: Img1,
          alt: "Women at craft workshop with colorful cards",
          className: "col-span-1 row-span-1 transform rotate-1",
        },
        {
          id: 2,
          src: Img2,
          alt: "Two women chatting and smiling",
          className: "col-span-1 row-span-1 transform -rotate-1",
        },
        {
          id: 3,
          src: Img3,
          alt: "Woman smiling with drink",
          className: "col-span-1 row-span-1 transform rotate-2",
        },
        {
          id: 4,
          src: Img4,
          alt: "Group flower arranging workshop",
          className: "col-span-1 row-span-1 transform -rotate-1",
        },
        {
          id: 5,
          src: Img5,
          alt: "Group photo outdoors with Christmas tree",
          className: "col-span-1 row-span-1 transform rotate-1",
        },
        {
          id: 6,
          src: Img6,
          alt: "Woman with cocktail at bar",
          className: "col-span-1 row-span-1 transform -rotate-2",
        },
        {
          id: 7,
          src: Img7,
          alt: "Group photo at Psycle event",
          className: "col-span-1 row-span-1 transform rotate-1",
        },
        {
          id: 8,
          src: Img8,
          alt: "Women at bookstore event",
          className: "col-span-1 row-span-1 transform -rotate-1",
        },
        {
          id: 9,
          src: Img9,
          alt: "Woman arranging flowers",
          className: "col-span-1 row-span-1 transform rotate-2",
        },
        {
          id: 10,
          src: Img10,
          alt: "Woman crafting at workshop",
          className: "col-span-1 row-span-1 transform -rotate-1",
        },
        {
          id: 11,
          src: Img11,
          alt: "Women at game night",
          className: "col-span-1 row-span-1 transform rotate-1",
        },
        {
          id: 12,
          src: Img12,
          alt: "Group of women at social event",
          className: "col-span-1 row-span-1 transform -rotate-2",
        },
      ],
    },
    {
      category: "Bootcamp",
      images: [
        {
          id: 13,
          src: "/Sch1.jpg",
          alt: "Bootcamp placeholder 1",
          className: "col-span-1 row-span-1 transform rotate-1",
        },
        {
          id: 14,
          src: "/Sch2.jpg",
          alt: "Bootcamp placeholder 2",
          className: "col-span-1 row-span-1 transform -rotate-1",
        },
        {
          id: 15,
          src: "/Sch3.jpg",
          alt: "Bootcamp placeholder 3",
          className: "col-span-1 row-span-1 transform rotate-2",
        },
      ],
    },
    {
      category: "August School Activations",
      images: [
        {
          id: 17,
          src: "/Rekora aug.jpg",
          alt: "Rekora August activation 1",
          className: "col-span-1 row-span-1 transform rotate-1",
        },
        {
          id: 18,
          src: "/Rekora aug1.jpg",
          alt: "Rekora August activation 2",
          className: "col-span-1 row-span-1 transform -rotate-2",
        },
        {
          id: 19,
          src: "/Rekora aug2.jpg",
          alt: "Rekora August activation 3",
          className: "col-span-1 row-span-1 transform rotate-2",
        },
        {
          id: 20,
          src: "/Rekora aug3.jpg",
          alt: "Rekora August activation 4",
          className: "col-span-1 row-span-1 transform -rotate-1",
        },
        {
          id: 21,
          src: "/Rekora aug4.jpg",
          alt: "Rekora August activation 5",
          className: "col-span-1 row-span-1 transform rotate-1",
        },
        {
          id: 22,
          src: "/Rekora aug5.jpg",
          alt: "Rekora August activation 6",
          className: "col-span-1 row-span-1 transform -rotate-2",
        },
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: "ease-out",
      offset: 150,
    });

    const images = document.querySelectorAll(".event-image-container img");
    let imagesLoadedCount = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      AOS.refresh();
      return;
    }

    const imageLoadHandler = () => {
      imagesLoadedCount++;
      if (imagesLoadedCount === totalImages) {
        AOS.refresh();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        imageLoadHandler();
      } else {
        img.addEventListener("load", imageLoadHandler);
        img.addEventListener("error", imageLoadHandler);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", imageLoadHandler);
        img.removeEventListener("error", imageLoadHandler);
      });
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <style jsx>{`
        @keyframes imageHoverEffect {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.03) rotate(0.5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        .event-image-container:hover {
          animation: imageHoverEffect 0.3s ease-in-out forwards;
        }

        .event-image-container {
          transition: transform 0.2s ease-in-out;
        }

        .rotate-1 {
          transform: rotate(1deg);
        }
        .-rotate-1 {
          transform: rotate(-1deg);
        }
        .rotate-2 {
          transform: rotate(2deg);
        }
        .-rotate-2 {
          transform: rotate(-2deg);
        }
      `}</style>

      {eventCategories
        .filter((category) => category.images.length > 0)
        .map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.images.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative p-1 bg-white rounded-lg shadow-md ${image.className} event-image-container`}
                  data-aos="fade-down"
                  data-aos-delay={`${index * 120}`}
                  data-aos-duration="1400"
                  data-aos-easing="ease-out"
                  data-aos-offset="100"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}