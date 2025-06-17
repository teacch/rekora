import { Button } from "@/components/ui/button"

export default function PastEvents() {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-purple-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4">Past events</h1>
          <p className="text-gray-700 text-lg">Take a look at some of our past events.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 mb-20">
          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=300&width=250"
              alt="Craft workshop with women making cards"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=250&width=250"
              alt="Workshop with flowers and crafts"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=280&width=250"
              alt="Group photo at office"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>

          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=200&width=250"
              alt="Two women chatting and laughing"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=220&width=250"
              alt="Group of women outdoors"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=300&width=250"
              alt="Women at bookstore"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>

          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=320&width=250"
              alt="Woman smiling at event"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=240&width=250"
              alt="Woman holding drink"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=260&width=250"
              alt="Woman with flowers"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>

          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=280&width=250"
              alt="Craft workshop activity"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=200&width=250"
              alt="Reading session"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="break-inside-avoid mb-4">
            <img
              src="/placeholder.svg?height=300&width=250"
              alt="Group selfie"
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-pink-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            JOIN THE CLUB
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">Want to join the fun?</h2>
          <Button className="bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 font-medium">
            GET INVOLVED
          </Button>
        </div>
      </div>
    </div>
  )
}