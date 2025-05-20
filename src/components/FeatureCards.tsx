import Check from "../assets/k.png"
import { Button } from "@/components/ui/button"
import WhyWeAreDifferent from "./WhyWeAreDifferent"

const features = [
 
  {
    title: "SCIENCE",
    description:
      "Rekora challenges young minds with cool experiments, encouraging them to think critically and find smart solutions.",
    icon: "/placeholder.svg?height=60&width=60",
    highlighted: true,
  },
   {
    title: "TECHNOLOGY",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    icon: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "ENGINEERING",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    icon: "/placeholder.svg?height=60&width=60",
  },
   {
    title: "MATH",
    description:
      "At Rekora, we help kids learn numbers, patterns and shapes by playing fun games and building things with their hands.",
    icon: "/placeholder.svg?height=60&width=60",
  },
 
]

export default function FeatureCards() {
  return (
 <>
    <section className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-16">
<div className="max-w-6xl mx-auto max-h-[500px] overflow-y-auto space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 flex flex-col items-center text-center ${
              feature.highlighted ? "bg-yellow-400" : "bg-white border border-gray-200"
            }`}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 relative">
              <img src={feature.icon || "/placeholder.svg"} alt={feature.title} className="object-cover" />
            </div>

            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>

            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>

            <Button
              variant="outline"
              className={`rounded-full mt-auto ${
                feature.highlighted
                  ? "border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white"
                  : "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
              }`}
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        ))}
      </div>
    </section>
 </>
  )
}
