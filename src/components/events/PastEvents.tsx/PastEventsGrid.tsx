export default function PastEventsGrid() {
  const eventImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Women at craft workshop with colorful cards",
      className: "col-span-1 row-span-1 transform rotate-1",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Two women chatting and smiling",
      className: "col-span-1 row-span-1 transform -rotate-1",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Woman smiling with drink",
      className: "col-span-1 row-span-1 transform rotate-2",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Group flower arranging workshop",
      className: "col-span-1 row-span-1 transform -rotate-1",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Group photo outdoors with Christmas tree",
      className: "col-span-1 row-span-1 transform rotate-1",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Woman with cocktail at bar",
      className: "col-span-1 row-span-1 transform -rotate-2",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Group photo at Psycle event",
      className: "col-span-1 row-span-1 transform rotate-1",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Women at bookstore event",
      className: "col-span-1 row-span-1 transform -rotate-1",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Woman arranging flowers",
      className: "col-span-1 row-span-1 transform rotate-2",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Woman crafting at workshop",
      className: "col-span-1 row-span-1 transform -rotate-1",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Women at game night",
      className: "col-span-1 row-span-1 transform rotate-1",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Group of women at social event",
      className: "col-span-1 row-span-1 transform -rotate-2",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-1">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Women at craft workshop with colorful cards"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-1">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Two women chatting and smiling"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-2">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Woman smiling with drink"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-1">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Group flower arranging workshop"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-1">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Group photo outdoors with Christmas tree"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-2">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Woman with cocktail at bar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-1">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Group photo at Psycle event"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-1">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Women at bookstore event"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-2">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Woman arranging flowers"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-1">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Woman crafting at workshop"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform rotate-1">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Women at game night"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative p-1 bg-white rounded-lg shadow-md transform -rotate-2">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Group of women at social event"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
