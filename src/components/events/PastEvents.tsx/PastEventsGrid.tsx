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
  const eventImages = [
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
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-1 event-image-container">
          <img
            src={Img1}
            alt="Women at craft workshop with colorful cards"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-1 event-image-container">
          <img
            src={Img2}
            alt="Two women chatting and smiling"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-2 event-image-container">
          <img
            src={Img3}
            alt="Woman smiling with drink"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-1 event-image-container">
          <img
            src={Img4}
            alt="Group flower arranging workshop"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-1 event-image-container">
          <img
            src={Img5}
            alt="Group photo outdoors with Christmas tree"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-2 event-image-container">
          <img
            src={Img6}
            alt="Woman with cocktail at bar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-1 event-image-container">
          <img
            src={Img7}
            alt="Group photo at Psycle event"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-1 event-image-container">
          <img
            src={Img8}
            alt="Women at bookstore event"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-2 event-image-container">
          <img
            src={Img9}
            alt="Woman arranging flowers"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-1 event-image-container">
          <img
            src={Img10}
            alt="Woman crafting at workshop"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-1 event-image-container">
          <img
            src={Img11}
            alt="Women at game night"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-2 event-image-container">
          <img
            src={Img12}
            alt="Group of women at social event"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
